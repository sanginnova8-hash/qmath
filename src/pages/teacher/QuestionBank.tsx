import React, { useState, useEffect, useRef } from 'react';
import { Question, QuestionType, DifficultyLevel, AnswerKey } from '../../types';
import { getQuestions, saveQuestion, deleteQuestion, loadExamBankTap1 } from '../../services/store';
import { MathView } from '../../components/math/MathView';
import { MathInput } from '../../components/math/MathInput';
import { DocxImportModal } from '../../components/teacher/DocxImportModal';
import { ImageUploader } from '../../components/teacher/ImageUploader';
import {
  Plus,
  Search,
  Filter,
  CheckCircle,
  HelpCircle,
  Eye,
  Trash2,
  BookOpen,
  Sparkles,
  X,
  Save,
  CheckSquare,
  UploadCloud,
  Image as ImageIcon
} from 'lucide-react';

export const QuestionBank: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [selectedGrade, setSelectedGrade] = useState<number | 'ALL'>('ALL');
  const [selectedType, setSelectedType] = useState<QuestionType | 'ALL'>('ALL');
  const [selectedDiff, setSelectedDiff] = useState<DifficultyLevel | 'ALL'>('ALL');
  const [selectedChapter, setSelectedChapter] = useState<string | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterHasImage, setFilterHasImage] = useState<boolean>(false);

  // Modals & previews
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDocxModal, setShowDocxModal] = useState(false);
  const [expandedExplanation, setExpandedExplanation] = useState<Record<string, boolean>>({});

  // New Question Form state
  const [formType, setFormType] = useState<QuestionType>('MCQ');
  const [formGrade, setFormGrade] = useState<10 | 11 | 12>(12);
  const [formChapter, setFormChapter] = useState('Ứng dụng đạo hàm');
  const [formTopic, setFormTopic] = useState('Khảo sát hàm số');
  const [formDifficulty, setFormDifficulty] = useState<DifficultyLevel>('TH');
  const [formContent, setFormContent] = useState('Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$...');
  const [formExplanation, setFormExplanation] = useState('Lời giải chi tiết từng bước...');
  const [formImages, setFormImages] = useState<string[]>([]);

  const contentTextareaRef = useRef<HTMLTextAreaElement>(null);
  const explanationTextareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInsertImageToContent = (markdownImg: string) => {
    const textarea = contentTextareaRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newContent = formContent.substring(0, start) + markdownImg + formContent.substring(end);
      setFormContent(newContent);
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + markdownImg.length, start + markdownImg.length);
      }, 0);
    } else {
      setFormContent((prev) => prev + markdownImg);
    }
  };

  const handleInsertImageToExplanation = (markdownImg: string) => {
    const textarea = explanationTextareaRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newExp = formExplanation.substring(0, start) + markdownImg + formExplanation.substring(end);
      setFormExplanation(newExp);
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + markdownImg.length, start + markdownImg.length);
      }, 0);
    } else {
      setFormExplanation((prev) => prev + markdownImg);
    }
  };

  // MCQ state
  const [mcqOptions, setMcqOptions] = useState<Record<'A' | 'B' | 'C' | 'D', string>>({
    A: '$x = 1$',
    B: '$x = 2$',
    C: '$x = 3$',
    D: '$x = 4$'
  });
  const [mcqCorrect, setMcqCorrect] = useState<'A' | 'B' | 'C' | 'D'>('A');

  // True/False state
  const [tfSubItems, setTfSubItems] = useState<Record<'a' | 'b' | 'c' | 'd', string>>({
    a: 'Mệnh đề a...',
    b: 'Mệnh đề b...',
    c: 'Mệnh đề c...',
    d: 'Mệnh đề d...'
  });
  const [tfCorrect, setTfCorrect] = useState<Record<'a' | 'b' | 'c' | 'd', boolean>>({
    a: true,
    b: false,
    c: false,
    d: true
  });

  // Short Answer state
  const [shortAnswerKey, setShortAnswerKey] = useState('42');

  const loadAllQuestions = async () => {
    setLoading(true);
    try {
      const list = await getQuestions();
      setQuestions(list);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllQuestions();
  }, []);

  const handleToggleExplanation = (id: string) => {
    setExpandedExplanation(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Bạn có chắc muốn xoá câu hỏi này khỏi Ngân hàng câu hỏi?')) {
      await deleteQuestion(id);
      await loadAllQuestions();
    }
  };

  const handleSaveQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `q-user-${Date.now()}`;

    let questionData: Question = {
      id: newId,
      teacherId: 'teacher-nguyen-van-a',
      content: formContent,
      type: formType,
      grade: formGrade,
      chapter: formChapter,
      topic: formTopic,
      difficulty: formDifficulty,
      explanation: formExplanation,
      images: formImages.length > 0 ? formImages : undefined,
      createdAt: new Date().toISOString()
    };

    let answerKey: AnswerKey = {
      questionId: newId,
      type: formType
    };

    if (formType === 'MCQ') {
      questionData.options = [
        { id: 'A', text: mcqOptions.A },
        { id: 'B', text: mcqOptions.B },
        { id: 'C', text: mcqOptions.C },
        { id: 'D', text: mcqOptions.D }
      ];
      answerKey.correctOption = mcqCorrect;
    } else if (formType === 'TRUE_FALSE') {
      questionData.subItems = [
        { id: 'a', statement: tfSubItems.a },
        { id: 'b', statement: tfSubItems.b },
        { id: 'c', statement: tfSubItems.c },
        { id: 'd', statement: tfSubItems.d }
      ];
      answerKey.correctSubItems = tfCorrect;
    } else if (formType === 'SHORT_ANSWER') {
      answerKey.shortAnswer = [shortAnswerKey.trim()];
    }

    await saveQuestion(questionData, answerKey);
    setFormImages([]);
    setShowAddModal(false);
    await loadAllQuestions();
  };

  const imageQuestionsCount = questions.filter(
    q => (q.images && q.images.length > 0) || q.content.includes('imported_images') || q.content.includes('![')
  ).length;

  // Filtered list
  const filteredQuestions = questions.filter(q => {
    if (selectedGrade !== 'ALL' && q.grade !== selectedGrade) return false;
    if (selectedType !== 'ALL' && q.type !== selectedType) return false;
    if (selectedDiff !== 'ALL' && q.difficulty !== selectedDiff) return false;
    if (selectedChapter !== 'ALL' && q.chapter !== selectedChapter) return false;
    if (filterHasImage) {
      const hasImg = (q.images && q.images.length > 0) || q.content.includes('imported_images') || q.content.includes('![');
      if (!hasImg) return false;
    }
    if (searchQuery.trim()) {
      const qText = (q.content + q.chapter + q.topic).toLowerCase();
      if (!qText.includes(searchQuery.toLowerCase())) return false;
    }
    return true;
  });

  const availableChapters = Array.from(new Set(questions.map(q => q.chapter).filter(Boolean))).sort();

  const getDiffBadge = (diff: DifficultyLevel) => {
    switch (diff) {
      case 'NB':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">Nhận biết</span>;
      case 'TH':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">Thông hiểu</span>;
      case 'VD':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200">Vận dụng</span>;
      case 'VDC':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200">Vận dụng cao</span>;
    }
  };

  const getTypeLabel = (type: QuestionType) => {
    switch (type) {
      case 'MCQ':
        return 'Trắc nghiệm 4 lựa chọn';
      case 'TRUE_FALSE':
        return 'Đúng / Sai (4 mệnh đề)';
      case 'SHORT_ANSWER':
        return 'Trả lời ngắn (MathLive)';
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Ngân hàng Câu hỏi Toán THPT
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
              {questions.length} câu
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Soạn thảo và phân loại câu hỏi với KaTeX toán học và cấu trúc kiểm tra chuẩn Bộ GD&ĐT 2025.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => setShowDocxModal(true)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-850 font-bold text-sm border border-emerald-300 shadow-xs transition-all active:scale-95"
          >
            <UploadCloud className="w-4 h-4 text-emerald-700" />
            Nhập từ file Word (.docx)
          </button>

          <button
            type="button"
            onClick={() => {
              setFormImages([]);
              setShowAddModal(true);
            }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md shadow-emerald-900/10 transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" />
            Thêm câu hỏi mới
          </button>
        </div>
      </div>

      {/* 40 Chuyen de Tap 1 Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50/60 to-blue-50 border border-emerald-200/80 shadow-xs">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-black text-lg shadow-sm shrink-0">
            40
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm sm:text-base font-extrabold text-slate-800">
                40 Chuyên đề ôn thi Tốt nghiệp THPT 2026 (Tập 1: Chuyên đề 01 - 21)
              </h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-700 text-white shadow-2xs">
                977 câu hỏi
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Toàn bộ 21 chuyên đề, 977 câu hỏi và 8.325 công thức MathType đã được chuyển đổi sang chuẩn KaTeX LaTeX đẹp mắt và tích hợp trọn vẹn vào hệ thống.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={async () => {
              setLoading(true);
              const res = await loadExamBankTap1();
              await loadAllQuestions();
              alert(res.message);
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Đồng bộ lại dữ liệu
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-card space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Search box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Tìm kiếm theo nội dung, chương..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
            />
          </div>

          {/* Chapter / Chuyên đề filter */}
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

          {/* Grade filter */}
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

          {/* Type filter */}
          <div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as any)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-emerald-500 outline-none bg-white"
            >
              <option value="ALL">Tất cả định dạng câu</option>
              <option value="MCQ">Trắc nghiệm 4 lựa chọn (MCQ)</option>
              <option value="TRUE_FALSE">Đúng / Sai 4 mệnh đề (BGD 2025)</option>
              <option value="SHORT_ANSWER">Trả lời ngắn (MathLive)</option>
            </select>
          </div>

          {/* Difficulty filter */}
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

        {/* Quick Filter Badges Row */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500">Bộ lọc nhanh:</span>
          <button
            type="button"
            onClick={() => setFilterHasImage(!filterHasImage)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border shadow-2xs ${
              filterHasImage
                ? 'bg-amber-600 text-white border-amber-700 shadow-sm'
                : 'bg-amber-50/70 text-amber-800 border-amber-200 hover:bg-amber-100'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Chỉ câu có Hình vẽ / Đồ thị ({imageQuestionsCount} câu)</span>
            {filterHasImage && <span className="ml-1 text-[10px] bg-amber-700 px-1.5 py-0.5 rounded-full">✕ Bỏ lọc</span>}
          </button>

          {filterHasImage && (
            <span className="text-xs text-amber-700 font-medium">
              Đang lọc {filteredQuestions.length} câu hỏi có hình ảnh trực quan
            </span>
          )}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-dashed border-slate-300 text-center">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-600">Không tìm thấy câu hỏi phù hợp bộ lọc</p>
            <p className="text-xs text-slate-400 mt-1">Thử bỏ bớt điều kiện lọc hoặc thêm câu hỏi mới</p>
          </div>
        ) : (
          filteredQuestions.map((q, idx) => (
            <div
              key={q.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-card hover:border-emerald-200 transition-all p-5 sm:p-6 space-y-4"
            >
              {/* Question Metadata bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-extrabold text-sm text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                    Câu {idx + 1}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700">
                    Lớp {q.grade}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700">
                    {getTypeLabel(q.type)}
                  </span>
                  {getDiffBadge(q.difficulty)}
                  {((q.images && q.images.length > 0) || q.content.includes('imported_images') || q.content.includes('![')) && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-amber-900 border border-amber-300 flex items-center gap-1">
                      <ImageIcon className="w-3 h-3 text-amber-600" /> Có hình vẽ
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>{q.chapter}</span>
                  <span>•</span>
                  <button
                    onClick={() => handleDelete(q.id)}
                    className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                    title="Xoá câu hỏi"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Question Content (Rendered KaTeX) */}
              <div className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                <MathView content={q.content} images={q.images} />
              </div>

              {/* Options / Sub-items */}
              {q.type === 'MCQ' && q.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {q.options.map((opt) => (
                    <div
                      key={opt.id}
                      className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50/60 text-xs sm:text-sm"
                    >
                      <span className="w-5 h-5 rounded-md bg-white text-slate-700 font-bold flex items-center justify-center border border-slate-300 shrink-0 text-xs">
                        {opt.id}
                      </span>
                      <div className="flex-1 font-medium">
                        <MathView content={opt.text} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {q.type === 'TRUE_FALSE' && q.subItems && (
                <div className="space-y-2 pt-1">
                  {q.subItems.map((sub) => (
                    <div
                      key={sub.id}
                      className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50/60 text-xs sm:text-sm"
                    >
                      <span className="font-bold text-emerald-800 uppercase shrink-0 text-xs bg-emerald-100 px-2 py-0.5 rounded">
                        Ý {sub.id})
                      </span>
                      <div className="flex-1 font-medium">
                        <MathView content={sub.statement} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {q.type === 'SHORT_ANSWER' && (
                <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-200/60 text-xs text-amber-900 font-medium">
                  Dạng trả lời ngắn: Học sinh nhập trực tiếp đáp số hoặc biểu thức qua bàn phím ảo toán học MathLive.
                </div>
              )}

              {/* Explanation section */}
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleExplanation(q.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 self-start"
                >
                  <Eye className="w-3.5 h-3.5" />
                  {expandedExplanation[q.id] ? 'Ẩn lời giải chi tiết' : 'Xem lời giải chi tiết'}
                </button>

                {expandedExplanation[q.id] && (
                  <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-1">
                    <p className="font-bold text-emerald-900 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Lời giải chi tiết:
                    </p>
                    <MathView content={q.explanation} />
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* CREATE QUESTION MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-emerald-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-300" />
                <h3 className="font-extrabold text-base sm:text-lg">Thêm câu hỏi mới vào Ngân hàng</h3>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-emerald-200 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSaveQuestion} className="p-6 overflow-y-auto space-y-5 flex-1">
              {/* Type, Grade, Difficulty row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Định dạng câu hỏi</label>
                  <select
                    value={formType}
                    onChange={(e) => setFormType(e.target.value as QuestionType)}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-none"
                  >
                    <option value="MCQ">Trắc nghiệm 4 lựa chọn (MCQ)</option>
                    <option value="TRUE_FALSE">Đúng / Sai 4 mệnh đề (BGD 2025)</option>
                    <option value="SHORT_ANSWER">Trả lời ngắn (MathLive)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Khối lớp</label>
                  <select
                    value={formGrade}
                    onChange={(e) => setFormGrade(Number(e.target.value) as any)}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-none"
                  >
                    <option value={12}>Lớp 12</option>
                    <option value={11}>Lớp 11</option>
                    <option value={10}>Lớp 10</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mức độ nhận thức</label>
                  <select
                    value={formDifficulty}
                    onChange={(e) => setFormDifficulty(e.target.value as DifficultyLevel)}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-none"
                  >
                    <option value="NB">Nhận biết</option>
                    <option value="TH">Thông hiểu</option>
                    <option value="VD">Vận dụng</option>
                    <option value="VDC">Vận dụng cao</option>
                  </select>
                </div>
              </div>

              {/* Chapter & Topic */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Chương / Chuyên đề</label>
                  <input
                    type="text"
                    value={formChapter}
                    onChange={(e) => setFormChapter(e.target.value)}
                    required
                    placeholder="VD: Khảo sát hàm số, Oxyz, Tích phân..."
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Chủ đề bài học</label>
                  <input
                    type="text"
                    value={formTopic}
                    onChange={(e) => setFormTopic(e.target.value)}
                    required
                    placeholder="VD: Cực trị, Mặt phẳng, Biến cố độc lập..."
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-none"
                  />
                </div>
              </div>

              {/* Question Content */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nội dung câu hỏi (Dùng cú pháp LaTeX: $công thức$ hoặc $$khối$$)
                </label>
                <textarea
                  ref={contentTextareaRef}
                  rows={3}
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  required
                  placeholder="Nhập nội dung câu hỏi..."
                  className="w-full p-3 font-mono text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-none"
                />

                {/* Realtime LaTeX preview */}
                <div className="mt-2 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Xem trước hiển thị KaTeX & Hình ảnh:
                  </p>
                  <div className="text-sm font-medium text-slate-900">
                    <MathView content={formContent || 'Chưa nhập nội dung'} images={formImages} />
                  </div>
                </div>
              </div>

              {/* Upload attached image component */}
              <ImageUploader
                images={formImages}
                onChange={setFormImages}
                onInsertToContent={handleInsertImageToContent}
                onInsertToExplanation={handleInsertImageToExplanation}
                label="Tải lên ảnh đính kèm / Hình vẽ minh họa"
              />

              {/* DẠNG MCQ: Options & Answer Key */}
              {formType === 'MCQ' && (
                <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    4 Lựa chọn & Đáp án đúng:
                  </h4>
                  {(['A', 'B', 'C', 'D'] as const).map((optKey) => (
                    <div key={optKey} className="flex items-center gap-2">
                      <input
                        type="radio"
                        id={`ans-${optKey}`}
                        name="mcqCorrect"
                        checked={mcqCorrect === optKey}
                        onChange={() => setMcqCorrect(optKey)}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                      />
                      <label htmlFor={`ans-${optKey}`} className="font-bold text-xs text-slate-700 w-6">
                        {optKey}.
                      </label>
                      <input
                        type="text"
                        value={mcqOptions[optKey]}
                        onChange={(e) =>
                          setMcqOptions({ ...mcqOptions, [optKey]: e.target.value })
                        }
                        placeholder={`Lựa chọn ${optKey} (có thể chứa $...$)`}
                        required
                        className="flex-1 px-3 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-emerald-500 outline-none font-mono"
                      />
                    </div>
                  ))}
                  <p className="text-[11px] text-emerald-700 font-medium">
                    Chọn nút radio ở phương án đúng (Đáp án hiện tại: <strong>{mcqCorrect}</strong>).
                  </p>
                </div>
              )}

              {/* DẠNG TRUE_FALSE: 4 sub-items */}
              {formType === 'TRUE_FALSE' && (
                <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    4 Mệnh đề Đúng/Sai (Chuẩn cấu trúc Bộ GD&ĐT 2025):
                  </h4>
                  {(['a', 'b', 'c', 'd'] as const).map((subKey) => (
                    <div key={subKey} className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="font-bold text-xs text-emerald-800 w-12 uppercase">
                        Ý {subKey})
                      </span>
                      <input
                        type="text"
                        value={tfSubItems[subKey]}
                        onChange={(e) =>
                          setTfSubItems({ ...tfSubItems, [subKey]: e.target.value })
                        }
                        placeholder={`Mệnh đề ${subKey}...`}
                        required
                        className="flex-1 px-3 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-emerald-500 outline-none"
                      />
                      <div className="flex items-center gap-2 pl-2">
                        <button
                          type="button"
                          onClick={() => setTfCorrect({ ...tfCorrect, [subKey]: true })}
                          className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                            tfCorrect[subKey]
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                          }`}
                        >
                          Đúng
                        </button>
                        <button
                          type="button"
                          onClick={() => setTfCorrect({ ...tfCorrect, [subKey]: false })}
                          className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                            !tfCorrect[subKey]
                              ? 'bg-rose-600 text-white'
                              : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                          }`}
                        >
                          Sai
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* DẠNG SHORT_ANSWER: MathLive input */}
              {formType === 'SHORT_ANSWER' && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Đáp án đúng mẫu (Sử dụng bàn phím ảo toán học):
                  </h4>
                  <MathInput
                    value={shortAnswerKey}
                    onChange={setShortAnswerKey}
                    placeholder="Nhập số thực, phân số hoặc biểu thức..."
                  />
                  <p className="text-[11px] text-slate-500">
                    Hệ thống sẽ chuẩn hóa tự động các dạng số thập phân, phân số hoặc biểu thức toán tương đương khi học sinh nộp bài.
                  </p>
                </div>
              )}

              {/* Explanation with preview */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-slate-700">
                    Lời giải chi tiết & Hướng dẫn (Kèm LaTeX & Hình vẽ)
                  </label>
                  {formImages.length > 0 && (
                    <span className="text-[11px] text-purple-700 font-medium">
                      💡 Có thể chèn ảnh từ danh sách trên vào lời giải
                    </span>
                  )}
                </div>
                <textarea
                  ref={explanationTextareaRef}
                  rows={3}
                  value={formExplanation}
                  onChange={(e) => setFormExplanation(e.target.value)}
                  required
                  placeholder="Giải thích từng bước để học sinh nắm vững phương pháp..."
                  className="w-full p-3 font-mono text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-none"
                />
                {formExplanation && (
                  <div className="mt-2 p-3 rounded-xl bg-purple-50/50 border border-purple-200/80">
                    <p className="text-[11px] font-bold text-purple-900 uppercase tracking-wider mb-1">
                      Xem trước Lời giải chi tiết:
                    </p>
                    <div className="text-sm font-medium text-slate-900">
                      <MathView content={formExplanation} />
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-900/10 active:scale-95 transition-all"
                >
                  <Save className="w-4 h-4" />
                  Lưu vào Ngân hàng
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DOCX IMPORT MODAL */}
      {showDocxModal && (
        <DocxImportModal
          onClose={() => setShowDocxModal(false)}
          onImportSuccess={(count) => {
            loadAllQuestions();
            alert(`Đã nhập thành công ${count} câu hỏi từ tệp Word vào Ngân hàng!`);
          }}
        />
      )}
    </div>
  );
};

export default QuestionBank;
