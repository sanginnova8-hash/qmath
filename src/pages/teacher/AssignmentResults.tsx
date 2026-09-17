import React, { useState, useEffect } from 'react';
import { Assignment, Submission, Question } from '../../types';
import { getAssignments, getSubmissions, getQuestionsByIds } from '../../services/store';
import { MathView } from '../../components/math/MathView';
import {
  BarChart3,
  Award,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  User,
  Calendar,
  X,
  Eye,
  FileSpreadsheet
} from 'lucide-react';

export const AssignmentResults: React.FC = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [selectedAsgId, setSelectedAsgId] = useState<string>('');
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal inspecting a student submission
  const [inspectSubmission, setInspectSubmission] = useState<Submission | null>(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const asgs = await getAssignments();
        setAssignments(asgs);
        if (asgs.length > 0) {
          setSelectedAsgId(asgs[0].id);
        }
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    if (!selectedAsgId) return;

    async function loadSubmissions() {
      const subs = await getSubmissions(selectedAsgId);
      setSubmissions(subs);

      const asg = assignments.find((a) => a.id === selectedAsgId);
      if (asg) {
        const qst = await getQuestionsByIds(asg.questionIds);
        setQuestions(qst);
      }
    }
    loadSubmissions();
  }, [selectedAsgId, assignments]);

  const currentAsg = assignments.find((a) => a.id === selectedAsgId);

  // Statistics calculation
  const totalSubmissions = submissions.length;
  const scores = submissions.map((s) => s.score);
  const avgScore = totalSubmissions
    ? (scores.reduce((a, b) => a + b, 0) / totalSubmissions).toFixed(1)
    : '0';
  const maxScore = totalSubmissions ? Math.max(...scores).toFixed(1) : '0';
  const minScore = totalSubmissions ? Math.min(...scores).toFixed(1) : '0';

  // Score distribution brackets: [0-4.9], [5.0-6.9], [7.0-8.9], [9.0-10.0]
  const dist = {
    weak: scores.filter((s) => s < 5.0).length,
    medium: scores.filter((s) => s >= 5.0 && s < 7.0).length,
    good: scores.filter((s) => s >= 7.0 && s < 9.0).length,
    excellent: scores.filter((s) => s >= 9.0).length
  };

  // Failure rate per question
  const questionStats = questions.map((q) => {
    const wrongCount = submissions.filter((s) => {
      const ans = s.answers[q.id];
      return ans && !ans.isCorrect;
    }).length;
    const failRate = totalSubmissions
      ? Math.round((wrongCount / totalSubmissions) * 100)
      : 0;
    return {
      question: q,
      wrongCount,
      failRate
    };
  }).sort((a, b) => b.failRate - a.failRate);

  return (
    <div className="space-y-6">
      {/* Top Header & Assignment Picker */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-emerald-700" />
            Bảng điểm & Phân tích Kết quả Đề thi
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Theo dõi phổ điểm, tỷ lệ làm bài và các câu hỏi có tỷ lệ học sinh sai cao nhất để ôn tập.
          </p>
        </div>

        {/* Dropdown select assignment */}
        <div className="min-w-[280px]">
          <label className="block text-xs font-bold text-slate-600 mb-1">Chọn bài kiểm tra:</label>
          <select
            value={selectedAsgId}
            onChange={(e) => setSelectedAsgId(e.target.value)}
            className="w-full px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 focus:border-emerald-500 outline-none bg-white text-slate-800"
          >
            {assignments.map((a) => (
              <option key={a.id} value={a.id}>
                {a.title} ({a.className})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Số bài đã nộp</p>
          <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{totalSubmissions}</h3>
          <p className="text-xs text-slate-500 mt-1">Lớp: {currentAsg?.className}</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Điểm trung bình</p>
          <h3 className="text-2xl font-extrabold text-emerald-700 mt-1">{avgScore} / 10</h3>
          <p className="text-xs text-slate-500 mt-1">Thang điểm chuẩn</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Điểm cao nhất</p>
          <h3 className="text-2xl font-extrabold text-emerald-600 mt-1">{maxScore}</h3>
          <p className="text-xs text-slate-500 mt-1">Học sinh đạt điểm đỉnh</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Điểm thấp nhất</p>
          <h3 className="text-2xl font-extrabold text-rose-600 mt-1">{minScore}</h3>
          <p className="text-xs text-slate-500 mt-1">Cần hỗ trợ ôn luyện</p>
        </div>
      </div>

      {/* Score Distribution (Phổ điểm) & Failed questions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Phổ điểm */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card space-y-4">
          <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-700" />
            Phổ điểm bài thi (Score Distribution)
          </h3>

          <div className="space-y-3 pt-2">
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>9.0 - 10.0 điểm (Xuất sắc)</span>
                <span>{dist.excellent} học sinh ({totalSubmissions ? Math.round((dist.excellent / totalSubmissions) * 100) : 0}%)</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-emerald-600 rounded-full transition-all duration-500"
                  style={{ width: `${totalSubmissions ? (dist.excellent / totalSubmissions) * 100 : 0}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>7.0 - 8.9 điểm (Khá)</span>
                <span>{dist.good} học sinh ({totalSubmissions ? Math.round((dist.good / totalSubmissions) * 100) : 0}%)</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${totalSubmissions ? (dist.good / totalSubmissions) * 100 : 0}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>5.0 - 6.9 điểm (Trung bình)</span>
                <span>{dist.medium} học sinh ({totalSubmissions ? Math.round((dist.medium / totalSubmissions) * 100) : 0}%)</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full transition-all duration-500"
                  style={{ width: `${totalSubmissions ? (dist.medium / totalSubmissions) * 100 : 0}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Dưới 5.0 điểm (Yếu/Cần ôn lại)</span>
                <span>{dist.weak} học sinh ({totalSubmissions ? Math.round((dist.weak / totalSubmissions) * 100) : 0}%)</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-rose-500 rounded-full transition-all duration-500"
                  style={{ width: `${totalSubmissions ? (dist.weak / totalSubmissions) * 100 : 0}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Failed questions analysis */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card space-y-4">
          <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            Câu hỏi có tỷ lệ học sinh làm sai cao nhất
          </h3>

          {questionStats.length === 0 || totalSubmissions === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center">
              Chưa có đủ lượt nộp bài để thống kê câu sai.
            </p>
          ) : (
            <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
              {questionStats.map((item, idx) => (
                <div
                  key={item.question.id}
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">
                      Câu {idx + 1}: {item.question.chapter} ({item.question.type})
                    </span>
                    <span className="font-extrabold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      {item.failRate}% sai
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 line-clamp-1 font-medium">
                    <MathView content={item.question.content} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Submissions List Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-base text-slate-900">Danh sách bài nộp của học sinh</h3>
            <p className="text-xs text-slate-500">Bấm vào học sinh để xem chi tiết từng câu trả lời</p>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
            {submissions.length} bài nộp
          </span>
        </div>

        {submissions.length === 0 ? (
          <div className="p-8 text-center text-slate-400 text-xs">
            Chưa có học sinh nào nộp bài kiểm tra này.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                <tr>
                  <th className="px-5 py-3">Học sinh</th>
                  <th className="px-5 py-3">Thời gian nộp</th>
                  <th className="px-5 py-3">Thời gian làm</th>
                  <th className="px-5 py-3">Số câu đúng</th>
                  <th className="px-5 py-3 text-right">Điểm số (Thang 10)</th>
                  <th className="px-5 py-3 text-center">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {submissions.map((sub) => (
                  <tr key={sub.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-3 font-semibold text-slate-900 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">
                        {sub.studentName.charAt(0)}
                      </div>
                      <span>{sub.studentName}</span>
                    </td>
                    <td className="px-5 py-3 text-slate-500">
                      {sub.submittedAt ? new Date(sub.submittedAt).toLocaleTimeString('vi-VN') + ' ' + new Date(sub.submittedAt).toLocaleDateString('vi-VN') : 'Đang làm'}
                    </td>
                    <td className="px-5 py-3 text-slate-500">
                      {Math.floor(sub.timeSpentSeconds / 60)} phút {sub.timeSpentSeconds % 60} giây
                    </td>
                    <td className="px-5 py-3 font-medium">
                      {sub.correctCount} / {sub.totalQuestions} câu
                    </td>
                    <td className="px-5 py-3 text-right font-extrabold text-base text-emerald-700">
                      {sub.score.toFixed(1)}
                    </td>
                    <td className="px-5 py-3 text-center">
                      <button
                        onClick={() => setInspectSubmission(sub)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Xem bài làm
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* INSPECT SUBMISSION MODAL */}
      {inspectSubmission && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="px-6 py-4 bg-emerald-900 text-white flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-base">Bài làm của {inspectSubmission.studentName}</h3>
                <p className="text-xs text-emerald-200">
                  Điểm: <strong>{inspectSubmission.score.toFixed(1)} / 10</strong> ({inspectSubmission.correctCount}/{inspectSubmission.totalQuestions} câu đúng)
                </p>
              </div>
              <button
                onClick={() => setInspectSubmission(null)}
                className="text-emerald-200 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              {questions.map((q, idx) => {
                const rec = inspectSubmission.answers[q.id];
                const isCorrect = rec?.isCorrect;
                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border ${
                      isCorrect ? 'border-emerald-200 bg-emerald-50/30' : 'border-rose-200 bg-rose-50/20'
                    } space-y-2`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-slate-800">Câu {idx + 1} ({q.type})</span>
                      <span className={`px-2 py-0.5 rounded text-[11px] font-extrabold ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {isCorrect ? 'Đúng (+ ' + (rec?.earnedPoints || 0) + 'đ)' : 'Sai / Chưa đạt'}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm text-slate-900 font-medium">
                      <MathView content={q.content} />
                    </div>

                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs space-y-1">
                      <p className="text-slate-600">
                        <strong className="text-slate-800">Học sinh trả lời:</strong>{' '}
                        {typeof rec?.answer === 'object' ? JSON.stringify(rec?.answer) : String(rec?.answer || 'Chưa trả lời')}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setInspectSubmission(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 text-white hover:bg-slate-700"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentResults;
