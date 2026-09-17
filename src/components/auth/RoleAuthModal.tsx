import React, { useState } from 'react';
import { ShieldCheck, GraduationCap, Lock, Eye, EyeOff, AlertCircle, CheckCircle2, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
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
  targetRole = 'TEACHER',
  onSuccess
}) => {
  const { loginWithPasscode, getStoredPasscodes } = useAuth();
  const [selectedRole, setSelectedRole] = useState<'ADMIN' | 'TEACHER'>(
    targetRole === 'ADMIN' ? 'ADMIN' : 'TEACHER'
  );
  const [passcode, setPasscode] = useState('');
  const [showPasscode, setShowPasscode] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const passcodes = getStoredPasscodes();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!passcode.trim()) {
      setErrorMsg('Vui lòng nhập mật khẩu xác thực');
      return;
    }

    const result = loginWithPasscode(selectedRole, passcode.trim());
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`p-6 text-white ${
          selectedRole === 'ADMIN'
            ? 'bg-gradient-to-r from-purple-900 via-slate-900 to-indigo-900'
            : 'bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-white/10 backdrop-blur-xs border border-white/20">
                <Lock className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold tracking-tight">Xác thực Quyền truy cập</h3>
                <p className="text-xs text-slate-300">Bảo mật không gian Giáo viên & Quản trị</p>
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
          <div className="grid grid-cols-2 gap-2 mt-5 p-1 bg-black/30 rounded-2xl border border-white/10 text-xs font-bold">
            <button
              type="button"
              onClick={() => {
                setSelectedRole('TEACHER');
                setErrorMsg(null);
              }}
              className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl transition-all ${
                selectedRole === 'TEACHER'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>👨‍🏫 Giáo viên</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedRole('ADMIN');
                setErrorMsg(null);
              }}
              className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl transition-all ${
                selectedRole === 'ADMIN'
                  ? 'bg-purple-700 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>🛡️ Quản trị viên</span>
            </button>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleLogin} className="p-6 space-y-4">
          <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200">
            {selectedRole === 'ADMIN' ? (
              <p>
                🛡️ <strong>Khu vực Quản trị viên:</strong> Toàn quyền cài đặt hệ thống, quản lý người dùng, sao lưu & khôi phục ngân hàng câu hỏi.
              </p>
            ) : (
              <p>
                👨‍🏫 <strong>Khu vực Giáo viên:</strong> Soạn câu hỏi, tạo đề kiểm tra, chấm thi và quản lý kết quả học tập của các lớp.
              </p>
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
                placeholder={selectedRole === 'ADMIN' ? 'Nhập mật khẩu Admin...' : 'Nhập mật khẩu Giáo viên...'}
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
            
            {/* Quick helper tip for test mode */}
            <div className="mt-2 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Mật khẩu mặc định: <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded font-mono font-bold">{selectedRole === 'ADMIN' ? 'admin123' : '123456'}</code></span>
            </div>
          </div>

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
      </div>
    </div>
  );
};

export default RoleAuthModal;
