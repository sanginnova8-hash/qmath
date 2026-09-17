import JSZip from 'jszip';
import { Question, QuestionType, DifficultyLevel, AnswerKey } from '../types';

export interface ParsedQuestionItem {
  id: string;
  type: QuestionType;
  grade: 10 | 11 | 12;
  chapter: string;
  topic: string;
  difficulty: DifficultyLevel;
  content: string;
  options?: { id: 'A' | 'B' | 'C' | 'D'; text: string }[];
  subItems?: { id: 'a' | 'b' | 'c' | 'd'; statement: string }[];
  correctOption?: 'A' | 'B' | 'C' | 'D';
  correctSubItems?: { a: boolean; b: boolean; c: boolean; d: boolean };
  shortAnswer?: string;
  explanation: string;
  images: string[];
}

/**
 * Converts OMML Math node to standard LaTeX string
 */
export function ommlToLatex(node: Element): string {
  const nodeName = node.localName || node.nodeName;

  switch (nodeName) {
    case 'oMath':
    case 'oMathPara': {
      let latex = '';
      for (let i = 0; i < node.childNodes.length; i++) {
        const child = node.childNodes[i];
        if (child.nodeType === Node.ELEMENT_NODE) {
          latex += ommlToLatex(child as Element);
        }
      }
      return latex;
    }

    case 'r': { // Run inside math
      let text = '';
      const tElements = node.getElementsByTagNameNS('*', 't');
      for (let i = 0; i < tElements.length; i++) {
        text += tElements[i].textContent || '';
      }
      if (!text) text = node.textContent || '';
      return text;
    }

    case 't': { // Text node
      return node.textContent || '';
    }

    case 'f': { // Fraction \frac{num}{den}
      const numNode = node.getElementsByTagNameNS('*', 'num')[0];
      const denNode = node.getElementsByTagNameNS('*', 'den')[0];
      const num = numNode ? ommlToLatex(numNode) : '';
      const den = denNode ? ommlToLatex(denNode) : '';
      return `\\frac{${num}}{${den}}`;
    }

    case 'rad': { // Radical / square root \sqrt[deg]{e}
      const degNode = node.getElementsByTagNameNS('*', 'deg')[0];
      const eNode = node.getElementsByTagNameNS('*', 'e')[0];
      const deg = degNode ? ommlToLatex(degNode).trim() : '';
      const e = eNode ? ommlToLatex(eNode) : '';
      return deg ? `\\sqrt[${deg}]{${e}}` : `\\sqrt{${e}}`;
    }

    case 'sSup': { // Superscript e^{sup}
      const eNode = node.getElementsByTagNameNS('*', 'e')[0];
      const supNode = node.getElementsByTagNameNS('*', 'sup')[0];
      const e = eNode ? ommlToLatex(eNode) : '';
      const sup = supNode ? ommlToLatex(supNode) : '';
      return `{${e}}^{${sup}}`;
    }

    case 'sSub': { // Subscript e_{sub}
      const eNode = node.getElementsByTagNameNS('*', 'e')[0];
      const subNode = node.getElementsByTagNameNS('*', 'sub')[0];
      const e = eNode ? ommlToLatex(eNode) : '';
      const sub = subNode ? ommlToLatex(subNode) : '';
      return `{${e}}_{${sub}}`;
    }

    case 'sSubSup': { // Sub-Superscript e_{sub}^{sup}
      const eNode = node.getElementsByTagNameNS('*', 'e')[0];
      const subNode = node.getElementsByTagNameNS('*', 'sub')[0];
      const supNode = node.getElementsByTagNameNS('*', 'sup')[0];
      const e = eNode ? ommlToLatex(eNode) : '';
      const sub = subNode ? ommlToLatex(subNode) : '';
      const sup = supNode ? ommlToLatex(supNode) : '';
      return `{${e}}_{${sub}}^{${sup}}`;
    }

    case 'd': { // Delimiters (brackets, parentheses, bars)
      let beg = '(';
      let end = ')';
      const dPr = node.getElementsByTagNameNS('*', 'dPr')[0];
      if (dPr) {
        const begChr = dPr.getElementsByTagNameNS('*', 'begChr')[0];
        const endChr = dPr.getElementsByTagNameNS('*', 'endChr')[0];
        if (begChr && begChr.getAttribute('m:val')) beg = begChr.getAttribute('m:val')!;
        if (endChr && endChr.getAttribute('m:val')) end = endChr.getAttribute('m:val')!;
      }
      const eNode = node.getElementsByTagNameNS('*', 'e')[0];
      const e = eNode ? ommlToLatex(eNode) : '';

      if (beg === '|' && end === '|') return `\\left|${e}\\right|`;
      if (beg === '[' && end === ']') return `\\left[${e}\\right]`;
      if (beg === '{' && end === '}') return `\\left\\{${e}\\right\\}`;
      return `\\left(${e}\\right)`;
    }

    case 'limLow': { // Limit \lim_{lim} e
      const eNode = node.getElementsByTagNameNS('*', 'e')[0];
      const limNode = node.getElementsByTagNameNS('*', 'lim')[0];
      const e = eNode ? ommlToLatex(eNode) : '';
      const lim = limNode ? ommlToLatex(limNode) : '';
      return `\\lim_{${lim}} ${e}`;
    }

    case 'nary': { // Integral or Summation
      let char = '\\int';
      const naryPr = node.getElementsByTagNameNS('*', 'naryPr')[0];
      if (naryPr) {
        const chr = naryPr.getElementsByTagNameNS('*', 'chr')[0];
        if (chr && chr.getAttribute('m:val')) {
          const val = chr.getAttribute('m:val');
          if (val === '∑') char = '\\sum';
          else if (val === '∏') char = '\\prod';
        }
      }
      const subNode = node.getElementsByTagNameNS('*', 'sub')[0];
      const supNode = node.getElementsByTagNameNS('*', 'sup')[0];
      const eNode = node.getElementsByTagNameNS('*', 'e')[0];

      const sub = subNode ? ommlToLatex(subNode) : '';
      const sup = supNode ? ommlToLatex(supNode) : '';
      const e = eNode ? ommlToLatex(eNode) : '';

      let res = char;
      if (sub) res += `_{${sub}}`;
      if (sup) res += `^{${sup}}`;
      res += ` ${e}`;
      return res;
    }

    case 'acc': { // Accents / Vector
      let char = '\\vec';
      const accPr = node.getElementsByTagNameNS('*', 'accPr')[0];
      if (accPr) {
        const chr = accPr.getElementsByTagNameNS('*', 'chr')[0];
        if (chr && chr.getAttribute('m:val')) {
          const val = chr.getAttribute('m:val');
          if (val === '¯' || val === '-') char = '\\overline';
          else if (val === '^') char = '\\hat';
        }
      }
      const eNode = node.getElementsByTagNameNS('*', 'e')[0];
      const e = eNode ? ommlToLatex(eNode) : '';
      return `${char}{${e}}`;
    }

    case 'func': { // Function name (sin, cos, log...)
      const fNameNode = node.getElementsByTagNameNS('*', 'fName')[0];
      const eNode = node.getElementsByTagNameNS('*', 'e')[0];
      const fName = fNameNode ? ommlToLatex(fNameNode).trim() : '';
      const e = eNode ? ommlToLatex(eNode) : '';
      return `\\${fName}(${e})`;
    }

    default: {
      let text = '';
      for (let i = 0; i < node.childNodes.length; i++) {
        const child = node.childNodes[i];
        if (child.nodeType === Node.ELEMENT_NODE) {
          text += ommlToLatex(child as Element);
        } else if (child.nodeType === Node.TEXT_NODE) {
          text += child.textContent || '';
        }
      }
      return text;
    }
  }
}

