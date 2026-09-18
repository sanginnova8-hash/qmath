import React, { useMemo } from 'react';
import { CheckCircle2 } from 'lucide-react';
import MathView from './MathView';

interface ExplanationViewProps {
  content?: string;
  className?: string;
}

export const ExplanationView: React.FC<ExplanationViewProps> = ({ content = '', className = '' }) => {
  const { correctOption, cleanedBody } = useMemo(() => {
    if (!content) return { correctOption: null, cleanedBody: 'Chưa có lời giải chi tiết.' };

    let body = content.trim();

    // Extract correct answer if present in header
    let correctOption: string | null = null;
    const answerMatch = body.match(/\*\*Đáp\s*án\s*đúng:\s*([A-D]|None)\*\*/i) ||
                        body.match(/Đáp\s*án\s*đúng:\s*([A-D]|None)/i);

    if (answerMatch) {
      correctOption = answerMatch[1].toUpperCase();
      // Remove the matched answer line from body
      body = body.replace(answerMatch[0], '').trim();
    }

    // Remove redundant leading headers like "**Lời giải chi tiết:**" or "**Hướng dẫn giải:**"
    body = body.replace(/^\s*\*\*(?:Lời\s*giải\s*chi\s*tiết|Hướng\s*dẫn\s*giải):?\*\*\s*/i, '');
    body = body.replace(/^\s*(?:Lời\s*giải\s*chi\s*tiết|Hướng\s*dẫn\s*giải):?\s*/i, '');
    body = body.trim();

    // If body becomes empty
    if (!body) {
      body = 'Dựa vào kiến thức lý thuyết và phương pháp giải đã học để suy ra kết quả.';
    }

    return { correctOption, cleanedBody: body };
  }, [content]);

  return (
    <div className={`space-y-3 ${className}`}>
      {correctOption && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-100/90 text-emerald-900 border border-emerald-300/80 shadow-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
          <span className="text-xs sm:text-sm font-bold">Đáp án chính xác:</span>
          <span className="w-6 h-6 rounded-md bg-emerald-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shadow-xs">
            {correctOption === 'NONE' ? '—' : correctOption}
          </span>
        </div>
      )}

      <div className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal bg-white/70 p-3 sm:p-4 rounded-xl border border-emerald-100/80 shadow-xs">
        <MathView content={cleanedBody} />
      </div>
    </div>
  );
};

export default ExplanationView;
