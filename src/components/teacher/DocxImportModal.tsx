import React, { useState, useRef } from 'react';
import { extractDocxContent, parseMathExamText, ParsedQuestionItem } from '../../services/docxParser';
import { saveQuestion, loadExamBankTap1 } from '../../services/store';
import { MathView } from '../math/MathView';
import { Question, AnswerKey, DifficultyLevel } from '../../types';
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertCircle,
  X,
  Sparkles,
  Eye,
  CheckSquare,
  Square,
  Download,
  Layers,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import JSZip from 'jszip';

interface DocxImportModalProps {
  onClose: () => void;
  onImportSuccess: (count: number) => void;
}

export const DocxImportModal: React.FC<DocxImportModalProps> = ({ onClose, onImportSuccess }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStep, setProcessStep] = useState<string>('');
  const [parsedQuestions, setParsedQuestions] = useState<ParsedQuestionItem[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  // Batch defaults
  const [defaultGrade, setDefaultGrade] = useState<10 | 11 | 12>(12);
  const [defaultChapter, setDefaultChapter] = useState<string>('Khảo sát hàm số & Oxyz');

  const [expandedExpl, setExpandedExpl] = useState<Record<number, boolean>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      await processDocxFile(files[0]);
    }
  };

  const processDocxFile = async (selectedFile: File) => {
    setFile(selectedFile);
    setIsProcessing(true);
    setProcessStep('Đang giải nén tệp Word (.docx) và trích xuất hình vẽ...');

    try {
      // 1. Extract XML and images
      const { fullText, imagesMap } = await extractDocxContent(selectedFile);

      setProcessStep(`Đã trích xuất ${Object.keys(imagesMap).length} hình vẽ. Đang nhận diện công thức toán và câu hỏi...`);

      // 2. Parse text into structured questions
      const items = parseMathExamText(fullText, defaultGrade, defaultChapter);

      if (items.length === 0) {
        alert('Không nhận diện được câu hỏi nào từ tệp. Vui lòng kiểm tra định dạng đề thi (có tiền tố "Câu 1:", "Câu 2:"...) hoặc tải file Word mẫu để tham khảo.');
      } else {
        setParsedQuestions(items);
        setSelectedIndices(items.map((_, i) => i));
      }
    } catch (err: any) {
      console.error('Docx parse error:', err);
      alert('Không thể đọc tệp docx: ' + (err.message || 'Lỗi không xác định'));
    } finally {
      setIsProcessing(false);
      setProcessStep('');
    }
  };

  const handleToggleSelect = (index: number) => {
    setSelectedIndices(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleSelectAll = () => {
    if (selectedIndices.length === parsedQuestions.length) {
      setSelectedIndices([]);
    } else {
      setSelectedIndices(parsedQuestions.map((_, i) => i));
    }
  };

  const handleSaveImported = async () => {
    if (selectedIndices.length === 0) {
      alert('Vui lòng chọn ít nhất 1 câu hỏi để lưu vào Ngân hàng!');
      return;
    }

    setIsProcessing(true);
    setProcessStep('Đang lưu câu hỏi và đáp án vào Ngân hàng...');

    try {
      for (const idx of selectedIndices) {
        const item = parsedQuestions[idx];

        const qData: Question = {
          id: item.id,
          teacherId: 'teacher-nguyen-van-a',
          content: item.content,
          type: item.type,
          options: item.options,
          subItems: item.subItems,
          grade: defaultGrade,
          chapter: defaultChapter,
          topic: item.topic || 'Nhập từ Word',
          difficulty: item.difficulty,
          explanation: item.explanation || 'Chưa có lời giải chi tiết.',
          createdAt: new Date().toISOString()
        };

        const ansKey: AnswerKey = {
          questionId: item.id,
          type: item.type,
          correctOption: item.correctOption,
          correctSubItems: item.correctSubItems,
          shortAnswer: item.shortAnswer
        };

        await saveQuestion(qData, ansKey);
      }

      onImportSuccess(selectedIndices.length);
      onClose();
    } catch (err: any) {
      console.error(err);
      alert('Lỗi khi lưu câu hỏi: ' + err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  // Generate and download a sample .docx file for testing
  const handleDownloadSampleDocx = async () => {
    const zip = new JSZip();

    // Create a 1x1 transparent PNG for sample image
    const samplePngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

    // Build standard docx structure
    zip.file('[Content_Types].xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Default Extension="png" ContentType="image/png"/>
</Types>`);

    zip.file('_rels/.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`);

    zip.file('word/_rels/document.xml.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/image1.png"/>
</Relationships>`);

    zip.file('word/media/image1.png', samplePngBase64, { base64: true });

    // Word document content with 3 questions (MCQ with OMML math, True/False 4 items, Short answer)
    zip.file('word/document.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
            xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"
            xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <w:body>
    <w:p>
      <w:r><w:t>ĐỀ THI THAM KHẢO TOÁN THPT 2026</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:t>[TH] Câu 1: Cho hàm số y = f(x) có đạo hàm </w:t></w:r>
      <m:oMath>
        <m:r><m:t>f'(x) = x(x - 2)</m:t></m:r>
        <m:sSup>
          <m:e><m:r><m:t>(x + 1)</m:t></m:r></m:e>
          <m:sup><m:r><m:t>3</m:t></m:r></m:sup>
        </m:sSup>
      </m:oMath>
      <w:r><w:t>. Số điểm cực trị của hàm số là:</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:t>A. 1    B. 2    C. 3    D. 0</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:t>Lời giải: f'(x) = 0 có nghiệm bội lẻ x = 0, x = 2, x = -1 nên hàm số có 3 điểm cực trị. Chọn C.</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:t>[VD] Câu 2: Trong không gian Oxyz, cho mặt phẳng (P): 2x - y + 2z - 6 = 0 và điểm A(1; 2; 3). Xét tính đúng sai của các mệnh đề:</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:t>a) Véctơ pháp tuyến của (P) là n = (2; -1; 2). (Đúng)</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:t>b) Điểm A thuộc mặt phẳng (P). (Sai)</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:t>c) Khoảng cách từ A đến (P) bằng 2. (Sai)</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:t>d) Mặt phẳng song song với (P) qua A có phương trình 2x - y + 2z - 6 = 0. (Sai)</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:t>Lời giải: Thay tọa độ A vào kiểm tra khoảng cách và tính song song.</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:t>[TH] Câu 3: Biết tích phân từ 1 đến 2 của (2x + 1)/x dx = a + ln b. Tính giá trị của biểu thức P = a + b.</w:t></w:r>
    </w:p>
    <w:p>
      <w:r><w:t>Lời giải: Ta có a = 2, b = 2 suy ra P = 4. Đáp số: 4</w:t></w:r>
    </w:p>
  </w:body>
</w:document>`);

    const blob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'de_toan_thpt_mau_qmath.docx';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-emerald-950 via-emerald-900 to-qmath-dark text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-emerald-300" />
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                Nhập Ngân hàng Câu hỏi từ File Word (.docx)
              </h3>
              <p className="text-xs text-emerald-200">
                Tự động bóc tách Hình vẽ, Công thức MathType/LaTeX và định dạng đề thi BGD 2025
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-emerald-200 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5">
          {/* Default Metadata Config Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Khối lớp áp dụng:</label>
              <select
                value={defaultGrade}
                onChange={(e) => setDefaultGrade(Number(e.target.value) as any)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-none bg-white font-medium"
              >
                <option value={12}>Toán Lớp 12</option>
                <option value={11}>Toán Lớp 11</option>
                <option value={10}>Toán Lớp 10</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Chương / Chuyên đề mặc định:</label>
              <input
                type="text"
                value={defaultChapter}
                onChange={(e) => setDefaultChapter(e.target.value)}
                placeholder="VD: Khảo sát hàm số, Oxyz, Tích phân..."
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-none font-medium"
              />
            </div>
          </div>

          {/* Quick Preset: 40 Chuyên đề ôn TN 2026 tập 1 */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-700 via-teal-800 to-emerald-900 text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center font-black text-base shrink-0 border border-white/30">
                40
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-extrabold text-sm">40 Chuyên đề ôn TN 2026 tập 1 1-21.docx</p>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wider">
                    Có sẵn 977 câu
                  </span>
                </div>
                <p className="text-xs text-emerald-100/90 mt-0.5">
                  Gồm 21 chuyên đề, 977 câu hỏi và 8.325 công thức MathType đã được chuyển đổi sang LaTeX sạch kèm hình vẽ minh họa.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={async () => {
                setIsProcessing(true);
                setProcessStep('Đang đồng bộ 977 câu hỏi từ 40 Chuyên đề Tập 1 lên hệ thống...');
                try {
                  const res = await loadExamBankTap1();
                  if (res.success) {
                    alert(res.message);
                    onImportSuccess(res.count);
                    onClose();
                  } else {
                    alert(res.message);
                  }
                } finally {
                  setIsProcessing(false);
                  setProcessStep('');
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-900 font-extrabold text-xs shadow transition-all active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              Đưa toàn bộ 977 câu lên hệ thống
            </button>
          </div>

          {/* Upload Dropzone */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-emerald-300 hover:border-emerald-500 bg-emerald-50/30 hover:bg-emerald-50/60 rounded-3xl p-6 sm:p-8 text-center cursor-pointer transition-all space-y-3"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".docx"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
              <UploadCloud className="w-7 h-7" />
            </div>
            <div>
              <p className="font-extrabold text-sm sm:text-base text-slate-800">
                {file ? file.name : 'Bấm để chọn file hoặc kéo thả tệp .docx vào đây'}
              </p>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                Hỗ trợ file đề thi Word (.docx) soạn bằng MathType, Equation Editor hoặc LaTeX. Hệ thống sẽ tự động quét và bóc tách hình vẽ minh họa.
              </p>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleDownloadSampleDocx();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 shadow-2xs transition-all"
            >
              <Download className="w-3.5 h-3.5 text-emerald-700" />
              Tải file Word mẫu (.docx) để xem cấu trúc
            </button>
          </div>

          {/* Processing Status Banner */}
          {isProcessing && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-xs sm:text-sm text-emerald-900 font-bold animate-pulse">
              <div className="w-5 h-5 border-2 border-emerald-700 border-t-transparent rounded-full animate-spin shrink-0" />
              <span>{processStep || 'Đang xử lý dữ liệu tệp Word...'}</span>
            </div>
          )}

          {/* Parsed Questions Preview Section */}
          {parsedQuestions.length > 0 && (
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <h4 className="font-extrabold text-base text-slate-900">
                    Kết quả nhận diện ({selectedIndices.length}/{parsedQuestions.length} câu được chọn)
                  </h4>
                </div>

                <button
                  type="button"
                  onClick={handleSelectAll}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 self-start"
                >
                  {selectedIndices.length === parsedQuestions.length ? 'Bỏ chọn tất cả' : 'Chọn tất cả'}
                </button>
              </div>

              {/* Cards List */}
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
                {parsedQuestions.map((q, idx) => {
                  const isSelected = selectedIndices.includes(idx);
                  return (
                    <div
                      key={q.id}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all space-y-3 ${
                        isSelected
                          ? 'border-emerald-400 bg-white shadow-sm'
                          : 'border-slate-200 bg-slate-50/60 opacity-60'
                      }`}
                    >
                      {/* Top bar of question card */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                        <div className="flex items-center gap-2.5">
                          <button
                            type="button"
                            onClick={() => handleToggleSelect(idx)}
                            className="text-emerald-700 focus:outline-none"
                          >
                            {isSelected ? (
                              <CheckSquare className="w-5 h-5" />
                            ) : (
                              <Square className="w-5 h-5 text-slate-300" />
                            )}
                          </button>
                          <span className="font-extrabold text-xs px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
                            Câu {idx + 1}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-700">
                            {q.type}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                            {q.difficulty}
                          </span>
                        </div>

                        <span className="text-xs text-slate-400">
                          {q.images.length > 0 && `📷 Có ${q.images.length} hình vẽ`}
                        </span>
                      </div>

                      {/* Question Content (Rendered KaTeX + Images) */}
                      <div className="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">
                        <MathView content={q.content} />
                      </div>

                      {/* Options preview for MCQ */}
                      {q.type === 'MCQ' && q.options && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {q.options.map((opt) => (
                            <div
                              key={opt.id}
                              className={`p-2.5 rounded-xl border text-xs flex items-start gap-2 ${
                                q.correctOption === opt.id
                                  ? 'border-emerald-500 bg-emerald-50/50 font-bold'
                                  : 'border-slate-200 bg-slate-50/50'
                              }`}
                            >
                              <span className="w-5 h-5 rounded bg-white text-slate-700 font-bold flex items-center justify-center border text-[11px] shrink-0">
                                {opt.id}
                              </span>
                              <div className="flex-1">
                                <MathView content={opt.text} />
                              </div>
                              {q.correctOption === opt.id && (
                                <span className="text-[10px] text-emerald-700 font-bold">✓ Đáp án</span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Sub-items preview for TRUE_FALSE */}
                      {q.type === 'TRUE_FALSE' && q.subItems && (
                        <div className="space-y-1.5 pt-1">
                          {q.subItems.map((sub) => (
                            <div
                              key={sub.id}
                              className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center justify-between text-xs"
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-emerald-800 uppercase">Ý {sub.id})</span>
                                <MathView content={sub.statement} />
                              </div>
                              <span className="font-bold text-[11px] px-2 py-0.5 rounded bg-white border border-slate-200">
                                {q.correctSubItems?.[sub.id] ? 'Đúng' : 'Sai'}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Short answer preview */}
                      {q.type === 'SHORT_ANSWER' && (
                        <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
                          Đáp số nhận diện: <strong>{q.shortAnswer || '0'}</strong>
                        </div>
                      )}

                      {/* Explanation toggle */}
                      <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5">
                        <button
                          type="button"
                          onClick={() => setExpandedExpl(prev => ({ ...prev, [idx]: !prev[idx] }))}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 self-start"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          {expandedExpl[idx] ? 'Ẩn lời giải' : 'Xem lời giải chi tiết'}
                        </button>

                        {expandedExpl[idx] && (
                          <div className="p-3 rounded-xl bg-emerald-50/40 border border-emerald-200 text-xs text-slate-700">
                            <MathView content={q.explanation} />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:bg-slate-200 transition-colors"
          >
            Hủy bỏ
          </button>

          <button
            type="button"
            disabled={parsedQuestions.length === 0 || selectedIndices.length === 0 || isProcessing}
            onClick={handleSaveImported}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm text-white shadow-md active:scale-95 transition-all ${
              parsedQuestions.length === 0 || selectedIndices.length === 0 || isProcessing
                ? 'bg-slate-300 cursor-not-allowed'
                : 'bg-emerald-700 hover:bg-emerald-800 shadow-emerald-900/20'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Lưu {selectedIndices.length} câu hỏi vào Ngân hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocxImportModal;
