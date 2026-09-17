import React, { useState, useEffect, useRef } from 'react';
import { Assignment, Question, StudentAnswerValue } from '../../types';
import { getAssignmentById, getQuestionsByIds, gradeSubmission } from '../../services/store';
import { useAuth } from '../../context/AuthContext';
import { MathView } from '../../components/math/MathView';
import { MathInput } from '../../components/math/MathInput';
import {
  Clock,
  Flag,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  AlertTriangle,
  CheckCircle2,
  Send,
  X,
  Sparkles,
  HelpCircle,
  ArrowLeft
} from 'lucide-react';

interface ExamRoomProps {
  assignmentId: string;
  onFinish: (submissionId: string) => void;
  onExit: () => void;
}

export const ExamRoom: React.FC<ExamRoomProps> = ({ assignmentId, onFinish, onExit }) => {
  const { currentUser } = useAuth();
  const [assignment, setAssignment] = useState<Assignment | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  // Current question index (0-based)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Student answers state: questionId -> { answer, flagged }
  const [answers, setAnswers] = useState<
    Record<string, { answer: StudentAnswerValue; flagged?: boolean }>
  >({});

  // Timer state
  const [secondsRemaining, setSecondsRemaining] = useState<number>(15 * 60);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Load Assignment and Questions
  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const asg = await getAssignmentById(assignmentId);
        if (!asg) {
          alert('Không tìm thấy bài kiểm tra!');
          onExit();
          return;
        }
        setAssignment(asg);
        const qst = await getQuestionsByIds(asg.questionIds);
        setQuestions(qst);

        // Set duration
        const durationSec = (asg.durationMinutes || 15) * 60;
        setSecondsRemaining(durationSec);

        // Load saved draft answers from localStorage if any
        const draftKey = `qmath_draft_${assignmentId}_${currentUser?.id}`;
        const draft = localStorage.getItem(draftKey);
        if (draft) {
          try {
            setAnswers(JSON.parse(draft));
          } catch (e) {
            console.error(e);
          }
        }
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [assignmentId, currentUser, onExit]);

  // Persist draft answers to localStorage
  useEffect(() => {
    if (!assignment || !currentUser) return;
    const draftKey = `qmath_draft_${assignment.id}_${currentUser.id}`;
    localStorage.setItem(draftKey, JSON.stringify(answers));
  }, [answers, assignment, currentUser]);

  // Countdown Timer
  useEffect(() => {
    if (loading || isSubmitting) return;

    const interval = setInterval(() => {
      setTimeSpentSeconds((prev) => prev + 1);
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          // Auto submit when time runs out
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [loading, isSubmitting]);

  const handleAutoSubmit = async () => {
    alert('Đã hết thời gian làm bài! Hệ thống tự động nộp bài thi của bạn.');
    await performSubmit();
  };

  const performSubmit = async () => {
    if (!assignment || !currentUser) return;
    setIsSubmitting(true);
    try {
      const { submission } = await gradeSubmission(
        assignment,
        currentUser,
        answers,
        timeSpentSeconds
      );
      // Clear draft
      const draftKey = `qmath_draft_${assignment.id}_${currentUser.id}`;
      localStorage.removeItem(draftKey);

      onFinish(submission.id);
    } catch (err) {
      console.error('Lỗi khi nộp bài:', err);
      alert('Có lỗi xảy ra khi nộp bài. Vui lòng thử lại!');
      setIsSubmitting(false);
    }
  };

  // Answer handler for MCQ
  const handleSelectMcq = (questionId: string, optionId: 'A' | 'B' | 'C' | 'D') => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        answer: optionId
      }
    }));
  };

  // Answer handler for TRUE_FALSE
  const handleSelectTf = (
    questionId: string,
    subId: 'a' | 'b' | 'c' | 'd',
    isTrue: boolean
  ) => {
    setAnswers((prev) => {
      const currentAns =
        typeof prev[questionId]?.answer === 'object' && prev[questionId]?.answer !== null
          ? (prev[questionId].answer as Record<string, boolean>)
          : {};
      return {
        ...prev,
        [questionId]: {
          ...prev[questionId],
          answer: {
            ...currentAns,
            [subId]: isTrue
          }
        }
      };
    });
  };

  // Answer handler for SHORT_ANSWER
  const handleShortAnswerChange = (questionId: string, val: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        answer: val
      }
    }));
  };

  // Toggle Flag for Review
  const handleToggleFlag = (questionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        answer: prev[questionId]?.answer || '',
        flagged: !prev[questionId]?.flagged
      }
    }));
  };

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Check question answered status
  const isQuestionAnswered = (q: Question) => {
    const raw = answers[q.id]?.answer;
    if (!raw) return false;
    if (q.type === 'MCQ') return Boolean(raw);
    if (q.type === 'TRUE_FALSE') {
      if (typeof raw === 'object' && raw !== null) {
        // Must answer all 4 sub-items
        const keys = ['a', 'b', 'c', 'd'];
        return keys.every((k) => (raw as any)[k] !== undefined);
      }
      return false;
    }
    if (q.type === 'SHORT_ANSWER') {
      return typeof raw === 'string' && raw.trim().length > 0;
    }
    return false;
  };

  // Counts
  const answeredCount = questions.filter(isQuestionAnswered).length;
  const unansweredCount = questions.length - answeredCount;
  const flaggedCount = Object.values(answers).filter((a) => a.flagged).length;

  // Format MM:SS
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (loading || !assignment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="font-bold text-slate-700 text-sm">Đang tải đề thi và công thức toán...</p>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const isFlagged = answers[currentQ?.id]?.flagged || false;
  const currentAnswer = answers[currentQ?.id]?.answer;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans select-none">
      {/* 1. TOP PERSISTENT EXAM BAR */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Left: Back & Title */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              if (window.confirm('Bạn có chắc muốn thoát? Bài làm chưa nộp sẽ được lưu tạm thời.')) {
                onExit();
              }
            }}
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
            title="Thoát phòng thi"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                Toán THPT
              </span>
              <h1 className="font-extrabold text-sm sm:text-base text-slate-900 truncate max-w-[240px] sm:max-w-md">
                {assignment.title}
              </h1>
            </div>
            <p className="text-[11px] text-slate-500">
              Học sinh: <strong className="text-slate-800">{currentUser?.displayName}</strong>
            </p>
          </div>
        </div>

        {/* Center/Right: Timer, Fullscreen, Submit */}
        <div className="flex items-center gap-3">
          {/* Digital Timer */}
          <div
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border font-mono font-bold text-sm sm:text-base transition-all ${
              secondsRemaining <= 60
                ? 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse'
                : secondsRemaining <= 300
                ? 'bg-amber-50 text-amber-700 border-amber-300'
                : 'bg-emerald-50 text-emerald-800 border-emerald-300'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>{formatTime(secondsRemaining)}</span>
          </div>

          {/* Fullscreen button */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="hidden sm:flex p-2 text-slate-600 hover:bg-slate-100 rounded-xl border border-slate-200"
            title="Toàn màn hình"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Submit Button */}
          <button
            type="button"
            onClick={() => setShowSubmitModal(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-900/20 active:scale-95 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Nộp bài</span>
          </button>
        </div>
      </header>

      {/* 2. MAIN SPLIT EXAM AREA */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* LEFT / CENTER: CURRENT QUESTION CARD (3 cols) */}
        <div className="lg:col-span-3 flex flex-col space-y-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
            {/* Question Top Meta */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-xl bg-emerald-900 text-white font-extrabold text-sm shadow-xs">
                    Câu {currentIndex + 1} / {questions.length}
                  </span>
                  <span className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-700">
                    {currentQ.chapter}
                  </span>
                  <span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {currentQ.type === 'MCQ'
                      ? 'Trắc nghiệm 4 lựa chọn'
                      : currentQ.type === 'TRUE_FALSE'
                      ? 'Đúng / Sai (4 ý)'
                      : 'Trả lời ngắn'}
                  </span>
                </div>

                {/* Flag for review button */}
                <button
                  type="button"
                  onClick={() => handleToggleFlag(currentQ.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isFlagged
                      ? 'bg-amber-100 text-amber-800 border border-amber-300 shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-600 text-amber-600' : ''}`} />
                  <span>{isFlagged ? 'Đã đặt cờ xem lại' : 'Đặt cờ xem lại'}</span>
                </button>
              </div>

              {/* Question Statement Rendered with KaTeX */}
              <div className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed py-2">
                <MathView content={currentQ.content} />
              </div>
            </div>

            {/* Question Interaction Area */}
            <div className="pt-2">
              {/* --- TYPE 1: MCQ (4 Choices) --- */}
              {currentQ.type === 'MCQ' && currentQ.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {currentQ.options.map((opt) => {
                    const isSelected = currentAnswer === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => handleSelectMcq(currentQ.id, opt.id)}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
                          isSelected
                            ? 'border-emerald-600 bg-emerald-50/60 shadow-md shadow-emerald-900/5'
                            : 'border-slate-200 hover:border-slate-300 bg-slate-50/40 hover:bg-slate-50'
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-xl font-bold flex items-center justify-center text-xs shrink-0 transition-all ${
                            isSelected
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : 'bg-white text-slate-700 border border-slate-300'
                          }`}
                        >
                          {opt.id}
                        </div>
                        <div className="flex-1 text-sm sm:text-base font-medium text-slate-900 pt-0.5">
                          <MathView content={opt.text} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* --- TYPE 2: TRUE_FALSE (4 Sub-items BGD 2025) --- */}
              {currentQ.type === 'TRUE_FALSE' && currentQ.subItems && (
                <div className="space-y-3">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Lựa chọn Đúng hoặc Sai cho từng mệnh đề sau:
                  </p>
                  {currentQ.subItems.map((sub) => {
                    const subAns =
                      typeof currentAnswer === 'object' && currentAnswer !== null
                        ? (currentAnswer as Record<string, boolean>)[sub.id]
                        : undefined;

                    return (
                      <div
                        key={sub.id}
                        className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="flex items-start gap-3 flex-1 text-sm sm:text-base font-medium text-slate-900">
                          <span className="font-extrabold text-emerald-800 text-xs bg-emerald-100 px-2 py-1 rounded-lg uppercase shrink-0">
                            Ý {sub.id})
                          </span>
                          <div className="flex-1">
                            <MathView content={sub.statement} />
                          </div>
                        </div>

                        {/* True / False Buttons */}
                        <div className="flex items-center gap-2 pl-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleSelectTf(currentQ.id, sub.id, true)}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs ${
                              subAns === true
                                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/20'
                                : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
                            }`}
                          >
                            Đúng
                          </button>
                          <button
                            type="button"
                            onClick={() => handleSelectTf(currentQ.id, sub.id, false)}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs ${
                              subAns === false
                                ? 'bg-rose-600 text-white shadow-md shadow-rose-900/20'
                                : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
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

              {/* --- TYPE 3: SHORT_ANSWER (MathLive Virtual Keyboard) --- */}
              {currentQ.type === 'SHORT_ANSWER' && (
                <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Nhập kết quả toán học (Sử dụng bàn phím ảo hoặc nhập số):
                  </label>
                  <MathInput
                    value={typeof currentAnswer === 'string' ? currentAnswer : ''}
                    onChange={(val) => handleShortAnswerChange(currentQ.id, val)}
                    placeholder="VD: 516, 2a^3, 1/2..."
                  />
                  <p className="text-[11px] text-slate-500">
                    Mẹo: Có thể dùng thanh công cụ ở trên để chèn nhanh phân số, căn thức, lũy thừa hoặc logarit.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Nav: Prev / Next */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <button
                type="button"
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  currentIndex === 0
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Câu trước</span>
              </button>

              <div className="text-xs font-semibold text-slate-500">
                Câu {currentIndex + 1} trên tổng số {questions.length}
              </div>

              {currentIndex < questions.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-700 hover:bg-emerald-800 text-white shadow-md shadow-emerald-900/10 active:scale-95 transition-all"
                >
                  <span>Câu tiếp theo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowSubmitModal(true)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-700 hover:bg-emerald-800 text-white shadow-md active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Hoàn thành & Nộp bài</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT: QUESTION PALETTE DRAWER (1 col) */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-5 space-y-4 sticky top-24">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-sm text-slate-900">Danh sách câu hỏi</h3>
              <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg">
                {answeredCount}/{questions.length}
              </span>
            </div>

            {/* Question Buttons Matrix */}
            <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 gap-2.5">
              {questions.map((q, idx) => {
                const answered = isQuestionAnswered(q);
                const flagged = answers[q.id]?.flagged;
                const isCurrent = idx === currentIndex;

                let btnStyle = 'bg-white text-slate-700 border-slate-300 hover:border-slate-400';
                if (answered) {
                  btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative h-11 rounded-xl text-xs sm:text-sm font-extrabold transition-all border flex items-center justify-center ${btnStyle} ${
                      isCurrent ? 'ring-2 ring-emerald-800 ring-offset-2 scale-105 z-10' : ''
                    }`}
                  >
                    <span>{idx + 1}</span>

                    {/* Flag indicator dot */}
                    {flagged && (
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-white shadow-xs" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Palette Legend */}
            <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-emerald-600 shrink-0" />
                <span>Đã trả lời ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-white border border-slate-300 shrink-0" />
                <span>Chưa trả lời ({unansweredCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-amber-500 shrink-0" />
                <span>Đặt cờ xem lại ({flaggedCount})</span>
              </div>
            </div>

            {/* Big Submit Button in Palette */}
            <button
              type="button"
              onClick={() => setShowSubmitModal(true)}
              className="w-full mt-2 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm shadow-md shadow-emerald-900/10 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Nộp bài kiểm tra</span>
            </button>
          </div>
        </div>
      </main>

      {/* 3. CONFIRM SUBMISSION MODAL */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-lg text-slate-900">Xác nhận nộp bài</h3>
              <button
                onClick={() => setShowSubmitModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Recap Stats */}
            <div className="space-y-2.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Thời gian còn lại:</span>
                <span className="font-mono font-bold text-emerald-700">{formatTime(secondsRemaining)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Số câu đã trả lời:</span>
                <span className="font-bold text-slate-800">{answeredCount} / {questions.length}</span>
              </div>
              {flaggedCount > 0 && (
                <div className="flex justify-between">
                  <span className="text-amber-700 font-semibold">Số câu đang cắm cờ:</span>
                  <span className="font-bold text-amber-700">{flaggedCount} câu</span>
                </div>
              )}
            </div>

            {/* Warning if unanswered */}
            {unansweredCount > 0 && (
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Bạn còn {unansweredCount} câu chưa trả lời!</p>
                  <p className="mt-0.5">Bạn vẫn có thể nộp bài, các câu chưa trả lời sẽ nhận 0 điểm.</p>
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-100 transition-all"
              >
                Tiếp tục làm bài
              </button>
              <button
                type="button"
                disabled={isSubmitting}
                onClick={performSubmit}
                className="flex-1 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-extrabold shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5"
              >
                {isSubmitting ? (
                  <span>Đang chấm điểm...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Nộp bài ngay</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamRoom;
