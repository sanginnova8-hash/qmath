import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { isFirebaseConfigured } from '../../lib/firebase';
import { resetAllDataToSeed } from '../../services/store';
import { 
  GraduationCap, 
  RotateCcw, 
  UserCheck, 
  ShieldCheck, 
  BookOpen, 
  LogOut,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  onToggleSidebar?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const { currentUser, role, switchRole, logout } = useAuth();

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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 via-emerald-700 to-qmath-dark flex items-center justify-center shadow-md shadow-emerald-900/20 text-white font-extrabold text-xl tracking-tighter">
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

          {/* Quick Demo Switcher & Status */}
          <div className="flex items-center gap-3">
            {/* Firebase indicator badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {isFirebaseConfigured ? 'Firebase Cloud' : 'Spark Ready / Seed'}
            </div>

            {/* Quick Switch Role Bar */}
            <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs">
              <button
                type="button"
                onClick={() => switchRole('TEACHER')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                  role === 'TEACHER'
                    ? 'bg-emerald-700 text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Giáo viên</span>
              </button>

              <button
                type="button"
                onClick={() => switchRole('STUDENT')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                  role === 'STUDENT'
                    ? 'bg-emerald-700 text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Học sinh</span>
              </button>
            </div>

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
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-xs flex items-center justify-center border border-emerald-300 shadow-xs">
                {currentUser?.displayName ? currentUser.displayName.charAt(0) : 'Q'}
              </div>
              <div className="hidden md:flex flex-col text-left">
                <span className="text-xs font-bold text-slate-800 truncate max-w-[130px]">
                  {currentUser?.displayName || 'Khách'}
                </span>
                <span className="text-[10px] text-emerald-700 font-medium">
                  {role === 'TEACHER' ? 'Giáo viên Toán' : 'Học sinh THPT'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
