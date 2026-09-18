import React, { useMemo } from 'react';
import katex from 'katex';
import { cleanLatexString } from '../../utils/latexCleaner';

interface MathViewProps {
  content: string;
  images?: string[];
  className?: string;
  block?: boolean;
}

export const MathView: React.FC<MathViewProps> = ({ content, images, className = '', block = false }) => {
  const renderedHtml = useMemo(() => {
    if (!content) return '';

    if (block) {
      try {
        const cleaned = cleanLatexString(content);
        return katex.renderToString(cleaned, {
          displayMode: true,
          throwOnError: false
        });
      } catch (e) {
        return content;
      }
    }

    // Process markdown images: ![alt](url) - Supports local, external and GitHub Pages relative paths
    const imgTokens: { token: string; html: string }[] = [];
    const base = import.meta.env.BASE_URL || './';
    const normalizedBase = base.endsWith('/') ? base : base + '/';

    let processedContent = content.replace(
      /!\[(.*?)\]\(([^)]+)\)/g,
      (_, alt, src) => {
        const tokenId = `___MATH_IMG_${imgTokens.length}___`;
        let cleanSrc = src.trim();

        if (cleanSrc.startsWith('/imported_images/')) {
          cleanSrc = normalizedBase + cleanSrc.slice(1);
        } else if (cleanSrc.startsWith('./imported_images/')) {
          cleanSrc = normalizedBase + cleanSrc.slice(2);
        } else if (cleanSrc.startsWith('imported_images/')) {
          cleanSrc = normalizedBase + cleanSrc;
        }

        const isGenericCaption = !alt || alt.trim() === 'Hình vẽ' || alt.trim() === 'Hình vẽ minh họa' || alt.trim().toLowerCase().startsWith('image');
        const captionHtml = isGenericCaption ? '' : `<span class="text-xs text-slate-500 mt-1.5 italic font-medium">${alt}</span>`;

        imgTokens.push({
          token: tokenId,
          html: `<div class="my-3.5 flex flex-col items-center justify-center"><img src="${cleanSrc}" alt="${alt || 'Hình vẽ minh họa'}" loading="lazy" class="max-h-72 sm:max-h-80 max-w-full rounded-2xl border border-slate-200/80 shadow-xs bg-white p-2.5 hover:shadow-md transition-all object-contain" />${captionHtml}</div>`
        });
        return tokenId;
      }
    );

    // Split text by $$...$$ (display math) and $...$ (inline math)
    const tokens = processedContent.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);

    let html = tokens
      .map((token) => {
        if (token.startsWith('$$') && token.endsWith('$$')) {
          const math = cleanLatexString(token.slice(2, -2));
          try {
            return katex.renderToString(math, {
              displayMode: true,
              throwOnError: false
            });
          } catch (e) {
            return `<span class="font-serif italic">${math}</span>`;
          }
        } else if (token.startsWith('$') && token.endsWith('$')) {
          const math = cleanLatexString(token.slice(1, -1));
          try {
            return katex.renderToString(math, {
              displayMode: false,
              throwOnError: false
            });
          } catch (e) {
            return `<span class="font-serif italic">${math}</span>`;
          }
        } else {
          // Normal text: escape HTML, parse markdown bold/italic, and preserve line breaks
          let text = token
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

          // Parse markdown bold: **text**
          text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>');

          // Parse markdown italic: *text*
          text = text.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '<em class="italic text-slate-800">$1</em>');

          // Clean stray asterisks if any remain
          text = text.replace(/\*\*/g, '');

          return text.replace(/\n/g, '<br/>');
        }
      })
      .join('');

    // Restore embedded images
    imgTokens.forEach((item) => {
      html = html.replace(item.token, item.html);
    });

    // If standalone images are provided and not yet embedded in content
    if (images && images.length > 0) {
      const extraImgs = images.filter((img) => !content.includes(img));
      if (extraImgs.length > 0) {
        const extraHtml = extraImgs
          .map((src) => {
            let cleanSrc = src.trim();
            if (cleanSrc.startsWith('/imported_images/')) {
              cleanSrc = normalizedBase + cleanSrc.slice(1);
            } else if (cleanSrc.startsWith('./imported_images/')) {
              cleanSrc = normalizedBase + cleanSrc.slice(2);
            } else if (cleanSrc.startsWith('imported_images/')) {
              cleanSrc = normalizedBase + cleanSrc;
            }
            return `<div class="my-3.5 flex flex-col items-center justify-center"><img src="${cleanSrc}" alt="Hình vẽ minh họa" loading="lazy" class="max-h-72 sm:max-h-80 max-w-full rounded-2xl border border-slate-200/80 shadow-xs bg-white p-2.5 hover:shadow-md transition-all object-contain" /></div>`;
          })
          .join('');
        html += extraHtml;
      }
    }

    return html;
  }, [content, images, block]);

  return (
    <div
      className={`math-content inline leading-relaxed ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};

export default MathView;
