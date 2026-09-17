import React, { useMemo } from 'react';
import katex from 'katex';
import { cleanLatexString } from '../../utils/latexCleaner';

interface MathViewProps {
  content: string;
  className?: string;
  block?: boolean;
}

export const MathView: React.FC<MathViewProps> = ({ content, className = '', block = false }) => {
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
    let processedContent = content.replace(
      /!\[(.*?)\]\(([^)]+)\)/g,
      (_, alt, src) => {
        const tokenId = `___MATH_IMG_${imgTokens.length}___`;
        let cleanSrc = src.trim();
        // Convert absolute /imported_images/ to relative ./imported_images/ for GitHub Pages subpath compatibility
        if (cleanSrc.startsWith('/imported_images/')) {
          cleanSrc = '.' + cleanSrc;
        } else if (cleanSrc.startsWith('imported_images/')) {
          cleanSrc = './' + cleanSrc;
        }

        imgTokens.push({
          token: tokenId,
          html: `<div class="my-3.5 flex flex-col items-center justify-center"><img src="${cleanSrc}" alt="${alt || 'Hình vẽ minh họa'}" class="max-h-72 sm:max-h-80 max-w-full rounded-2xl border border-slate-200/80 shadow-xs bg-white p-2.5 hover:shadow-md transition-all object-contain" /><span class="text-[11px] text-slate-500 mt-1.5 italic font-medium">${alt || 'Hình vẽ minh họa'}</span></div>`
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
          // Normal text: escape HTML and preserve line breaks
          return token
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\n/g, '<br/>');
        }
      })
      .join('');

    // Restore embedded images
    imgTokens.forEach((item) => {
      html = html.replace(item.token, item.html);
    });

    return html;
  }, [content, block]);

  return (
    <div
      className={`math-content inline leading-relaxed ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};

export default MathView;
