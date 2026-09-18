import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Assignment, Submission, StudentProgress } from '../../types';
import { getAssignments, getSubmissions, getStudentProgress } from '../../services/store';
import {
  BookOpen,
  Clock,
  CheckCircle,
  AlertCircle,
  Award,
  Play,
  RotateCcw,
  Sparkles,
  Calendar,
  Compass,
  ArrowRight,
  Lock
} from 'lucide-react';
import RoleAuthModal from '../../components/auth/RoleAuthModal';

interface StudentDashboardProps {
  onStartExam: (assignmentId: string) => void;
  onViewResult: (submissionId: string) => void;
  onNavigate: (tab: string) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  onStartExam,
  onViewResult,
  onNavigate
}) => {
  const { currentUser, isGuest } = useAuth();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [progress, setProgress] = useState<StudentProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAttemptStartExam = (asgId: string) => {
    if (isGuest) {
      setShowAuthModal(true);
      return;
    }
    onStartExam(asgId);
  };

  useEffect(() => {
    async function loadData() {
      if (!currentUser) return;
      setLoading(true);
      try {
        const [asgs, subs, prog] = await Promise.all([
          getAssignments(),
          getSubmissions(undefined, currentUser.id),
          getStudentProgress(currentUser.id)
        ]);
        setAssignments(asgs);
        setSubmissions(subs);
        setProgress(prog);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [currentUser]);

  // Split assignments into To-Do and Completed
  const completedAsgIds = new Set(submissions.map((s) => s.assignmentId));

  const todoAssignments = assignments.filter((a) => !completedAsgIds.has(a.id));
  const doneAssignments = assignments.filter((a) => completedAsgIds.has(a.id));

  const mistakesCount = progress?.mistakeQuestionIds?.length || 0;
  const avgScore = submissions.length
    ? (submissions.reduce((a, b) => a + b.score, 0) / submissions.length).toFixed(1)
    : 'Chưa có';

  return (
    <div className="space-y-6">
      {/* Guest Trial Warning Banner */}
      {isGuest && (
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 rounded-3xl p-6 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-xs shrink-0">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-black/20 text-white mb-1.5">
                <span>Chế độ Khách (Dùng thử giới hạn)</span>
              </div>
              <h3 className="text-lg font-extrabold">Đăng nhập Học sinh để mở khóa toàn bộ tài nguyên</h3>
              <p className="text-xs text-amber-100 max-w-xl mt-1">
                Bạn hiện chỉ xem được danh sách đề thi và luyện tập thử 5 câu mỗi chuyên đề. Vui lòng đăng nhập hoặc tạo tài khoản để làm bài kiểm tra tính điểm và ghi nhận kết quả.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowAuthModal(true)}
            className="px-5 py-3 rounded-2xl bg-white text-amber-900 hover:bg-amber-50 font-bold text-xs shadow-md transition-all active:scale-95 shrink-0 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Đăng nhập / Đăng ký ngay</span>
          </button>
        </div>
      )}

      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-qmath-dark p-6 sm:p-8 text-white shadow-card">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-800/80 border border-emerald-600/40 text-emerald-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Chào mừng bạn quay trở lại
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Chào {currentUser?.displayName || 'bạn học'}!
          </h1>
          <p className="mt-2 text-sm sm:text-base text-emerald-100/90 leading-relaxed">
            Hôm nay bạn có <strong className="text-emerald-300 font-bold">{todoAssignments.length} bài kiểm tra</strong> cần hoàn thành. Hãy ôn luyện để chinh phục điểm 9+ môn Toán THPT 2026!
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {todoAssignments.length > 0 && (
              <button
                onClick={() => handleAttemptStartExam(todoAssignments[0].id)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <Play className="w-4 h-4 fill-emerald-900 text-emerald-900" />
                Vào làm bài ngay ({todoAssignments[0].title.slice(0, 24)}...)
              </button>
            )}
            <button
              onClick={() => onNavigate('student-practice')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-white font-semibold text-sm border border-emerald-600/40 transition-all"
            >
              <Compass className="w-4 h-4" />
              Luyện tập tự do
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bài cần làm</p>
          <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{todoAssignments.length}</h3>
          <p className="text-xs text-slate-500 mt-1">Đang chờ bạn hoàn thành</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Điểm trung bình</p>
          <h3 className="text-2xl font-extrabold text-emerald-700 mt-1">
            {avgScore} {typeof avgScore === 'number' ? '/ 10' : ''}
          </h3>
          <p className="text-xs text-slate-500 mt-1">{submissions.length} bài đã nộp</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Sổ tay câu sai</p>
          <h3 className="text-2xl font-extrabold text-amber-600 mt-1">{mistakesCount} câu</h3>
          <button
            onClick={() => onNavigate('student-mistakes')}
            className="text-xs text-amber-700 hover:text-amber-800 font-bold mt-1 inline-flex items-center gap-1"
          >
            Luyện lại câu sai <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tỷ lệ hoàn thành</p>
          <h3 className="text-2xl font-extrabold text-emerald-700 mt-1">
            {assignments.length ? Math.round((doneAssignments.length / assignments.length) * 100) : 0}%
          </h3>
          <p className="text-xs text-slate-500 mt-1">{doneAssignments.length}/{assignments.length} bài tập</p>
        </div>
      </div>

      {/* Main Two Sections: Assigned To-Do & Completed Assignments */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: To-Do Assignments */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Bài tập được giao (Cần làm)</h2>
                <p className="text-xs text-slate-500">Bấm vào để vào phòng thi trực tuyến</p>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                {todoAssignments.length} bài
              </span>
            </div>

            {todoAssignments.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
                <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-bold text-slate-700">Tuyệt vời! Bạn đã hoàn thành tất cả bài tập</p>
                <p className="text-xs text-slate-500 mt-1">Hãy chuyển sang mục Luyện tập tự do để rèn luyện thêm kỹ năng</p>
              </div>
            ) : (
              <div className="space-y-3">
                {todoAssignments.map((asg) => (
                  <div
                    key={asg.id}
                    className="p-4 rounded-xl border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/20 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                          {asg.className}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                          <Clock className="w-3.5 h-3.5" /> {asg.durationMinutes} phút
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                          <BookOpen className="w-3.5 h-3.5" /> {asg.questionIds.length} câu
                        </span>
                      </div>

                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">{asg.title}</h4>
                      <p className="text-xs text-slate-500 line-clamp-1">{asg.description}</p>
                    </div>

                    <button
                      onClick={() => handleAttemptStartExam(asg.id)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-900/10 active:scale-95 transition-all shrink-0"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      Làm bài ngay
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Completed Assignments */}
          {doneAssignments.length > 0 && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 space-y-4">
              <h3 className="font-extrabold text-base text-slate-900">Bài tập đã nộp & Lịch sử điểm</h3>
              <div className="space-y-3">
                {doneAssignments.map((asg) => {
                  const sub = submissions.find((s) => s.assignmentId === asg.id);
                  return (
                    <div
                      key={asg.id}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <h4 className="font-bold text-slate-900 text-sm">{asg.title}</h4>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <span>Nộp ngày: {sub?.submittedAt ? new Date(sub.submittedAt).toLocaleDateString('vi-VN') : ''}</span>
                          <span>•</span>
                          <span>Đúng: {sub?.correctCount}/{sub?.totalQuestions} câu</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <span className="text-xs text-slate-400 block font-medium">Điểm số</span>
                          <span className="font-extrabold text-lg text-emerald-700">
                            {sub?.score.toFixed(1)} <span className="text-xs text-slate-400 font-normal">/ 10</span>
                          </span>
                        </div>
                        {sub && (
                          <button
                            onClick={() => onViewResult(sub.id)}
                            className="px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-all"
                          >
                            Xem lời giải
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right 1 Col: Topic Mastery */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 space-y-4">
          <h3 className="font-extrabold text-base text-slate-900">Mức độ thông thạo theo Chủ đề</h3>
          <p className="text-xs text-slate-500">Dựa trên kết quả các bài kiểm tra bạn đã làm</p>

          <div className="space-y-4 pt-2">
            {progress?.topicMastery && Object.keys(progress.topicMastery).length > 0 ? (
              Object.entries(progress.topicMastery).map(([topic, data]) => {
                const percent = data.total ? Math.round((data.correct / data.total) * 100) : 0;
                return (
                  <div key={topic} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold text-slate-700">
                      <span className="truncate max-w-[180px]">{topic}</span>
                      <span className="text-emerald-700">{percent}% ({data.correct}/{data.total})</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-emerald-600 rounded-full transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-6 text-slate-400 text-xs">
                Chưa có dữ liệu thông thạo. Hãy làm một bài kiểm tra để hệ thống phân tích năng lực toán của bạn!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Role Auth Modal */}
      <RoleAuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        targetRole="STUDENT"
      />
    </div>
  );
};

export default StudentDashboard;
