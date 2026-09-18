import React, { useState, useRef } from 'react';
import {
  UploadCloud,
  Image as ImageIcon,
  Trash2,
  Plus,
  ExternalLink,
  Check,
  Maximize2,
  X,
  Copy,
  Sparkles
} from 'lucide-react';
import { compressImage } from '../../utils/imageCompressor';

interface ImageUploaderProps {
  images: string[];
  onChange: (images: string[]) => void;
  onInsertToContent?: (markdownImg: string) => void;
  onInsertToExplanation?: (markdownImg: string) => void;
  label?: string;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  images,
  onChange,
  onInsertToContent,
  onInsertToExplanation,
  label = 'Ảnh đính kèm & Hình vẽ minh họa'
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [urlInputValue, setUrlInputValue] = useState('');
  const [previewZoomImg, setPreviewZoomImg] = useState<string | null>(null);
  const [autoInsert, setAutoInsert] = useState(true);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Process and compress image files
  const processFiles = async (files: FileList | File[]) => {
    const fileArray = Array.from(files).filter(f => f.type.startsWith('image/'));
    if (fileArray.length === 0) return;

    setIsProcessing(true);
    try {
      const newUrls: string[] = [];

      for (const file of fileArray) {
        const compressed = await compressImage(file, {
          maxWidth: 1200,
          maxHeight: 1200,
          quality: 0.85
        });
        newUrls.push(compressed.dataUrl);

        // Auto-insert to question content if enabled
        if (autoInsert && onInsertToContent) {
          onInsertToContent(`\n\n![${file.name.replace(/\.[^/.]+$/, '') || 'Hình vẽ minh họa'}](${compressed.dataUrl})\n\n`);
        }
      }

      const updated = [...images, ...newUrls];
      onChange(updated);
    } catch (err) {
      console.error('Lỗi khi nén và xử lý hình ảnh:', err);
      alert('Không thể xử lý hình ảnh. Vui lòng thử lại với tệp PNG, JPG hoặc WebP hợp lệ.');
    } finally {
      setIsProcessing(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  // Drag & drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
    }
  };

  // Paste handler (Ctrl + V)
  const handlePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (!items) return;

    const files: File[] = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.startsWith('image/')) {
        const file = items[i].getAsFile();
        if (file) files.push(file);
      }
    }

    if (files.length > 0) {
      e.preventDefault();
      processFiles(files);
    }
  };

  // Add from URL
  const handleAddFromUrl = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = urlInputValue.trim();
    if (!trimmed) return;

    if (autoInsert && onInsertToContent) {
      onInsertToContent(`\n\n![Hình vẽ minh họa](${trimmed})\n\n`);
    }

    onChange([...images, trimmed]);
    setUrlInputValue('');
    setShowUrlInput(false);
  };

  // Delete image
  const handleDeleteImage = (indexToRemove: number) => {
    const updated = images.filter((_, idx) => idx !== indexToRemove);
    onChange(updated);
  };

  // Copy markdown snippet
  const handleCopyMarkdown = (imgUrl: string, idx: number) => {
    const md = `![Hình vẽ minh họa](${imgUrl})`;
    navigator.clipboard.writeText(md);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div
      className="space-y-3 p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-200/90"
      onPaste={handlePaste}
      tabIndex={0}
      title="Nhấn Ctrl+V bất kỳ lúc nào để dán ảnh chụp màn hình"
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <ImageIcon className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              {label}
            </span>
            <span className="ml-2 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              {images.length} ảnh
            </span>
          </div>
        </div>

        {/* Quick action buttons */}
        <div className="flex items-center gap-1.5">
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => e.target.files && processFiles(e.target.files)}
            accept="image/*"
            multiple
            className="hidden"
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isProcessing}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs active:scale-95 transition-all"
          >
            <UploadCloud className="w-3.5 h-3.5" />
            Tải ảnh từ máy
          </button>

          <button
            type="button"
            onClick={() => setShowUrlInput(!showUrlInput)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-medium transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Nhập URL
          </button>
        </div>
      </div>

      {/* URL Input Form */}
      {showUrlInput && (
        <form onSubmit={handleAddFromUrl} className="flex items-center gap-2 p-2 bg-white rounded-xl border border-slate-300 shadow-xs animate-in fade-in duration-150">
          <input
            type="url"
            value={urlInputValue}
            onChange={(e) => setUrlInputValue(e.target.value)}
            placeholder="https://example.com/hinh-ve.png"
            autoFocus
            className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-500 font-mono"
          />
          <button
            type="submit"
            className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg"
          >
            Thêm
          </button>
          <button
            type="button"
            onClick={() => setShowUrlInput(false)}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
          >
            <X className="w-4 h-4" />
          </button>
        </form>
      )}

      {/* Drag and Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
          isDragging
            ? 'border-emerald-500 bg-emerald-50/80 scale-[1.01]'
            : 'border-slate-300 hover:border-emerald-400 bg-white/70 hover:bg-white'
        }`}
      >
        {isProcessing ? (
          <div className="flex items-center justify-center gap-2 py-2 text-emerald-800">
            <div className="w-4 h-4 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-bold">Đang tối ưu và nén hình ảnh...</span>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-1.5">
            <div className="flex items-center gap-1.5 text-slate-600 text-xs font-medium">
              <UploadCloud className="w-4 h-4 text-emerald-700" />
              <span>Kéo thả ảnh vào đây, hoặc click để chọn tệp từ máy tính</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-500 font-normal">
              <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono font-bold text-[10px] border border-slate-200">
                Ctrl + V
              </span>
              <span>Hỗ trợ dán trực tiếp ảnh chụp màn hình từ khay nhớ tạm</span>
              <span>•</span>
              <span>PNG, JPG, WebP, SVG</span>
            </div>
          </div>
        )}
      </div>

      {/* Auto-insert option */}
      <div className="flex items-center justify-between text-[11px] text-slate-600 px-1">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={autoInsert}
            onChange={(e) => setAutoInsert(e.target.checked)}
            className="w-3.5 h-3.5 text-emerald-600 rounded focus:ring-emerald-500 border-slate-300"
          />
          <span>Tự động chèn mã Markdown vào nội dung câu hỏi sau khi tải lên</span>
        </label>
        <span className="text-slate-500 text-[10px] italic">
          Tự động nén tối ưu hiển thị nhanh
        </span>
      </div>

      {/* Image Gallery */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
          {images.map((imgUrl, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl border border-slate-200 bg-white p-2 shadow-xs hover:shadow-md transition-all flex flex-col items-center"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-28 rounded-lg overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-100">
                <img
                  src={imgUrl}
                  alt={`Ảnh đính kèm ${idx + 1}`}
                  className="max-h-full max-w-full object-contain cursor-pointer transition-transform group-hover:scale-105"
                  onClick={() => setPreviewZoomImg(imgUrl)}
                />
                <button
                  type="button"
                  onClick={() => setPreviewZoomImg(imgUrl)}
                  className="absolute bottom-1 right-1 p-1 bg-black/60 text-white rounded-md hover:bg-black/80 transition-colors"
                  title="Phóng to xem ảnh"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="w-full mt-2 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-slate-500 px-0.5">
                  <span className="font-semibold text-slate-700">Hình {idx + 1}</span>
                  <button
                    type="button"
                    onClick={() => handleDeleteImage(idx)}
                    className="text-rose-500 hover:text-rose-700 p-0.5 rounded hover:bg-rose-50 transition-colors"
                    title="Xóa ảnh này"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex flex-col gap-1 w-full">
                  {onInsertToContent && (
                    <button
                      type="button"
                      onClick={() => onInsertToContent(`\n\n![Hình vẽ ${idx + 1}](${imgUrl})\n\n`)}
                      className="w-full py-1 px-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[10px] font-bold border border-emerald-200 transition-colors flex items-center justify-center gap-1"
                    >
                      <Plus className="w-3 h-3" />
                      Chèn vào đề bài
                    </button>
                  )}

                  {onInsertToExplanation && (
                    <button
                      type="button"
                      onClick={() => onInsertToExplanation(`\n\n![Hình vẽ lời giải ${idx + 1}](${imgUrl})\n\n`)}
                      className="w-full py-1 px-2 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-800 text-[10px] font-bold border border-purple-200 transition-colors flex items-center justify-center gap-1"
                    >
                      <Sparkles className="w-3 h-3" />
                      Chèn vào lời giải
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => handleCopyMarkdown(imgUrl, idx)}
                    className="w-full py-1 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-medium transition-colors flex items-center justify-center gap-1"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        Đã sao chép!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Sao chép mã KaTeX
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox / Zoom Modal */}
      {previewZoomImg && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setPreviewZoomImg(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white p-3 rounded-2xl shadow-2xl flex flex-col items-center">
            <button
              type="button"
              onClick={() => setPreviewZoomImg(null)}
              className="absolute -top-3 -right-3 p-1.5 bg-slate-800 text-white rounded-full hover:bg-slate-900 shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={previewZoomImg}
              alt="Xem hình vẽ kích thước đầy đủ"
              className="max-h-[80vh] max-w-full rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
