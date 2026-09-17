import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getClasses, getAssignments, getQuestions, getSubmissions } from '../../services/store';
import { ClassRoom, Assignment, Question, Submission } from '../../types';
import {
  Users,
  BookOpen,
  FileText,
  CheckCircle2,
  PlusCircle,
  ArrowRight,
  TrendingUp,
  Clock,
  Sparkles
} from 'lucide-react';

interface TeacherDashboardProps {
  onNavigate: (tab: string) => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ onNavigate }) => {
  const { currentUser } = useAuth();
  const [classes, setClasses] = useState<ClassRoom[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [cls, asgs, qst, subs] = await Promise.all([
          getClasses(),
          getAssignments(),
          getQuestions(),
          getSubmissions()
        ]);
        setClasses(cls);
        setAssignments(asgs);
        setQuestions(qst);
        setSubmissions(subs);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const totalStudents = classes.reduce((sum, c) => sum + (c.studentCount || 0), 0);
  const avgScore = submissions.length
    ? (submissions.reduce((sum, s) => sum + s.score, 0) / submissions.length).toFixed(1)
    : 'Chưa có';

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-qmath-dark p-6 sm:p-8 text-white shadow-card">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-700/60 border border-emerald-500/30 text-emerald-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Bảng điều khiển Giảng dạy
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Xin chào, {currentUser?.displayName || 'Thầy Nguyễn Văn An'}!
          </h1>
          <p className="mt-2 text-sm sm:text-base text-emerald-100/90 leading-relaxed">
            Hệ thống đã sẵn sàng hỗ trợ thầy/cô quản lý lớp học, soạn ngân hàng câu hỏi chuẩn cấu trúc Bộ GD&ĐT 2025-2026 và giao đề thi trực tuyến.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('teacher-create-assignment')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <PlusCircle className="w-4 h-4 text-emerald-700" />
              Tạo bài tập mới
            </button>
            <button
              onClick={() => onNavigate('teacher-questions')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700/80 text-white font-semibold text-sm border border-emerald-600/50 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              Soạn câu hỏi Toán
            </button>
          </div>
        </div>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Lớp học quản lý</p>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{classes.length}</h3>
              <p className="text-xs text-slate-500 mt-1">{totalStudents} học sinh đang học</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
              <Users className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Ngân hàng câu hỏi</p>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{questions.length}</h3>
              <p className="text-xs text-emerald-600 font-medium mt-1">Đầy đủ 3 dạng đề 2025</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100">
              <BookOpen className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Bài tập đã giao</p>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{assignments.length}</h3>
              <p className="text-xs text-slate-500 mt-1">Đang mở cho học sinh làm</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100">
              <FileText className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Điểm trung bình nộp</p>
              <h3 className="text-2xl font-extrabold text-emerald-700 mt-1">
                {avgScore} {typeof avgScore === 'number' ? '/ 10' : ''}
              </h3>
              <p className="text-xs text-slate-500 mt-1">{submissions.length} lượt nộp bài</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Two Columns: Recent Assignments & Active Classes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Recent Assignments */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Bài tập & Đề thi gần đây</h2>
              <p className="text-xs text-slate-500">Các bài tập đang mở kiểm tra trực tuyến</p>
            </div>
            <button
              onClick={() => onNavigate('teacher-create-assignment')}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              + Giao bài mới
            </button>
          </div>

          <div className="space-y-3">
            {assignments.map((asg) => (
              <div
                key={asg.id}
                className="p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/20 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                      {asg.className}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {asg.durationMinutes} phút
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm hover:text-emerald-700 transition-colors">
                    {asg.title}
                  </h4>
                  <p className="text-xs text-slate-500">
                    Số câu: <strong className="text-slate-700">{asg.questionIds.length}</strong> | Thang điểm: 10
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => onNavigate('teacher-results')}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-all"
                  >
                    Xem kết quả ({submissions.filter(s => s.assignmentId === asg.id).length})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Classes quick card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Lớp học phụ trách</h2>
            <button
              onClick={() => onNavigate('teacher-classes')}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              Quản lý <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {classes.map((cls) => (
              <div
                key={cls.id}
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-all space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">{cls.name}</span>
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-slate-200 text-slate-700">
                    Mã: {cls.code}
                  </span>
                </div>
                <p className="text-xs text-slate-500 line-clamp-1">{cls.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
                  <span>Khối {cls.grade}</span>
                  <span className="font-semibold text-emerald-700">{cls.studentCount} học sinh</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
