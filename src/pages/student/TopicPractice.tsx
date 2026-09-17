import React, { useState, useEffect } from 'react';
import { Question } from '../../types';
import { getQuestions, normalizeMathString, recordStudentProgress } from '../../services/store';
import { INITIAL_ANSWER_KEYS } from '../../services/seedData';
import { useAuth } from '../../context/AuthContext';
import { MathView } from '../../components/math/MathView';
import { MathInput } from '../../components/math/MathInput';
import {
  Compass,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  BookOpen,
  Filter
} from 'lucide-react';

export const TopicPractice: React.FC = () => {
  const { currentUser } = useAuth();
  const [selectedGrade, setSelectedGrade] = useState<number>(12);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Student answer for current practice question
  const [studentAnswer, setStudentAnswer] = useState<any>('');
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const qst = await getQuestions({ grade: selectedGrade });
        setQuestions(qst);
        setCurrentIndex(0);
        setStudentAnswer('');
        setChecked(false);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [selectedGrade]);

  const currentQ = questions[currentIndex];

  const handleCheckAnswer = async () => {
    if (!currentQ) return;
    const key = INITIAL_ANSWER_KEYS[currentQ.id];
    let correct = false;

    if (key) {
      if (currentQ.type === 'MCQ') {
        correct = studentAnswer === key.correctOption;
      } else if (currentQ.type === 'TRUE_FALSE') {
        const correctSub = key.correctSubItems || { a: false, b: false, c: false, d: false };
        const subAns = typeof studentAnswer === 'object' && studentAnswer !== null ? studentAnswer : {};
        const keys = ['a', 'b', 'c', 'd'];
        correct = keys.every((k) => (subAns as any)[k] === (correctSub as any)[k]);
      } else if (currentQ.type === 'SHORT_ANSWER') {
        const sNorm = normalizeMathString(String(studentAnswer));
        const acceptable = Array.isArray(key.shortAnswer) ? key.shortAnswer : [String(key.shortAnswer || '')];
        correct = acceptable.some((ans) => normalizeMathString(ans) === sNorm);
      }
    }

    setIsCorrect(correct);
    setChecked(true);

    // Record progress
    if (currentUser) {
      await recordStudentProgress(
        currentUser.id,
        correct ? 10 : 0,
        [currentQ],
        {
          [currentQ.id]: {
            questionId: currentQ.id,
            answer: studentAnswer,
            isCorrect: correct
          }
        },
        correct ? [] : [currentQ.id]
      );
    }
  };

  const handleNextQuestion = () => {
    setCurrentIndex((prev) => (prev + 1) % questions.length);
    setStudentAnswer('');
    setChecked(false);
    setIsCorrect(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Compass className="w-6 h-6 text-emerald-700" />
            Luyện tập tự do theo Chuyên đề
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Rèn luyện giải đề từng câu với phản hồi và lời giải KaTeX tức thì.
          </p>
        </div>

        {/* Grade tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
          {[12, 11, 10].map((gr) => (
            <button
              key={gr}
              onClick={() => setSelectedGrade(gr)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedGrade === gr
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Lớp {gr}
            </button>
          ))}
        </div>
      </div>

      {loading || !currentQ ? (
        <div className="p-12 bg-white rounded-2xl border border-slate-200 text-center text-slate-400">
          Chưa có câu hỏi cho khối lớp này.
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-6 sm:p-8 space-y-6">
          {/* Question Meta */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-xl bg-emerald-900 text-white font-extrabold text-xs">
                Câu {currentIndex + 1} / {questions.length}
              </span>
              <span className="text-xs font-semibold text-slate-600">{currentQ.chapter}</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-700">
                {currentQ.type}
              </span>
            </div>
            <span className="text-xs text-slate-400">Khối {currentQ.grade}</span>
          </div>

          {/* Question Content */}
          <div className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
            <MathView content={currentQ.content} />
          </div>

          {/* Input Answer Section */}
          <div className="pt-2">
            {currentQ.type === 'MCQ' && currentQ.options && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((opt) => (
                  <button
                    key={opt.id}
                    disabled={checked}
                    onClick={() => setStudentAnswer(opt.id)}
                    className={`p-3.5 rounded-2xl border-2 text-left flex items-start gap-3 transition-all ${
                      studentAnswer === opt.id
                        ? 'border-emerald-600 bg-emerald-50/60'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50/40'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 ${
                        studentAnswer === opt.id ? 'bg-emerald-600 text-white' : 'bg-white border'
                      }`}
                    >
                      {opt.id}
                    </span>
                    <div className="flex-1 text-sm font-medium pt-0.5">
                      <MathView content={opt.text} />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {currentQ.type === 'SHORT_ANSWER' && (
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700">Đáp số của bạn:</label>
                <MathInput
                  value={studentAnswer}
                  onChange={setStudentAnswer}
                  placeholder="Nhập số hoặc biểu thức toán..."
                  readOnly={checked}
                />
              </div>
            )}

            {currentQ.type === 'TRUE_FALSE' && currentQ.subItems && (
              <div className="space-y-2.5">
                {currentQ.subItems.map((sub) => {
                  const val = typeof studentAnswer === 'object' ? studentAnswer[sub.id] : undefined;
                  return (
                    <div
                      key={sub.id}
                      className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-3 text-xs sm:text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-emerald-800 uppercase">Ý {sub.id})</span>
                        <MathView content={sub.statement} />
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          disabled={checked}
                          onClick={() => setStudentAnswer({ ...studentAnswer, [sub.id]: true })}
                          className={`px-3 py-1 rounded-lg font-bold ${
                            val === true ? 'bg-emerald-600 text-white' : 'bg-white border'
                          }`}
                        >
                          Đúng
                        </button>
                        <button
                          disabled={checked}
                          onClick={() => setStudentAnswer({ ...studentAnswer, [sub.id]: false })}
                          className={`px-3 py-1 rounded-lg font-bold ${
                            val === false ? 'bg-rose-600 text-white' : 'bg-white border'
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
          </div>

          {/* Action button */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            {!checked ? (
              <button
                type="button"
                onClick={handleCheckAnswer}
                className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm shadow-md active:scale-95 transition-all ml-auto"
              >
                Kiểm tra kết quả
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNextQuestion}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm shadow-md active:scale-95 transition-all ml-auto"
              >
                <span>Luyện câu tiếp theo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Immediate Feedback Card */}
          {checked && (
            <div
              className={`p-5 rounded-2xl border ${
                isCorrect ? 'border-emerald-200 bg-emerald-50/50' : 'border-rose-200 bg-rose-50/50'
              } space-y-3 animate-in fade-in duration-200`}
            >
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="font-extrabold text-sm text-emerald-900">
                      Chính xác! Bạn đã giải đúng câu hỏi này.
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span className="font-extrabold text-sm text-rose-900">
                      Chưa chính xác. Câu hỏi đã được tự động thêm vào Sổ tay câu sai.
                    </span>
                  </>
                )}
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm leading-relaxed text-slate-800">
                <p className="font-bold text-emerald-900 mb-1 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Lời giải chi tiết:
                </p>
                <MathView content={currentQ.explanation} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TopicPractice;