/**
 * Extracts images and XML content from a DOCX file using JSZip
 */
export async function extractDocxContent(file: File): Promise<{ fullText: string; imagesMap: Record<string, string> }> {
  const zip = new JSZip();
  const zipContent = await zip.loadAsync(file);

  // 1. Parse Relationships in word/_rels/document.xml.rels
  const relsXmlStr = await zipContent.file('word/_rels/document.xml.rels')?.async('text');
  const relsMap: Record<string, string> = {}; // rId -> media/imageX.png

  if (relsXmlStr) {
    const parser = new DOMParser();
    const relsDoc = parser.parseFromString(relsXmlStr, 'application/xml');
    const rels = relsDoc.getElementsByTagName('Relationship');
    for (let i = 0; i < rels.length; i++) {
      const id = rels[i].getAttribute('Id');
      const target = rels[i].getAttribute('Target');
      const type = rels[i].getAttribute('Type');
      if (id && target && (type?.includes('image') || target.includes('media/'))) {
        // target may be "media/image1.png" or "../media/image1.png"
        const cleanTarget = target.replace(/^\.\.\//, '').replace(/^word\//, '');
        relsMap[id] = cleanTarget;
      }
    }
  }

  // 2. Extract media images into Base64 Data URLs
  const imagesMap: Record<string, string> = {}; // rId -> data:image/png;base64,...
  for (const [rId, target] of Object.entries(relsMap)) {
    const mediaPath = target.startsWith('media/') ? `word/${target}` : `word/media/${target}`;
    const mediaFile = zipContent.file(mediaPath) || zipContent.file(`word/${target}`);
    if (mediaFile) {
      const ext = target.split('.').pop()?.toLowerCase() || 'png';
      let mime = 'image/png';
      if (ext === 'jpg' || ext === 'jpeg') mime = 'image/jpeg';
      else if (ext === 'gif') mime = 'image/gif';
      else if (ext === 'svg') mime = 'image/svg+xml';

      const base64 = await mediaFile.async('base64');
      imagesMap[rId] = `data:${mime};base64,${base64}`;
    }
  }

  // 3. Parse word/document.xml
  const docXmlStr = await zipContent.file('word/document.xml')?.async('text');
  if (!docXmlStr) {
    throw new Error('Tệp docx không hợp lệ hoặc không tìm thấy word/document.xml');
  }

  const parser = new DOMParser();
  const docXml = parser.parseFromString(docXmlStr, 'application/xml');

  // Traverse paragraphs <w:p>
  const paragraphs = docXml.getElementsByTagNameNS('*', 'p');
  const textLines: string[] = [];

  for (let i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i];
    let pText = '';

    for (let j = 0; j < p.childNodes.length; j++) {
      const child = p.childNodes[j] as Element;
      if (child.nodeType !== Node.ELEMENT_NODE) continue;

      const tag = child.localName || child.nodeName;

      // Handle OMML Math: <m:oMath> or <m:oMathPara>
      if (tag === 'oMath' || tag === 'oMathPara') {
        const rawLatex = ommlToLatex(child).trim();
        if (rawLatex) {
          // If already wrapped in $, avoid double wrapping
          if (rawLatex.startsWith('$') && rawLatex.endsWith('$')) {
            pText += ` ${rawLatex} `;
          } else {
            pText += ` $${rawLatex}$ `;
          }
        }
      }
      // Handle normal text run <w:r>
      else if (tag === 'r') {
        // Check for embedded drawing/image inside <w:r>
        const blips = child.getElementsByTagNameNS('*', 'blip');
        for (let b = 0; b < blips.length; b++) {
          const embedId = blips[b].getAttribute('r:embed') || blips[b].getAttributeNS('*', 'embed');
          if (embedId && imagesMap[embedId]) {
            pText += `\n\n![Hình vẽ](${imagesMap[embedId]})\n\n`;
          }
        }

        // Check for VML imagedata
        const imgDatas = child.getElementsByTagNameNS('*', 'imagedata');
        for (let im = 0; im < imgDatas.length; im++) {
          const id = imgDatas[im].getAttribute('r:id') || imgDatas[im].getAttributeNS('*', 'id');
          if (id && imagesMap[id]) {
            pText += `\n\n![Hình vẽ](${imagesMap[id]})\n\n`;
          }
        }

        // Check for MathType object / OLE / alternate text
        const tElems = child.getElementsByTagNameNS('*', 't');
        for (let t = 0; t < tElems.length; t++) {
          pText += tElems[t].textContent || '';
        }
      }
      // Direct drawing at paragraph level
      else if (tag === 'drawing') {
        const blips = child.getElementsByTagNameNS('*', 'blip');
        for (let b = 0; b < blips.length; b++) {
          const embedId = blips[b].getAttribute('r:embed') || blips[b].getAttributeNS('*', 'embed');
          if (embedId && imagesMap[embedId]) {
            pText += `\n\n![Hình vẽ](${imagesMap[embedId]})\n\n`;
          }
        }
      }
    }

    if (pText.trim()) {
      textLines.push(pText.trim());
    }
  }

  return {
    fullText: textLines.join('\n'),
    imagesMap
  };
}

