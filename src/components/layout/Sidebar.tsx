import React from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  LayoutDashboard,
  Users,
  Database,
  FilePlus2,
  BarChart3,
  BookOpenCheck,
  Compass,
  AlertCircle,
  GraduationCap,
  Sparkles,
  Award,
  ShieldCheck
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  isOpen: boolean;
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  isOpen,
  onCloseMobile
}) => {
  const { role } = useAuth();

  const adminItems = [
    { id: 'admin-settings', label: 'Cài đặt & Phân quyền', icon: ShieldCheck },
    { id: 'teacher-questions', label: 'Ngân hàng Câu hỏi (992 câu)', icon: Database },
    { id: 'teacher-classes', label: 'Quản lý Lớp học', icon: Users },
    { id: 'teacher-create-assignment', label: 'Tạo & Giao bài tập', icon: FilePlus2 },
    { id: 'teacher-results', label: 'Bảng điểm & Thống kê', icon: BarChart3 }
  ];

  const teacherItems = [
    { id: 'teacher-overview', label: 'Bảng tổng quan', icon: LayoutDashboard },
    { id: 'teacher-classes', label: 'Quản lý Lớp học', icon: Users },
    { id: 'teacher-questions', label: 'Ngân hàng Câu hỏi', icon: Database },
    { id: 'teacher-create-assignment', label: 'Tạo & Giao bài tập', icon: FilePlus2 },
    { id: 'teacher-results', label: 'Bảng điểm & Phổ điểm', icon: BarChart3 }
  ];

  const studentItems = [
    { id: 'student-overview', label: 'Bài tập của tôi', icon: BookOpenCheck },
    { id: 'student-practice', label: 'Luyện tập Chuyên đề', icon: Compass },
    { id: 'student-mistakes', label: 'Sổ tay câu sai (Mistakes)', icon: AlertCircle }
  ];

  const navItems = role === 'ADMIN' ? adminItems : role === 'TEACHER' ? teacherItems : studentItems;

  const handleItemClick = (id: string) => {
    onSelectTab(id);
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed lg:static top-16 bottom-0 left-0 z-40 w-64 bg-slate-900 text-slate-100 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } border-r border-slate-800 shadow-xl lg:shadow-none`}
      >
        {/* Role Header in Sidebar */}
        <div className="p-4 border-b border-slate-800/80 bg-slate-950/40">
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-lg ${role === 'ADMIN' ? 'bg-purple-900/60 text-purple-300 border border-purple-700/50' : 'bg-emerald-900/50 text-emerald-400 border border-emerald-700/40'}`}>
              {role === 'ADMIN' ? <ShieldCheck className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Không gian làm việc
              </p>
              <h3 className="text-sm font-bold text-white">
                {role === 'ADMIN' ? 'Khu vực Quản trị viên' : role === 'TEACHER' ? 'Khu vực Giáo viên' : 'Khu vực Học sinh'}
              </h3>
            </div>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 p-3 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Bottom Feature Card */}
        <div className="p-4 m-3 rounded-2xl bg-gradient-to-br from-emerald-950 to-slate-900 border border-emerald-800/40 text-xs text-slate-300">
          <div className="flex items-center gap-2 mb-1 text-emerald-400 font-semibold">
            <Award className="w-4 h-4" />
            <span>Toán THPT 2026</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Hỗ trợ cấu trúc đề thi mới: Trắc nghiệm 4 lựa chọn, Đúng/Sai 4 mệnh đề, và Trả lời ngắn với KaTeX & MathLive.
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
