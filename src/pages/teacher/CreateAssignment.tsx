import React, { useState, useEffect, useMemo } from 'react';
import { Assignment, ClassRoom, Question, SolutionViewMode, QuestionType, DifficultyLevel } from '../../types';
import { getClasses, getQuestions, saveAssignment } from '../../services/store';
import { useAuth } from '../../context/AuthContext';
import { MathView } from '../../components/math/MathView';
import {
  FilePlus2,
  Clock,
  Calendar,
  CheckSquare,
  Square,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search,
  RotateCcw,
  Filter
} from 'lucide-react';

interface CreateAssignmentProps {
  onSuccess: () => void;
}

export const CreateAssignment: React.FC<CreateAssignmentProps> = ({ onSuccess }) => {
  const { currentUser } = useAuth();
  const [classes, setClasses] = useState<ClassRoom[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  // Assignment details
  const [title, setTitle] = useState('');
  const [selectedClassId, setSelectedClassId] = useState('');
  const [durationMinutes, setDurationMinutes] = useState(15);
  const [allowedAttempts, setAllowedAttempts] = useState(1);
  const [deadline, setDeadline] = useState('2026-12-31T23:59');
  const [shuffleQuestions, setShuffleQuestions] = useState(false);
  const [viewSolutionsMode, setViewSolutionsMode] = useState<SolutionViewMode>('AFTER_SUBMIT');
  const [selectedQuestionIds, setSelectedQuestionIds] = useState<string[]>([]);

  // Filter state for selecting questions
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('ALL');
  const [selectedGrade, setSelectedGrade] = useState<number | 'ALL'>('ALL');
  const [selectedType, setSelectedType] = useState<QuestionType | 'ALL'>('ALL');
  const [selectedDiff, setSelectedDiff] = useState<DifficultyLevel | 'ALL'>('ALL');

  useEffect(() => {
    async function init() {
      setLoading(true);
      try {
        const [cls, qst] = await Promise.all([getClasses(), getQuestions()]);
        setClasses(cls);
        if (cls.length > 0) setSelectedClassId(cls[0].id);
        setQuestions(qst);
        // Default select first 3 questions for quick creation
        if (qst.length > 0) {
          setSelectedQuestionIds(qst.slice(0, 3).map((q) => q.id));
        }
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  const availableChapters = useMemo(() => {
    return Array.from(new Set(questions.map((q) => q.chapter).filter(Boolean))).sort();
  }, [questions]);

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      if (selectedGrade !== 'ALL' && q.grade !== selectedGrade) return false;
      if (selectedType !== 'ALL' && q.type !== selectedType) return false;
      if (selectedDiff !== 'ALL' && q.difficulty !== selectedDiff) return false;
      if (selectedChapter !== 'ALL' && q.chapter !== selectedChapter) return false;
      if (searchQuery.trim()) {
        const qText = (q.content + ' ' + (q.chapter || '') + ' ' + (q.topic || '')).toLowerCase();
        if (!qText.includes(searchQuery.toLowerCase())) return false;
      }
      return true;
    });
  }, [questions, selectedGrade, selectedType, selectedDiff, selectedChapter, searchQuery]);

  const toggleQuestion = (id: string) => {
    setSelectedQuestionIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedQuestionIds.length === questions.length) {
      setSelectedQuestionIds([]);
    } else {
      setSelectedQuestionIds(questions.map((q) => q.id));
    }
  };

  const isAllFilteredSelected =
    filteredQuestions.length > 0 &&
    filteredQuestions.every((q) => selectedQuestionIds.includes(q.id));

  const handleToggleSelectFiltered = () => {
    if (isAllFilteredSelected) {
      const filteredIds = new Set(filteredQuestions.map((q) => q.id));
      setSelectedQuestionIds((prev) => prev.filter((id) => !filteredIds.has(id)));
    } else {
      const newIds = new Set(selectedQuestionIds);
      filteredQuestions.forEach((q) => newIds.add(q.id));
      setSelectedQuestionIds(Array.from(newIds));
    }
  };

  const handleResetFilter = () => {
    setSearchQuery('');
    setSelectedChapter('ALL');
    setSelectedGrade('ALL');
    setSelectedType('ALL');
    setSelectedDiff('ALL');
  };

  const hasActiveFilter =
    Boolean(searchQuery.trim()) ||
    selectedChapter !== 'ALL' ||
    selectedGrade !== 'ALL' ||
    selectedType !== 'ALL' ||
    selectedDiff !== 'ALL';

  const getDiffBadge = (diff: DifficultyLevel) => {
    switch (diff) {
      case 'NB':
        return (
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
            Nhận biết
          </span>
        );
      case 'TH':
        return (
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            Thông hiểu
          </span>
        );
      case 'VD':
        return (
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
            Vận dụng
          </span>
        );
      case 'VDC':
        return (
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
            Vận dụng cao
          </span>
        );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedQuestionIds.length === 0) {
      alert('Vui lòng chọn ít nhất 1 câu hỏi từ ngân hàng để giao bài!');
      return;
    }

    const currentClass = classes.find((c) => c.id === selectedClassId);

    const newAssignment: Assignment = {
      id: `asg-${Date.now()}`,
      title: title || `Bài kiểm tra Toán ${currentClass?.name || '12'}`,
      classId: selectedClassId,
      className: currentClass?.name || 'Toán THPT',
      teacherId: currentUser?.id || 'teacher-nguyen-van-a',
      teacherName: currentUser?.displayName || 'Thầy Nguyễn Văn An',
      questionIds: selectedQuestionIds,
      durationMinutes: Number(durationMinutes),
      allowedAttempts: Number(allowedAttempts),
      deadline: new Date(deadline).toISOString(),
      status: 'PUBLISHED',
      shuffleQuestions,
      viewSolutionsMode,
      totalPoints: 10,
      createdAt: new Date().toISOString()
    };

    await saveAssignment(newAssignment);
    alert('Đã giao bài tập thành công cho lớp học!');
    onSuccess();
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
          <FilePlus2 className="w-6 h-6 text-emerald-700" />
          Tạo Đề kiểm tra & Giao bài cho Lớp
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Lựa chọn câu hỏi từ Ngân hàng đề, thiết lập thời gian làm bài, số lần nộp và thời điểm công bố lời giải.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Assignment Parameters */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card space-y-4">
          <h3 className="font-extrabold text-base text-slate-900 border-b border-slate-100 pb-3">
            1. Cấu hình bài kiểm tra
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Tiêu đề bài kiểm tra
              </label>
              <input
                type="text"
                required
                placeholder="VD: Kiểm tra 15 phút: Cực trị hàm số và Hình học Oxyz"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-none font-semibold text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Giao cho lớp</label>
              <select
                value={selectedClassId}
                onChange={(e) => setSelectedClassId(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-none bg-white font-medium"
              >
                {classes.map((cls) => (
                  <option key={cls.id} value={cls.id}>
                    {cls.name} (Khối {cls.grade} - {cls.studentCount} HS)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Thời gian làm bài (Phút)
              </label>
              <input
                type="number"
                min={1}
                max={180}
                value={durationMinutes}
                onChange={(e) => setDurationMinutes(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-none font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Số lần làm bài tối đa
              </label>
              <select
                value={allowedAttempts}
                onChange={(e) => setAllowedAttempts(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-none bg-white"
              >
                <option value={1}>1 lần (Kiểm tra chính thức)</option>
                <option value={2}>2 lần</option>
                <option value={3}>3 lần</option>
                <option value={999}>Không giới hạn (Luyện tập)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Hạn chót nộp bài (Deadline)
              </label>
              <input
                type="datetime-local"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-none text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Thời điểm xem lời giải & đáp án
              </label>
              <select
                value={viewSolutionsMode}
                onChange={(e) => setViewSolutionsMode(e.target.value as SolutionViewMode)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-none bg-white"
              >
                <option value="AFTER_SUBMIT">Ngay sau khi nộp bài</option>
                <option value="AFTER_DEADLINE">Sau khi hết hạn chót (Deadline)</option>
                <option value="ALWAYS">Mở tự do</option>
              </select>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <input
                type="checkbox"
                id="shuffle"
                checked={shuffleQuestions}
                onChange={(e) => setShuffleQuestions(e.target.checked)}
                className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
              />
              <label htmlFor="shuffle" className="text-xs font-bold text-slate-700 cursor-pointer">
                Đảo ngẫu nhiên thứ tự câu hỏi khi học sinh vào làm
              </label>
            </div>
          </div>
        </div>

        {/* Step 2: Question Selection */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-extrabold text-base text-slate-900">
                2. Chọn câu hỏi từ Ngân hàng ({selectedQuestionIds.length}/{questions.length} câu đã chọn)
              </h3>
              <p className="text-xs text-slate-500">
                Thang điểm 10 sẽ được hệ thống tự động phân bổ đều cho các câu hỏi.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleSelectAll}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 self-start"
              >
                {selectedQuestionIds.length === questions.length ? 'Bỏ chọn tất cả ngân hàng' : 'Chọn tất cả ngân hàng'}
              </button>
            </div>
          </div>

          {/* Bộ lọc câu hỏi (Filter Bar) */}
          <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/80 space-y-2.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
              {/* Search box */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Tìm kiếm theo nội dung..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none bg-white"
                />
              </div>

              {/* Chuyên đề filter */}
              <div>
                <select
                  value={selectedChapter}
                  onChange={(e) => setSelectedChapter(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-emerald-500 outline-none bg-white font-medium truncate"
                >
                  <option value="ALL">Tất cả Chuyên đề ({availableChapters.length})</option>
                  {availableChapters.map((ch, idx) => (
                    <option key={idx} value={ch}>
                      {ch}
                    </option>
                  ))}
                </select>
              </div>

              {/* Khối lớp filter */}
              <div>
                <select
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value === 'ALL' ? 'ALL' : Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-emerald-500 outline-none bg-white"
                >
                  <option value="ALL">Tất cả Khối lớp</option>
                  <option value="12">Toán Lớp 12</option>
                  <option value="11">Toán Lớp 11</option>
                  <option value="10">Toán Lớp 10</option>
                </select>
              </div>

              {/* Định dạng filter */}
              <div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-emerald-500 outline-none bg-white"
                >
                  <option value="ALL">Tất cả định dạng câu</option>
                  <option value="MCQ">Trắc nghiệm 4 lựa chọn (MCQ)</option>
                  <option value="TRUE_FALSE">Đúng / Sai 4 mệnh đề</option>
                  <option value="SHORT_ANSWER">Trả lời ngắn (MathLive)</option>
                </select>
              </div>

              {/* Mức độ filter */}
              <div>
                <select
                  value={selectedDiff}
                  onChange={(e) => setSelectedDiff(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-emerald-500 outline-none bg-white"
                >
                  <option value="ALL">Tất cả mức độ</option>
                  <option value="NB">Nhận biết</option>
                  <option value="TH">Thông hiểu</option>
                  <option value="VD">Vận dụng</option>
                  <option value="VDC">Vận dụng cao</option>
                </select>
              </div>
            </div>

            {/* Quick action bar inside filter */}
            <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1 px-0.5 gap-2">
              <div className="flex items-center gap-2">
                <span>
                  Tìm thấy <strong className="text-slate-800">{filteredQuestions.length}</strong> / {questions.length} câu
                </span>
                {hasActiveFilter && (
                  <button
                    type="button"
                    onClick={handleResetFilter}
                    className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-bold ml-1.5 underline"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Đặt lại bộ lọc
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                {filteredQuestions.length > 0 && (
                  <button
                    type="button"
                    onClick={handleToggleSelectFiltered}
                    className="px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold text-xs transition-colors"
                  >
                    {isAllFilteredSelected
                      ? `Bỏ chọn ${filteredQuestions.length} câu trong bộ lọc`
                      : `Chọn tất cả ${filteredQuestions.length} câu trong bộ lọc`}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Question List */}
          <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1">
            {filteredQuestions.length === 0 ? (
              <div className="text-center py-10 bg-slate-50 rounded-xl border border-dashed border-slate-200 space-y-2">
                <Filter className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="text-sm font-semibold text-slate-700">
                  Không tìm thấy câu hỏi nào phù hợp với bộ lọc hiện tại.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilter}
                  className="px-3 py-1.5 text-xs rounded-lg bg-emerald-700 text-white font-bold hover:bg-emerald-800"
                >
                  Xóa bộ lọc để xem toàn bộ
                </button>
              </div>
            ) : (
              filteredQuestions.map((q, idx) => {
                const isSelected = selectedQuestionIds.includes(q.id);
                return (
                  <div
                    key={q.id}
                    onClick={() => toggleQuestion(q.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-50/30'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="pt-0.5 text-emerald-700">
                      {isSelected ? (
                        <CheckSquare className="w-5 h-5 text-emerald-700" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-300" />
                      )}
                    </div>

                    <div className="flex-1 space-y-1.5 text-xs sm:text-sm">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-slate-700">Câu {idx + 1}</span>
                        {q.chapter && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600">
                            {q.chapter}
                          </span>
                        )}
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          {q.type}
                        </span>
                        {q.difficulty && getDiffBadge(q.difficulty)}
                      </div>
                      <div className="text-slate-800 font-medium leading-relaxed">
                        <MathView content={q.content} />
                      </div>

                      {/* Options preview if MCQ */}
                      {q.options && q.options.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 pt-2 border-t border-slate-100">
                          {q.options.map((opt) => (
                            <div key={opt.id} className="text-xs text-slate-700 flex items-start gap-1.5">
                              <span className="font-bold text-slate-900 shrink-0">{opt.id}.</span>
                              <MathView content={opt.text} />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-end gap-4">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm shadow-lg shadow-emerald-900/20 active:scale-95 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            Xuất bản & Giao bài ngay ({selectedQuestionIds.length} câu)
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAssignment;
