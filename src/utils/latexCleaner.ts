// Standard LaTeX sanitizer matching standards from D:\TOAN\SOẠN TÀI LIỆU DẠY THÊM\GEMINI.md
export const cleanLatexString = (latex: string): string => {
  if (!latex) return '';
  let s = latex;

  // 1. Remove Private Use Area and invisible characters / non-breaking space
  s = s.replace(/[\uEF00-\uEFFF\u200B\u00A0]/g, ' ');

  // 2. Fix \overset\rightarrow { ... } to \overrightarrow{...}
  s = s.replace(/\\overset\s*(?:\{\s*)?\\rightarrow(?:\s*\})?\s*\{([^{}]+)\}/g, '\\overrightarrow{$1}');

  // 3. Fix postfix vector notation: e.g. "a \vec" -> "\vec{a}", "n \vec _{ 3 }" -> "\vec{n}_{3}"
  s = s.replace(/([a-zA-Z0-9']+)\s*\\vec\s*(_\s*\{[^}]+\}|_[0-9a-zA-Z])?/g, (_, sym, sub) => `\\vec{${sym}}${sub || ''}`);
  s = s.replace(/\\vec(?![a-zA-Z{])/g, '');

  // 4. Auto-prefix missing backslash for standard math functions
  s = s.replace(/(?<!\\)\b(cos|sin|tan|cot|log|ln|lim|min|max)\b/g, '\\$1');

  // 5. Clean MathType \rm
  s = s.replace(/\\rm\s*\{\s*\\?\s*\}/g, ' ');
  s = s.replace(/\{\s*\\rm\s*\{?\s*([^}]*?)\s*\}?\s*\}/g, '\\mathrm{$1}');
  s = s.replace(/\\rm\b/g, '\\mathrm');

  // 6. Fix \left \begin{array} -> \left. \begin{array}
  s = s.replace(/\\left\s+\\begin/g, '\\left. \\begin');

  // 7. Fix double backslash before \left
  s = s.replace(/\\{2,}\s*left(?=\s*\\?[\[({])/g, '\\setminus \\left');
  s = s.replace(/\\{2,}\s*\\\{/g, '\\setminus \\{');

  // 8. Clean redundant nested braces from MathType: \left ( { ... } \right )
  s = s.replace(/\\left\s*\(\s*\{\s*([^{}]+?)\s*\}\s*\\right\s*\)/g, '\\left( $1 \\right)');
  s = s.replace(/\\left\s*\[\s*\{\s*([^{}]+?)\s*\}\s*\\right\s*\]/g, '\\left[ $1 \\right]');
  s = s.replace(/\\left\s*\\\{\s*\{\s*([^{}]+?)\s*\}\s*\\right\s*\\\} /g, '\\left\\{ $1 \\right\\}');

  // 9. Map Unicode math symbols to standard LaTeX ASCII
  const symbolMap: Record<string, string> = {
    '≤': ' \\le ',
    '≥': ' \\ge ',
    '≠': ' \\ne ',
    '∈': ' \\in ',
    '∉': ' \\notin ',
    '⊂': ' \\subset ',
    '⊃': ' \\supset ',
    '∪': ' \\cup ',
    '∩': ' \\cap ',
    '∅': ' \\emptyset ',
    '∀': ' \\forall ',
    '∃': ' \\exists ',
    '∞': ' \\infty ',
    '⊥': ' \\perp ',
    '⋅': ' \\cdot ',
    '×': ' \\times ',
    '±': ' \\pm ',
    '∫': ' \\int ',
    'ℝ': ' \\mathbb{R} ',
    'π': ' \\pi ',
    'α': ' \\alpha ',
    'β': ' \\beta ',
    'γ': ' \\gamma ',
    'Δ': ' \\Delta ',
    'δ': ' \\delta ',
    'λ': ' \\lambda ',
    'θ': ' \\theta ',
    'φ': ' \\varphi ',
    'ω': ' \\omega ',
    '°': '^\\circ ',
    '–': '-',
    '—': '-',
    '′': "'",
    '→': ' \\rightarrow ',
    '⇒': ' \\Rightarrow ',
    '⇔': ' \\Leftrightarrow '
  };

  for (const [char, replacement] of Object.entries(symbolMap)) {
    if (s.includes(char)) {
      s = s.split(char).join(replacement);
    }
  }

  // 10. Balance \left and \right to avoid KaTeX parse errors
  const leftMatches = s.match(/\\left\b/g);
  const rightMatches = s.match(/\\right\b/g);
  const leftCount = leftMatches ? leftMatches.length : 0;
  const rightCount = rightMatches ? rightMatches.length : 0;

  if (leftCount > rightCount) {
    s = s + ' \\right.'.repeat(leftCount - rightCount);
  } else if (rightCount > leftCount) {
    s = '\\left. '.repeat(rightCount - leftCount) + s;
  }

  return s.trim();
};
