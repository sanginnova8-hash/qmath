import React, { useState, useEffect } from 'react';
import { Submission, Question } from '../../types';
import { getSubmissionById, getQuestionsByIds } from '../../services/store';
import { MathView } from '../../components/math/MathView';
import { ExplanationView } from '../../components/math/ExplanationView';
import {
  Award,
  Clock,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowLeft,
  RotateCcw,
  BookOpen,
  Check,
  AlertCircle
} from 'lucide-react';

interface ExamResultProps {
  submissionId: string;
  onBackToDashboard: () => void;
  onGoToMistakes?: () => void;
}

export const ExamResult: React.FC<ExamResultProps> = ({
  submissionId,
  onBackToDashboard,
  onGoToMistakes
}) => {
  const [submission, setSubmission] = useState<Submission | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const sub = await getSubmissionById(submissionId);
        if (sub) {
          setSubmission(sub);
          const qst = await getQuestionsByIds(Object.keys(sub.answers));
          setQuestions(qst);
        }
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [submissionId]);

  if (loading || !submission) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const score = submission.score;
  let gradeText = 'Cần cố gắng';
  let gradeColor = 'text-rose-600 bg-rose-50 border-rose-200';
  if (score >= 9.0) {
    gradeText = 'Xuất sắc';
    gradeColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
  } else if (score >= 7.5) {
    gradeText = 'Giỏi';
    gradeColor = 'text-emerald-600 bg-emerald-50 border-emerald-200';
  } else if (score >= 5.0) {
    gradeText = 'Khá';
    gradeColor = 'text-amber-700 bg-amber-50 border-amber-200';
  }

  const wrongCount = submission.totalQuestions - submission.correctCount;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Top Banner with Score */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-qmath-dark p-6 sm:p-8 text-white shadow-card">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <button
              onClick={onBackToDashboard}
              className="inline-flex items-center gap-1.5 text-xs text-emerald-200 hover:text-white font-medium mb-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Quay lại danh sách bài tập
            </button>
            <h1 className="text-xl sm:text-2xl font-extrabold">{submission.assignmentTitle}</h1>
            <p className="text-xs sm:text-sm text-emerald-100/80">
              Hoàn thành lúc {submission.submittedAt ? new Date(submission.submittedAt).toLocaleTimeString('vi-VN') + ' ngày ' + new Date(submission.submittedAt).toLocaleDateString('vi-VN') : ''}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <span className="flex items-center gap-1 bg-emerald-800/80 px-3 py-1 rounded-full border border-emerald-600/40">
                <Clock className="w-3.5 h-3.5" />
                Thời gian làm: {Math.floor(submission.timeSpentSeconds / 60)} phút {submission.timeSpentSeconds % 60}s
              </span>
              <span className="flex items-center gap-1 bg-emerald-800/80 px-3 py-1 rounded-full border border-emerald-600/40">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Đúng: {submission.correctCount} / {submission.totalQuestions} câu
              </span>
            </div>
          </div>

          {/* Big Score Box */}
          <div className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 min-w-[160px] text-center shrink-0">
            <span className="text-xs uppercase font-bold text-emerald-200 tracking-wider">Điểm số</span>
            <span className="text-4xl sm:text-5xl font-extrabold text-white my-1">
              {score.toFixed(1)}
            </span>
            <span className={`px-3 py-0.5 rounded-full text-xs font-bold border ${gradeColor}`}>
              {gradeText}
            </span>
          </div>
        </div>
      </div>

      {/* Action shortcuts */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-card">
        <span className="text-xs sm:text-sm text-slate-600 font-medium">
          Hệ thống đã tự động lưu <strong>{wrongCount} câu sai</strong> vào <strong>Sổ tay câu sai (My Mistakes)</strong> của bạn.
        </span>

        {onGoToMistakes && wrongCount > 0 && (
          <button
            onClick={onGoToMistakes}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md transition-all active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Vào Sổ tay câu sai luyện tập ngay
          </button>
        )}
      </div>

      {/* Detailed Question Review List */}
      <div className="space-y-4">
        <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
          Chi tiết bài thi & Lời giải từng câu:
        </h3>

        {questions.map((q, idx) => {
          const rec = submission.answers[q.id];
          const isCorrect = rec?.isCorrect;

          // Tìm đáp án chính xác của câu hỏi
          const correctOptionObj = q.options?.find((opt) => opt.is_correct);
          const correctOptionLetter = correctOptionObj?.id || (q as any).correctOption || (q as any).answer || '';

          return (
            <div
              key={q.id}
              id={`result-question-${idx + 1}`}
              className={`bg-white rounded-2xl border transition-all ${
                isCorrect ? 'border-emerald-300 shadow-sm' : 'border-rose-300 shadow-sm'
              } p-5 sm:p-7 space-y-5`}
            >
              {/* Question Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-extrabold text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">
                    Câu {idx + 1}
                  </span>
                  {q.chapter && (
                    <span className="text-xs text-slate-600 bg-slate-50 border border-slate-200/60 px-2.5 py-0.5 rounded-md font-medium">
                      {q.chapter}
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-700 uppercase">
                    {q.type}
                  </span>
                </div>

                <span
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold border ${
                    isCorrect
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                      : 'bg-rose-50 text-rose-800 border-rose-300'
                  }`}
                >
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Chính xác (+{rec?.earnedPoints}đ)</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>Chưa đúng (+{rec?.earnedPoints || 0}đ)</span>
                    </>
                  )}
                </span>
              </div>

              {/* Question Content */}
              <div className="text-base text-slate-900 font-medium leading-relaxed">
                <MathView content={q.content} />
              </div>

              {/* MCQ Options Display */}
              {q.type === 'MCQ' && q.options && q.options.length > 0 && (
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Các phương án lựa chọn:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((opt) => {
                      const isSelected = String(rec?.answer).trim() === opt.id;
                      const isOptionCorrect = opt.is_correct || opt.id === correctOptionLetter;

                      let cardStyle = 'border-slate-200 bg-slate-50/60 text-slate-700';
                      let badgeStyle = 'bg-slate-200 text-slate-700';

                      if (isOptionCorrect && isSelected) {
                        cardStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                        badgeStyle = 'bg-emerald-600 text-white';
                      } else if (isOptionCorrect) {
                        cardStyle = 'border-emerald-400 bg-emerald-50/40 text-emerald-900 font-semibold border-2';
                        badgeStyle = 'bg-emerald-500 text-white';
                      } else if (isSelected) {
                        cardStyle = 'border-rose-400 bg-rose-50/70 text-rose-950 ring-1 ring-rose-400';
                        badgeStyle = 'bg-rose-600 text-white';
                      }

                      return (
                        <div
                          key={opt.id}
                          className={`flex items-start gap-3 p-3.5 rounded-xl border text-sm transition-all ${cardStyle}`}
                        >
                          <span className={`w-7 h-7 shrink-0 rounded-lg flex items-center justify-center font-bold text-xs ${badgeStyle}`}>
                            {opt.id}
                          </span>
                          <div className="flex-1 pt-0.5 leading-snug">
                            <MathView content={opt.text} />
                          </div>
                          {isOptionCorrect && (
                            <span className="shrink-0 text-[11px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                              Đáp án đúng
                            </span>
                          )}
                          {isSelected && !isOptionCorrect && (
                            <span className="shrink-0 text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full border border-rose-300">
                              Bạn đã chọn
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Quick Answer Comparison Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-50/90 border border-slate-200 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-medium">Câu trả lời của bạn:</span>
                  {typeof rec?.answer === 'object' && rec.answer !== null ? (
                    <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-800">
                      {JSON.stringify(rec.answer)}
                    </span>
                  ) : (
                    <span
                      className={`font-bold px-2.5 py-1 rounded-md text-xs border ${
                        isCorrect
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          : 'bg-rose-100 text-rose-800 border-rose-300'
                      }`}
                    >
                      {String(rec?.answer || 'Chưa trả lời')} {isCorrect ? '✓' : '✗'}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-medium">Đáp án chính xác:</span>
                  <span className="font-extrabold px-2.5 py-1 rounded-md text-xs bg-emerald-600 text-white border border-emerald-700 shadow-sm">
                    {correctOptionLetter || 'Xem lời giải chi tiết'}
                  </span>
                </div>
              </div>

              {/* Detailed Step-by-Step KaTeX Explanation */}
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/90 text-sm sm:text-base text-slate-800 leading-relaxed space-y-2 shadow-xs">
                <div className="font-extrabold text-emerald-950 flex items-center gap-2 text-sm sm:text-base">
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  <span>Hướng dẫn giải chi tiết:</span>
                </div>
                <div className="pt-1">
                  <ExplanationView content={q.explanation || 'Chưa có lời giải chi tiết cho câu hỏi này.'} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExamResult;