/**
 * Parses raw text extracted from Vietnamese Math exam DOCX into structured Question items
 */
export function parseMathExamText(
  fullText: string,
  defaultGrade: 10 | 11 | 12 = 12,
  defaultChapter: string = 'Khảo sát hàm số'
): ParsedQuestionItem[] {
  // Normalize line breaks
  const clean = fullText.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  // Split by Question markers: "Câu 1:", "Câu 2.", "Bài 1:", "[NB] Câu 1:"
  const questionRegex = /(?:^|\n)(?:\[(NB|TH|VD|VDC)\]\s*)?(?:Câu|Bài)\s*(\d+)[\s.:\-–]/gi;

  const matches: { index: number; qNum: string; diffTag?: string }[] = [];
  let match;
  while ((match = questionRegex.exec(clean)) !== null) {
    matches.push({
      index: match.index,
      qNum: match[2],
      diffTag: match[1]?.toUpperCase()
    });
  }

  // If no "Câu X:" markers found, try splitting by sections or blank paragraphs
  const questionBlocks: { raw: string; diffTag?: string }[] = [];

  if (matches.length > 0) {
    for (let i = 0; i < matches.length; i++) {
      const start = matches[i].index;
      const end = i + 1 < matches.length ? matches[i + 1].index : clean.length;
      questionBlocks.push({
        raw: clean.slice(start, end).trim(),
        diffTag: matches[i].diffTag
      });
    }
  } else {
    // Fallback: split by double newlines if no "Câu" marker
    const chunks = clean.split(/\n\s*\n/);
    chunks.forEach(ch => {
      if (ch.trim().length > 20) {
        questionBlocks.push({ raw: ch.trim() });
      }
    });
  }

  const results: ParsedQuestionItem[] = [];

  questionBlocks.forEach((block, idx) => {
    const raw = block.raw;

    // Detect difficulty level
    let difficulty: DifficultyLevel = 'TH';
    if (block.diffTag && ['NB', 'TH', 'VD', 'VDC'].includes(block.diffTag)) {
      difficulty = block.diffTag as DifficultyLevel;
    } else if (raw.includes('[NB]') || raw.toLowerCase().includes('nhận biết')) difficulty = 'NB';
    else if (raw.includes('[TH]') || raw.toLowerCase().includes('thông hiểu')) difficulty = 'TH';
    else if (raw.includes('[VD]') || raw.toLowerCase().includes('vận dụng')) difficulty = 'VD';
    else if (raw.includes('[VDC]') || raw.toLowerCase().includes('vận dụng cao')) difficulty = 'VDC';

    // Separate Explanation if present ("Lời giải:", "Hướng dẫn giải:", "HDG:")
    let questionPart = raw;
    let explanation = 'Chưa có lời giải chi tiết.';

    const explMatch = raw.match(/(?:Lời giải|Hướng dẫn giải|HDG|Giải chi tiết)[\s.:\-–]([\s\S]*)$/i);
    if (explMatch) {
      explanation = explMatch[1].trim();
      questionPart = raw.slice(0, explMatch.index).trim();
    }

    // Extract any embedded images
    const images: string[] = [];
    const imgRegex = /!\[.*?\]\((data:image\/[^;]+;base64,[^)]+)\)/g;
    let im;
    while ((im = imgRegex.exec(questionPart)) !== null) {
      images.push(im[1]);
    }

    // Determine Question Type:
    // Check if True/False: has "a)", "b)", "c)", "d)"
    const hasTf = /a\)\s*[\s\S]+?b\)\s*[\s\S]+?c\)\s*[\s\S]+?d\)/i.test(questionPart);

    // Check if MCQ: has "A.", "B.", "C.", "D."
    const hasMcq = /[A-D]\.\s*[\s\S]+?[B-D]\.\s*[\s\S]+?[C-D]\.\s*[\s\S]+?D\./i.test(questionPart);

    let type: QuestionType = 'MCQ';
    let options: { id: 'A' | 'B' | 'C' | 'D'; text: string }[] | undefined;
    let subItems: { id: 'a' | 'b' | 'c' | 'd'; statement: string }[] | undefined;
    let correctOption: 'A' | 'B' | 'C' | 'D' | undefined;
    let correctSubItems: { a: boolean; b: boolean; c: boolean; d: boolean } | undefined;
    let shortAnswer: string | undefined;

    let contentText = questionPart;

    if (hasTf) {
      type = 'TRUE_FALSE';
      // Split content and sub-items
      const tfStart = questionPart.search(/a\)\s*/i);
      if (tfStart > 0) {
        contentText = questionPart.slice(0, tfStart).trim();
        const subText = questionPart.slice(tfStart);

        const subA = subText.match(/a\)\s*([\s\S]*?)(?=b\)\s*|$)/i);
        const subB = subText.match(/b\)\s*([\s\S]*?)(?=c\)\s*|$)/i);
        const subC = subText.match(/c\)\s*([\s\S]*?)(?=d\)\s*|$)/i);
        const subD = subText.match(/d\)\s*([\s\S]*)$/i);

        const cleanStmt = (txt?: string) => (txt || '').replace(/\((Đúng|Sai|Đ|S)\)/gi, '').trim();

        subItems = [
          { id: 'a', statement: cleanStmt(subA?.[1]) },
          { id: 'b', statement: cleanStmt(subB?.[1]) },
          { id: 'c', statement: cleanStmt(subC?.[1]) },
          { id: 'd', statement: cleanStmt(subD?.[1]) }
        ];

        // Check if answer keys are embedded: "a) ... (Đúng)"
        correctSubItems = {
          a: /Đúng|Đ/i.test(subA?.[1] || ''),
          b: /Đúng|Đ/i.test(subB?.[1] || ''),
          c: /Đúng|Đ/i.test(subC?.[1] || ''),
          d: /Đúng|Đ/i.test(subD?.[1] || '')
        };
      }
    } else if (hasMcq) {
      type = 'MCQ';
      // Find start of option A.
      const mcqStart = questionPart.search(/[A-D]\.\s*/i);
      if (mcqStart > 0) {
        contentText = questionPart.slice(0, mcqStart).trim();
        const optText = questionPart.slice(mcqStart);

        const optA = optText.match(/A\.\s*([\s\S]*?)(?=B\.\s*|$)/i);
        const optB = optText.match(/B\.\s*([\s\S]*?)(?=C\.\s*|$)/i);
        const optC = optText.match(/C\.\s*([\s\S]*?)(?=D\.\s*|$)/i);
        const optD = optText.match(/D\.\s*([\s\S]*)$/i);

        options = [
          { id: 'A', text: (optA?.[1] || '').trim() },
          { id: 'B', text: (optB?.[1] || '').trim() },
          { id: 'C', text: (optC?.[1] || '').trim() },
          { id: 'D', text: (optD?.[1] || '').trim() }
        ];

        // Check if any option is marked as correct with * or "Chọn A"
        const optKeys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
        for (const k of optKeys) {
          const opt = options.find(o => o.id === k);
          if (opt && (opt.text.startsWith('*') || opt.text.endsWith('*'))) {
            correctOption = k;
            opt.text = opt.text.replace(/\*/g, '').trim();
            break;
          }
        }

        // Check in explanation or bottom for "Chọn [A-D]" or "Đáp án: [A-D]"
        if (!correctOption) {
          const ansMatch = (raw + ' ' + explanation).match(/(?:Chọn|Đáp án|ĐA)[\s.:\-–]*([A-D])/i);
          if (ansMatch) {
            correctOption = ansMatch[1].toUpperCase() as any;
          } else {
            correctOption = 'A'; // Default fallback
          }
        }
      }
    } else {
      type = 'SHORT_ANSWER';
      // Check for numeric / short answer: "Đáp số: 516"
      const ansMatch = (raw + ' ' + explanation).match(/(?:Đáp số|Kết quả|Đáp án)[\s.:\-–]*([0-9.,a-zA-Z^/+-]+)/i);
      if (ansMatch) {
        shortAnswer = ansMatch[1].trim();
      } else {
        shortAnswer = '0';
      }
    }

    // Clean up contentText (remove leading "Câu X:" prefix if repeated)
    contentText = contentText.replace(/^(?:\[(NB|TH|VD|VDC)\]\s*)?(?:Câu|Bài)\s*\d+[\s.:\-–]/i, '').trim();

    results.push({
      id: `q-docx-${Date.now()}-${idx + 1}`,
      type,
      grade: defaultGrade,
      chapter: defaultChapter,
      topic: 'Tài liệu nhập từ Word',
      difficulty,
      content: contentText || 'Nội dung câu hỏi',
      options,
      subItems,
      correctOption,
      correctSubItems,
      shortAnswer,
      explanation,
      images
    });
  });

  return results;
}
