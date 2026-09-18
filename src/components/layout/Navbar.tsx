import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { isFirebaseConfigured } from '../../lib/firebase';
import { resetAllDataToSeed } from '../../services/store';
import { 
  GraduationCap, 
  RotateCcw, 
  ShieldCheck, 
  BookOpen, 
  LogOut,
  Lock,
  Sparkles
} from 'lucide-react';
import RoleAuthModal from '../auth/RoleAuthModal';

interface NavbarProps {
  onToggleSidebar?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const { currentUser, role, switchRole, logoutToGuest, isGuest } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authTargetRole, setAuthTargetRole] = useState<'ADMIN' | 'TEACHER' | 'STUDENT'>('STUDENT');

  const handleResetData = () => {
    if (window.confirm('Bạn có chắc muốn đặt lại toàn bộ dữ liệu mẫu ban đầu của QMath?')) {
      resetAllDataToSeed();
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {onToggleSidebar && (
              <button
                type="button"
                onClick={onToggleSidebar}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}

            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-700 to-teal-800 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 font-black text-lg tracking-wider">
                $Q$
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-600 bg-clip-text text-transparent">
                  QMath <span className="text-emerald-600 font-semibold text-sm">Online</span>
                </span>
                <span className="text-[10px] text-slate-500 font-medium -mt-1 tracking-wider uppercase">
                  Nền tảng Toán THPT 2026
                </span>
              </div>
            </div>
          </div>

          {/* Role Status & Actions */}
          <div className="flex items-center gap-3">
            {/* Firebase indicator badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {isFirebaseConfigured ? 'Firebase Cloud' : 'Spark Ready / Seed'}
            </div>

            {/* Protected Role Bar */}
            {role === 'STUDENT' ? (
              <div className="flex items-center gap-2">
                {isGuest ? (
                  <button
                    type="button"
                    onClick={() => {
                      setAuthTargetRole('STUDENT');
                      setShowAuthModal(true);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 hover:from-emerald-700 hover:to-teal-900 text-white font-bold text-xs shadow-xs hover:shadow-md transition-all active:scale-95"
                    title="Đăng nhập hoặc Đăng ký tài khoản học sinh để mở khóa 992 câu hỏi"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Đăng nhập / Đăng ký</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-1.5 p-1 bg-emerald-50 border border-emerald-200 rounded-xl text-xs">
                    <div className="flex items-center gap-1 px-2.5 py-1 text-emerald-900 font-bold">
                      <GraduationCap className="w-4 h-4 text-emerald-700" />
                      <span>{currentUser?.displayName || 'Học sinh'}</span>
                      <span className="text-[10px] bg-emerald-200 text-emerald-900 px-1.5 py-0.2 rounded-full font-bold">
                        Lớp {currentUser?.grade || 12}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={logoutToGuest}
                      className="flex items-center gap-1 px-2 py-1 text-slate-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors font-medium"
                      title="Đăng xuất tài khoản"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Thoát</span>
                    </button>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setAuthTargetRole('TEACHER');
                    setShowAuthModal(true);
                  }}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200 text-xs font-semibold transition-all"
                  title="Cổng đăng nhập Giáo viên / Quản trị viên"
                >
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline">GV / Admin</span>
                </button>
              </div>
            ) : role === 'TEACHER' ? (
              <div className="flex items-center gap-1 p-1 bg-emerald-50 border border-emerald-200 rounded-xl text-xs">
                <div className="flex items-center gap-1 px-2 py-1 text-emerald-900 font-bold">
                  <GraduationCap className="w-4 h-4 text-emerald-700" />
                  <span>Giáo viên</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setAuthTargetRole('ADMIN');
                    setShowAuthModal(true);
                  }}
                  className="px-2 py-1 text-purple-800 hover:bg-purple-100 rounded-lg font-semibold transition-colors flex items-center gap-1"
                  title="Yêu cầu mật khẩu Admin để vào quản trị"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
                  <span className="hidden sm:inline">Quản trị</span>
                </button>
                <button
                  type="button"
                  onClick={logoutToGuest}
                  className="flex items-center gap-1 px-2 py-1 text-slate-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors font-medium"
                  title="Thoát về vai trò Học sinh"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Thoát</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1 p-1 bg-purple-50 border border-purple-200 rounded-xl text-xs">
                <div className="flex items-center gap-1 px-2 py-1 text-purple-900 font-bold">
                  <ShieldCheck className="w-4 h-4 text-purple-700" />
                  <span>Quản trị viên</span>
                </div>
                <button
                  type="button"
                  onClick={() => switchRole('TEACHER')}
                  className="px-2 py-1 text-emerald-800 hover:bg-emerald-100 rounded-lg font-semibold transition-colors flex items-center gap-1"
                  title="Xem không gian Giáo viên"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="hidden sm:inline">Giáo viên</span>
                </button>
                <button
                  type="button"
                  onClick={logoutToGuest}
                  className="flex items-center gap-1 px-2 py-1 text-slate-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors font-medium"
                  title="Thoát về vai trò Học sinh"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Thoát</span>
                </button>
              </div>
            )}

            {/* Reset Data Button */}
            <button
              type="button"
              onClick={handleResetData}
              title="Khôi phục toàn bộ câu hỏi và đề thi mẫu ban đầu"
              className="p-2 text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors border border-transparent hover:border-emerald-200"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Current user badge */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <div className={`w-8 h-8 rounded-full font-semibold text-xs flex items-center justify-center border shadow-xs ${
                role === 'ADMIN'
                  ? 'bg-purple-100 text-purple-900 border-purple-300'
                  : role === 'TEACHER'
                  ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                  : isGuest
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-blue-100 text-blue-900 border-blue-300'
              }`}>
                {currentUser?.displayName ? currentUser.displayName.charAt(0) : 'Q'}
              </div>
              <div className="hidden md:flex flex-col text-left">
                <span className="text-xs font-bold text-slate-800 truncate max-w-[130px]">
                  {currentUser?.displayName || 'Khách'}
                </span>
                <span className="text-[10px] font-medium text-slate-500">
                  {role === 'ADMIN'
                    ? '🛡️ Quản trị viên'
                    : role === 'TEACHER'
                    ? '👨‍🏫 Giáo viên Toán'
                    : isGuest
                    ? '👤 Dùng thử giới hạn'
                    : `🎓 Học sinh Lớp ${currentUser?.grade || 12}`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Auth Passcode Modal */}
      <RoleAuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        targetRole={authTargetRole}
      />
    </header>
  );
};

export default Navbar;
