import { Question, AnswerKey, ClassRoom, Assignment, UserProfile } from '../types';

export const INITIAL_TEACHER: UserProfile = {
  id: 'teacher-nguyen-van-a',
  email: 'giaovien@qmath.edu.vn',
  displayName: 'Thầy Nguyễn Văn An',
  role: 'TEACHER',
  school: 'Trường THPT Chuyên Toán',
  createdAt: '2026-01-01T08:00:00.000Z'
};

export const INITIAL_STUDENTS: UserProfile[] = [
  {
    id: 'student-le-bao-nam',
    email: 'nam.lb@student.qmath.edu.vn',
    displayName: 'Lê Bảo Nam',
    role: 'STUDENT',
    grade: 12,
    school: 'Trường THPT Chuyên Toán',
    createdAt: '2026-01-05T08:00:00.000Z'
  },
  {
    id: 'student-tran-thi-mai',
    email: 'mai.tt@student.qmath.edu.vn',
    displayName: 'Trần Thị Mai',
    role: 'STUDENT',
    grade: 12,
    school: 'Trường THPT Chuyên Toán',
    createdAt: '2026-01-05T08:30:00.000Z'
  },
  {
    id: 'student-nguyen-minh-tri',
    email: 'tri.nm@student.qmath.edu.vn',
    displayName: 'Nguyễn Minh Trí',
    role: 'STUDENT',
    grade: 12,
    school: 'Trường THPT Chuyên Toán',
    createdAt: '2026-01-06T09:00:00.000Z'
  }
];

export const INITIAL_CLASSES: ClassRoom[] = [
  {
    id: 'class-12a1',
    name: 'Toán 12A1 — Ôn thi Tốt nghiệp THPT 2026',
    code: 'QM12A1',
    teacherId: 'teacher-nguyen-van-a',
    teacherName: 'Thầy Nguyễn Văn An',
    grade: 12,
    description: 'Lớp bồi dưỡng Chuyên đề Hàm số, Tích phân và Hình học Oxyz định hướng chuẩn cấu trúc 2025-2026.',
    studentCount: 3,
    createdAt: '2026-01-02T10:00:00.000Z'
  },
  {
    id: 'class-11b2',
    name: 'Toán 11B2 — Tổ hợp, Xác suất & Cấp số',
    code: 'QM11B2',
    teacherId: 'teacher-nguyen-van-a',
    teacherName: 'Thầy Nguyễn Văn An',
    grade: 11,
    description: 'Chuyên đề lượng giác và xác suất cổ điển nâng cao.',
    studentCount: 1,
    createdAt: '2026-01-10T14:00:00.000Z'
  }
];

