import React, { useState, useEffect } from 'react';
import { UserProfile, UserRole } from '../../types';
import {
  getAllUsers,
  updateUserRole,
  createUser,
  deleteUser,
  getSystemStats,
  loadExamBankTap1
} from '../../services/store';
import { isFirebaseConfigured } from '../../lib/firebase';
import {
  ShieldCheck,
  Users,
  GraduationCap,
  BookOpen,
  Database,
  Download,
  RefreshCw,
  Plus,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  Settings,
  Server,
  KeyRound,
  Search,
  Filter,
  Layers,
  Lock
} from 'lucide-react';
import { getStoredPasscodes, setStoredPasscode } from '../../context/AuthContext';

export const AdminSettings: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'users' | 'bank' | 'security'>('users');
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [roleFilter, setRoleFilter] = useState<string>('ALL');

  // Modal create user
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [newUserName, setNewUserName] = useState<string>('');
  const [newUserEmail, setNewUserEmail] = useState<string>('');
  const [newUserRole, setNewUserRole] = useState<UserRole>('TEACHER');
  const [newUserSchool, setNewUserSchool] = useState<string>('THPT');

  const [notification, setNotification] = useState<string | null>(null);

  // Security passcodes state
  const [adminPasscode, setAdminPasscode] = useState(() => getStoredPasscodes().ADMIN);
  const [teacherPasscode, setTeacherPasscode] = useState(() => getStoredPasscodes().TEACHER);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleSavePasscodes = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminPasscode.trim() || !teacherPasscode.trim()) {
      alert('Mật khẩu không được để trống!');
      return;
    }
    setStoredPasscode('ADMIN', adminPasscode.trim());
    setStoredPasscode('TEACHER', teacherPasscode.trim());
    showToast('Đã cập nhật mật khẩu Admin và Giáo viên thành công!');
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const [uList, s] = await Promise.all([getAllUsers(), getSystemStats()]);
      setUsers(uList);
      setStats(s);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleRoleChange = async (userId: string, newRole: UserRole) => {
    await updateUserRole(userId, newRole);
    showToast(`Đã cập nhật quyền cho người dùng thành công!`);
    loadData();
  };

  const handleDeleteUser = async (userId: string, name: string) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa tài khoản "${name}" khỏi hệ thống?`)) {
      await deleteUser(userId);
      showToast(`Đã xóa tài khoản "${name}".`);
      loadData();
    }
  };

  const handleCreateUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName.trim() || !newUserEmail.trim()) {
      alert('Vui lòng điền họ tên và email!');
      return;
    }
    const newUser: UserProfile = {
      id: `user-${Date.now()}`,
      displayName: newUserName.trim(),
      email: newUserEmail.trim(),
      role: newUserRole,
      school: newUserSchool.trim(),
      createdAt: new Date().toISOString()
    };
    await createUser(newUser);
    setShowAddModal(false);
    setNewUserName('');
    setNewUserEmail('');
    showToast(`Đã tạo tài khoản "${newUser.displayName}" với vai trò ${newUserRole}!`);
    loadData();
  };

  const handleExportBackup = async () => {
    try {
      const baseUrl = import.meta.env.BASE_URL || './';
      const jsonUrl = `${baseUrl.replace(/\/$/, '')}/data/exam_bank_tap1.json`;
      const res = await fetch(jsonUrl);
      const data = await res.json();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `qmath_exam_bank_backup_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast('Đã tải file sao lưu ngân hàng câu hỏi thành công!');
    } catch (e: any) {
      alert('Lỗi tải backup: ' + e.message);
    }
  };

  const handleSyncBank = async () => {
    if (window.confirm('Hệ thống sẽ đồng bộ và nạp lại toàn bộ 992 câu hỏi 21 Chuyên đề kèm đáp án và lời giải mới nhất?')) {
      const res = await loadExamBankTap1(true);
      showToast(res.message);
      loadData();
    }
  };

  const filteredUsers = users.filter((u) => {
    const matchQuery =
      u.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchRole = roleFilter === 'ALL' || u.role === roleFilter;
    return matchQuery && matchRole;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-xl border border-slate-700 animate-slide-up text-sm font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 p-6 sm:p-8 text-white shadow-card">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-xs font-bold border border-purple-400/30">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span>Trung tâm Quản trị & Phân quyền Hệ thống</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Cài đặt & Quản lý Quyền QMath
            </h1>
            <p className="text-sm text-purple-200/80 max-w-2xl">
              Quản trị toàn diện danh sách người dùng, phân cấp quyền hạn (Admin / Giáo viên / Học sinh), cấu hình bảo mật và quản lý ngân hàng câu hỏi 21 chuyên đề.
            </p>
          </div>

          {/* Quick stats counter */}
          {stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-center">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-purple-200">Câu hỏi</p>
                <p className="text-xl sm:text-2xl font-black text-emerald-400">{stats.totalQuestions}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-purple-200">Chuyên đề</p>
                <p className="text-xl sm:text-2xl font-black text-amber-300">{stats.totalChapters}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-purple-200">Tài khoản</p>
                <p className="text-xl sm:text-2xl font-black text-white">{stats.totalUsers}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-purple-200">Bài nộp</p>
                <p className="text-xl sm:text-2xl font-black text-indigo-300">{stats.totalSubmissions}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-1 overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveSubTab('users')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
            activeSubTab === 'users'
              ? 'bg-purple-900 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Quản lý Người dùng & Phân quyền ({users.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSubTab('bank')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
            activeSubTab === 'bank'
              ? 'bg-purple-900 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <Database className="w-4 h-4" />
          <span>Ngân hàng Đề thi & Backup</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSubTab('security')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
            activeSubTab === 'security'
              ? 'bg-purple-900 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <KeyRound className="w-4 h-4" />
          <span>Bảo mật & Ma trận Phân quyền</span>
        </button>
      </div>

      {/* TAB 1: USERS MANAGEMENT & ROLE ASSIGNMENT */}
      {activeSubTab === 'users' && (
        <div className="space-y-4">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Tìm theo tên hoặc email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/30"
                />
              </div>

              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white font-medium text-slate-700"
              >
                <option value="ALL">Tất cả vai trò</option>
                <option value="ADMIN">🛡️ Quản trị viên</option>
                <option value="TEACHER">👨‍🏫 Giáo viên</option>
                <option value="STUDENT">🎓 Học sinh</option>
              </select>
            </div>

            <button
              type="button"
              onClick={() => setShowAddModal(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>Thêm người dùng mới</span>
            </button>
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Người dùng</th>
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4">Đơn vị / Trường</th>
                    <th className="py-3 px-4">Vai trò (Phân quyền)</th>
                    <th className="py-3 px-4 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {filteredUsers.map((u) => {
                    let roleBadgeColor = 'bg-slate-100 text-slate-700 border-slate-200';
                    let roleIcon = BookOpen;
                    if (u.role === 'ADMIN') {
                      roleBadgeColor = 'bg-purple-100 text-purple-900 border-purple-300';
                      roleIcon = ShieldCheck;
                    } else if (u.role === 'TEACHER') {
                      roleBadgeColor = 'bg-emerald-100 text-emerald-900 border-emerald-300';
                      roleIcon = GraduationCap;
                    }

                    const RoleIconComponent = roleIcon;

                    return (
                      <tr key={u.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-700 to-indigo-600 text-white flex items-center justify-center font-bold text-xs uppercase shadow-xs">
                              {u.displayName.charAt(0)}
                            </div>
                            <span className="font-bold text-slate-900">{u.displayName}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-mono text-xs text-slate-600">{u.email}</td>
                        <td className="py-3 px-4 text-slate-600">{u.school || 'THPT Quốc Gia'}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <select
                              value={u.role}
                              onChange={(e) => handleRoleChange(u.id, e.target.value as UserRole)}
                              className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/40 ${roleBadgeColor}`}
                            >
                              <option value="ADMIN">🛡️ Quản trị viên (Admin)</option>
                              <option value="TEACHER">👨‍🏫 Giáo viên (Teacher)</option>
                              <option value="STUDENT">🎓 Học sinh (Student)</option>
                            </select>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-right">
                          {u.id !== 'admin-system' && (
                            <button
                              type="button"
                              onClick={() => handleDeleteUser(u.id, u.displayName)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all"
                              title="Xóa tài khoản"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: EXAM BANK & BACKUP */}
      {activeSubTab === 'bank' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-purple-50 text-purple-700 border border-purple-200">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">Sao lưu Ngân hàng Câu hỏi</h3>
                <p className="text-xs text-slate-500">Tải về bản sao toàn bộ câu hỏi và đáp án chuẩn dưới dạng JSON</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tải toàn bộ <strong>992 câu hỏi 21 Chuyên đề</strong> bao gồm nội dung công thức toán KaTeX, các phương án A/B/C/D, đáp án chính xác và lời giải chi tiết từng bước để lưu trữ an toàn hoặc chia sẻ cho các trường khác.
            </p>
            <button
              type="button"
              onClick={handleExportBackup}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Tải file Backup JSON (992 câu)</span>
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                <RefreshCw className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">Đồng bộ & Cập nhật Dữ liệu</h3>
                <p className="text-xs text-slate-500">Đồng bộ lại kho câu hỏi và sửa các đáp án mới nhất</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cập nhật lại toàn bộ kho câu hỏi từ file gốc trên server (`exam_bank_tap1.json`), đảm bảo 100% tài khoản trong trường đều được tiếp cận phiên bản có đáp án chính xác và lời giải chi tiết.
            </p>
            <button
              type="button"
              onClick={handleSyncBank}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Đồng bộ ngay Ngân hàng Đề</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB 3: SECURITY & FIREBASE CONFIG */}
      {activeSubTab === 'security' && (
        <div className="space-y-6">
          {/* Database Status & Firebase Connector Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-purple-100 text-purple-800">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">Thiết lập Kết nối Firebase Cloud</h3>
                  <p className="text-xs text-slate-500">Đồng bộ dữ liệu thời gian thực trên nền tảng đám mây Google Firebase</p>
                </div>
              </div>

              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                  isFirebaseConfigured
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : 'bg-amber-50 text-amber-800 border-amber-300'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isFirebaseConfigured ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                  }`}
                />
                {isFirebaseConfigured ? 'Đang kết nối Firebase Cloud' : 'Chế độ LocalStorage (Offline-First)'}
              </span>
            </div>

            {/* Config Form */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5 leading-relaxed">
                <p className="font-bold text-slate-800 flex items-center gap-1.5">
                  <KeyRound className="w-4 h-4 text-purple-700" /> Cách lấy cấu hình Firebase miễn phí:
                </p>
                <ol className="list-decimal list-inside space-y-1 pl-1">
                  <li>Truy cập <strong>https://console.firebase.google.com</strong> và tạo dự án mới.</li>
                  <li>Vào <strong>Project Settings $\rightarrow$ General $\rightarrow$ Your apps</strong> $\rightarrow$ Bấm biểu tượng Web (<code>&lt;/&gt;</code>).</li>
                  <li>Dán đoạn mã <code>const firebaseConfig = &#123; ... &#125;</code> vào ô bên dưới rồi bấm <strong>Lưu & Kết nối</strong>.</li>
                </ol>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Dán mã cấu hình Firebase (Firebase SDK Snippet):
                </label>
                <textarea
                  id="firebase-config-input"
                  rows={5}
                  placeholder={`const firebaseConfig = {\n  apiKey: "AIzaSy...",\n  authDomain: "your-app.firebaseapp.com",\n  projectId: "your-app",\n  storageBucket: "your-app.appspot.com",\n  messagingSenderId: "123...",\n  appId: "1:123..."\n};`}
                  className="w-full p-3 font-mono text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/40 bg-slate-900 text-emerald-400 placeholder:text-slate-500"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('firebase-config-input') as HTMLTextAreaElement;
                    const text = el?.value || '';
                    if (!text.trim()) {
                      alert('Vui lòng dán đoạn mã cấu hình Firebase trước!');
                      return;
                    }

                    try {
                      // Extract fields via regex
                      const apiKeyMatch = text.match(/apiKey["']?\s*:\s*["']([^"']+)["']/);
                      const authDomainMatch = text.match(/authDomain["']?\s*:\s*["']([^"']+)["']/);
                      const projectIdMatch = text.match(/projectId["']?\s*:\s*["']([^"']+)["']/);
                      const storageBucketMatch = text.match(/storageBucket["']?\s*:\s*["']([^"']+)["']/);
                      const senderIdMatch = text.match(/messagingSenderId["']?\s*:\s*["']([^"']+)["']/);
                      const appIdMatch = text.match(/appId["']?\s*:\s*["']([^"']+)["']/);

                      if (!apiKeyMatch || !projectIdMatch) {
                        alert('Không tìm thấy apiKey hoặc projectId hợp lệ trong đoạn mã bạn dán!');
                        return;
                      }

                      const config = {
                        apiKey: apiKeyMatch[1],
                        authDomain: authDomainMatch ? authDomainMatch[1] : '',
                        projectId: projectIdMatch[1],
                        storageBucket: storageBucketMatch ? storageBucketMatch[1] : '',
                        messagingSenderId: senderIdMatch ? senderIdMatch[1] : '',
                        appId: appIdMatch ? appIdMatch[1] : ''
                      };

                      localStorage.setItem('qmath_firebase_custom_config', JSON.stringify(config));
                      alert('Đã lưu cấu hình Firebase thành công! Trang web sẽ tải lại để kích hoạt kết nối đám mây.');
                      window.location.reload();
                    } catch (e: any) {
                      alert('Lỗi phân tích cú pháp cấu hình: ' + e.message);
                    }
                  }}
                  className="px-4 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs shadow-md transition-all active:scale-95 flex items-center gap-1.5"
                >
                  <KeyRound className="w-4 h-4" />
                  <span>Lưu cấu hình & Kết nối Cloud</span>
                </button>

                {localStorage.getItem('qmath_firebase_custom_config') && (
                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm('Bạn có chắc muốn xóa cấu hình Firebase tùy chỉnh và quay về chế độ LocalStorage?')) {
                        localStorage.removeItem('qmath_firebase_custom_config');
                        window.location.reload();
                      }
                    }}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-700 font-bold text-xs border border-slate-200 transition-all active:scale-95"
                  >
                    Ngắt kết nối (Về Local)
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Passcode Security Gate Settings */}
          <div className="bg-white p-6 rounded-2xl border border-purple-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-purple-100 text-purple-800">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">Mật khẩu Khóa Quyền Quản trị & Giáo viên</h3>
                  <p className="text-xs text-slate-500">
                    Bảo vệ hệ thống khi chia sẻ link cho học sinh. Học sinh chỉ thấy giao diện học sinh và phải nhập mật khẩu này mới vào được không gian giáo viên/quản trị.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSavePasscodes} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200 space-y-2">
                <label className="block text-xs font-bold text-purple-900 uppercase tracking-wider">
                  🛡️ Mật khẩu Quản trị viên (ADMIN - sanginnova8@gmail.com)
                </label>
                <input
                  type="text"
                  value={adminPasscode}
                  onChange={(e) => setAdminPasscode(e.target.value)}
                  placeholder="Ducthang@2025"
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white font-mono font-bold"
                />
                <p className="text-[11px] text-purple-700">Mặc định: <code>Ducthang@2025</code></p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                <label className="block text-xs font-bold text-emerald-900 uppercase tracking-wider">
                  👨‍🏫 Mật khẩu Giáo viên (TEACHER)
                </label>
                <input
                  type="text"
                  value={teacherPasscode}
                  onChange={(e) => setTeacherPasscode(e.target.value)}
                  placeholder="123456"
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white font-mono font-bold"
                />
                <p className="text-[11px] text-emerald-700">Mặc định: <code>123456</code></p>
              </div>

              <div className="sm:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-purple-800 hover:bg-purple-900 text-white font-bold text-xs shadow-md transition-all active:scale-95 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Lưu thay đổi Mật khẩu bảo mật</span>
                </button>
              </div>
            </form>
          </div>

          {/* Role Permissions Matrix Table */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-purple-700" />
              <h3 className="text-base font-extrabold text-slate-900">Ma trận Phân quyền Hệ thống (Role-Based Access Control)</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Chức năng hệ thống</th>
                    <th className="py-3 px-4 text-center">🎓 Học sinh (STUDENT)</th>
                    <th className="py-3 px-4 text-center">👨‍🏫 Giáo viên (TEACHER)</th>
                    <th className="py-3 px-4 text-center">🛡️ Quản trị viên (ADMIN)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-3 px-4 font-medium">Làm bài kiểm tra & Luyện tập Chuyên đề</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Toàn quyền</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Xem & Thử nghiệm</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Toàn quyền</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Sổ tay câu sai (My Mistakes)</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Xem & Luyện lại</td>
                    <td className="py-3 px-4 text-center text-slate-400">-</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Quản lý</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Tạo và Giao bài kiểm tra</td>
                    <td className="py-3 px-4 text-center text-rose-500 font-bold">✗ Bị khóa</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Toàn quyền</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Toàn quyền</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Import câu hỏi từ Word (.docx) & Sửa câu hỏi</td>
                    <td className="py-3 px-4 text-center text-rose-500 font-bold">✗ Bị khóa</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Toàn quyền</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Toàn quyền</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Quản lý Lớp học & Xem phổ điểm toàn lớp</td>
                    <td className="py-3 px-4 text-center text-slate-400">Chỉ xem điểm mình</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Lớp phụ trách</td>
                    <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Toàn trường</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Phân quyền, Thăng/Hạ chức tài khoản & Cấu hình</td>
                    <td className="py-3 px-4 text-center text-rose-500 font-bold">✗ Bị khóa</td>
                    <td className="py-3 px-4 text-center text-rose-500 font-bold">✗ Bị khóa</td>
                    <td className="py-3 px-4 text-center text-purple-700 font-extrabold">✓ Độc quyền ADMIN</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Modal Add User */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-slate-900 text-base">Thêm tài khoản người dùng mới</h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateUserSubmit} className="space-y-3 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Họ và tên:</label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Thầy Trần Minh Tuấn"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Email đăng nhập:</label>
                <input
                  type="email"
                  required
                  placeholder="tuan.tm@qmath.edu.vn"
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Trường / Đơn vị:</label>
                <input
                  type="text"
                  placeholder="THPT Chuyên"
                  value={newUserSchool}
                  onChange={(e) => setNewUserSchool(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Phân quyền vai trò:</label>
                <select
                  value={newUserRole}
                  onChange={(e) => setNewUserRole(e.target.value as UserRole)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white font-medium"
                >
                  <option value="TEACHER">👨‍🏫 Giáo viên (Tạo đề, quản lý lớp)</option>
                  <option value="STUDENT">🎓 Học sinh (Làm bài, luyện tập)</option>
                  <option value="ADMIN">🛡️ Quản trị viên (Toàn quyền hệ thống)</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-medium"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold shadow-md"
                >
                  Lưu tài khoản
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSettings;
