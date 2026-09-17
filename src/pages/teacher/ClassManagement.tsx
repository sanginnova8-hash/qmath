import React, { useState, useEffect } from 'react';
import { ClassRoom, ClassMember } from '../../types';
import { getClasses, saveClass } from '../../services/store';
import { useAuth } from '../../context/AuthContext';
import {
  Users,
  Plus,
  Copy,
  Check,
  GraduationCap,
  Calendar,
  X,
  Sparkles,
  BookOpen
} from 'lucide-react';

export const ClassManagement: React.FC = () => {
  const { currentUser } = useAuth();
  const [classes, setClasses] = useState<ClassRoom[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Form state
  const [className, setClassName] = useState('');
  const [classGrade, setClassGrade] = useState<10 | 11 | 12>(12);
  const [classDesc, setClassDesc] = useState('');

  const loadData = async () => {
    setLoading(true);
    try {
      const cls = await getClasses();
      setClasses(cls);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const handleCreateClass = async (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'QM' + Math.random().toString(36).substring(2, 6).toUpperCase();
    const newClass: ClassRoom = {
      id: `class-${Date.now()}`,
      name: className,
      code: randomCode,
      teacherId: currentUser?.id || 'teacher-nguyen-van-a',
      teacherName: currentUser?.displayName || 'Thầy Nguyễn Văn An',
      grade: classGrade,
      description: classDesc,
      studentCount: 0,
      createdAt: new Date().toISOString()
    };

    await saveClass(newClass);
    setShowCreateModal(false);
    setClassName('');
    setClassDesc('');
    await loadData();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Quản lý Lớp học & Học sinh
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Tạo lớp học, chia sẻ mã tham gia 6 ký tự để học sinh tự động vào làm bài tập.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Tạo lớp học mới
        </button>
      </div>

      {/* Class Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {classes.map((cls) => (
          <div
            key={cls.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-card hover:border-emerald-300 transition-all p-5 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Khối {cls.grade}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {new Date(cls.createdAt).toLocaleDateString('vi-VN')}
                </span>
              </div>

              <h3 className="font-extrabold text-base text-slate-900 leading-snug">{cls.name}</h3>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {cls.description || 'Chưa có mô tả lớp học.'}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-3">
              {/* Class Code Box */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Mã mời học sinh</p>
                  <p className="font-mono text-base font-extrabold text-emerald-800">{cls.code}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyCode(cls.code)}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 hover:border-emerald-500 text-xs font-semibold text-slate-700 hover:text-emerald-700 transition-all shadow-2xs"
                >
                  {copiedCode === cls.code ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Đã chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Chép mã</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-slate-400" />
                  {cls.studentCount} học sinh trong lớp
                </span>
                <span className="text-emerald-700 font-bold">Đang hoạt động</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CREATE CLASS MODAL */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="px-6 py-4 bg-emerald-900 text-white flex items-center justify-between">
              <h3 className="font-bold text-base">Thêm lớp học mới</h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-emerald-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateClass} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Tên lớp học</label>
                <input
                  type="text"
                  required
                  placeholder="VD: Toán 12A1 — Ôn thi Đại học"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Khối lớp</label>
                <select
                  value={classGrade}
                  onChange={(e) => setClassGrade(Number(e.target.value) as any)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-none"
                >
                  <option value={12}>Lớp 12</option>
                  <option value={11}>Lớp 11</option>
                  <option value={10}>Lớp 10</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mô tả / Lưu ý</label>
                <textarea
                  rows={3}
                  placeholder="Ghi chú chương trình học hoặc mục tiêu lớp..."
                  value={classDesc}
                  onChange={(e) => setClassDesc(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-md active:scale-95"
                >
                  Tạo lớp ngay
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassManagement;