export const INITIAL_QUESTIONS: Question[] = [
  // CÂU 1: MCQ Khảo sát hàm số (Lớp 12)
  {
    id: 'q-math-12-01',
    teacherId: 'teacher-nguyen-van-a',
    type: 'MCQ',
    grade: 12,
    chapter: 'Ứng dụng đạo hàm để khảo sát hàm số',
    topic: 'Cực trị của hàm số',
    difficulty: 'TH',
    content: 'Cho hàm số $y = f(x)$ có đạo hàm $f\'(x) = x(x-1)^2(x+2)^3$ với mọi $x \\in \\mathbb{R}$. Số điểm cực trị của hàm số đã cho là:',
    options: [
      { id: 'A', text: '$1$' },
      { id: 'B', text: '$2$' },
      { id: 'C', text: '$3$' },
      { id: 'D', text: '$5$' }
    ],
    explanation: 'Ta có $f\'(x) = 0 \\Leftrightarrow x = 0,\\; x = 1,\\; x = -2$.\n- Nghiệm $x = 1$ là nghiệm bội chẵn (bội 2) nên $f\'(x)$ không đổi dấu khi qua $x = 1$.\n- Nghiệm $x = 0$ (bội 1) và $x = -2$ (bội 3, bội lẻ) là các nghiệm bội lẻ nên $f\'(x)$ đổi dấu qua hai điểm này.\nVậy hàm số có đúng $2$ điểm cực trị.',
    createdAt: '2026-01-05T09:00:00.000Z'
  },

  // CÂU 2: TRUE_FALSE Chuẩn cấu trúc BGD 2025 (4 ý a,b,c,d) - Lớp 12
  {
    id: 'q-math-12-02',
    teacherId: 'teacher-nguyen-van-a',
    type: 'TRUE_FALSE',
    grade: 12,
    chapter: 'Hình học Oxyz',
    topic: 'Mặt phẳng và đường thẳng trong không gian',
    difficulty: 'VD',
    content: 'Trong không gian $Oxyz$, cho mặt phẳng $(P): 2x - y + 2z - 6 = 0$ và điểm $A(1; -2; 3)$. Xét tính đúng hoặc sai của các mệnh đề sau:',
    subItems: [
      { id: 'a', statement: 'Véctơ pháp tuyến của mặt phẳng $(P)$ là $\\vec{n} = (2; -1; 2)$.' },
      { id: 'b', statement: 'Điểm $A(1; -2; 3)$ thuộc mặt phẳng $(P)$.' },
      { id: 'c', statement: 'Khoảng cách từ điểm $A$ đến mặt phẳng $(P)$ bằng $2$.' },
      { id: 'd', statement: 'Phương trình mặt phẳng $(\\alpha)$ đi qua $A$ và song song với $(P)$ là $2x - y + 2z - 10 = 0$.' }
    ],
    explanation: 'a) Mệnh đề ĐÚNG: $(P)$ có VTPT $\\vec{n} = (2; -1; 2)$.\nb) Mệnh đề SAI: Thay toạ độ $A(1;-2;3)$ vào $(P)$: $2(1) - (-2) + 2(3) - 6 = 2 + 2 + 6 - 6 = 4 \\neq 0$. Vậy $A \\notin (P)$.\nc) Mệnh đề SAI: $d(A, (P)) = \\frac{|2(1) - (-2) + 2(3) - 6|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|4|}{\\sqrt{9}} = \\frac{4}{3} \\neq 2$.\nd) Mệnh đề ĐÚNG: $(\\alpha) \\parallel (P) \\Rightarrow (\\alpha): 2x - y + 2z + D = 0$. Vì $A \\in (\\alpha) \\Rightarrow 2(1) - (-2) + 2(3) + D = 0 \\Leftrightarrow 10 + D = 0 \\Leftrightarrow D = -10$. Vậy $(\\alpha): 2x - y + 2z - 10 = 0$.',
    createdAt: '2026-01-05T09:30:00.000Z'
  },

  // CÂU 3: SHORT_ANSWER (Trả lời ngắn) - Lớp 12 Tích phân
  {
    id: 'q-math-12-03',
    teacherId: 'teacher-nguyen-van-a',
    type: 'SHORT_ANSWER',
    grade: 12,
    chapter: 'Nguyên hàm - Tích phân',
    topic: 'Ứng dụng tích phân tính diện tích hình phẳng',
    difficulty: 'TH',
    content: 'Biết tích phân $\\int_{1}^{2} \\frac{2x+3}{x} \\,dx = a + \\ln b$ với $a, b$ là các số nguyên dương. Tính giá trị của biểu thức $P = a^2 + b^3$.',
    explanation: 'Ta có $\\int_{1}^{2} \\frac{2x+3}{x} \\,dx = \\int_{1}^{2} \\left(2 + \\frac{3}{x}\\right) dx = \\left[2x + 3\\ln|x|\\right]_1^2 = (4 + 3\\ln 2) - 2 = 2 + 3\\ln 2 = 2 + \\ln(2^3) = 2 + \\ln 8$.\nDo đó $a = 2$ và $b = 8$.\nVậy $P = a^2 + b^3 = 2^2 + 8^3 = 4 + 512 = 516$.',
    createdAt: '2026-01-05T10:00:00.000Z'
  },

  // CÂU 4: MCQ Tiệm cận hàm số (Lớp 12)
  {
    id: 'q-math-12-04',
    teacherId: 'teacher-nguyen-van-a',
    type: 'MCQ',
    grade: 12,
    chapter: 'Ứng dụng đạo hàm để khảo sát hàm số',
    topic: 'Đường tiệm cận của đồ thị hàm số',
    difficulty: 'NB',
    content: 'Đồ thị hàm số $y = \\frac{2x - 1}{x + 3}$ có phương trình đường tiệm cận ngang là:',
    options: [
      { id: 'A', text: '$y = 2$' },
      { id: 'B', text: '$x = -3$' },
      { id: 'C', text: '$y = -\\frac{1}{3}$' },
      { id: 'D', text: '$x = 2$' }
    ],
    explanation: 'Ta có $\\lim_{x \\to \\pm\\infty} y = \\lim_{x \\to \\pm\\infty} \\frac{2 - \\frac{1}{x}}{1 + \\frac{3}{x}} = 2$.\nVậy đường tiệm cận ngang là $y = 2$.',
    createdAt: '2026-01-06T08:00:00.000Z'
  },

  // CÂU 5: TRUE_FALSE Xác suất cổ điển (Lớp 11)
  {
    id: 'q-math-11-01',
    teacherId: 'teacher-nguyen-van-a',
    type: 'TRUE_FALSE',
    grade: 11,
    chapter: 'Một số yếu tố xác suất',
    topic: 'Biến cố hợp, biến cố giao và xác suất có điều kiện',
    difficulty: 'TH',
    content: 'Gieo ngẫu nhiên một con xúc xắc cân đối và đồng chất hai lần liên tiếp. Gọi biến cố $A$: "Tổng số chấm xuất hiện trong hai lần gieo bằng $7$", biến cố $B$: "Lần gieo thứ nhất xuất hiện mặt $4$ chấm". Xét tính đúng hoặc sai:',
    subItems: [
      { id: 'a', statement: 'Số phần tử của không gian mẫu $n(\\Omega) = 36$.' },
      { id: 'b', statement: 'Biến cố $A$ gồm đúng $6$ phần tử.' },
      { id: 'c', statement: 'Xác suất của biến cố $A$ là $P(A) = \\frac{1}{6}$.' },
      { id: 'd', statement: 'Xác suất để tổng số chấm bằng $7$ biết lần đầu ra mặt $4$ chấm là $P(A|B) = \\frac{1}{3}$.' }
    ],
    explanation: 'a) ĐÚNG: $n(\\Omega) = 6 \\times 6 = 36$.\nb) ĐÚNG: $A = \\{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\\} \\Rightarrow n(A) = 6$.\nc) ĐÚNG: $P(A) = \\frac{6}{36} = \\frac{1}{6}$.\nd) SAI: $B = \\{(4,1),(4,2),(4,3),(4,4),(4,5),(4,6)\\} \\Rightarrow n(B) = 6$. Giao $A \\cap B = \\{(4,3)\\}$. Khi đó $P(A|B) = \\frac{1}{6} \\neq \\frac{1}{3}$.',
    createdAt: '2026-01-06T09:00:00.000Z'
  },

  // CÂU 6: SHORT_ANSWER Vận dụng cao hình không gian (Lớp 12)
  {
    id: 'q-math-12-05',
    teacherId: 'teacher-nguyen-van-a',
    type: 'SHORT_ANSWER',
    grade: 12,
    chapter: 'Khối đa diện và thể tích',
    topic: 'Thể tích khối chóp',
    difficulty: 'VD',
    content: 'Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông cân tại $B$, $AC = 2a\\sqrt{2}$. Cạnh bên $SA$ vuông góc với mặt phẳng đáy và $SA = 3a$. Thể tích khối chóp $S.ABC$ theo $a^3$ có hệ số bằng bao nhiêu? (Nhập số nguyên)',
    explanation: 'Tam giác $ABC$ vuông cân tại $B$ nên $AB = BC = \\frac{AC}{\\sqrt{2}} = \\frac{2a\\sqrt{2}}{\\sqrt{2}} = 2a$.\nDiện tích đáy: $S_{\\Delta ABC} = \\frac{1}{2} AB \\cdot BC = \\frac{1}{2} \\cdot 2a \\cdot 2a = 2a^2$.\nThể tích khối chóp: $V = \\frac{1}{3} \\cdot S_{\\Delta ABC} \\cdot SA = \\frac{1}{3} \\cdot 2a^2 \\cdot 3a = 2a^3$.\nVậy hệ số cần điền là $2$.',
    createdAt: '2026-01-07T10:00:00.000Z'
  },

  // CÂU 7: MCQ Hàm số bậc hai (Lớp 10)
  {
    id: 'q-math-10-01',
    teacherId: 'teacher-nguyen-van-a',
    type: 'MCQ',
    grade: 10,
    chapter: 'Hàm số bậc hai và đồ thị',
    topic: 'Tọa độ đỉnh của parabol',
    difficulty: 'NB',
    content: 'Tọa độ đỉnh $I$ của parabol $(P): y = -x^2 + 4x - 3$ là:',
    options: [
      { id: 'A', text: '$I(2; 1)$' },
      { id: 'B', text: '$I(-2; -15)$' },
      { id: 'C', text: '$I(1; 0)$' },
      { id: 'D', text: '$I(2; -1)$' }
    ],
    explanation: 'Ta có $a = -1, b = 4, c = -3$.\nHoành độ đỉnh: $x_I = -\\frac{b}{2a} = -\\frac{4}{2(-1)} = 2$.\nTung độ đỉnh: $y_I = -(2)^2 + 4(2) - 3 = -4 + 8 - 3 = 1$.\nVậy tọa độ đỉnh là $I(2; 1)$.',
    createdAt: '2026-01-08T09:00:00.000Z'
  },

  // CÂU 8: MCQ Mũ - Logarit (Lớp 11-12)
  {
    id: 'q-math-12-06',
    teacherId: 'teacher-nguyen-van-a',
    type: 'MCQ',
    grade: 12,
    chapter: 'Hàm số mũ và hàm số logarit',
    topic: 'Phương trình mũ và logarit',
    difficulty: 'TH',
    content: 'Tập nghiệm $S$ của bất phương trình $\\log_2(x - 1) < 3$ là:',
    options: [
      { id: 'A', text: '$(1; 9)$' },
      { id: 'B', text: '$(-\\infty; 9)$' },
      { id: 'C', text: '$(1; 7)$' },
      { id: 'D', text: '$(0; 9)$' }
    ],
    explanation: 'Điều kiện xác định: $x - 1 > 0 \\Leftrightarrow x > 1$.\nBất phương trình tương đương: $x - 1 < 2^3 \\Leftrightarrow x - 1 < 8 \\Leftrightarrow x < 9$.\nKết hợp điều kiện, ta được $1 < x < 9$.\nVậy tập nghiệm là $S = (1; 9)$.',
    createdAt: '2026-01-08T11:00:00.000Z'
  }
];

