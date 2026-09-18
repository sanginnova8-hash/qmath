import React, { useState } from 'react';
import { 
  ShieldCheck, 
  GraduationCap, 
  Lock, 
  Eye, 
  EyeOff, 
  AlertCircle, 
  CheckCircle2, 
  X, 
  BookOpen, 
  UserPlus, 
  LogIn, 
  Sparkles,
  UserCheck
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { INITIAL_STUDENTS } from '../../services/seedData';
import { UserRole } from '../../types';

interface RoleAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetRole?: UserRole;
  onSuccess?: () => void;
}

export const RoleAuthModal: React.FC<RoleAuthModalProps> = ({
  isOpen,
  onClose,
  targetRole = 'STUDENT',
  onSuccess
}) => {
  const { 
    loginWithPasscode, 
    loginStudentAccount, 
    registerStudentAccount, 
    allUsers 
  } = useAuth();

  const [selectedRole, setSelectedRole] = useState<UserRole>(targetRole);
  
  // Student form state
  const [studentMode, setStudentMode] = useState<'LOGIN' | 'REGISTER'>('LOGIN');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPass, setStudentPass] = useState('');
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regGrade, setRegGrade] = useState<10 | 11 | 12>(12);
  const [regSchool, setRegSchool] = useState('');

  // Passcode for Teacher / Admin
  const [passcode, setPasscode] = useState('');
  const [showPasscode, setShowPasscode] = useState(false);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  // Handle Teacher or Admin passcode login
  const handleStaffLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!passcode.trim()) {
      setErrorMsg('Vui lòng nhập mật khẩu xác thực');
      return;
    }

    const result = loginWithPasscode(selectedRole as 'ADMIN' | 'TEACHER', passcode.trim());
    if (result.success) {
      setSuccessMsg(
        selectedRole === 'ADMIN'
          ? 'Đã mở khóa phiên làm việc Quản trị viên thành công!'
          : 'Đã mở khóa phiên làm việc Giáo viên thành công!'
      );
      setTimeout(() => {
        setSuccessMsg(null);
        setPasscode('');
        if (onSuccess) onSuccess();
        onClose();
      }, 700);
    } else {
      setErrorMsg(result.message || 'Mật khẩu không chính xác. Vui lòng thử lại!');
    }
  };

  // Handle Student Login
  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!studentEmail.trim()) {
      setErrorMsg('Vui lòng nhập Email học sinh');
      return;
    }

    // Match existing student or sample student
    const existing = allUsers.find(
      u => u.email.toLowerCase() === studentEmail.trim().toLowerCase()
    ) || INITIAL_STUDENTS.find(
      u => u.email.toLowerCase() === studentEmail.trim().toLowerCase()
    );

    if (existing) {
      loginStudentAccount(existing);
      setSuccessMsg(`Chào mừng bạn ${existing.displayName}! Đã mở khóa toàn bộ tài nguyên học tập.`);
      setTimeout(() => {
        setSuccessMsg(null);
        if (onSuccess) onSuccess();
        onClose();
      }, 700);
    } else {
      // Auto-create or allow with friendly welcome
      const newStudent = {
        id: `std-${Date.now()}`,
        displayName: studentEmail.split('@')[0],
        email: studentEmail.trim(),
        role: 'STUDENT' as const,
        grade: 12 as const,
        school: 'THPT',
        createdAt: new Date().toISOString()
      };
      loginStudentAccount(newStudent);
      setSuccessMsg(`Đăng nhập thành công! Chào bạn ${newStudent.displayName}.`);
      setTimeout(() => {
        setSuccessMsg(null);
        if (onSuccess) onSuccess();
        onClose();
      }, 700);
    }
  };

  // Quick pick sample student
  const handleQuickPickStudent = (std: typeof INITIAL_STUDENTS[0]) => {
    loginStudentAccount(std);
    setSuccessMsg(`Chào mừng bạn ${std.displayName}! Đã mở khóa toàn bộ tài nguyên.`);
    setTimeout(() => {
      setSuccessMsg(null);
      if (onSuccess) onSuccess();
      onClose();
    }, 600);
  };

  // Handle Student Registration
  const handleStudentRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!regName.trim()) {
      setErrorMsg('Vui lòng nhập Họ và tên của bạn');
      return;
    }
    if (!regEmail.trim()) {
      setErrorMsg('Vui lòng nhập Email học sinh');
      return;
    }

    try {
      const created = await registerStudentAccount({
        displayName: regName.trim(),
        email: regEmail.trim(),
        grade: regGrade,
        school: regSchool.trim() || 'Trường THPT'
      });
      setSuccessMsg(`Đăng ký thành công! Chúc mừng bạn ${created.displayName} đã mở khóa toàn bộ hệ thống.`);
      setTimeout(() => {
        setSuccessMsg(null);
        if (onSuccess) onSuccess();
        onClose();
      }, 800);
    } catch (err: any) {
      setErrorMsg(err.message || 'Lỗi đăng ký tài khoản');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden animate-scale-up max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`p-6 text-white shrink-0 ${
          selectedRole === 'ADMIN'
            ? 'bg-gradient-to-r from-purple-900 via-slate-900 to-indigo-900'
            : selectedRole === 'TEACHER'
            ? 'bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900'
            : 'bg-gradient-to-r from-teal-800 via-emerald-900 to-slate-900'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-white/10 backdrop-blur-xs border border-white/20">
                {selectedRole === 'STUDENT' ? (
                  <BookOpen className="w-5 h-5 text-emerald-300" />
                ) : (
                  <Lock className="w-5 h-5 text-amber-300" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-extrabold tracking-tight">
                  {selectedRole === 'STUDENT' ? 'Tài khoản Học sinh QMath' : 'Xác thực Quyền truy cập'}
                </h3>
                <p className="text-xs text-slate-300">
                  {selectedRole === 'STUDENT'
                    ? 'Mở khóa trọn bộ 992 câu hỏi & làm bài thi có lưu điểm'
                    : 'Bảo mật không gian Giáo viên & Quản trị viên'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Role selector tabs */}
          <div className="grid grid-cols-3 gap-1.5 mt-5 p-1 bg-black/30 rounded-2xl border border-white/10 text-xs font-bold">
            <button
              type="button"
              onClick={() => {
                setSelectedRole('STUDENT');
                setErrorMsg(null);
              }}
              className={`flex items-center justify-center gap-1 py-2 rounded-xl transition-all ${
                selectedRole === 'STUDENT'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>🎓 Học sinh</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedRole('TEACHER');
                setErrorMsg(null);
              }}
              className={`flex items-center justify-center gap-1 py-2 rounded-xl transition-all ${
                selectedRole === 'TEACHER'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>👨‍🏫 Giáo viên</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedRole('ADMIN');
                setErrorMsg(null);
              }}
              className={`flex items-center justify-center gap-1 py-2 rounded-xl transition-all ${
                selectedRole === 'ADMIN'
                  ? 'bg-purple-700 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>🛡️ Quản trị</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {errorMsg && (
            <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200 animate-shake">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="flex items-center gap-2 p-3 bg-emerald-50 text-emerald-700 text-xs rounded-xl border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* ================= STUDENT ROLE ================= */}
          {selectedRole === 'STUDENT' && (
            <div className="space-y-4">
              {/* Sub-mode switch (Login vs Register) */}
              <div className="flex items-center border-b border-slate-200 pb-2 gap-4 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setStudentMode('LOGIN')}
                  className={`flex items-center gap-1.5 pb-2 -mb-2.5 border-b-2 transition-all ${
                    studentMode === 'LOGIN'
                      ? 'border-emerald-600 text-emerald-800'
                      : 'border-transparent text-slate-400 hover:text-slate-700'
                  }`}
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Đăng nhập Học sinh</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStudentMode('REGISTER')}
                  className={`flex items-center gap-1.5 pb-2 -mb-2.5 border-b-2 transition-all ${
                    studentMode === 'REGISTER'
                      ? 'border-emerald-600 text-emerald-800'
                      : 'border-transparent text-slate-400 hover:text-slate-700'
                  }`}
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Đăng ký Tài khoản Mới (Miễn phí)</span>
                </button>
              </div>

              {studentMode === 'LOGIN' ? (
                <form onSubmit={handleStudentLogin} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email học sinh
                    </label>
                    <input
                      type="email"
                      value={studentEmail}
                      onChange={(e) => setStudentEmail(e.target.value)}
                      placeholder="ví dụ: nam.lb@student.qmath.edu.vn"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                      autoFocus
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      value={studentPass}
                      onChange={(e) => setStudentPass(e.target.value)}
                      placeholder="Mật khẩu (hoặc để trống nếu dùng thử)"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    />
                  </div>

                  {/* 1-Click Quick Select for Testing */}
                  <div className="pt-2">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      ⚡ Hoặc chọn nhanh tài khoản học sinh mẫu:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {INITIAL_STUDENTS.map((std) => (
                        <button
                          key={std.id}
                          type="button"
                          onClick={() => handleQuickPickStudent(std)}
                          className="flex flex-col items-start p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/60 hover:bg-emerald-100/80 text-left transition-all group"
                        >
                          <span className="font-bold text-xs text-emerald-950 group-hover:text-emerald-800">
                            {std.displayName}
                          </span>
                          <span className="text-[10px] text-emerald-700 font-medium">
                            Lớp {std.grade} • THPT
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setStudentMode('REGISTER')}
                      className="text-xs text-emerald-700 hover:text-emerald-900 font-semibold"
                    >
                      Chưa có tài khoản? Đăng ký ngay
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition-all active:scale-95"
                    >
                      Đăng nhập vào học
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleStudentRegister} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Họ và tên học sinh *
                    </label>
                    <input
                      type="text"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                      required
                      autoFocus
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Khối lớp *
                      </label>
                      <select
                        value={regGrade}
                        onChange={(e) => setRegGrade(Number(e.target.value) as any)}
                        className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none bg-white font-medium"
                      >
                        <option value={12}>Lớp 12 (Ôn thi TN THPT 2026)</option>
                        <option value={11}>Lớp 11</option>
                        <option value={10}>Lớp 10</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Trường THPT
                      </label>
                      <input
                        type="text"
                        value={regSchool}
                        onChange={(e) => setRegSchool(e.target.value)}
                        placeholder="THPT Chuyên / THPT..."
                        className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email đăng nhập *
                    </label>
                    <input
                      type="email"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      placeholder="hocsinh@gmail.com"
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                      required
                    />
                  </div>

                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800">
                    ✨ Sau khi đăng ký, tài khoản của bạn sẽ được kích hoạt toàn quyền truy cập 992 câu hỏi 21 Chuyên đề và lưu kết quả học tập tự động.
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setStudentMode('LOGIN')}
                      className="text-xs text-slate-500 hover:text-slate-800 font-semibold"
                    >
                      ← Quay lại Đăng nhập
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition-all active:scale-95"
                    >
                      Tạo tài khoản & Vào học ngay
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* ================= TEACHER / ADMIN ROLES ================= */}
          {(selectedRole === 'TEACHER' || selectedRole === 'ADMIN') && (
            <form onSubmit={handleStaffLogin} className="space-y-4">
              <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200">
                {selectedRole === 'ADMIN' ? (
                  <div className="space-y-1.5">
                    <p>
                      🛡️ <strong>Khu vực Quản trị viên:</strong> Toàn quyền cài đặt hệ thống, quản lý người dùng, sao lưu & khôi phục ngân hàng câu hỏi.
                    </p>
                    <div className="pt-1 text-[11px] text-purple-900 bg-purple-50 p-2 rounded-lg border border-purple-200 flex flex-col gap-0.5">
                      <div>Tên đăng nhập: <strong className="font-mono text-purple-950">sanginnova8@gmail.com</strong></div>
                      <div>Mật khẩu xác thực: <code className="bg-white px-1.5 py-0.5 rounded font-mono font-bold text-purple-800 border border-purple-200">Ducthang@2025</code></div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    <p>
                      👨‍🏫 <strong>Khu vực Giáo viên:</strong> Soạn câu hỏi, tạo đề kiểm tra, chấm thi và quản lý kết quả học tập của các lớp.
                    </p>
                    <div className="pt-1 text-[11px] text-emerald-900 bg-emerald-50 p-2 rounded-lg border border-emerald-200 flex flex-col gap-0.5">
                      <div>Tên đăng nhập: <strong className="font-mono text-emerald-950">teacher@qmath.edu.vn</strong></div>
                      <div>Mật khẩu xác thực: <code className="bg-white px-1.5 py-0.5 rounded font-mono font-bold text-emerald-800 border border-emerald-200">123456</code></div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Mật khẩu xác thực {selectedRole === 'ADMIN' ? 'Quản trị' : 'Giáo viên'}
                </label>
                <div className="relative">
                  <input
                    type={showPasscode ? 'text' : 'password'}
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder={selectedRole === 'ADMIN' ? 'Nhập mật khẩu Admin (Ducthang@2025)...' : 'Nhập mật khẩu Giáo viên (123456)...'}
                    autoFocus
                    className="w-full px-4 py-2.5 pr-10 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasscode(!showPasscode)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPasscode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                
                <div className="mt-2 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Mật khẩu mặc định: <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded font-mono font-bold">{selectedRole === 'ADMIN' ? 'Ducthang@2025' : '123456'}</code></span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className={`flex-1 px-4 py-2.5 rounded-xl font-bold text-xs text-white shadow-md transition-all ${
                    selectedRole === 'ADMIN'
                      ? 'bg-purple-800 hover:bg-purple-900'
                      : 'bg-emerald-700 hover:bg-emerald-800'
                  }`}
                >
                  Xác nhận Đăng nhập
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoleAuthModal;
