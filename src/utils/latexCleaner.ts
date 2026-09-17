// Fast LaTeX sanitizer matching standards from D:\TOAN\SOẠN TÀI LIỆU DẠY THÊM\GEMINI.md
export const cleanLatexString = (latex: string): string => {
  if (!latex) return '';
  let s = latex;

  // 1. Remove Private Use Area and invisible characters / non-breaking space
  s = s.replace(/[\uEF00-\uEFFF\u200B\u00A0]/g, ' ');

  // 2. Fix \overset\rightarrow { ... } to \overrightarrow{...}
  s = s.replace(/\\overset\s*(?:\{\s*)?\\rightarrow(?:\s*\})?\s*\{([^{}]+)\}/g, '\\overrightarrow{$1}');
  s = s.replace(/\\overset\s*(?:\{\s*)?\\rightarrow(?:\s*\})?\s*\{([^{}]+(?:\{[^{}]*\}[^{}]*)*)\}/g, '\\overrightarrow{$1}');

  // 3. Fix postfix vector notation: e.g. "a \vec" -> "\vec{a}", "n \vec _{ 3 }" -> "\vec{n}_{3}"
  s = s.replace(/([a-zA-Z0-9']+)\s*\\vec\s*(_\s*\{[^}]+\}|_[0-9a-zA-Z])?/g, (_, sym, sub) => `\\vec{${sym}}${sub || ''}`);
  s = s.replace(/\\vec(?![a-zA-Z{])/g, '');

  // 4. Fix \left \begin{array} -> \left. \begin{array}
  s = s.replace(/\\left\s+\\begin/g, '\\left. \\begin');

  // 5. Fix double backslash before \left (e.g. \mathbb{R}\\left[ -> \mathbb{R}\setminus \left[)
  s = s.replace(/\\{2,}\s*left(?=\s*\\?[\[({])/g, '\\setminus \\left');
  s = s.replace(/\\{2,}\s*\\\{/g, '\\setminus \\{');

  // 6. Clean malformed empty arrays
  s = s.replace(/\\begin\{array\}\s*\{\}\s*(?:\\begin\{array\}\s*\{\}\s*)*\\end\{array\}/g, '');

  // 7. Fix \| delimiter
  s = s.replace(/\\\|/g, ' \\mid ');

  // 8. Map Unicode math symbols to standard LaTeX ASCII
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

  // 9. Fix Vietnamese 'Đ' in math mode
  s = s.replace(/(?<![a-zA-Z\\])Đ(?![a-zA-Z])/g, '\\text{Đ}');

  // 10. Clean redundant nested braces from MathType: \left ( { ... } \right )
  s = s.replace(/\\left\s*\(\s*\{\s*([^{}]+?)\s*\}\s*\\right\s*\)/g, '\\left( $1 \\right)');
  s = s.replace(/\\left\s*\[\s*\{\s*([^{}]+?)\s*\}\s*\\right\s*\]/g, '\\left[ $1 \\right]');
  s = s.replace(/\\left\s*\\\{\s*\{\s*([^{}]+?)\s*\}\s*\\right\s*\\\}/g, '\\left\\{ $1 \\right\\}');

  return s.trim();
};