export const INITIAL_ANSWER_KEYS: Record<string, AnswerKey> = {
  'q-math-12-01': {
    questionId: 'q-math-12-01',
    type: 'MCQ',
    correctOption: 'B'
  },
  'q-math-12-02': {
    questionId: 'q-math-12-02',
    type: 'TRUE_FALSE',
    correctSubItems: {
      a: true,
      b: false,
      c: false,
      d: true
    }
  },
  'q-math-12-03': {
    questionId: 'q-math-12-03',
    type: 'SHORT_ANSWER',
    shortAnswer: ['516', '516.0']
  },
  'q-math-12-04': {
    questionId: 'q-math-12-04',
    type: 'MCQ',
    correctOption: 'A'
  },
  'q-math-11-01': {
    questionId: 'q-math-11-01',
    type: 'TRUE_FALSE',
    correctSubItems: {
      a: true,
      b: true,
      c: true,
      d: false
    }
  },
  'q-math-12-05': {
    questionId: 'q-math-12-05',
    type: 'SHORT_ANSWER',
    shortAnswer: ['2', '2.0', '2a^3']
  },
  'q-math-10-01': {
    questionId: 'q-math-10-01',
    type: 'MCQ',
    correctOption: 'A'
  },
  'q-math-12-06': {
    questionId: 'q-math-12-06',
    type: 'MCQ',
    correctOption: 'A'
  }
};

