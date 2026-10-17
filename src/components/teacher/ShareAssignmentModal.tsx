import React, { useState } from 'react';
import { Assignment } from '../../types';
import {
  X,
  Copy,
  Check,
  QrCode,
  Share2,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Clock,
  Calendar,
  Users,
  Smartphone
} from 'lucide-react';

interface ShareAssignmentModalProps {
  assignment: Assignment | null;
  onClose: () => void;
}

export const ShareAssignmentModal: React.FC<ShareAssignmentModalProps> = ({
  assignment,
  onClose
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedZalo, setCopiedZalo] = useState(false);
  const [linkType, setLinkType] = useState<'app' | 'github'>('app');

  if (!assignment) return null;

  const appUrl = `${window.location.origin}/?asg=${assignment.id}`;
  const githubUrl = 'https://sanginnova9-jpg.github.io/QMath-Exam/';
  const activeUrl = linkType === 'app' ? appUrl : githubUrl;

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
    activeUrl
  )}`;

  const formattedDeadline = assignment.deadline
    ? new Date(assignment.deadline).toLocaleString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    : 'Không giới hạn';

  const zaloTemplate = `📢 THÔNG BÁO BÀI TẬP / KIỂM TRA TOÁN
👨‍🏫 Giáo viên: ThS. Nguyễn Văn Sang (Khoa Cơ bản - CĐN01 - BQP)
📖 Bài kiểm tra: ${assignment.title}
👥 Lớp: ${assignment.className}
⏱️ Thời gian làm bài: ${assignment.durationMinutes} phút
📅 Hạn nộp bài: ${formattedDeadline}
🔗 Link làm bài trực tuyến: ${activeUrl}

👉 HƯỚNG DẪN DÀNH CHO HỌC SINH:
- Các em mở link trên điện thoại hoặc máy tính hoặc quét mã QR để bắt đầu làm bài.
- Hãy điền đúng Họ tên và Lớp để hệ thống tự động ghi nhận điểm số.
- Làm bài nghiêm túc, không chuyển tab trong quá trình làm bài. Chúc các em đạt kết quả cao!`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(activeUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCopyZalo = () => {
    navigator.clipboard.writeText(zaloTemplate);
    setCopiedZalo(true);
    setTimeout(() => setCopiedZalo(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-emerald-50 via-white to-teal-50 rounded-t-3xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-200">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">
                Chia sẻ Bài tập & Mã QR
              </h3>
              <p className="text-xs text-slate-500">
                Gửi link trực tiếp hoặc mã QR vào nhóm Zalo lớp để học sinh làm bài
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Assignment Quick Card */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                {assignment.className}
              </span>
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {assignment.durationMinutes} phút
              </span>
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Hạn: {formattedDeadline}
              </span>
            </div>
            <h4 className="font-bold text-slate-900 text-base">{assignment.title}</h4>
            <p className="text-xs text-slate-500">
              Giáo viên phụ trách:{' '}
              <strong className="text-emerald-700">
                {assignment.teacherName || 'ThS. Nguyễn Văn Sang'}
              </strong>{' '}
              • {assignment.questionIds.length} câu hỏi trắc nghiệm
            </p>
          </div>

          {/* Link Type Selector */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl text-xs font-bold text-slate-600">
            <button
              onClick={() => setLinkType('app')}
              className={`flex-1 py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                linkType === 'app'
                  ? 'bg-white text-emerald-800 shadow-sm'
                  : 'hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              Cổng QMath Studio (Nội bộ)
            </button>
            <button
              onClick={() => setLinkType('github')}
              className={`flex-1 py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                linkType === 'github'
                  ? 'bg-white text-emerald-800 shadow-sm'
                  : 'hover:text-slate-900'
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Đề Online GitHub Pages (24/7)
            </button>
          </div>

          {/* QR Code and Direct URL Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center bg-white p-4 rounded-2xl border border-slate-200">
            <div className="flex flex-col items-center justify-center text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
                <img
                  src={qrImageUrl}
                  alt="QR Code làm bài"
                  className="w-36 h-36 object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-2 font-medium">
                📱 Quét bằng Zalo hoặc Camera điện thoại
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Đường dẫn làm bài trực tuyến:
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="text"
                    readOnly
                    value={activeUrl}
                    className="w-full text-xs font-mono bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-700 truncate"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="shrink-0 p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-sm"
                    title="Sao chép link"
                  >
                    {copiedLink ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleCopyZalo}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-200 transition-all active:scale-95"
                >
                  {copiedZalo ? (
                    <>
                      <Check className="w-4 h-4" /> Đã sao chép Mẫu Zalo!
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4" /> Sao chép Mẫu tin nhắn Zalo Lớp
                    </>
                  )}
                </button>
              </div>

              <a
                href={activeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-semibold text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Mở thử trong tab mới
              </a>
            </div>
          </div>

          {/* Zalo Preview Snippet */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Bản xem trước tin nhắn gửi nhóm Zalo:
            </span>
            <pre className="text-[11px] font-sans whitespace-pre-wrap bg-slate-900 text-emerald-300 p-3.5 rounded-xl max-h-36 overflow-y-auto border border-slate-800 leading-relaxed">
              {zaloTemplate}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 flex items-center justify-end gap-3 bg-slate-50/50 rounded-b-3xl">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-800 hover:bg-slate-900 text-white transition-all shadow-md active:scale-95"
          >
            Đóng & Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
};
