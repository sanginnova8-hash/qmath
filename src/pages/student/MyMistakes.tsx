import React, { useState, useEffect } from 'react';
import { Question } from '../../types';
import { getStudentProgress, getQuestionsByIds, clearMistake, normalizeMathString, getAnswerKeyById } from '../../services/store';
import { useAuth } from '../../context/AuthContext';
import { MathView } from '../../components/math/MathView';
import { MathInput } from '../../components/math/MathInput';
import {
  AlertCircle,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Eye,
  Award,
  Sparkles,
  BookOpenCheck,
  Check
} from 'lucide-react';

export const MyMistakes: React.FC = () => {
  const { currentUser } = useAuth();
  const [mistakeQuestions, setMistakeQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  // Per-question retry state
  const [retryAnswers, setRetryAnswers] = useState<Record<string, any>>({});
  const [retryStatus, setRetryStatus] = useState<Record<string, 'CORRECT' | 'WRONG' | null>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});

  const loadMistakes = async () => {
    if (!currentUser) return;
    setLoading(true);
    try {
      const progress = await getStudentProgress(currentUser.id);
      const ids = progress.mistakeQuestionIds || [];
      const qsts = await getQuestionsByIds(ids);
      setMistakeQuestions(qsts);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMistakes();
  }, [currentUser]);

  const handleCheckRetry = async (q: Question) => {
    const studentAns = retryAnswers[q.id];
    const key = getAnswerKeyById(q.id);
    let correct = false;

    if (key) {
      if (q.type === 'MCQ') {
        correct = studentAns === key.correctOption;
      } else if (q.type === 'TRUE_FALSE') {
        const correctSub = key.correctSubItems || { a: false, b: false, c: false, d: false };
        const subAns = typeof studentAns === 'object' && studentAns !== null ? studentAns : {};
        const keys = ['a', 'b', 'c', 'd'];
        correct = keys.every((k) => (subAns as any)[k] === (correctSub as any)[k]);
      } else if (q.type === 'SHORT_ANSWER') {
        const sNorm = normalizeMathString(String(studentAns));
        const acceptable = Array.isArray(key.shortAnswer) ? key.shortAnswer : [String(key.shortAnswer || '')];
        correct = acceptable.some((ans) => normalizeMathString(ans) === sNorm);
      }
    }

    if (correct) {
      setRetryStatus((prev) => ({ ...prev, [q.id]: 'CORRECT' }));
      if (currentUser) {
        await clearMistake(currentUser.id, q.id);
      }
    } else {
      setRetryStatus((prev) => ({ ...prev, [q.id]: 'WRONG' }));
    }
  };

  const handleRemoveFixed = (qId: string) => {
    setMistakeQuestions((prev) => prev.filter((q) => q.id !== qId));
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-amber-600" />
              Sổ tay câu sai (My Mistakes)
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
              {mistakeQuestions.length} câu
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Tổng hợp tất cả câu hỏi bạn từng làm sai. Hãy giải lại chính xác để xóa khỏi danh sách và khắc phục lỗ hổng kiến thức!
          </p>
        </div>

        <button
          onClick={loadMistakes}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors self-start"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Làm mới
        </button>
      </div>

      {loading ? (
        <div className="p-12 text-center text-slate-400">Đang tải sổ tay câu sai...</div>
      ) : mistakeQuestions.length === 0 ? (
        <div className="bg-white p-12 rounded-3xl border border-slate-200 shadow-card text-center space-y-3">
          <Award className="w-12 h-12 text-emerald-600 mx-auto" />
          <h3 className="text-lg font-extrabold text-slate-900">Không có câu hỏi sai nào!</h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Bạn đã làm lại chính xác toàn bộ các câu từng sai hoặc chưa gặp sai sót nào trong các bài kiểm tra. Tiếp tục phát huy nhé!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {mistakeQuestions.map((q, idx) => {
            const status = retryStatus[q.id];
            const currentAns = retryAnswers[q.id];
            const isSolved = status === 'CORRECT';

            return (
              <div
                key={q.id}
                className={`bg-white rounded-2xl border transition-all p-5 sm:p-6 space-y-4 ${
                  isSolved
                    ? 'border-emerald-300 bg-emerald-50/20'
                    : 'border-slate-200 shadow-card'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-xs px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900">
                      Lỗi sai #{idx + 1}
                    </span>
                    <span className="text-xs font-bold text-slate-700">{q.chapter}</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-600">
                      Lớp {q.grade}
                    </span>
                  </div>

                  {isSolved && (
                    <span className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                      <Check className="w-3.5 h-3.5" /> Đã sửa đúng!
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="text-sm sm:text-base font-medium text-slate-900 leading-relaxed">
                  <MathView content={q.content} />
                </div>

                {/* Interactive Solving Form */}
                {!isSolved && (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Làm lại câu hỏi này:
                    </p>

                    {q.type === 'MCQ' && q.options && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {q.options.map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() =>
                              setRetryAnswers((prev) => ({ ...prev, [q.id]: opt.id }))
                            }
                            className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all ${
                              currentAns === opt.id
                                ? 'border-emerald-600 bg-emerald-50 font-bold'
                                : 'border-slate-200 bg-white hover:bg-slate-50'
                            }`}
                          >
                            <span className="w-5 h-5 rounded font-bold text-xs bg-slate-100 flex items-center justify-center shrink-0">
                              {opt.id}
                            </span>
                            <div className="flex-1 text-xs sm:text-sm font-medium">
                              <MathView content={opt.text} />
                            </div>
                          </button>
                        ))}
                      </div>
                    )}

                    {q.type === 'SHORT_ANSWER' && (
                      <div className="space-y-2">
                        <MathInput
                          value={currentAns || ''}
                          onChange={(val) =>
                            setRetryAnswers((prev) => ({ ...prev, [q.id]: val }))
                          }
                          placeholder="Nhập đáp số làm lại..."
                        />
                      </div>
                    )}

                    {q.type === 'TRUE_FALSE' && q.subItems && (
                      <div className="space-y-2">
                        {q.subItems.map((sub) => {
                          const val =
                            typeof currentAns === 'object' && currentAns !== null
                              ? currentAns[sub.id]
                              : undefined;
                          return (
                            <div
                              key={sub.id}
                              className="p-2.5 rounded-lg border border-slate-200 bg-white flex items-center justify-between text-xs"
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-bold uppercase text-emerald-800">Ý {sub.id})</span>
                                <MathView content={sub.statement} />
                              </div>
                              <div className="flex items-center gap-1.5">
                                <button
                                  type="button"
                                  onClick={() =>
                                    setRetryAnswers((prev) => ({
                                      ...prev,
                                      [q.id]: { ...(prev[q.id] || {}), [sub.id]: true }
                                    }))
                                  }
                                  className={`px-2.5 py-1 rounded text-xs font-bold ${
                                    val === true ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                                  }`}
                                >
                                  Đúng
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    setRetryAnswers((prev) => ({
                                      ...prev,
                                      [q.id]: { ...(prev[q.id] || {}), [sub.id]: false }
                                    }))
                                  }
                                  className={`px-2.5 py-1 rounded text-xs font-bold ${
                                    val === false ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-700'
                                  }`}
                                >
                                  Sai
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2">
                      <button
                        type="button"
                        onClick={() =>
                          setShowExplanation((prev) => ({ ...prev, [q.id]: !prev[q.id] }))
                        }
                        className="text-xs font-semibold text-slate-500 hover:text-emerald-700 flex items-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        {showExplanation[q.id] ? 'Ẩn lời giải' : 'Xem gợi ý / lời giải'}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCheckRetry(q)}
                        className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-xs active:scale-95 transition-all"
                      >
                        Kiểm tra lại câu này
                      </button>
                    </div>

                    {status === 'WRONG' && (
                      <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-xs font-bold text-rose-700 flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-rose-600" />
                        Vẫn chưa chính xác. Hãy xem lại lời giải bên dưới để hiểu rõ hơn!
                      </div>
                    )}
                  </div>
                )}

                {/* Solved celebration banner */}
                {isSolved && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-900">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      Chúc mừng bạn đã giải đúng và nắm vững kiến thức câu này!
                    </div>
                    <button
                      onClick={() => handleRemoveFixed(q.id)}
                      className="text-xs font-bold text-emerald-800 underline hover:text-emerald-950"
                    >
                      Xóa khỏi sổ tay
                    </button>
                  </div>
                )}

                {/* Detailed Explanation */}
                {showExplanation[q.id] && (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed space-y-1.5">
                    <p className="font-extrabold text-emerald-900 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-700" /> Hướng dẫn giải chi tiết:
                    </p>
                    <MathView content={q.explanation} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyMistakes;