export const INITIAL_ASSIGNMENTS: Assignment[] = [
  {
    id: 'asg-kiem-tra-15p',
    title: 'Kiểm tra nhanh 15 phút: Cực trị & Tiệm cận & Oxyz',
    classId: 'class-12a1',
    className: 'Toán 12A1 — Ôn thi Tốt nghiệp THPT 2026',
    teacherId: 'teacher-nguyen-van-a',
    teacherName: 'Thầy Nguyễn Văn An',
    description: 'Đề kiểm tra rà soát kiến thức cốt lõi theo chuẩn cấu trúc mới Bộ GD&ĐT 2025 gồm 3 dạng: Trắc nghiệm 4 lựa chọn, Đúng/Sai 4 ý, và Trả lời ngắn.',
    questionIds: ['q-math-12-01', 'q-math-12-02', 'q-math-12-03', 'q-math-12-04'],
    durationMinutes: 15,
    allowedAttempts: 2,
    deadline: '2026-10-30T23:59:59.000Z',
    status: 'PUBLISHED',
    shuffleQuestions: false,
    viewSolutionsMode: 'AFTER_SUBMIT',
    totalPoints: 10,
    createdAt: '2026-01-15T08:00:00.000Z'
  },
  {
    id: 'asg-luyen-tap-tong-hop',
    title: 'Bài tập rèn luyện cuối tuần: Hình không gian & Mũ - Logarit',
    classId: 'class-12a1',
    className: 'Toán 12A1 — Ôn thi Tốt nghiệp THPT 2026',
    teacherId: 'teacher-nguyen-van-a',
    teacherName: 'Thầy Nguyễn Văn An',
    description: 'Luyện tập kỹ năng tính thể tích khối đa diện và giải bất phương trình logarit.',
    questionIds: ['q-math-12-05', 'q-math-12-06'],
    durationMinutes: 20,
    allowedAttempts: 3,
    deadline: '2026-11-15T23:59:59.000Z',
    status: 'PUBLISHED',
    shuffleQuestions: false,
    viewSolutionsMode: 'AFTER_SUBMIT',
    totalPoints: 10,
    createdAt: '2026-01-16T14:00:00.000Z'
  }
];
