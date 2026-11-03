import { Question, AnswerKey, Assignment } from '../types';

export const GIUA_KY_1_QUESTIONS: Question[] = [
  {
    "id": "q-gk1-01-01",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có đồ thị như hình vẽ. Hàm số đã cho đồng biến trên khoảng nào?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - 2\\,;2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( {0\\,;\\,2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - 1\\,;\\,1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( {1\\,;\\,2} \\right)\\).",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "- Xét đáp án A, trên khoảng \\(\\left( { - 2\\,;2} \\right)\\) đồ thị có đoạn hướng đi lên là hàm số đồng biến và có đoạn hướng đi xuống là hàm số nghịch biến nên loại.\n- Xét đáp án B, trên khoảng \\(\\left( {0\\,;\\,2} \\right)\\) đồ thị có đoạn hướng đi xuống là hàm số nghịch biến và có đoạn hướng đi lên là hàm số đồng biến nên loại.\n- Xét đáp án C, trên khoảng \\(\\left( { - 1\\,;\\,1} \\right)\\) đồ thị có hướng đi xuống là hàm số nghịch biến nên loại.\n- Xét đáp án D, trên khoảng \\(\\left( {1\\,;\\,2} \\right)\\) đồ thị có hướng đi lên là hàm số đồng biến nên chọn.",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2024/10/blobid0-1728822748.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-01-02",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có đồ thị như hình vẽ bên. Hàm số đã cho đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "(0; 1).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "(−∞; 1).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "(−1; 1).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "(−1; 0).",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Quan sát đồ thị ta thấy đồ thị đi lên trong các khoảng \\(( - 1;0)\\) và \\((1; + \\infty ).\\)\nVậy hàm số đồng biến trên các khoảng \\(( - 1;0)\\) và \\((1; + \\infty ).\\)",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2024/10/blobid0-1728822772.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-01-03",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có bảng biến thiên như hình vẽ sau\n\nMệnh đề nào dưới đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - 1;\\,3} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - \\infty ;\\,2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số nghịch biến trên khoảng \\(\\left( { - 2;\\,1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số nghịch biến trên khoảng \\(\\left( {1;\\,2} \\right)\\).",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Dựa vào bảng biến thiên ta có hàm số nghịch biến trên khoảng \\(\\left( {1\\,;\\,2} \\right)\\).",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2024/10/blobid0-1728822791.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-01-04",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) xác định, liên tục trên \\(\\mathbb{R}\\) và có đồ thị là đường cong như hình vẽ.\n\nHàm số đạt cực đại tại điểm nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(x = - 3\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(x = 1\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(x = 0\\).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\(x = 2\\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Từ đồ thị hàm số ta có hàm số đạt cực đại tại \\(x = 0\\).",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2024/10/blobid1-1728822813.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-01-05",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) liên tục trên \\(\\mathbb{R}\\) và có bảng biến thiên như sau\n\nGiá trị cực đại của hàm số \\(y = f\\left( x \\right)\\) bằng",
    "options": [
      {
        "id": "A",
        "text": "\\[x = 0\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[x = 2\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[y = - 3\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[y = 1\\].",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Dựa vào bảng biến thiên ta có hàm số đạt cực đại tại \\[x = 0\\]và giá trị cực đại là \\[y = 1\\].",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2024/10/blobid0-1728822893.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-01-06",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = {x^3} + 3{x^2} - 9x + 15\\]. Khẳng định nào sau đây là khẳng định sai?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số nghịch biến trên khoảng \\[\\left( { - 3;1} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đồng biến trên \\[\\left( { - 9; - 5} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đồng biến trên \\[\\mathbb{R}\\] .",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên \\[\\left( {5; + \\infty } \\right)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Tập xác định: \\[D = \\mathbb{R}\\].\nTa có \\[y' = 3{x^2} + 6x - 9\\]; \\[y' = 0 \\Leftrightarrow \\left[ \\begin{array}{l}x = 1\\\\x = - 3\\end{array} \\right.\\].\nBảng biến thiên:\n\nKết luận: Hàm số đồng biến trên các khoảng: \\[\\left( { - \\infty ; - 3} \\right),\\,\\,\\left( {1; + \\infty } \\right)\\]. \nHàm số nghịch biến trên khoảng \\[\\left( { - 3;1} \\right)\\].",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-01-07",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Chọn mệnh đề đúng về hàm số \\(y = \\frac{{2x - 1}}{{x + 2}}\\) .",
    "options": [
      {
        "id": "A",
        "text": "Hàm số nghịch biến trên từng khoảng xác định của nó.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đồng biến trên tập xác định của nó.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đồng biến trên từng khoảng xác định của nó.",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "Hàm số nghịch biến trên tập xác định của nó.",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Tập xác định: \\(D = \\mathbb{R}\\backslash \\left\\{ { - 2} \\right\\}\\).\nTa có: \\(y' = \\frac{5}{{{{\\left( {x + 2} \\right)}^2}}} > 0,\\forall x \\ne - 2\\). Nên hàm số đồng biến trên từng khoảng xác định của nó.\nBảng biến thiên:",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-01-08",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Hàm số\\[y = - {x^3} + 3{x^2} + 1\\] nghịch biến khi \\[x\\] thuộc khoảng nào sau đây?",
    "options": [
      {
        "id": "A",
        "text": "\\[(0;2).\\]",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[(0; + \\infty ).\\]",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[( - \\infty ;2).\\]",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[( - \\infty ;0)\\] và \\[(2; + \\infty ).\\]",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Ta có:\\[y' = - 3{x^2} + 6x < 0 \\Leftrightarrow x \\in \\left( { - \\infty ;0} \\right) \\cup \\left( {2; + \\infty } \\right)\\].",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-01-09",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = {x^2}\\left( {3 - x} \\right)\\). Mệnh đề nào sau đây là đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đã cho đồng biến trên khoảng \\[\\left( { - \\infty ;0} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đã cho đồng biến trên khoảng \\[\\left( {2; + \\infty } \\right)\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đã cho đồng biến trên khoảng \\[\\left( {0;2} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đã cho đồng biến trên khoảng \\[\\left( { - \\infty ;3} \\right)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-01-10",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Hàm số nào sau đây nghịch biến trên toàn trục số?",
    "options": [
      {
        "id": "A",
        "text": "\\[y = {x^3} - 3{x^2}\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[y =  - {x^3} + 3{x^2} - 3x + 2\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[y =  - {x^3} + 3x + 1\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[y = {x^3}\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-01-11",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Hàm số \\(y = \\frac{{1 - 2x}}{{ - x + 2}}\\) có bao nhiêu cực trị?",
    "options": [
      {
        "id": "A",
        "text": "\\(3\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(0\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(1\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-01-12",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Hàm số \\(y = \\frac{1}{3}{x^3} - 2{x^2} + 4x - 1\\) có bao nhiêu điểm cực trị ?",
    "options": [
      {
        "id": "A",
        "text": "1.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "0.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "2.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "3.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-01-13",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Điểm cực tiểu của hàm số \\(y = - {x^3} + 3x + 4\\) là:",
    "options": [
      {
        "id": "A",
        "text": "\\(x = - 1.\\)",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(x = 1.\\)",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(x = - 3.\\)",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(x = 3.\\)",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-01-14",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) liên tục trên \\(\\mathbb{R}\\) và có bảng biến thiên như sau:\n\nTrong các mệnh đề sau, có bao nhiêu mệnh đề sai?\nI. Hàm số đã cho đồng biến trên các khoảng \\(\\left( { - \\infty ; - 5} \\right)\\) và \\(\\left( { - 3; - 2} \\right)\\).\nII. Hàm số đã cho đồng biến trên khoảng \\(\\left( { - \\infty ;5} \\right)\\).\nIII. Hàm số đã cho nghịch biến trên khoảng \\(\\left( { - 2; + \\infty } \\right)\\).\nIV. Hàm số đã cho đồng biến trên khoảng \\(\\left( { - \\infty ; - 2} \\right)\\).",
    "options": [
      {
        "id": "A",
        "text": "\\(1\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(3\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(4\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2024/10/blobid0-1728823221.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-01-15",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có bảng biến thiên như hình dưới đây. Mệnh đề nào sau đây là đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đã cho đồng biến trên các khoảng \\(\\left( { - 2; + \\infty } \\right)\\) và \\(\\left( { - \\infty ; - 2} \\right).\\)",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đã cho đồng biến trên \\(\\left( { - \\infty ; - 1} \\right) \\cup \\left( { - 1;2} \\right).\\)",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đã cho đồng biến trên khoảng \\(\\left( {0;2} \\right).\\)",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đã cho đồng biến trên \\(\\left( { - 2;2} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2024/10/blobid0-1728823267.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-01-16",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f(x)\\). Hàm số \\(y = f'(x)\\) có đồ thị như hình vẽ:\n\nKhẳng định nào sau đây là khẳng định đúng?",
    "options": [
      {
        "id": "A",
        "text": "Đồ thị hàm số \\(y = f(x)\\) cắt trục hoành tại ba điểm phân biệt.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Đồ thị hàm số \\(y = f(x)\\) có hai điểm cực trị.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Đồ thị hàm số \\(y = f(x)\\) có ba điểm cực trị.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Đồ thị hàm số \\(y = f(x)\\) có một điểm có một điểm cực trị.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2024/10/blobid0-1728823306.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-01-17",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = - \\frac{1}{3}{x^3} + 4{x^2} - 5x - 17\\]. Gọi hoành độ 2 điểm cực trị của đồ thị hàm số là \\[{x_1},{x_2}\\]. Khi đó, tích số \\[{x_1}{x_2}\\]có giá trị là:",
    "options": [
      {
        "id": "A",
        "text": "\\[5.\\]",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[ - 5.\\]",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[ - 4.\\]",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[4.\\]",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-01-18",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = {x^3} - 3{x^2} - 2\\]. Gọi \\[a,b\\]lần lượt là giá trị cực đại và giá trị cực tiểu của hàm số đó. Giá trị của \\[2{a^2} + b\\] là:",
    "options": [
      {
        "id": "A",
        "text": "\\[ - 8\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[ - 2\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[2\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "4.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-01-19",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Số giá trị \\[m\\] nguyên để hàm số \\(y = \\frac{{mx + 2}}{{x + m}}\\) nghịch biến trên từng khoảng xác định của nó là",
    "options": [
      {
        "id": "A",
        "text": "\\(3.\\)",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[2.\\]",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(1.\\)",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(4.\\)",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-01-20",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 1",
    "difficulty": "TH",
    "content": "Cho hàm số y = f(x) = x3 + ax2 + bx + c có đồ thị như hình bên dưới.\n\n\nChọn đáp án sai",
    "options": [
      {
        "id": "A",
        "text": "Hàm số y = f(x) có hai điểm cực trị là 0 và 2.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Giá trị b bằng 0.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Giá trị c = −2.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "f(x) = x3 – 3x2 + 2.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2024/10/blobid0-1728823421.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-01",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": "PHẦN I. TRẮC NGHIỆM NHIỀU LỰA CHỌN\n\nCho hàm số \\(y = \\frac{{3x + 1}}{{x - 1}}\\). Mệnh đề nào dưới đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số luôn luôn đồng biến trên ℝ\\{1}.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số nghịch biến trên các khoảng (−∞; 1) và (1; +∞).",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "Hàm số đồng biến trên các khoảng (−∞; 1) và (1; +∞).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số luôn luôn nghịch biến trên (−∞; 1) ∪ (1; +∞).",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn B\n\nTa có $y' = \\frac{{ - 4}}{{{{\\left( {x - 1} \\right)}^2}}} < 0,\\forall x \\ne 1$.\nDo đó hàm số nghịch biến trên các khoảng (−∞; 1) và (1; +∞).",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-02",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": "Hàm số f(x) = x3 + 3x2 + 3x + 2.",
    "options": [
      {
        "id": "A",
        "text": "Đồng biến trên khoảng (−∞; −1).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Đồng biến trên khoảng (−1; +∞).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Đồng biến trên khoảng (−∞; −1) ∪ (−1; +∞).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Đồng biến trên ℝ.",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn D\n\nCó f'(x) = 3x2 + 6x + 3 = 3(x + 1)2 ≥ 0, ∀x ∈ ℝ.\nHàm số đồng biến trên ℝ.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-03",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": "Cho hàm số y = f(x) có bảng biến thiên sau:\n\nHàm số y = f(x) đồng biến trên khoảng nào sau đây?",
    "options": [
      {
        "id": "A",
        "text": "(−∞; 5).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "(0; 2).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "(2; +∞).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "(0; +∞).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn C\nDựa vào bảng biến thiên ta thấy hàm số y = f(x) đồng biến trên (2; +∞).",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/09/blobid2-1757666953.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-04",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": "Cho hàm số y = f(x) có bảng biến thiên như hình dưới đây\n\nTìm mệnh đề đúng trong các mệnh đề sau",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đồng biến trên khoảng (−∞; 3).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số nghịch biến trên khoảng (−2; +∞).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số nghịch biến trên khoảng (−∞; −2).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên khoảng (−4; −1).",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn D\n Dựa vào bảng biến thiên ta có hàm số đồng biến trên khoảng (−4; −1).",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/09/blobid3-1757666982.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-05",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": "Cho hàm số y = f(x) có đồ thị như hình vẽ bên. Hàm số đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "(−1; 1).",
        "is_correct": true
      },
      {
        "id": "B",
        "text": "(−2; 0).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "(1; 2).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "(−1; 2).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Chọn A\nDựa vào đồ thị hàm số ta có hàm số đồng biến trên (−1; 1).",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/09/blobid4-1757667019.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-06",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": "Cho hàm số y = f(x) xác định, liên tục trên ℝ và có đạo hàm f'(x). Biết rằng f'(x) có đồ thị như hình vẽ. \n\nMệnh đề nào sau đây đúng.",
    "options": [
      {
        "id": "A",
        "text": "Hàm số y = f(x) đồng biến trên khoảng (−2; 0).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số y = f(x) nghịch biến trên khoảng (0; +∞).",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "Hàm số y = f(x) đồng biến trên khoảng (−∞; 3).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số y = f(x) nghịch biến trên khoảng (−3; −2).",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn B\n\n Dựa vào đồ thị hàm số f'(x) ta có:\n+) f'(x) > 0 ⇔ x ∈ (−3; −2).\n+) f'(x) < 0 ⇔ x ∈ (−∞; −3) ∪ (−2; +∞).\nDo đó hàm số y = f(x) nghịch biến trên khoảng (0; +∞).",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/09/blobid5-1757667045.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-07",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": "Cho hàm số y = f(x) có bảng biến thiên như sau\n\nHàm số đạt cực đại tại điểm",
    "options": [
      {
        "id": "A",
        "text": "x = −1.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "x = 1.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "x = 0.",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "x = −3.",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn C\nDựa vào bảng biến thiên ta có hàm số đạt cực đại tại x = 0.",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/09/blobid6-1757667085.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-08",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": "Cho hàm số y = f(x) có bảng biến thiên như hình vẽ. Khẳng định nào sau đây sai?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đạt cực đại tại x = 0 và x = 1.",
        "is_correct": true
      },
      {
        "id": "B",
        "text": "Giá trị cực tiểu của hàm số bằng −1.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Giá trị cực đại của hàm số bằng 2.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đạt cực tiểu tại x = −2.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Chọn A\nDựa vào bảng biến thiên, ta có hàm số đạt cực đại tại x = 1.",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/09/blobid7-1757667108.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-09",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": "Tìm số điểm cực tiểu trên đoạn [−2; 4] của hàm số y = f(x) biết hàm số y = f'(x) có đồ thị như hình vẽ",
    "options": [
      {
        "id": "A",
        "text": "1.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "0.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "2.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "3.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/09/blobid8-1757667220.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-10",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": "Cho hàm số y = x3 – 3x2 – 9x + 1. Tổng các giá trị cực đại và cực tiểu của đồ thị hàm số bằng",
    "options": [
      {
        "id": "A",
        "text": "−6.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "−26.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "−20.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "20.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-11",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": ". Cho hàm số \\(y = \\sqrt {{x^2} - 4x} \\). Mệnh đề nào dưới đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đạt cực đại tại x = 4.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số không có cực trị.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đạt cực tiểu tại x = 0.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số có 2 điểm cực trị.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-12",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = \\frac{{{x^2} + 3}}{{x + 1}}\\). Mệnh đề nào dưới đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "Điểm cực tiểu của hàm số bằng −3.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Điểm cực tiểu của hàm số bằng 1.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Điểm cực tiểu của hàm số bằng −6.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Điểm cực tiểu của hàm số bằng 2.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-13",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": "PHẦN II. TRẮC NGHIỆM ĐÚNG – SAI\n\nCho hàm số y = x3 + 3x2 – 9x + 15.",
    "options": [
      {
        "id": "A",
        "text": "a) Tập xác định của hàm số là (1; +∞).\n\n\nĐúng\nSai",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "b) Hàm số có đạo hàm là y' = 3x2 + 6x + 9.\n\n\nĐúng\nSai",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "c) Hàm số đồng biến trên khoảng (−3; 1).\n\n\nĐúng\nSai",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "d) Đồ thị hàm số đạt cực trị tại 2 điểm A, B. Chu vi của tam giác OAB bằng \\(3\\sqrt {197}  + 4\\sqrt {65}  + \\sqrt {101} \\) (với O là gốc tọa độ).\n\n\nĐúng\nSai",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-14",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": "Cho hàm số y = f(x) xác định trên ℝ và có bảng biến thiên như hình vẽ",
    "options": [
      {
        "id": "A",
        "text": "a) Hàm số đồng biến trên khoảng (7; +∞).\n\n\nĐúng\nSai",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "b) f(1) < f(3).\n\n\nĐúng\nSai",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "c) Hàm số nghịch biến trên khoảng (1; 7).\n\n\nĐúng\nSai",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "d) Phương trình f'(3x – 1) = 0 nhận \\(x = \\frac{2}{3}\\) làm nghiệm.\n\n\nĐúng\nSai",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2026/09/image-vosazzmxxfscfxcpd8rg-1790733700.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-15",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": "Cho hàm số y = f(x) có bảng biến thiên như hình dưới đây.",
    "options": [
      {
        "id": "A",
        "text": "a) Hàm số đã cho có một điểm cực trị.\n\n\nĐúng\nSai",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "b) Giá trị cực đại của hàm số bằng 3.\n\n\nĐúng\nSai",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "c) Điểm cực đại của đồ thị hàm số nằm dưới đường thẳng y = 5.\n\n\nĐúng\nSai",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "d) Hàm số \\(g\\left( x \\right) = f\\left( {\\sqrt {{x^2} + 2x + 3} } \\right)\\) có đúng một điểm cực trị.\n\n\nĐúng\nSai",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2026/09/image-htt1kpeauhqkhlt1eamd-1790733821.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-16",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": "Cho hàm số y = f(x) xác định trên ℝ và có bảng xét dấu của f'(x) như hình vẽ",
    "options": [
      {
        "id": "A",
        "text": "a) Điểm cực tiểu của hàm số đã cho là x = 7.\n\n\nĐúng\nSai",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "b) f(7) là giá trị cực đại của hàm số đã cho.\n\n\nĐúng\nSai",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "c) Hàm số đồng biến trên khoảng (7; +∞).\n\n\nĐúng\nSai",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "d) f(11) > f(7).\n\n\nĐúng\nSai",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2026/09/image-pk7t2osl78nb0lyuyn6n-1790733917.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-17",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": "Sau khi phát hiện một bệnh dịch, các chuyên gia y tế ước tính số người nhiễm bệnh kể từ ngày xuất hiện bệnh nhân đầu tiên đến ngày thứ t là f(t) = 45t2 – t3, t = 0; 1; 2; …; 25. Nếu coi f(t) là hàm số xác định trên đoạn [0; 25] thì đạo hàm f'(t) được xem là tốc độ truyền bệnh (người/ngày) tại thời điểm t. Khi đó:",
    "options": [
      {
        "id": "A",
        "text": "a) Tốc độ truyền bệnh đến ngày thứ t là f'(t) = −3t2 + 90t.\n\n\nĐúng\nSai",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "b) Khoảng thời gian mà tốc độ truyền bệnh giảm là (0; 15).\n\n\nĐúng\nSai",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "c) Trong 25 ngày đầu thì tốc độ truyền bệnh lớn nhất là ở ngày thứ 25.\n\n\nĐúng\nSai",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "d) Trong 25 ngày đầu thì ngày có số người nhiễm bệnh nhiều nhất đạt tới 675 người.\n\n\nĐúng\nSai",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-18",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": "PHẦN II. TRẢ LỜI NGẮN\nCho hàm số \\(y = f\\left( x \\right) = \\frac{{2{x^2} + 26x + 18}}{{x + 13}}\\) có điểm cực tiểu x = x1 và điểm cực đại bằng x = x2. Tính P = −2x1 + x2.",
    "options": [
      {
        "id": "A",
        "text": "Xem đáp án",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-19",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": "Cho hàm số y = f(x) có đạo hàm là hàm số y = f'(x) liên tục trên ℝ và y = f'(x) có đồ thị như hình vẽ dưới đây. Tìm số khoảng đồng biến của hàm số.",
    "options": [
      {
        "id": "A",
        "text": "Xem đáp án",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/09/blobid27-1757667940.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-02-20",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 2",
    "difficulty": "TH",
    "content": "Cho hàm số y = f(x) có bảng biến thiên như sau:\n\nPhương trình f'(f(x)) = 0 có bao nhiêu nghiệm thực phân biệt.",
    "options": [
      {
        "id": "A",
        "text": "Xem đáp án",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/09/blobid28-1757667952.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-01",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right)\\)đồng biến trên tập số thực \\(\\mathbb{R}\\), mệnh đề nào sau đây là đúng?",
    "options": [
      {
        "id": "A",
        "text": "Với mọi \\({x_1},{x_2} \\in \\mathbb{R} \\Rightarrow f\\left( {{x_1}} \\right) > f\\left( {{x_2}} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Với mọi \\({x_1},{x_2} \\in \\mathbb{R} \\Rightarrow f\\left( {{x_1}} \\right) < f\\left( {{x_2}} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Với mọi \\({x_1} < {x_2} \\in \\mathbb{R} \\Rightarrow f\\left( {{x_1}} \\right) < f\\left( {{x_2}} \\right)\\).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "Với mọi \\({x_1} > {x_2} \\in \\mathbb{R} \\Rightarrow f\\left( {{x_1}} \\right) < f\\left( {{x_2}} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-02",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\)có đạo hàm trên \\(\\mathbb{R}\\) thỏa mãn \\(f'\\left( x \\right) < 0,\\;\\forall x \\in \\mathbb{R}\\). Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\frac{{f\\left( {{x_2}} \\right) - f\\left( {{x_1}} \\right)}}{{{x_2} - {x_1}}} > 0,\\;\\forall {x_1},{x_2} \\in \\mathbb{R},{x_1} \\ne {x_2}\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\frac{{f\\left( {{x_1}} \\right)}}{{f\\left( {{x_2}} \\right)}} < 1,\\;\\forall {x_1},{x_2} \\in \\mathbb{R},{x_1} \\ne {x_2}\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\frac{{f\\left( {{x_2}} \\right) - f\\left( {{x_1}} \\right)}}{{{x_2} - {x_1}}} < 0,\\;\\forall {x_1},{x_2} \\in \\mathbb{R},{x_1} \\ne {x_2}\\).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\(f\\left( {{x_1}} \\right) < f\\left( {{x_2}} \\right),\\;\\forall {x_1},{x_2} \\in \\mathbb{R},{x_1} \\ne {x_2}\\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-03",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Cho \\(K\\) là một khoảng, nửa khoảng hoặc một đoạn. Hàm số \\(y = f\\left( x \\right)\\) liên tục và xác định trên \\(K\\). Mệnh đề nào không đúng?",
    "options": [
      {
        "id": "A",
        "text": "Nếu hàm số \\(y = f\\left( x \\right)\\) đồng biến trên \\(K\\) thì \\(f'\\left( x \\right) \\ge 0\\), \\(\\forall x \\in K\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Nếu \\(f'\\left( x \\right) \\ge 0\\), \\(\\forall x \\in K\\) thì hàm số \\(y = f\\left( x \\right)\\) đồng biến trên \\(K\\).",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "Nếu hàm số \\(y = f\\left( x \\right)\\) là hàm số hằng trên \\(K\\) thì \\(f'\\left( x \\right) = 0\\), \\(\\forall x \\in K\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Nếu \\(f'\\left( x \\right) = 0\\), \\(\\forall x \\in K\\) thì hàm số \\(y = f\\left( x \\right)\\) không đổi trên \\(K\\).",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-04",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) liên tục trên \\(\\mathbb{R}\\) và có đồ thị như hình vẽ bên dưới. Hàm số nghịch biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - \\infty ;0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( {1;3} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( {0;2} \\right)\\).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\(\\left( {2; + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C",
    "images": [
      "https://video.vietjack.com/upload2/images/1752745097/1752745159-image1.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-05",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Hàm số \\(f\\left( x \\right)\\) đồng biến trên khoảng \\(\\left( {0\\,;\\, + \\infty } \\right)\\), khẳng định nào sau đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "\\(f\\left( 2 \\right) > f\\left( { - 1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(f\\left( 1 \\right) > f\\left( 3 \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(f\\left( 3 \\right) > f\\left( \\pi \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(f\\left( {\\frac{2}{3}} \\right) < f\\left( {\\frac{3}{4}} \\right)\\).",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn đáp án D",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-06",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có đạo hàm trên khoảng \\(\\left( {a{\\kern 1pt} ;{\\kern 1pt} b} \\right)\\). Mệnh đề nào sau đây đúng.",
    "options": [
      {
        "id": "A",
        "text": "Nếu \\(f'\\left( x \\right) > 0,\\forall x \\in \\left( {a;b} \\right)\\) thì hàm số đồng biến trên khoảng \\(\\left( {a{\\kern 1pt} ;{\\kern 1pt} b} \\right)\\).",
        "is_correct": true
      },
      {
        "id": "B",
        "text": "Nếu \\(f'\\left( x \\right) < 0,\\forall x \\in \\left( {a;b} \\right)\\) thì hàm số đồng biến trên khoảng \\(\\left( {a{\\kern 1pt} ;{\\kern 1pt} b} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Nếu \\(f\\left( x \\right) < 0,\\forall x \\in \\left( {a;b} \\right)\\) thì hàm số đồng biến trên khoảng \\(\\left( {a{\\kern 1pt} ;{\\kern 1pt} b} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Nếu \\(f\\left( x \\right) > 0,\\forall x \\in \\left( {a;b} \\right)\\) thì hàm số đồng biến trên khoảng \\(\\left( {a{\\kern 1pt} ;{\\kern 1pt} b} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Chọn đáp án A",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-07",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có đạo hàm liên tục trên \\(\\mathbb{R}\\) và \\(y = f'\\left( x \\right) < 0,\\forall x \\in \\left( { - 3;5} \\right)\\). Khẳng định nào sau đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "\\(f\\left( { - 2} \\right) = f\\left( 2 \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(f\\left( { - 3} \\right) > f\\left( 5 \\right)\\).",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "\\(f\\left( { - 3} \\right) < f\\left( 5 \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(f\\left( 0 \\right) < f\\left( 5 \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-08",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Cho hàm số \\[f(x)\\]nghịch biến trên \\[R\\]. Hàm số nào sau đây có thể không nghịch biến trên R?",
    "options": [
      {
        "id": "A",
        "text": "\\(f(x) + 2020\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(f(x) - 2019\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(f(x) - {x^2}\\).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\(f(x) - x\\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-09",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Đường cong ở hình bên là đồ thị của hàm số \\(y = \\frac{{ax + b}}{{cx + d}}\\) với \\[a\\], \\[b\\], \\[c\\], \\[d\\] là các số thực\n\nMệnh đề nào dưới đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "\\(y' > 0\\), \\(\\forall x \\ne 2\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(y' > 0\\), \\(\\forall x \\ne 3\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(y' < 0\\), \\(\\forall x \\ne 2\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(y' < 0\\), \\(\\forall x \\ne 3\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1752745097/1752745159-image2.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-10",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right) = \\frac{{x - 1}}{{x - 3}}.\\) Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số nghịch biến trên từng khoảng xác định.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số nghịch biến trên \\(\\mathbb{R}.\\)",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đồng biến trên từng khoảng xác định.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên \\(\\mathbb{R}.\\)",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-11",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = - \\frac{1}{3}{x^3} + \\frac{1}{2}{x^2} + 6x - 1\\). Mệnh đề nào dưới đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - 2;\\,3} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( {3;\\, + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số nghịch biến trên khoảng \\(\\left( { - 2;\\,3} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số nghịch biến trên khoảng \\(\\left( { - \\infty ;\\,0} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-12",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Khoảng đồng biến của hàm số \\(y = {x^4} + 4x - 6\\) là",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - 1;\\; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - \\infty ;\\; - 9} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - 9;\\; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - \\infty ;\\; - 1} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-13",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Hàm số nào dưới đây đồng biến trên khoảng \\(\\left( { - \\infty ; + \\infty } \\right)\\)?",
    "options": [
      {
        "id": "A",
        "text": "\\(y = \\frac{{x + 1}}{{x + 3}}\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(y = {x^3} + x\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(y = \\frac{{x - 1}}{{x - 2}}\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(y = - {x^3} - 3x\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-14",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Trong các hàm số sau hàm nào đồng biến trên \\(\\mathbb{R}\\)?",
    "options": [
      {
        "id": "A",
        "text": "\\(y = {x^4} + {x^2} - 1\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(y = \\frac{{x + 1}}{{x + 3}}\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(y = {x^2} + 1\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(y = {x^3} + x\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-15",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = \\frac{{x + 1}}{{x - 1}}.\\) Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đã cho nghịch biến trên khoảng \\(\\left( { - \\infty ;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đã cho đồng biến trên khoảng \\(\\left( { - \\infty ;1} \\right)\\) và khoảng \\(\\left( {1; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đã cho đồng biến trên khoảng \\(\\left( {0; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đã cho nghịch biến trên tập \\(\\mathbb{R}\\backslash \\left\\{ 1 \\right\\}\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-16",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = {x^4} - 8{x^2} + 2019\\). Mệnh đề nào sau đây sai:",
    "options": [
      {
        "id": "A",
        "text": "Hàm số nghịch biến trên khoảng \\(\\left( { - \\infty \\,;\\,2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số nghịch biến trên khoảng \\(\\left( {0\\,;\\,2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số nghịch biến trên khoảng \\(\\left( { - \\infty \\,;\\, - 2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( {2\\,;\\, + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-17",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Các khoảng đồng biến của hàm số \\(y = {x^4} + 2{x^2} - 3\\) là",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - 1;0} \\right)\\) và \\(\\left( {1; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - \\infty ; - 1} \\right)\\) và \\(\\left( {0;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( {0; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - \\infty ;0} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-18",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Trong các hàm số sau, hàm số nào đồng biến trên \\[\\mathbb{R}\\]?",
    "options": [
      {
        "id": "A",
        "text": "\\(y = {x^3} - x\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(y = {x^2} + 1\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(y = {x^4} + 2{x^2}\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(y = {x^3} + x\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-19",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Hàm số \\(y = - {x^4} + 2{x^2} + 1\\) đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - \\infty \\,;\\,0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( {0\\,;\\, + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( {1\\,;\\, + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - \\infty \\,;\\, - 1} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-03-20",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 3",
    "difficulty": "TH",
    "content": "Kết luận nào sau đây về tính đơn điệu của hàm số \\(y = \\frac{{2x + 1}}{{x - 1}}\\) là đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số nghịch biến trên \\(\\mathbb{R}\\backslash \\left\\{ 1 \\right\\}\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đồng biến trên \\(\\mathbb{R}\\backslash \\left\\{ 1 \\right\\}\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số nghịch biến trên \\(\\left( { - \\infty ;\\,1} \\right)\\) và \\(\\left( {1;\\, + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên \\(\\left( { - \\infty ;\\,1} \\right)\\) và \\(\\left( {1;\\, + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-01",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = \\frac{{x - 1}}{x}\\). Mệnh đề nào sau đây là đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đã cho chỉ đồng biến trên \\(\\left( {0; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đã cho chỉ đồng biến trên \\(\\left( { - \\infty ;0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đã cho đồng biến trên \\(\\mathbb{R}\\backslash \\left\\{ 0 \\right\\}\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đã cho đồng biến trên mỗi khoảng xác định.",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn đáp án D.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-02",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Hàm số \\(f\\left( x \\right) =  - {x^3} + 3{x^2} + 9x + 1\\) đồng biến trong khoảng nào sau đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {3; + \\infty } \\right)\\)",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - 1; + \\infty } \\right)\\)",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - 1;3} \\right)\\).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\(\\left( { - \\infty ;3} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-03",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = \\frac{{x - 2}}{{x + 3}}\\]. Tìm khẳng định đúng:",
    "options": [
      {
        "id": "A",
        "text": "Hàm số xác định trên \\[\\mathbb{R}\\backslash \\left\\{ 3 \\right\\}\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đồng biến trên \\[\\mathbb{R}\\backslash \\left\\{ { - 3} \\right\\}\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số nghịch biến trên mỗi khoảng xác định.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên mỗi khoảng xác định.",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn đáp án D.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-04",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Hàm số nào sau đây đồng biến trên \\(\\mathbb{R}\\)?",
    "options": [
      {
        "id": "A",
        "text": "\\(y = {x^4} - {x^3} + 2x\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(y = \\sin x\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(y = \\frac{{x - 1}}{{x + 1}}\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(y = x\\sqrt {{x^2} + 1} \\).",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn đáp án D.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-05",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = {x^3} + 3x + 2\\). Mệnh đề nào dưới đây là đúng ?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - \\infty ; + \\infty } \\right)\\).",
        "is_correct": true
      },
      {
        "id": "B",
        "text": "Hàm số nghịch biến trên khoảng \\(\\left( { - \\infty ; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - \\infty ;0} \\right)\\) và nghịch biến trên khoảng \\(\\left( {0; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số nghịch biến trên khoảng \\(\\left( { - \\infty ;0} \\right)\\) và đồng biến trên khoảng \\(\\left( {0; + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Chọn đáp án A.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-06",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = {x^3} -6{x^2} + 12x + 1\\). Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đồng biến trên \\(\\mathbb{R}\\).",
        "is_correct": true
      },
      {
        "id": "B",
        "text": "Hàm số nghịch biến \\(\\mathbb{R}\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - \\infty ;2} \\right)\\) và nghịch biến trên khoảng \\(\\left( {2; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số nghịch biến trên khoảng \\(\\left( { - \\infty ;2} \\right)\\) và đồng biến trên khoảng \\(\\left( {2; + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Chọn đáp án A.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-07",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Hàm số \\(y = {x^4} + 2{x^2} - 1\\)đồng biến trên khoảng nào sau đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(( - 1\\,;\\,1)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\((0\\,;\\, + \\infty )\\).",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "\\(\\mathbb{R}\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(( - \\infty \\,;\\,0)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-08",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Trong các hàm số sau, hàm số nào luôn đồng biến trên \\(\\mathbb{R}\\) ?",
    "options": [
      {
        "id": "A",
        "text": "\\(y = {x^3} - {x^2} + x + 4\\).",
        "is_correct": true
      },
      {
        "id": "B",
        "text": "\\(y = \\frac{{2x - 5}}{{x + 2}}\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(y = {x^4} + 3{x^2} - 4\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[y = {x^2} - 2x - 2\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Chọn đáp án A.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-09",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Tìm khoảng đồng biến của hàm số: \\(y = {x^4} - 6{x^2} + 8x + 1\\).",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - \\infty ;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - 2; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - \\infty ; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - \\infty ;2} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-10",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = \\frac{{x - 2}}{{x + 3}}\\]. Mệnh đề nào sau đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số nghịch biến trên khoảng \\(\\left( { - \\infty ; + {\\infty ^{}}} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số nghịch biến trên từng khoảng xác định.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đồng biến trên từng khoảng xác định.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - \\infty ; + {\\infty ^{}}} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-11",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = \\frac{{2x + 1}}{{x + 1}}\\). Mệnh đề đúng là",
    "options": [
      {
        "id": "A",
        "text": "Hàm số nghịch biến trên các khoảng \\(\\left( { - \\infty \\,;\\, - 1} \\right)\\) và \\(\\left( { - 1\\,;\\, + \\infty } \\right)\\)",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số nghịch biến trên \\(\\left( -\\infty;\\, -1 \\right) \\cup \\left( -1;\\, +\\infty \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đồng biến trên tập \\(\\mathbb{R}\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên các khoảng \\(\\left( { - \\infty \\,;\\, - 1} \\right)\\) và \\(\\left( { - 1\\,;\\, + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-12",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Hàm số \\[y =  - {x^3} + 3x - 4\\]đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\[\\left( { - \\infty ; - 1} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[\\left( { - \\infty ; - 1} \\right)\\]và \\[\\left( {1; + \\infty } \\right)\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[\\left( {1; + \\infty } \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[\\left( { - 1;1} \\right)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-13",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Trong các hàm số sau, hàm số nào luôn nghịch biến trên \\(\\mathbb{R}\\)?",
    "options": [
      {
        "id": "A",
        "text": "\\(y =  - x + 4\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(y =  - {x^3} + 3{x^2}\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[y = \\frac{{2x + 3}}{{x + 1}}\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[y = {x^4} - 3{x^2} - 1\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-14",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Trong các hàm số sau, hàm số nào đồng biến trên tập xác định của nó?",
    "options": [
      {
        "id": "A",
        "text": "\\(y = \\frac{{2x - 1}}{{x + 2}}\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(y = {x^3} + 4x + 1\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(y = {x^2} + 1\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(y = {x^4} + 2{x^2} + 1\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-15",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Hàm số \\[y = {x^4} - 2\\] nghịch biến trên khoảng nào?",
    "options": [
      {
        "id": "A",
        "text": "\\[\\left( { - \\infty ;\\frac{1}{2}} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[\\left( { - \\infty ;0} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[\\left( {\\frac{1}{2}; + \\infty } \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[\\left( {0; + \\infty } \\right).\\]",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-16",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = {x^3} + 3x + 2\\). Mệnh đề nào dưới đây là đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - \\infty ; + \\infty } \\right)\\)",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số nghịch biến trên khoảng \\(\\left( { - \\infty ; + \\infty } \\right)\\)",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số nghịch biến trên khoảng \\(\\left( { - \\infty ;0} \\right)\\) và đồng biến trên khoảng \\(\\left( {0; + \\infty } \\right)\\)",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - \\infty ;0} \\right)\\) và đồng biến trên khoảng \\(\\left( {0; + \\infty } \\right)\\)",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-17",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = \\frac{{x + 1}}{{1 - x}}\\). Phát biểu nào sau đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đồng biến trên mỗi khoảng \\(\\left( { - \\infty ;\\,1} \\right)\\) và \\(\\left( { - 1; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đồng biến trên \\(\\left( { - \\infty ;\\,1} \\right) \\cup \\left( {1; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - \\infty ;\\,1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - 1; + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-18",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y =  - {x^3} - 3{x^2} + 4\\]. Mệnh đề nào dưới đây đúng ?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đồng biến trên khoảng \\[\\left( { - \\infty ;\\, - 2} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số nghịch biến trên khoảng \\[\\left( { - 2;\\,0} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đồng biến trên khoảng \\[\\left( {0;\\, + \\infty } \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên khoảng \\[\\left( { - 2;\\,0} \\right)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-19",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = {x^3} + 3{x^2} - 9x + 15\\). Khẳng định nào sau đây là sai?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đồng biến trên \\(( - 9; - 5)\\)",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số nghịch biến trên khoảng \\(( - 3;1)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đồng biến trên khoảng \\((5; + \\infty )\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên \\(\\mathbb{R}\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-04-20",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 4",
    "difficulty": "TH",
    "content": "Hàm số \\[y = {x^3} - 3x{}^2 + 10\\] nghịch biến trên khoảng nào sau đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {0; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - \\infty ;2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - \\infty ;0} \\right);\\,\\,\\left( {2; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( {0;2} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-01",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Hàm số nào sau đây đồng biến trên khoảng \\(\\left( { - \\infty ; + \\infty } \\right)\\)?",
    "options": [
      {
        "id": "A",
        "text": "\\(y = \\frac{{x - 1}}{{x + 3}}\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(y =  - {x^3} - 3x\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(y = \\frac{{{x^2} - x - 1}}{{x - 2}}\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(y = {x^3} + x\\).",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn đáp án D.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-02",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Hàm số \\(y = \\frac{x}{{{x^2} + 1}}\\) đồng biến trên khoảng",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - 1;1} \\right)\\).",
        "is_correct": true
      },
      {
        "id": "B",
        "text": "\\(\\left( {0; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - \\infty ; - 1} \\right)\\) và \\(\\left( {1; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - \\infty ; + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Chọn đáp án A.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-03",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Hàm số nào dưới đây đồng biến trên \\(\\mathbb{R}\\)?",
    "options": [
      {
        "id": "A",
        "text": "\\(y = \\sqrt {x + 1} \\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(y = {x^3} + x - 2\\).",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "\\(y = \\frac{{ - {x^2} + 2x + 3}}{{x + 4}}\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(y = \\frac{{x - 1}}{{x + 1}}\\).",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-04",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Hàm số nào sau đây nghịch biến trên \\(\\mathbb{R}\\)?",
    "options": [
      {
        "id": "A",
        "text": "\\(y = \\frac{{2x - 1}}{{x + 2021}}\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(y = {x^4} - 2{x^2} - 2021\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(y =  - {x^3} + {x^2} - x\\).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\(y = {x^3} + 2x + 2021\\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-05",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Hàm số nào sau đây đồng biến trên \\[\\mathbb{R}\\]?",
    "options": [
      {
        "id": "A",
        "text": "\\[y = 2x - \\cos 2x - 5\\].",
        "is_correct": true
      },
      {
        "id": "B",
        "text": "\\[y = \\frac{{2x - 1}}{{x + 1}}\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[y = {x^2} - 2x\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[y = \\sqrt x \\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Chọn đáp án A.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-06",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Hàm số \\(f\\left( x \\right) = {\\left( {{x^2} + 3x + 2} \\right)^2}\\) nghịch biến trong khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\[\\left( { - \\frac{3}{2}; - 1} \\right)\\].",
        "is_correct": true
      },
      {
        "id": "B",
        "text": "\\[\\left( { - 2; - 1} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[\\left( { - 2; - \\frac{3}{2}} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[\\left( { - 1;1} \\right)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Chọn đáp án A.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-07",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Hàm số \\(y = \\sqrt {x - {x^2}} \\) nghịch biến trên khoảng",
    "options": [
      {
        "id": "A",
        "text": "\\((\\frac{1}{2};\\,1)\\).",
        "is_correct": true
      },
      {
        "id": "B",
        "text": "\\((0;\\,\\frac{1}{2})\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(( - \\infty ;\\,0)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\((1;\\, + \\infty )\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Chọn đáp án A.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-08",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Hàm số \\(f\\left( x \\right)\\) có \\(f'\\left( x \\right) = \\left( {x - 1} \\right)\\left( {x - 2} \\right),\\forall x \\in \\mathbb{R}\\) nghịch biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - 2; - 1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( {1;2} \\right)\\).",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "\\(\\left( {2; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - \\infty ; - 1} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-09",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = f\\left( x \\right)\\] có đạo hàm \\[f'\\left( x \\right) = {x^2} + 1\\], \\[\\forall x \\in \\mathbb{R}\\]. Mệnh đề nào dưới đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số nghịch biến trên khoảng \\[\\left( { - \\infty ;0} \\right)\\]",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số nghịch biến trên khoảng \\[\\left( {1; + \\infty } \\right)\\]",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số nghịch biến trên khoảng \\[\\left( { - 1;1} \\right)\\]",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên khoảng \\[\\left( { - \\infty ; + \\infty } \\right)\\]",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-10",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) liên tục trên \\(\\mathbb{R}\\) và có đạo hàm \\(f'\\left( x \\right) = {\\left( {x + 1} \\right)^2}{\\left( {x - 1} \\right)^3}\\left( {2 - x} \\right)\\). Hàm số \\(y = f\\left( x \\right)\\) đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {1;2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - \\infty ; - 1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - 1;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( {2; + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-11",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có đạo hàm \\(f'\\left( x \\right) = {x^2} + 1\\). Khẳng định nào sau đây đúng ?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đồng biến trên \\(\\left( { - \\infty ; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số nghịch biến trên \\(\\left( { - \\infty ;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số nghịch biến trên \\(\\left( { - \\infty ; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số nghịch biến trên \\(\\left( { - 1;1} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-12",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\)có đạo hàm \\(f'\\left( x \\right) = x{\\left( {x - 2} \\right)^3}\\), với mọi \\(x \\in \\mathbb{R}\\). Hàm số đã cho nghịch biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {1;\\,\\,3} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - 1;\\,\\,0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( {0;\\,\\,1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - 2;\\,\\,0} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-13",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = f\\left( x \\right)\\] có đạp hàm \\[f'\\left( x \\right) = {x^2} + 1\\], \\[\\forall x \\in \\mathbb{R}\\]. Mệnh đề nào dưới đây đúng ?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số nghịch biến trên khoảng \\[\\left( { - \\infty ;0} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số nghịch biến trên khoảng \\[\\left( {1; + \\infty } \\right)\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số nghịch biến trên khoảng \\[\\left( { - 1;1} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên khoảng \\[\\left( { - \\infty ; + \\infty } \\right)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-14",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\)có \\(f'\\left( x \\right) = \\left( {x + 2} \\right)\\left( {x + 1} \\right)\\left( {{x^2} - 1} \\right)\\). Hàm số \\(y = f\\left( x \\right)\\)đồng biến trên khoảng nào sau đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - 1;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( {0; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - \\infty ; - 2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - 2; - 1} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-15",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\)liên tục trên \\(\\mathbb{R}\\)và có đạo hàm \\(f'\\left( x \\right) = {\\left( {x + 1} \\right)^2}{\\left( {x - 1} \\right)^3}\\left( {2 - x} \\right)\\). Hàm số \\(y = f\\left( x \\right)\\)đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {1\\,;\\,2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - \\infty \\,;\\, - 1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[\\left( { - 1\\,;\\,1} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( {2\\,;\\, + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-16",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = f\\left( x \\right)\\] có đạo hàm \\[f'\\left( x \\right) = {\\left( {x + 1} \\right)^2}\\left( {2 - x} \\right)\\left( {x + 3} \\right)\\]. Mệnh đề nào dưới đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số nghịch biến trên khoảng \\[\\left( { - 3;2} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số nghịch biến trên các khoảng \\[\\left( { - 3; - 1} \\right)\\] và \\[\\left( {2; + \\infty } \\right)\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đồng biến trên các khoảng \\[\\left( { - \\infty ; - 3} \\right)\\] và \\[\\left( {2; + \\infty } \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên khoảng \\[\\left( { - 3;2} \\right)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-17",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có \\(f'\\left( x \\right) = {x^2} - 4x\\) với mọi \\(x\\) là số thực. Hàm số đã cho đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {2; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - 1;0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( {0;4} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - 2;1} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-18",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) liên tục trên \\(\\mathbb{R}\\) và có đạo hàm \\(f'\\left( x \\right) = {\\left( {x + 1} \\right)^2}{\\left( {x - 1} \\right)^3}\\left( {2 - x} \\right)\\). Hàm số \\(y = f\\left( x \\right)\\) đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - \\infty ;\\, - 1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - 1;\\,1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( {2;\\, + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( {1;\\,2} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-19",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) liên tục trên tập \\(\\mathbb{R}\\) và có đạo hàm \\(f'\\left( x \\right) = \\left( {x - 1} \\right){\\left( {x + 1} \\right)^2}\\left( {x - 3} \\right)\\). Tìm các khoảng đồng biến của hàm số \\(f\\left( x \\right)\\).",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - \\infty ;1} \\right)\\) và \\(\\left( {3; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - 1;1} \\right)\\) và \\(\\left( {3; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( {1;3} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\mathbb{R}\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-05-20",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 5",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right)\\)có đạo hàm là \\(f'\\left( x \\right) = x{\\left( {x + 1} \\right)^2}\\). Hàm số đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - 1; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - 1;0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - \\infty ; - 1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( {0; + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-01",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Đường cong trong hình vẽ bên là đồ thị của hàm số có dạng \\(y = a{x^3} + b{x^2} + cx + d\\,\\,\\left( {a \\ne 0} \\right)\\).\n\nHàm số nghịch biến trong khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - \\infty ;\\,\\, - 2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( {1;\\,\\,2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( {0;\\,\\,\\frac{1}{2}} \\right)\\).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\(\\left( {0;\\,\\,3} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C.",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid7-1753116641.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-02",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có đồ thị như hình vẽ bên dưới. Hàm số đã cho đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\[(2;6)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[(0;4)\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[(3;4)\\].",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\[( - 1;4)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C.",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid8-1753116766.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-03",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = f\\left( x \\right)\\] có đồ thị như sau\n\nHàm số đã cho đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\[\\left( {0; + \\infty } \\right)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[\\left( { - \\infty ; - 2} \\right)\\].",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "\\[\\left( { - 2;0} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[\\left( { - 2;2} \\right)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B.",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid9-1753116839.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-04",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có đồ thị như hình vẽ bên dưới. Hàm số \\(y = f\\left( x \\right)\\)đồng biến trên khoảng nào sau đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {2; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( {0;2} \\right)\\).",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "\\(\\left( { - 2;2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - \\infty ;0} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B.",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid10-1753116923.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-05",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = f(x)\\] có đồ thị như hình vẽ.\n\nHàm số \\[y = f(x)\\] đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(( - 1;1)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\((0;2)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(( - 2; - 1)\\).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\(( - 2;1)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C.",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid12-1753117053.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-06",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Cho hàm số bậc bốn \\(y = f\\left( x \\right)\\) có đồ thị trong hình bên:\n\nHàm số đã cho đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - 1;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( {0;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( {1; + \\infty } \\right)\\).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\(\\left( { - 1; + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C.",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid11-1753116995.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-07",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có đồ thị như hình. Hàm số đã cho đồng biến trên khoảng nào?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {0;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - \\infty ;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - 1;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - 1;0} \\right)\\).",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn đáp án D.",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid13-1753117145.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-08",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Cho hàm số bậc ba có đồ thị như hình vẽ. Mệnh đề nào sau đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số nghịch biến trên \\(\\left( {1; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đồng biến trên \\(\\left( {1; + \\infty } \\right)\\).",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "Hàm số nghịch biến trên \\(\\left( { - \\infty ; - 1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên \\(\\left( { - 1;1} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B.",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid14-1753117217.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-09",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có đồ thị như hình vẽ bên. Hàm số đã cho đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\[\\left( { - 1\\,;\\, + \\infty } \\right).\\]",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[\\left( { - 1\\,;\\,1} \\right).\\]",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[\\left( { - \\infty \\,;\\,1} \\right).\\]",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[\\left( { - \\infty \\,;\\, - 1} \\right).\\]",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid15-1753117288.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-10",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Cho hàm số\\[f(x)\\] có đồ thị như hình bên, hàm số đồng biến trên khoảng nào trong các phương án dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\[\\left( { - \\infty ;\\, - 1} \\right)\\]và \\[\\left( {1; + \\infty } \\right).\\]",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[\\left( { - 1;\\,1} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[\\left( { - \\infty ;\\,2} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[\\left( { - 2;\\,2} \\right)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid16-1753117359.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-11",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Hàm số \\[y = f\\left( x \\right)\\]có đồ thị như hình vẽ.\n\nHàm số \\[y = f\\left( x \\right)\\]đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\[\\left( { - 1;1} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[\\left( {0;2} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[\\left( { - 2; - 1} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[\\left( { - 2;1} \\right)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid17-1753117560.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-12",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\)có đồ thị như hình vẽ. Hàm số \\(y = f\\left( x \\right)\\)đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {2; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - 2;2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - \\infty ;0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( {0;2} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid18-1753117622.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-13",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = f\\left( x \\right)\\] có đồ thị như hình bên, mệnh đề nào sau đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số nghịch biến trên khoảng \\[\\left( { - \\infty ;0} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đồng biến trên khoảng \\[\\left( { - 1;1} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đồng biến trên khoảng \\[\\left( { - 1;3} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số nghịch biến trên khoảng \\[\\left( {0; + \\infty } \\right)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid19-1753117713.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-14",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Cho hàm số \\[f\\left( x \\right)\\] có đạo hàm liên tục trên \\[\\mathbb{R}\\] và có đồ thị của hàm \\[y = f'\\left( x \\right)\\] như hình vẽ. Mệnh đề nào dưới đây sai?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số \\[f\\left( x \\right)\\] nghịch biến trên \\(\\left( { - 1;0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số \\[f\\left( x \\right)\\] đồng biến trên \\(\\left( {1; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số\\[f\\left( x \\right)\\] nghịch biến trên \\(\\left( { - \\infty ;2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số \\[f\\left( x \\right)\\] đồng biến trên \\(\\left( {2; + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid20-1753117807.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-15",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right)\\) có đạo hàm trên \\(\\mathbb{R}\\) là hàm số \\(f'\\left( x \\right)\\). Biết đồ thị hàm số \\(f'\\left( x \\right)\\) được cho như hình vẽ. Hàm số \\(f\\left( x \\right)\\) nghịch biến trên khoảng",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {0\\,;\\,1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - \\infty \\,;\\, - 3} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - \\infty \\,;\\, - 1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - 3\\,;\\, - 2} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid21-1753118240.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-16",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = f(x)\\]. Hàm số \\[y = f'(x)\\] có đồ thị như hình bên. Hàm số \\[y = f(x)\\] đồng biến trên khoảng",
    "options": [
      {
        "id": "A",
        "text": "\\(( - 1;1)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\((1;4)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(( - \\infty ; - 1)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\((2; + \\infty )\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid22-1753118315.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-17",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\)có đồ thị \\(f'\\left( x \\right)\\)là đường cong như hình vẽ bên. Tìm khẳng định đúng.",
    "options": [
      {
        "id": "A",
        "text": "\\(f\\left( x \\right)\\)đồng biến trên \\(\\left( { - 2;\\,0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(f\\left( x \\right)\\)nghịch biến trên \\(\\left( {0;\\, + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(f\\left( x \\right)\\)đồng biến trên \\(\\left( { - \\infty ;\\,3} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(f\\left( x \\right)\\)nghịch biến trên \\(\\left( { - 3;\\, - 2} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid23-1753118372.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-18",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Cho hàm bậc ba \\(y = f\\left( x \\right)\\) có đồ thị đạo hàm \\(y = f'\\left( x \\right)\\) như hình bên dưới. Hàm số đã cho nghịch biến trên khoảng",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {1\\,\\,;\\,\\,2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - 1\\,\\,;\\,\\,0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( {3\\,\\,;\\,\\,4} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( {2\\,\\,;\\,\\,3} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid24-1753118468.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-19",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có đồ thị hàm số \\(y = f'\\left( x \\right)\\) như hình vẽ bên. Khẳng định nào sau đây đúng về hàm số \\(y = f\\left( x \\right)\\)?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - \\infty ; - 1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - 1;0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( {1;2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số nghịch biến trên khoảng \\(\\left( {0; + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid25-1753118545.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-06-20",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 6",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = f(x)\\] có đạo hàm trên \\[\\mathbb{R}\\] và đồ thị của hàm số \\[y = f'(x)\\] như hình vẽ. Hàm số \\[y = f(x)\\] đồng biến trên khoảng nào sau đây.",
    "options": [
      {
        "id": "A",
        "text": "\\[(0;1)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[(2; + \\infty )\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[(1;2)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[( - 1;2)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid26-1753118620.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-01",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có bảng biến thiên như hình vẽ bên dưới.\n\nHàm số \\(y = f\\left( x \\right)\\) đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - 2;\\,2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( {0;\\,2} \\right)\\).",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "\\(\\left( {3;\\, + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - \\infty ;\\,1} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B.",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid36-1753119451.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-02",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f(x)\\)có bảng biến thiên như sau:\n\nHàm số đã cho đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(( - 1;1)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(( - \\infty ;0)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(( - 1;0)\\).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\((1; + \\infty )\\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C.",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid37-1753119520.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-03",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right)\\) có bảng biến thiên như sau:\n\nHàm số đã cho đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - 1;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - \\infty ; - 2} \\right)\\).",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "\\(\\left( { - 2; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - \\infty ;3} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B.",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid38-1753119596.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-04",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = f\\left( x \\right)\\] xác định và liên tục trên khoảng \\[\\left( { - \\infty ; + \\infty } \\right),\\] có bảng biến thiên như hình sau:\n\nMệnh đề nào sau đây đúng ?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số nghịch biến trên khoảng \\[\\left( {1; + \\infty } \\right)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đồng biến trên khoảng \\[\\left( { - \\infty ; - 2} \\right)\\].",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "Hàm số nghịch biến trên khoảng \\[\\left( { - \\infty ;1} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên khoảng \\[\\left( { - 1; + \\infty } \\right)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B.",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid39-1753119649.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-05",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\)có bảng biến thiên sau. Tìm mệnh đề đúng.",
    "options": [
      {
        "id": "A",
        "text": "Hàm số \\(y = f\\left( x \\right)\\)NB trên khoảng \\(\\left( { - \\infty ;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số \\(y = f\\left( x \\right)\\)ĐB trên khoảng \\(\\left( { - 1;1} \\right)\\).",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "Hàm số \\(y = f\\left( x \\right)\\)ĐB trên khoảng \\(\\left( { - 2;2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số \\(y = f\\left( x \\right)\\)NB trên khoảng \\(\\left( { - 1; + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B.",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid40-1753119734.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-06",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = f\\left( x \\right)\\] xác định và liên tục trên khoảng \\[\\left( { - \\infty ; + \\infty } \\right),\\] có bảng biến thiên như hình sau:\n\nMệnh đề nào sau đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số nghịch biến trên khoảng \\[\\left( {1; + \\infty } \\right)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đồng biến trên khoảng \\[\\left( { - \\infty ; - 2} \\right)\\].",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "Hàm số nghịch biến trên khoảng \\[\\left( { - \\infty ;1} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên khoảng \\[\\left( { - 1; + \\infty } \\right)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B.",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid41-1753119822.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-07",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = f\\left( x \\right)\\]có bảng biến thiên như sau:\n\nHàm số đã cho đồng biến trên khoảng nào sau đây?",
    "options": [
      {
        "id": "A",
        "text": "\\[\\left( { - 2;0} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[\\left( { - \\infty ;3} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[\\left( { - 1; + \\infty } \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[\\left( { - \\infty ; - 2} \\right)\\].",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn đáp án D.",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid42-1753119868.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-08",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có bảng biến thiên như hình vẽ dưới đây. Mệnh đề nào sau đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số nghịch biến trên khoảng \\(\\left( { - \\infty \\,;\\,1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - 1\\,;\\, + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số nghịch biến trên khoảng \\(\\left( { - \\infty \\,;\\, - 1} \\right) \\cup \\left( { - 1\\,;\\,1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số nghịch biến trên các khoảng \\(\\left( { - \\infty \\,;\\, - 1} \\right)\\) và \\(\\left( { - 1;1} \\right)\\).",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn đáp án D.",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid43-1753119944.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-09",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = f\\left( x \\right)\\] có bảng biến thiên như sau:\n\nHàm số \\[y = f\\left( x \\right)\\]nghịch biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\[\\left( { - 2;0} \\right)\\]",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[\\left( { - \\infty ; - 2} \\right)\\]",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[\\left( {0;2} \\right)\\]",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[\\left( {0; + \\infty } \\right)\\]",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid44-1753120002.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-10",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f(x)\\) có bảng biến thiên như sau\n\nHàm số đã cho đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - \\infty ; - 1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( {1; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - \\infty ;3} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( {0;2} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid45-1753120076.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-11",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\)có đồ thị như như hình vẽ bên dưới. Hàm số \\(y = f\\left( x \\right)\\)nghịch biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - 1;\\,0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( {1;\\, + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - \\infty ;\\, - 2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - 2;\\,1} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid46-1753120134.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-12",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có bảng biến thiên như sau:\n\nHàm số đã cho đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {1\\,;\\, + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( {0\\,;\\,3} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - \\infty \\,; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( {2\\,;\\, + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid47-1753120210.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-13",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\(AE \\bot SD\\)có bảng biến thiên như hình vẽ bên. Hàm số \\(y = f\\left( x \\right)\\) nghịch biến trên khoảng nào trong các khoảng sau đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - 1;\\,\\,0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - 1;\\,\\,1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - \\infty ;\\,\\, - 1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[8a + d\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid48-1753120269.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-14",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) liên tục trên R và có bảng xét dấu đạo hàm như hình bên. Hàm số \\(y = f\\left( x \\right)\\) nghịch biến trên khoảng nào sau đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - 2;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( {1;3} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - \\infty ; - 2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( {3; + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid49-1753120390.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-15",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = f\\left( x \\right)\\] có bảng xét dấu của đạo hàm như sau\n\nHàm số \\[y =  - f\\left( x \\right)\\] đồng biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\[\\left( {2;3} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[\\left( {4; + \\infty } \\right)\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[\\left( { - 2; - 1} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[\\left( { - 1;3} \\right)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid50-1753120479.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-16",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) xác định \\(\\mathbb{R}\\backslash \\left\\{ 0 \\right\\}\\), liên tục trên từng khoảng xác định và có bảng biến thiên như hình vẽ:\n\nKhẳng định nào sau đây là đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số nghịch biến trên \\(\\left( {0;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số nghịch biến trên khoảng \\(\\left( { - 1;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - 1;0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên \\(\\left( { - 1; + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid51-1753120537.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-17",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = f\\left( x \\right)\\] có bảng biến thiên như sau:\n\nHàm số \\[g\\left( x \\right) = f\\left( {2x + 7} \\right)\\] nghịch biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\[\\left( { - 5; - 4} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[\\left( { - 3;0} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[\\left( { - 4; - 3} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[\\left( { - \\infty ; - 5} \\right)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid52-1753120654.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-18",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f(x)\\), bảng xét dấu của \\(f'(x)\\) như sau:\n\nHàm số \\(y = f(1 - 2x)\\) nghịch biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {1;3} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( {3; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - 2;0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( {0;1} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid53-1753120708.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-19",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right) = a{x^3} + b{x^2} + cx + d\\,\\left( {a \\ne 0} \\right)\\) có bảng biến thiên như sau\n\nHàm số \\(y = f\\left( {3x - 4} \\right)\\) nghịch biến trong khoảng nào?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {0;2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( {\\frac{4}{3};2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - 4;2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - \\infty ;0} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid54-1753120773.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-07-20",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 7",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right)\\) có bảng xét dấu của đạo hàm như sau:\n\nHàm số \\(y = f\\left( { - 3x} \\right)\\) nghịch biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {1;3} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - \\frac{1}{3};0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - \\frac{2}{3}; - \\frac{1}{3}} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - \\frac{4}{3}; - 1} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/quiz_source1/2025/07/blobid55-1753120886.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-01",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Hàm số \\(y = \\frac{{2x + 5}}{{x + 1}}\\) có bao nhiêu điểm cực trị?",
    "options": [
      {
        "id": "A",
        "text": "3.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "0.",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "2.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "1.",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-02",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = \\left( {{x^2} - 3} \\right){e^x}\\). Chọn mệnh đề đúng trong các mệnh đề sau",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đồng biến trên khoảng \\[\\left( { - \\infty ;1} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số nghịch biến trên khoảng \\[\\left( { - 3;1} \\right)\\].",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "Hàm số nghịch biến trên khoảng \\[\\left( {1; + \\infty } \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên khoảng \\[\\left( { - 1;3} \\right)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-03",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Hàm số \\(y = {x^2}{{\\rm{e}}^{2x}}\\) nghịch biến trên khoảng nào?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - \\infty ;0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - 2;0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( {1; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - 1;0} \\right)\\).",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn đáp án D.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-04",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = {e^{2x}} - x\\). Chọn khẳng định đúng.",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - \\ln \\sqrt 2 ; + \\infty } \\right)\\).",
        "is_correct": true
      },
      {
        "id": "B",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - \\infty ; - \\ln 2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đồng biến trên khoảng \\[\\left( { - \\infty ; - \\ln \\sqrt 2 } \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - \\ln 2; + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Chọn đáp án A.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-05",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Hàm số \\(y = {\\log _{\\frac{1}{3}}}\\left( {{x^2} - 2x - 3} \\right)\\) nghịch biến trên khoảng nào trong các khoảng sau đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - \\infty ;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - \\infty ; - 1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( {1; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( {3; + \\infty } \\right)\\).",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn đáp án D.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-06",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Hàm số \\(y = {\\log _{0,5}}\\left( { - {x^2} + 4x} \\right)\\) đồng biến trên khoảng",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {2\\,;\\,4} \\right)\\).",
        "is_correct": true
      },
      {
        "id": "B",
        "text": "\\(\\left( {0\\,;\\,4} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( {2\\,;\\, + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( {0\\,;\\,2} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Chọn đáp án A.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-07",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Hàm số \\(y = x\\ln x\\) đồng biến trên khoảng nào sau đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {\\frac{1}{e}; + \\infty } \\right).\\)",
        "is_correct": true
      },
      {
        "id": "B",
        "text": "\\(\\left( {0;\\frac{1}{e}} \\right).\\)",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( {0; + \\infty } \\right).\\)",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - \\frac{1}{e}; + \\infty } \\right).\\)",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Chọn đáp án A.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-08",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = {\\left( {0,5} \\right)^{{x^2} - 8x}}\\]. Hàm số đã cho nghịch biến trên khoảng",
    "options": [
      {
        "id": "A",
        "text": "\\[\\left( {0;\\,4} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[\\left( {0;\\,8} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[\\left( {9;10} \\right)\\].",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\[\\left( { - \\infty ;\\,0} \\right)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-09",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Hàm số \\(y = {x^2}{e^x}\\) nghịch biến trên khoảng nào?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - 2;\\,0} \\right)\\) .",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - \\infty ;\\, - 2} \\right)\\) .",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - \\infty ;\\,1} \\right)\\) .",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( {1;\\, + \\infty } \\right)\\) .",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-10",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Hàm số \\[y = {2^{{x^2} - 4x}}\\]đồng biến trên khoảng",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - \\infty ;2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( {3;5} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( {0; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - \\infty ;3} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-11",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Hàm số \\(y = \\ln \\left( {{x^2} - 2x - 3} \\right)\\) đồng biến trên khoảng nào?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - \\infty \\,;\\, - 1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - 1\\,;\\,3} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( {1\\,;\\, + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( {3\\,;\\, + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-12",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Hàm số \\(y = {x^2}{e^x}\\) nghịch biến trên khoảng nào?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - 2;0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - \\infty ; - 2} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - \\infty ;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( {1; + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-13",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Hàm số \\(y = {\\log _2}\\left( {{x^2} - 2x} \\right)\\) đồng biến trên",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {1; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( {2; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - 1;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( {0; + \\infty } \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-14",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Trong các hàm số sau hàm số nào đồng biến trên \\(\\mathbb{R}\\).",
    "options": [
      {
        "id": "A",
        "text": "\\(y = {\\log _3}x\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(y = {\\log _{\\frac{1}{5}}}x\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(y = {\\left( {\\frac{e}{3}} \\right)^x}\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(y = {\\left( {\\frac{2}{3}} \\right)^{ - x}}\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-15",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = {\\left( {\\frac{3}{\\pi }} \\right)^{{x^2} + 2x + 3}}\\). Tìm khẳng định đúng.",
    "options": [
      {
        "id": "A",
        "text": "Hàm số luôn đồng biến trên \\(\\mathbb{R}\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số luôn nghịch biến trên \\(\\mathbb{R}\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số luôn nghịch biến trên khoảng \\(\\left( { - \\infty ; - 1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số luôn đồng biến trên khoảng \\(\\left( { - \\infty ; - 1} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-16",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Hàm số nào dưới đây đồng biến trên tập xác định của nó?",
    "options": [
      {
        "id": "A",
        "text": "\\(y = {\\left( {0,5} \\right)^x}\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(y = {\\left( {\\sqrt 2 } \\right)^x}\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(y = {\\left( {\\frac{2}{3}} \\right)^x}\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(y = {\\left( {\\frac{e}{\\pi }} \\right)^x}\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-17",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Trong các hàm số sau hàm số nào đồng biến trên tập xác định của nó ?",
    "options": [
      {
        "id": "A",
        "text": "\\(y = {\\log _{\\frac{2}{5}}}x\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(y = {\\left( {\\frac{\\pi }{4}} \\right)^x}\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(y = {\\log _{\\frac{1}{3}}}\\left( {\\frac{1}{x}} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(y = {e^{ - x}}\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-18",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Hàm số nào sau đây đồng biến trên khoảng \\(\\left( { - \\infty ; + \\infty } \\right)\\)?",
    "options": [
      {
        "id": "A",
        "text": "\\(y = {\\left( {\\frac{e}{4}} \\right)^x}\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(y = {\\left( {\\frac{2}{3}} \\right)^x}\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(y = {\\left( {\\frac{\\pi }{3}} \\right)^x}\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(y = {\\left( {\\frac{3}{4}} \\right)^x}\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-19",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Hàm số \\(y = {\\log _{\\frac{e}{3}}}\\left( {x - 1} \\right)\\)nghịch biến trên khoảng nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {1; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left[ {1; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( {0; + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\mathbb{R}\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-08-20",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 8",
    "difficulty": "TH",
    "content": "Trong các hàm số sau, hàm số nào nghịch biến trên \\[\\left( {0; + \\infty } \\right)\\]?",
    "options": [
      {
        "id": "A",
        "text": "\\(y = {\\log _{\\frac{2}{3}}}x.\\)",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(y = {\\log _{2020}}x.\\)",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(y = {\\log _\\pi }x\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(y = \\ln x\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-01",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Tọa độ điểm cực đại của đồ thị hàm số \\(y\\, = \\,{x^4}\\, - \\,2{x^2}\\, + \\,1\\) là",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( { - 1\\,;\\,0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( {1\\,;\\,0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( { - 1\\,;\\,0} \\right)\\) và \\(\\left( {1\\,;\\,0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( {0\\,;\\,1} \\right)\\).",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn đáp án D.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-02",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Số điểm cực trị của đồ thị hàm số \\(y = - {x^4} - 1\\) là",
    "options": [
      {
        "id": "A",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(0\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(1\\).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\(3\\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-03",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Giá trị cực đại của hàm số \\(y = {x^3} - 3x + 2\\) bằng",
    "options": [
      {
        "id": "A",
        "text": "\\(0\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(1\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(4\\).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\( - 1\\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-04",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = {x^3} - 3{x^2} + 1\\). Độ dài đoạn thẳng nối hai điểm cực trị của đồ thị hàm số đã cho là",
    "options": [
      {
        "id": "A",
        "text": "\\(2\\sqrt 5 \\).",
        "is_correct": true
      },
      {
        "id": "B",
        "text": "\\(5\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(8\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(6\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Chọn đáp án A.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-05",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Tìm số điểm cực đại của đồ thị hàm số sau",
    "options": [
      {
        "id": "A",
        "text": ".",
        "is_correct": false
      },
      {
        "id": "B",
        "text": ".",
        "is_correct": false
      },
      {
        "id": "C",
        "text": ".",
        "is_correct": false
      },
      {
        "id": "D",
        "text": ".",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn đáp án D.",
    "images": [
      "https://video.vietjack.com/upload2/images/1753355802/1753355868-image1.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-06",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Hàm số \\(y = {x^3} - 3{x^2} + 2x + 2019\\)có bao nhiêu điểm cực trị",
    "options": [
      {
        "id": "A",
        "text": "\\(1\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(2\\).",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "\\(0\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(3\\).",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-07",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Giá trị cực tiểu của hàm số \\(y = f\\left( x \\right) = - \\frac{1}{3}{x^3} + x - 1\\) là",
    "options": [
      {
        "id": "A",
        "text": "\\( - \\frac{1}{3}\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\( - 1\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\( - \\frac{5}{3}\\).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\(1\\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-08",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Hàm số \\(y = 2{x^3} - {x^2} + 5\\) có điểm cực đại là",
    "options": [
      {
        "id": "A",
        "text": "\\(x = 5\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(x = 3\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(x = 0\\).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\(x = \\frac{1}{3}\\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C.",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-09",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Hàm số \\(y = {x^3} - 3x + 2\\) đạt cực đại tại điểm",
    "options": [
      {
        "id": "A",
        "text": "\\(x = 1\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(x = - 1\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(x = 0\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(x = 2\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-10",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Hàm số \\(y = \\frac{{2x + 3}}{{x + 1}}\\) có bao nhiêu điểm cực trị ?",
    "options": [
      {
        "id": "A",
        "text": "\\(3\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(0\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(1\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(2\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-11",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = \\frac{1}{3}{x^3} - {x^2} + \\frac{1}{3}\\). Giá trị cực tiểu của hàm số bằng",
    "options": [
      {
        "id": "A",
        "text": "\\( - 1\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\frac{1}{3}\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(0\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-12",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Số điểm cực trị của hàm số \\(y = - \\frac{4}{3}{x^3} - 2{x^2} - x - 3\\) là",
    "options": [
      {
        "id": "A",
        "text": "\\(0\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(1\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(3\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-13",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Gọi \\({x_1}\\)là điểm cực đại, \\({x_2}\\)là điểm cực tiểu của hàm số \\(y = - {x^3} + 3x + 2\\). Tính \\({x_1} + 2{x_2}\\).",
    "options": [
      {
        "id": "A",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(1\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\( - 1\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(0\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-14",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Hàm số \\[y = - {x^3} + 1\\] có bao nhiêu điểm cực trị?",
    "options": [
      {
        "id": "A",
        "text": "\\(1\\,.\\)",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[0\\,.\\]",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[3\\,.\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[2\\,.\\]",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-15",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Hàm số \\(y = {x^3} - 12x + 3\\) đạt cực đại tại điểm",
    "options": [
      {
        "id": "A",
        "text": "\\(x = 19\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(x = - 2\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(x = 2\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(x = - 13\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-16",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Hàm số \\(y = {x^4} - 2{x^2} - 3\\)có bao nhiêu điểm cực trị?",
    "options": [
      {
        "id": "A",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(1\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(0\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(3\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-17",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Hàm số \\(y = {x^3} - 3{x^2} + 2\\) đạt cực tiểu tại",
    "options": [
      {
        "id": "A",
        "text": "\\(x = - 2\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(x = 2\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(x = 0\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(x = 1\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-18",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right) = {x^4} - 8{x^3} + 1\\). Chọn mệnh đề đúng.",
    "options": [
      {
        "id": "A",
        "text": "Nhận điểm \\(x = 6\\)làm điểm cực đại.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Nhận điểm \\(x = 6\\)làm điểm cực tiểu.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Nhận điểm \\(x = 0\\)làm điểm cực đại.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Nhận điểm \\(x = 0\\)làm điểm cực tiểu.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-19",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Số điểm cực trị của hàm số \\(y = \\frac{{5x - 1}}{{x + 2}}\\) là",
    "options": [
      {
        "id": "A",
        "text": "1.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "2.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "0.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "3.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-09-20",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 9",
    "difficulty": "TH",
    "content": "Có bao nhiêu điểm cực trị của hàm số \\(y = \\frac{1}{x}\\)?",
    "options": [
      {
        "id": "A",
        "text": "\\(3\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(0\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(1\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-01",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Gọi \\[A\\], \\[B\\] là hai điểm cực trị của đồ thị hàm số \\(y = - \\frac{1}{3}{x^3} + x - \\frac{2}{3}\\). Tọa độ trung điểm của \\(AB\\) là",
    "options": [
      {
        "id": "A",
        "text": "\\(\\left( {0;\\frac{{ - 2}}{3}} \\right)\\).",
        "is_correct": true
      },
      {
        "id": "B",
        "text": "\\(\\left( {1;0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( {0;1} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(\\left( { - \\frac{1}{3};\\frac{2}{3}} \\right)\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Chọn đáp án A",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-02",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Đồ thị hàm số \\[y = - {x^3} - 3{x^2} + 1\\] có điểm cực đại là",
    "options": [
      {
        "id": "A",
        "text": "\\(x = 0\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\left( { - 2;\\, - 19} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(\\left( {0;\\,1} \\right)\\).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\(x = - 2\\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-03",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = {x^3} - 3{x^2} + 5\\]có đồ thị \\[\\left( C \\right)\\]. Điểm cực tiểu của đồ thị \\[\\left( C \\right)\\] là",
    "options": [
      {
        "id": "A",
        "text": "\\[M\\left( {1;{\\rm{ }}2} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[M\\left( {5;{\\rm{ }}0} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[M\\left( {2;{\\rm{ 1}}} \\right)\\].",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\[M\\left( {0;{\\rm{ 5}}} \\right)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-04",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Biết đồ thị \\(\\left( C \\right)\\) của hàm số \\(y = \\frac{{{x^2} - 4x + 5}}{{x - 1}}\\) có hai điểm cực trị. Đường thẳng đi qua hai điểm cực trị của đồ thị \\(\\left( C \\right)\\) cắt trục hoành tại điểm \\(M\\) có hoành độ \\({x_M}\\) bằng",
    "options": [
      {
        "id": "A",
        "text": "\\({x_M} = 2\\).",
        "is_correct": true
      },
      {
        "id": "B",
        "text": "\\({x_M} = 1 - \\sqrt 2 \\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\({x_M} = 1\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\({x_M} = 1 + \\sqrt 2 \\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Chọn đáp án A",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-05",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Tính số điểm cực trị của hàm số \\(y = {x^4} - 2{x^3} + 2x\\)",
    "options": [
      {
        "id": "A",
        "text": "\\(3\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[0\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[1\\].",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\(2\\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-06",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right) = {\\left( {{x^2} - 1} \\right)^3}\\). Số điểm cực trị của hàm số \\(f\\left( x \\right)\\) là",
    "options": [
      {
        "id": "A",
        "text": "\\(5\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[3\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(1\\).",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn đáp án D",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-07",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Giá trị cực tiểu \\({y_{CT}}\\) của hàm số \\(y = x + \\frac{4}{x} - 3\\) là",
    "options": [
      {
        "id": "A",
        "text": "\\({y_{CT}} = - 3\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\({y_{CT}} = 1\\).",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "\\({y_{CT}} = - 1\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\({y_{CT}} = 3\\).",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-08",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Điểm cực tiểu của hàm số \\[y = x\\sqrt {4 - {x^2}} \\] là",
    "options": [
      {
        "id": "A",
        "text": "\\( - 2\\sqrt 3 \\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\( - \\sqrt 2 \\).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\(\\sqrt 2 \\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-09",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Biết đồ thị hàm số \\[y = {x^3} - 3x + 1\\]có hai điểm cực trị là \\[A\\]và \\[B\\]. Phương trình đường thẳng \\[AB\\] là",
    "options": [
      {
        "id": "A",
        "text": "\\[y = - 2x + 1\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[y = 2x - 1\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[y = x - 2\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[y = - x + 2\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-10",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Hàm số \\(y = {\\left( {{x^3} - 3x} \\right)^e}\\) có bao nhiêu điểm cực trị?",
    "options": [
      {
        "id": "A",
        "text": ".",
        "is_correct": false
      },
      {
        "id": "B",
        "text": ".",
        "is_correct": false
      },
      {
        "id": "C",
        "text": ".",
        "is_correct": false
      },
      {
        "id": "D",
        "text": ".",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-11",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = a{x^3} + b{x^2} + cx + d\\] có đồ thị như hình vẽ dưới\n\nHàm số đã cho có bao nhiêu điểm cực trị?",
    "options": [
      {
        "id": "A",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(1\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(3\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(4\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753358049/1753358115-image5.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-12",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = f\\left( x \\right)\\] có đồ thị như hình vẽ. Hàm số đạt cực tiểu tại các điểm",
    "options": [
      {
        "id": "A",
        "text": "\\(x = \\pm \\sqrt 2 \\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(x = \\pm 2\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(x = - 1\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(x = 3\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753358049/1753358115-image6.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-13",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right) = a{x^3} + b{x^2} + cx + d\\)có đồ thị như hình vẽ bên dưới.\n\nMệnh đề nào sau đây sai?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đạt cực tiểu tại \\(x = 2\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đạt cực đại tại \\(x = 4\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số có hai điểm cực trị.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đạt cực đại tại \\(x = 0\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753358049/1753358115-image7.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-14",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\)xác định, liên tục trên đoạn \\(\\left[ { - 2;2} \\right]\\)và có đồ thị là đường cong trong hình vẽ bên. Hàm số \\(f\\left( x \\right)\\)đạt cực tiểu tại điểm nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(x = - 1\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(x = 2\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(x = 1\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(x = - 2\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753358049/1753358115-image8.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-15",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f(x)\\) có đồ thị như hình bên. Hàm số có bao nhiêu điểm cực tiểu trên khoảng \\(\\left( {a;b} \\right)\\).",
    "options": [
      {
        "id": "A",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(3\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(4\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(7\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753358049/1753358115-image9.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-16",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right)\\) liên tục trên đoạn \\(\\left[ { - \\sqrt 3 ;\\sqrt 3 } \\right]\\) và có đồ thị hàm số như hình vẽ sau\n\nĐiểm cực đại của đồ thị hàm số đã cho là",
    "options": [
      {
        "id": "A",
        "text": "\\(M\\left( { - 1; - 4} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(N\\left( {0; - 3} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(x = - 1\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(x = 0\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753358049/1753358115-image10.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-17",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right)\\) xác định, liên tục trên tập số thực \\(\\mathbb{R}\\) và có đồ thị như hình bên. Hàm số \\(y = f\\left( x \\right)\\) đạt cực tiểu tại điểm nào dưới đây?",
    "options": [
      {
        "id": "A",
        "text": "\\(x = 1\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(x = 0\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(x = - 2\\) và \\(x = 0\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(x = - 2\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753358049/1753358115-image11.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-18",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = a{x^3} + b{x^2} + cx + d\\;\\)\\(\\left( {a,\\;b,\\;c,\\;d \\in \\mathbb{R}} \\right)\\) có đồ thị như hình vẽ bên.\n\nSố điểm cực trị của hàm số đã cho là",
    "options": [
      {
        "id": "A",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(0\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(3\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(1\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753358049/1753358115-image12.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-19",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right)\\)liên tục trên đoạn \\(\\left[ { - 1;3} \\right]\\)và có đồ thị hàm số như hình vẽ bên:\n\nHàm số đạt cực tiểu tại điểm",
    "options": [
      {
        "id": "A",
        "text": "\\(x = 2\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(x = 0\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(x = - 1\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(x = 3\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753358049/1753358115-image13.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-10-20",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 10",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f(x)\\) có đồ thị như hình vẽ. Hàm số \\(f(x)\\) có số điềm cực trị là",
    "options": [
      {
        "id": "A",
        "text": "4.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "3.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "5.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "6.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753358049/1753358115-image14.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-01",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = f(x)\\] xác định trên \\[\\mathbb{R}\\] và có đạo hàm \\[y' = f'(x) = (x - 1){(x - 4)^2}{(5 - x)^3}.g(x)\\], hàm số \\[y = g(x)\\] có đồ thị như hình vẽ. Hàm số \\[y = f(x)\\] có bao nhiêu điểm cực trị?",
    "options": [
      {
        "id": "A",
        "text": "\\(5\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(4\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(3\\).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\(2\\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image1.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-02",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có bảng biến thiên như sau:\n\nGiá trị cực tiểu của hàm số đã cho bằng",
    "options": [
      {
        "id": "A",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(3\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(0\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\( - 4\\).",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn đáp án D",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image2.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-03",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = f\\left( x \\right)\\] có bảng biến thiên như sau\n\nHàm số đạt cực đại tại điểm",
    "options": [
      {
        "id": "A",
        "text": "\\[x = - 3\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[x = - 1\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[x = 1\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[x = - 2\\].",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn đáp án D",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image3.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-04",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có bảng biến thiên như sau\n\nHàm số đạt cực đại tại điểm",
    "options": [
      {
        "id": "A",
        "text": "\\(x = 1\\)",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(x = 0\\)",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(x = 5\\)",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(x = 2\\)",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn đáp án D",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image4.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-05",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Hàm số \\(y = f\\left( x \\right)\\)có bảng biến thiên như sau:\n\nGiá trị cực tiểu của hàm số đã cho bằng",
    "options": [
      {
        "id": "A",
        "text": "\\( - 2\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "1.",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "0.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\( - 3\\).",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image5.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-06",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có bảng biến thiên như sau:\n\nGiá trị cực đại của hàm số đã cho bằng",
    "options": [
      {
        "id": "A",
        "text": "\\( - 1\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(0\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(1\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(4\\).",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn đáp án D",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image6.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-07",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right)\\) xác định trên \\(\\mathbb{R}\\), bảng xét dấu của \\(f'\\left( x \\right)\\) như sau\n\nHàm số \\(f\\left( x \\right)\\) có bao nhiêu điểm cực trị?",
    "options": [
      {
        "id": "A",
        "text": "3.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "2.",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "1.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "4.",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image7.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-08",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Cho hàm số , bảng xét dấu của như sau:\n\nSố điểm cực đại của hàm số đã cho là",
    "options": [
      {
        "id": "A",
        "text": ".",
        "is_correct": false
      },
      {
        "id": "B",
        "text": ".",
        "is_correct": true
      },
      {
        "id": "C",
        "text": ".",
        "is_correct": false
      },
      {
        "id": "D",
        "text": ".",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image8.png",
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image9.png",
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image10.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-09",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\)có bảng biến thiên như hình vẽ. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số không có giá trị cực tiểu.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đạt cực đại tại \\(x = 2\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Giá trị cực đại của hàm số bằng \\(1\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đạt cực tiểu tại \\(x = - 2\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image15.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-10",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\)có bảng biến thiên sau\n\nHàm số đã cho có bao nhiêu điểm cực trị ?",
    "options": [
      {
        "id": "A",
        "text": "\\(1\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(3\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(0\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image16.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-11",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có bảng biến thiên như hình vẽ bên. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số \\(f\\left( x \\right)\\) đạt cực đại tại \\(x = 2\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số \\(f\\left( x \\right)\\) đạt cực tiểu tại \\(x = - 1\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số \\(f\\left( x \\right)\\) đạt cực tiểu tại \\(x = - 2\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số \\(f\\left( x \\right)\\) đạt cực đại tại \\(x = - 2\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image17.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-12",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f(x)\\) có bảng biến thiên như sau:\n\nKhẳng định nào sau đây là đúng?",
    "options": [
      {
        "id": "A",
        "text": "Giá trị cực đại của hàm số \\(y = f(x)\\) bằng 2.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số \\(y = f(x)\\) đạt cực tiểu tại \\(x = 1\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số \\(y = f(x)\\) đạt cực đại tại \\(x = - 1.\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Giá trị cực tiểu của hàm số \\(y = f(x)\\) bằng 1.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image18.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-13",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Cho hàm số \\[f\\left( x \\right)\\], bảng xét dấu của \\[f'\\left( x \\right)\\] như sau:\n\nSố điểm cực trị của hàm số đã cho là",
    "options": [
      {
        "id": "A",
        "text": "1.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "3.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "2.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "4.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image19.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-14",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right)\\), bảng xét dấu \\(f'\\left( x \\right)\\) như sau:\n\nSố điểm cực tiểu của hàm số \\(f\\left( x \\right)\\)là",
    "options": [
      {
        "id": "A",
        "text": "\\(1\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(3\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(4\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image20.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-15",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right)\\)có bảng xét dấu của \\(f'\\left( x \\right)\\)như sau:\n\nSố điểm cực trị của hàm số đã cho là",
    "options": [
      {
        "id": "A",
        "text": "3.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "0.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "2.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "1.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image21.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-16",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = f\\left( x \\right)\\] có tập xác định \\[D = \\mathbb{R}\\backslash \\left\\{ 0 \\right\\}\\] và bảng xét dấu đạo hàm như sau\n\nSố điểm cực trị của hàm số đã cho là",
    "options": [
      {
        "id": "A",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(1\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(3\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(4\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image22.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-17",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Cho hàm số \\[f\\left( x \\right)\\] liên tục trên \\(\\mathbb{R}\\), bảng xét dấu của \\(f'\\left( x \\right)\\) như sau:\n\nTổng hoành độ các điểm cực đại của hàm số bằng",
    "options": [
      {
        "id": "A",
        "text": "\\[1\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[2\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[3\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[ - 2\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image23.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-18",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Cho hàm số \\[f\\left( x \\right)\\] liên tục trên \\(\\mathbb{R}\\), bảng xét dấu của \\(f'\\left( x \\right)\\) như sau:\n\nHàm số có bao nhiêu điểm cực tiểu",
    "options": [
      {
        "id": "A",
        "text": "\\[1\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[2\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[3\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[4\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image24.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-19",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Cho hàm số \\[y = f\\left( x \\right)\\] có bảng biến thiên như sau:\n\nGiá trị cực đại của hàm số đã cho bằng",
    "options": [
      {
        "id": "A",
        "text": "1.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[ - 2\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[ - 3\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[ - 1\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image25.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-11-20",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 11",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) liên tục trên \\(\\mathbb{R}\\) và có bảng xét dấu của đạo hàm như hình vẽ. Số điểm cực tiểu của hàm số đã cho là",
    "options": [
      {
        "id": "A",
        "text": "1.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "3.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "2.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "4.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [
      "https://video.vietjack.com/upload2/images/1753359854/1753359920-image26.png"
    ],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-01",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) có đạo hàm \\(f'\\left( x \\right) = x{\\left( {x - 2} \\right)^3}{\\left( {x - 3} \\right)^{2020}}\\). Số điểm cực trị của hàm số \\(y = f\\left( x \\right)\\) là",
    "options": [
      {
        "id": "A",
        "text": "\\(3\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(1\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(4\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(2\\).",
        "is_correct": true
      }
    ],
    "correctOption": "D",
    "explanation": "Chọn đáp án D",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-02",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right)\\) có đạo hàm \\(f'\\left( x \\right) = {x^{2021}}{\\left( {x - 1} \\right)^2}{\\left( {x + 2} \\right)^3},\\forall x \\in \\mathbb{R}\\). Số điểm cực trị của hàm số đã cho là",
    "options": [
      {
        "id": "A",
        "text": "\\(3\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(2\\).",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "\\(6\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(1\\).",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-03",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right)\\) có đạo hàm \\(f'\\left( x \\right) = x\\left( {x - 1} \\right){\\left( {x + 2} \\right)^3}\\), \\(\\forall x \\in \\mathbb{R}\\). Số điểm cực trị của hàm số đã cho là",
    "options": [
      {
        "id": "A",
        "text": "\\(3\\).",
        "is_correct": true
      },
      {
        "id": "B",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(5\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(1\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Chọn đáp án A",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-04",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) liên tục trên \\(\\mathbb{R}\\), có đạo hàm \\(f'\\left( x \\right) = x{\\left( {x - 1} \\right)^2}{\\left( {x + 1} \\right)^2}\\). Hàm số đã cho có bao nhiêu điểm cực trị?",
    "options": [
      {
        "id": "A",
        "text": "Có đúng \\(3\\) điểm cực trị.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Không có điểm cực trị.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Có đúng \\(1\\) điểm cực trị.",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "Có đúng \\(2\\) điểm cực trị.",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-05",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\) liên tục và có đạo hàm \\(f'\\left( x \\right) = {\\left( {2x - 1} \\right)^4}\\left( {x + 2} \\right)\\left( {3 - 3x} \\right)\\), số điểm cực trị của hàm số là",
    "options": [
      {
        "id": "A",
        "text": "\\(1\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(2\\).",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "\\(3\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(0\\).",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-06",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right)\\) có đạo hàm \\(f'\\left( x \\right) = \\left( {x - 1} \\right)\\left( {{x^2} - 3x + 2} \\right),{\\rm{ }}\\forall x \\in \\mathbb{R}\\). Số điểm cực trị của hàm số \\(f\\left( x \\right)\\) là",
    "options": [
      {
        "id": "A",
        "text": "\\(1\\).",
        "is_correct": true
      },
      {
        "id": "B",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(0\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(3\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Chọn đáp án A",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-07",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right)\\) có \\(f'\\left( x \\right) = {x^{2017}}{\\left( {x - 1} \\right)^{2018}}{\\left( {x + 1} \\right)^{2019}}\\), hỏi hàm số đã cho có bao nhiêu cực trị?",
    "options": [
      {
        "id": "A",
        "text": "\\(0\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(1\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(2\\).",
        "is_correct": true
      },
      {
        "id": "D",
        "text": "\\(3\\).",
        "is_correct": false
      }
    ],
    "correctOption": "C",
    "explanation": "Chọn đáp án C",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-08",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f\\left( x \\right)\\)có đạo hàm \\(f'\\left( x \\right) = x\\left( {x - 1} \\right){\\left( {{x^2} + x - 2} \\right)^3},\\,\\,\\forall x \\in \\mathbb{R}\\). Số điểm cực trị của hàm số đã cho là:",
    "options": [
      {
        "id": "A",
        "text": "\\(3\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(2\\).",
        "is_correct": true
      },
      {
        "id": "C",
        "text": "\\(5\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(1\\).",
        "is_correct": false
      }
    ],
    "correctOption": "B",
    "explanation": "Chọn đáp án B",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-09",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = f(x)\\) liên tục trên \\(\\mathbb{R}\\) và có đạo hàm là \\(f'(x) = {x^2}({x^2} - 4)({x^2} - 3x + 2)(x - 3)\\). Hàm số có bao nhiêu điểm cực đại ?",
    "options": [
      {
        "id": "A",
        "text": "3.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "0.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "2.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "1.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-10",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Cho hàm số \\(f\\left( x \\right)\\) có đạo hàm \\(f'\\left( x \\right) = x{\\left( {x + 2} \\right)^2}\\left( {{2^x} - 4} \\right),\\forall x \\in \\mathbb{R}\\). Số điểm cực trị của hàm số đã cho là",
    "options": [
      {
        "id": "A",
        "text": "\\(3\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(1\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(2\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(0\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-11",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Tọa độ điểm cực đại của đồ thị hàm số \\[y = {2^{\\frac{x}{{4{x^2} + 1}}}}\\] là",
    "options": [
      {
        "id": "A",
        "text": "\\[\\left( { - \\frac{1}{2}\\,;\\,\\sqrt[4]{2}} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\[\\left( { - \\frac{1}{2}\\,;\\, - \\sqrt[4]{2}} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\[\\left( {\\frac{1}{2}\\,;\\,\\sqrt[4]{2}} \\right)\\].",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\[\\left( { - \\frac{1}{2}\\,;\\,\\frac{1}{{\\sqrt[4]{2}}}} \\right)\\].",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-12",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Nếu hàm số \\(y = f\\left( x \\right)\\)thỏa mãn \\(f'\\left( x \\right) = {\\left( {x - 1} \\right)^3}\\left( {{2^x} - 2} \\right){\\log _2}x\\), \\(\\forall x > 0\\)thì",
    "options": [
      {
        "id": "A",
        "text": "Trên khoảng \\(\\left( {0; + \\infty } \\right)\\)hàm số \\(y = f\\left( x \\right)\\)không có điểm cực trị nào.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Trên khoảng \\(\\left( {0; + \\infty } \\right)\\)hàm số \\(y = f\\left( x \\right)\\)có điểm cực tiểu là \\(x = 1\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Trên khoảng \\(\\left( {0; + \\infty } \\right)\\)hàm số \\(y = f\\left( x \\right)\\)có điểm cực đại là \\(x = 1\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Trên khoảng \\(\\left( {0; + \\infty } \\right)\\)hàm số \\(y = f\\left( x \\right)\\)có nhiều hơn một điểm cực trị.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-13",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = \\ln \\left( {2{x^2} - {x^4}} \\right)\\). Mệnh đề nào sau đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đạt cực tiểu tại \\(x = 1\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đạt cực tiểu tại \\(x = - 1\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số có hai cực trị.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số có ba cực trị.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-14",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = {x^2}.{{\\rm{e}}^{ - x}}\\). Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số không có điểm cực trị.",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số chỉ có điểm cực tiểu, không có điểm cực đại.",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đạt cực đại tại \\(x = 0\\)và đạt cực tiểu tại \\(x = 2\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đạt cực tiểu tại \\(x = 0\\)và đạt cực đại tại \\(x = 2\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-15",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Điểm cực đại của hàm số \\(y = \\left( {2x + 1} \\right){{\\mathop{\\rm e}\\nolimits} ^{1 - x}}\\) là",
    "options": [
      {
        "id": "A",
        "text": "\\(x = - 1\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(x = \\frac{1}{2}\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(x = 1\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(x = \\frac{3}{2}\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-16",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = x - \\ln \\left( {1 + x} \\right)\\). Mệnh đề nào sau đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - 1;\\,0} \\right)\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đạt cực đại tại \\(x = 0\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số đồng biến trên khoảng \\(\\left( { - 1;\\, + \\infty } \\right)\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số đạt cực tiểu tại \\(x = 0\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-17",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Cho hàm số \\(y = \\ln \\left( {2x - {x^2}} \\right)\\). Mệnh đề nào sau đây đúng?",
    "options": [
      {
        "id": "A",
        "text": "Hàm số đạt cực tiểu tại \\(x = 1\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "Hàm số đạt cực đại tại \\(x = 1\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "Hàm số có hai cực trị.",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "Hàm số không có cực trị.",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-18",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Hàm số \\(f\\left( x \\right) = x{{\\rm{e}}^{ - x}}\\) đạt cực trị tại điểm",
    "options": [
      {
        "id": "A",
        "text": "\\(x = e\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(x = {e^2}\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(x = 1\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(x = 2\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-19",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Hàm số \\(y = {x^2}\\ln x\\) đạt cực trị tại điểm",
    "options": [
      {
        "id": "A",
        "text": "\\(x = \\sqrt {\\rm{e}} \\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(x = 0\\); \\(x = \\frac{1}{{\\sqrt {\\rm{e}} }}\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\(x = 0\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\(x = \\frac{1}{{\\sqrt {\\rm{e}} }}\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "q-gk1-12-20",
    "teacherId": "teacher-nguyen-van-sang",
    "type": "MCQ",
    "grade": 12,
    "chapter": "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    "topic": "Ôn thi Giữa Kỳ 1 — Đề số 12",
    "difficulty": "TH",
    "content": "Giá trị cực tiểu của hàm số \\(y = {e^x}\\left( {{x^2} - 3} \\right)\\) là:",
    "options": [
      {
        "id": "A",
        "text": "\\(\\frac{6}{e}\\).",
        "is_correct": false
      },
      {
        "id": "B",
        "text": "\\(\\frac{6}{{{e^3}}}\\).",
        "is_correct": false
      },
      {
        "id": "C",
        "text": "\\( - 3e\\).",
        "is_correct": false
      },
      {
        "id": "D",
        "text": "\\( - 2e\\).",
        "is_correct": false
      }
    ],
    "correctOption": "A",
    "explanation": "Bạn cần đăng ký gói VIP ( giá chỉ từ 250K ) để làm bài, xem đáp án và lời giải chi tiết không giới hạn.\n\n\n\n\n        Nâng cấp VIP",
    "images": [],
    "createdAt": "2026-11-03T06:00:00.000Z"
  }
];

export const GIUA_KY_1_ANSWER_KEYS: Record<string, AnswerKey> = {
  "q-gk1-01-01": {
    "questionId": "q-gk1-01-01",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-01-02": {
    "questionId": "q-gk1-01-02",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-01-03": {
    "questionId": "q-gk1-01-03",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-01-04": {
    "questionId": "q-gk1-01-04",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-01-05": {
    "questionId": "q-gk1-01-05",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-01-06": {
    "questionId": "q-gk1-01-06",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-01-07": {
    "questionId": "q-gk1-01-07",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-01-08": {
    "questionId": "q-gk1-01-08",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-01-09": {
    "questionId": "q-gk1-01-09",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-01-10": {
    "questionId": "q-gk1-01-10",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-01-11": {
    "questionId": "q-gk1-01-11",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-01-12": {
    "questionId": "q-gk1-01-12",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-01-13": {
    "questionId": "q-gk1-01-13",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-01-14": {
    "questionId": "q-gk1-01-14",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-01-15": {
    "questionId": "q-gk1-01-15",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-01-16": {
    "questionId": "q-gk1-01-16",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-01-17": {
    "questionId": "q-gk1-01-17",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-01-18": {
    "questionId": "q-gk1-01-18",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-01-19": {
    "questionId": "q-gk1-01-19",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-01-20": {
    "questionId": "q-gk1-01-20",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-02-01": {
    "questionId": "q-gk1-02-01",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-02-02": {
    "questionId": "q-gk1-02-02",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-02-03": {
    "questionId": "q-gk1-02-03",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-02-04": {
    "questionId": "q-gk1-02-04",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-02-05": {
    "questionId": "q-gk1-02-05",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-02-06": {
    "questionId": "q-gk1-02-06",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-02-07": {
    "questionId": "q-gk1-02-07",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-02-08": {
    "questionId": "q-gk1-02-08",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-02-09": {
    "questionId": "q-gk1-02-09",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-02-10": {
    "questionId": "q-gk1-02-10",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-02-11": {
    "questionId": "q-gk1-02-11",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-02-12": {
    "questionId": "q-gk1-02-12",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-02-13": {
    "questionId": "q-gk1-02-13",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-02-14": {
    "questionId": "q-gk1-02-14",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-02-15": {
    "questionId": "q-gk1-02-15",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-02-16": {
    "questionId": "q-gk1-02-16",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-02-17": {
    "questionId": "q-gk1-02-17",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-02-18": {
    "questionId": "q-gk1-02-18",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-02-19": {
    "questionId": "q-gk1-02-19",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-02-20": {
    "questionId": "q-gk1-02-20",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-03-01": {
    "questionId": "q-gk1-03-01",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-03-02": {
    "questionId": "q-gk1-03-02",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-03-03": {
    "questionId": "q-gk1-03-03",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-03-04": {
    "questionId": "q-gk1-03-04",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-03-05": {
    "questionId": "q-gk1-03-05",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-03-06": {
    "questionId": "q-gk1-03-06",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-03-07": {
    "questionId": "q-gk1-03-07",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-03-08": {
    "questionId": "q-gk1-03-08",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-03-09": {
    "questionId": "q-gk1-03-09",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-03-10": {
    "questionId": "q-gk1-03-10",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-03-11": {
    "questionId": "q-gk1-03-11",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-03-12": {
    "questionId": "q-gk1-03-12",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-03-13": {
    "questionId": "q-gk1-03-13",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-03-14": {
    "questionId": "q-gk1-03-14",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-03-15": {
    "questionId": "q-gk1-03-15",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-03-16": {
    "questionId": "q-gk1-03-16",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-03-17": {
    "questionId": "q-gk1-03-17",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-03-18": {
    "questionId": "q-gk1-03-18",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-03-19": {
    "questionId": "q-gk1-03-19",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-03-20": {
    "questionId": "q-gk1-03-20",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-04-01": {
    "questionId": "q-gk1-04-01",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-04-02": {
    "questionId": "q-gk1-04-02",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-04-03": {
    "questionId": "q-gk1-04-03",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-04-04": {
    "questionId": "q-gk1-04-04",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-04-05": {
    "questionId": "q-gk1-04-05",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-04-06": {
    "questionId": "q-gk1-04-06",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-04-07": {
    "questionId": "q-gk1-04-07",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-04-08": {
    "questionId": "q-gk1-04-08",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-04-09": {
    "questionId": "q-gk1-04-09",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-04-10": {
    "questionId": "q-gk1-04-10",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-04-11": {
    "questionId": "q-gk1-04-11",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-04-12": {
    "questionId": "q-gk1-04-12",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-04-13": {
    "questionId": "q-gk1-04-13",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-04-14": {
    "questionId": "q-gk1-04-14",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-04-15": {
    "questionId": "q-gk1-04-15",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-04-16": {
    "questionId": "q-gk1-04-16",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-04-17": {
    "questionId": "q-gk1-04-17",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-04-18": {
    "questionId": "q-gk1-04-18",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-04-19": {
    "questionId": "q-gk1-04-19",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-04-20": {
    "questionId": "q-gk1-04-20",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-05-01": {
    "questionId": "q-gk1-05-01",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-05-02": {
    "questionId": "q-gk1-05-02",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-05-03": {
    "questionId": "q-gk1-05-03",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-05-04": {
    "questionId": "q-gk1-05-04",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-05-05": {
    "questionId": "q-gk1-05-05",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-05-06": {
    "questionId": "q-gk1-05-06",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-05-07": {
    "questionId": "q-gk1-05-07",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-05-08": {
    "questionId": "q-gk1-05-08",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-05-09": {
    "questionId": "q-gk1-05-09",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-05-10": {
    "questionId": "q-gk1-05-10",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-05-11": {
    "questionId": "q-gk1-05-11",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-05-12": {
    "questionId": "q-gk1-05-12",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-05-13": {
    "questionId": "q-gk1-05-13",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-05-14": {
    "questionId": "q-gk1-05-14",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-05-15": {
    "questionId": "q-gk1-05-15",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-05-16": {
    "questionId": "q-gk1-05-16",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-05-17": {
    "questionId": "q-gk1-05-17",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-05-18": {
    "questionId": "q-gk1-05-18",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-05-19": {
    "questionId": "q-gk1-05-19",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-05-20": {
    "questionId": "q-gk1-05-20",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-06-01": {
    "questionId": "q-gk1-06-01",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-06-02": {
    "questionId": "q-gk1-06-02",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-06-03": {
    "questionId": "q-gk1-06-03",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-06-04": {
    "questionId": "q-gk1-06-04",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-06-05": {
    "questionId": "q-gk1-06-05",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-06-06": {
    "questionId": "q-gk1-06-06",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-06-07": {
    "questionId": "q-gk1-06-07",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-06-08": {
    "questionId": "q-gk1-06-08",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-06-09": {
    "questionId": "q-gk1-06-09",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-06-10": {
    "questionId": "q-gk1-06-10",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-06-11": {
    "questionId": "q-gk1-06-11",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-06-12": {
    "questionId": "q-gk1-06-12",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-06-13": {
    "questionId": "q-gk1-06-13",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-06-14": {
    "questionId": "q-gk1-06-14",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-06-15": {
    "questionId": "q-gk1-06-15",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-06-16": {
    "questionId": "q-gk1-06-16",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-06-17": {
    "questionId": "q-gk1-06-17",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-06-18": {
    "questionId": "q-gk1-06-18",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-06-19": {
    "questionId": "q-gk1-06-19",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-06-20": {
    "questionId": "q-gk1-06-20",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-07-01": {
    "questionId": "q-gk1-07-01",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-07-02": {
    "questionId": "q-gk1-07-02",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-07-03": {
    "questionId": "q-gk1-07-03",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-07-04": {
    "questionId": "q-gk1-07-04",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-07-05": {
    "questionId": "q-gk1-07-05",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-07-06": {
    "questionId": "q-gk1-07-06",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-07-07": {
    "questionId": "q-gk1-07-07",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-07-08": {
    "questionId": "q-gk1-07-08",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-07-09": {
    "questionId": "q-gk1-07-09",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-07-10": {
    "questionId": "q-gk1-07-10",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-07-11": {
    "questionId": "q-gk1-07-11",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-07-12": {
    "questionId": "q-gk1-07-12",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-07-13": {
    "questionId": "q-gk1-07-13",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-07-14": {
    "questionId": "q-gk1-07-14",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-07-15": {
    "questionId": "q-gk1-07-15",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-07-16": {
    "questionId": "q-gk1-07-16",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-07-17": {
    "questionId": "q-gk1-07-17",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-07-18": {
    "questionId": "q-gk1-07-18",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-07-19": {
    "questionId": "q-gk1-07-19",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-07-20": {
    "questionId": "q-gk1-07-20",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-08-01": {
    "questionId": "q-gk1-08-01",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-08-02": {
    "questionId": "q-gk1-08-02",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-08-03": {
    "questionId": "q-gk1-08-03",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-08-04": {
    "questionId": "q-gk1-08-04",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-08-05": {
    "questionId": "q-gk1-08-05",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-08-06": {
    "questionId": "q-gk1-08-06",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-08-07": {
    "questionId": "q-gk1-08-07",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-08-08": {
    "questionId": "q-gk1-08-08",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-08-09": {
    "questionId": "q-gk1-08-09",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-08-10": {
    "questionId": "q-gk1-08-10",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-08-11": {
    "questionId": "q-gk1-08-11",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-08-12": {
    "questionId": "q-gk1-08-12",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-08-13": {
    "questionId": "q-gk1-08-13",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-08-14": {
    "questionId": "q-gk1-08-14",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-08-15": {
    "questionId": "q-gk1-08-15",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-08-16": {
    "questionId": "q-gk1-08-16",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-08-17": {
    "questionId": "q-gk1-08-17",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-08-18": {
    "questionId": "q-gk1-08-18",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-08-19": {
    "questionId": "q-gk1-08-19",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-08-20": {
    "questionId": "q-gk1-08-20",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-09-01": {
    "questionId": "q-gk1-09-01",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-09-02": {
    "questionId": "q-gk1-09-02",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-09-03": {
    "questionId": "q-gk1-09-03",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-09-04": {
    "questionId": "q-gk1-09-04",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-09-05": {
    "questionId": "q-gk1-09-05",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-09-06": {
    "questionId": "q-gk1-09-06",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-09-07": {
    "questionId": "q-gk1-09-07",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-09-08": {
    "questionId": "q-gk1-09-08",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-09-09": {
    "questionId": "q-gk1-09-09",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-09-10": {
    "questionId": "q-gk1-09-10",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-09-11": {
    "questionId": "q-gk1-09-11",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-09-12": {
    "questionId": "q-gk1-09-12",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-09-13": {
    "questionId": "q-gk1-09-13",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-09-14": {
    "questionId": "q-gk1-09-14",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-09-15": {
    "questionId": "q-gk1-09-15",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-09-16": {
    "questionId": "q-gk1-09-16",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-09-17": {
    "questionId": "q-gk1-09-17",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-09-18": {
    "questionId": "q-gk1-09-18",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-09-19": {
    "questionId": "q-gk1-09-19",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-09-20": {
    "questionId": "q-gk1-09-20",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-10-01": {
    "questionId": "q-gk1-10-01",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-10-02": {
    "questionId": "q-gk1-10-02",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-10-03": {
    "questionId": "q-gk1-10-03",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-10-04": {
    "questionId": "q-gk1-10-04",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-10-05": {
    "questionId": "q-gk1-10-05",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-10-06": {
    "questionId": "q-gk1-10-06",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-10-07": {
    "questionId": "q-gk1-10-07",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-10-08": {
    "questionId": "q-gk1-10-08",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-10-09": {
    "questionId": "q-gk1-10-09",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-10-10": {
    "questionId": "q-gk1-10-10",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-10-11": {
    "questionId": "q-gk1-10-11",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-10-12": {
    "questionId": "q-gk1-10-12",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-10-13": {
    "questionId": "q-gk1-10-13",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-10-14": {
    "questionId": "q-gk1-10-14",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-10-15": {
    "questionId": "q-gk1-10-15",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-10-16": {
    "questionId": "q-gk1-10-16",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-10-17": {
    "questionId": "q-gk1-10-17",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-10-18": {
    "questionId": "q-gk1-10-18",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-10-19": {
    "questionId": "q-gk1-10-19",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-10-20": {
    "questionId": "q-gk1-10-20",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-11-01": {
    "questionId": "q-gk1-11-01",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-11-02": {
    "questionId": "q-gk1-11-02",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-11-03": {
    "questionId": "q-gk1-11-03",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-11-04": {
    "questionId": "q-gk1-11-04",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-11-05": {
    "questionId": "q-gk1-11-05",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-11-06": {
    "questionId": "q-gk1-11-06",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-11-07": {
    "questionId": "q-gk1-11-07",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-11-08": {
    "questionId": "q-gk1-11-08",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-11-09": {
    "questionId": "q-gk1-11-09",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-11-10": {
    "questionId": "q-gk1-11-10",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-11-11": {
    "questionId": "q-gk1-11-11",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-11-12": {
    "questionId": "q-gk1-11-12",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-11-13": {
    "questionId": "q-gk1-11-13",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-11-14": {
    "questionId": "q-gk1-11-14",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-11-15": {
    "questionId": "q-gk1-11-15",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-11-16": {
    "questionId": "q-gk1-11-16",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-11-17": {
    "questionId": "q-gk1-11-17",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-11-18": {
    "questionId": "q-gk1-11-18",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-11-19": {
    "questionId": "q-gk1-11-19",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-11-20": {
    "questionId": "q-gk1-11-20",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-12-01": {
    "questionId": "q-gk1-12-01",
    "type": "MCQ",
    "correctOption": "D"
  },
  "q-gk1-12-02": {
    "questionId": "q-gk1-12-02",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-12-03": {
    "questionId": "q-gk1-12-03",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-12-04": {
    "questionId": "q-gk1-12-04",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-12-05": {
    "questionId": "q-gk1-12-05",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-12-06": {
    "questionId": "q-gk1-12-06",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-12-07": {
    "questionId": "q-gk1-12-07",
    "type": "MCQ",
    "correctOption": "C"
  },
  "q-gk1-12-08": {
    "questionId": "q-gk1-12-08",
    "type": "MCQ",
    "correctOption": "B"
  },
  "q-gk1-12-09": {
    "questionId": "q-gk1-12-09",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-12-10": {
    "questionId": "q-gk1-12-10",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-12-11": {
    "questionId": "q-gk1-12-11",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-12-12": {
    "questionId": "q-gk1-12-12",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-12-13": {
    "questionId": "q-gk1-12-13",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-12-14": {
    "questionId": "q-gk1-12-14",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-12-15": {
    "questionId": "q-gk1-12-15",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-12-16": {
    "questionId": "q-gk1-12-16",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-12-17": {
    "questionId": "q-gk1-12-17",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-12-18": {
    "questionId": "q-gk1-12-18",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-12-19": {
    "questionId": "q-gk1-12-19",
    "type": "MCQ",
    "correctOption": "A"
  },
  "q-gk1-12-20": {
    "questionId": "q-gk1-12-20",
    "type": "MCQ",
    "correctOption": "A"
  }
};

export const GIUA_KY_1_ASSIGNMENTS: Assignment[] = [
  {
    "id": "asg-gk1-de-01",
    "title": "Đề số 01: Ôn thi Giữa Kỳ 1 Toán 12 (Năm học 2026 - 2027)",
    "classId": "class-12a1",
    "className": "Toán 12A1 — Ôn thi Tốt nghiệp THPT 2026",
    "teacherId": "teacher-nguyen-van-sang",
    "teacherName": "ThS. Nguyễn Văn Sang",
    "description": "Đề kiểm tra trắc nghiệm 20 câu chuẩn cấu trúc Giữa Kỳ 1. Chế độ: Đảo câu hỏi chống copy, Giới hạn làm 1 lần duy nhất, Thời gian 45 phút.",
    "questionIds": [
      "q-gk1-01-01",
      "q-gk1-01-02",
      "q-gk1-01-03",
      "q-gk1-01-04",
      "q-gk1-01-05",
      "q-gk1-01-06",
      "q-gk1-01-07",
      "q-gk1-01-08",
      "q-gk1-01-09",
      "q-gk1-01-10",
      "q-gk1-01-11",
      "q-gk1-01-12",
      "q-gk1-01-13",
      "q-gk1-01-14",
      "q-gk1-01-15",
      "q-gk1-01-16",
      "q-gk1-01-17",
      "q-gk1-01-18",
      "q-gk1-01-19",
      "q-gk1-01-20"
    ],
    "durationMinutes": 45,
    "allowedAttempts": 1,
    "status": "PUBLISHED",
    "shuffleQuestions": true,
    "viewSolutionsMode": "AFTER_SUBMIT",
    "totalPoints": 10,
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "asg-gk1-de-02",
    "title": "Đề số 02: Ôn thi Giữa Kỳ 1 Toán 12 (Năm học 2026 - 2027)",
    "classId": "class-12a1",
    "className": "Toán 12A1 — Ôn thi Tốt nghiệp THPT 2026",
    "teacherId": "teacher-nguyen-van-sang",
    "teacherName": "ThS. Nguyễn Văn Sang",
    "description": "Đề kiểm tra trắc nghiệm 20 câu chuẩn cấu trúc Giữa Kỳ 1. Chế độ: Đảo câu hỏi chống copy, Giới hạn làm 1 lần duy nhất, Thời gian 45 phút.",
    "questionIds": [
      "q-gk1-02-01",
      "q-gk1-02-02",
      "q-gk1-02-03",
      "q-gk1-02-04",
      "q-gk1-02-05",
      "q-gk1-02-06",
      "q-gk1-02-07",
      "q-gk1-02-08",
      "q-gk1-02-09",
      "q-gk1-02-10",
      "q-gk1-02-11",
      "q-gk1-02-12",
      "q-gk1-02-13",
      "q-gk1-02-14",
      "q-gk1-02-15",
      "q-gk1-02-16",
      "q-gk1-02-17",
      "q-gk1-02-18",
      "q-gk1-02-19",
      "q-gk1-02-20"
    ],
    "durationMinutes": 45,
    "allowedAttempts": 1,
    "status": "PUBLISHED",
    "shuffleQuestions": true,
    "viewSolutionsMode": "AFTER_SUBMIT",
    "totalPoints": 10,
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "asg-gk1-de-03",
    "title": "Đề số 03: Ôn thi Giữa Kỳ 1 Toán 12 (Năm học 2026 - 2027)",
    "classId": "class-12a1",
    "className": "Toán 12A1 — Ôn thi Tốt nghiệp THPT 2026",
    "teacherId": "teacher-nguyen-van-sang",
    "teacherName": "ThS. Nguyễn Văn Sang",
    "description": "Đề kiểm tra trắc nghiệm 20 câu chuẩn cấu trúc Giữa Kỳ 1. Chế độ: Đảo câu hỏi chống copy, Giới hạn làm 1 lần duy nhất, Thời gian 45 phút.",
    "questionIds": [
      "q-gk1-03-01",
      "q-gk1-03-02",
      "q-gk1-03-03",
      "q-gk1-03-04",
      "q-gk1-03-05",
      "q-gk1-03-06",
      "q-gk1-03-07",
      "q-gk1-03-08",
      "q-gk1-03-09",
      "q-gk1-03-10",
      "q-gk1-03-11",
      "q-gk1-03-12",
      "q-gk1-03-13",
      "q-gk1-03-14",
      "q-gk1-03-15",
      "q-gk1-03-16",
      "q-gk1-03-17",
      "q-gk1-03-18",
      "q-gk1-03-19",
      "q-gk1-03-20"
    ],
    "durationMinutes": 45,
    "allowedAttempts": 1,
    "status": "PUBLISHED",
    "shuffleQuestions": true,
    "viewSolutionsMode": "AFTER_SUBMIT",
    "totalPoints": 10,
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "asg-gk1-de-04",
    "title": "Đề số 04: Ôn thi Giữa Kỳ 1 Toán 12 (Năm học 2026 - 2027)",
    "classId": "class-12a1",
    "className": "Toán 12A1 — Ôn thi Tốt nghiệp THPT 2026",
    "teacherId": "teacher-nguyen-van-sang",
    "teacherName": "ThS. Nguyễn Văn Sang",
    "description": "Đề kiểm tra trắc nghiệm 20 câu chuẩn cấu trúc Giữa Kỳ 1. Chế độ: Đảo câu hỏi chống copy, Giới hạn làm 1 lần duy nhất, Thời gian 45 phút.",
    "questionIds": [
      "q-gk1-04-01",
      "q-gk1-04-02",
      "q-gk1-04-03",
      "q-gk1-04-04",
      "q-gk1-04-05",
      "q-gk1-04-06",
      "q-gk1-04-07",
      "q-gk1-04-08",
      "q-gk1-04-09",
      "q-gk1-04-10",
      "q-gk1-04-11",
      "q-gk1-04-12",
      "q-gk1-04-13",
      "q-gk1-04-14",
      "q-gk1-04-15",
      "q-gk1-04-16",
      "q-gk1-04-17",
      "q-gk1-04-18",
      "q-gk1-04-19",
      "q-gk1-04-20"
    ],
    "durationMinutes": 45,
    "allowedAttempts": 1,
    "status": "PUBLISHED",
    "shuffleQuestions": true,
    "viewSolutionsMode": "AFTER_SUBMIT",
    "totalPoints": 10,
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "asg-gk1-de-05",
    "title": "Đề số 05: Ôn thi Giữa Kỳ 1 Toán 12 (Năm học 2026 - 2027)",
    "classId": "class-12a1",
    "className": "Toán 12A1 — Ôn thi Tốt nghiệp THPT 2026",
    "teacherId": "teacher-nguyen-van-sang",
    "teacherName": "ThS. Nguyễn Văn Sang",
    "description": "Đề kiểm tra trắc nghiệm 20 câu chuẩn cấu trúc Giữa Kỳ 1. Chế độ: Đảo câu hỏi chống copy, Giới hạn làm 1 lần duy nhất, Thời gian 45 phút.",
    "questionIds": [
      "q-gk1-05-01",
      "q-gk1-05-02",
      "q-gk1-05-03",
      "q-gk1-05-04",
      "q-gk1-05-05",
      "q-gk1-05-06",
      "q-gk1-05-07",
      "q-gk1-05-08",
      "q-gk1-05-09",
      "q-gk1-05-10",
      "q-gk1-05-11",
      "q-gk1-05-12",
      "q-gk1-05-13",
      "q-gk1-05-14",
      "q-gk1-05-15",
      "q-gk1-05-16",
      "q-gk1-05-17",
      "q-gk1-05-18",
      "q-gk1-05-19",
      "q-gk1-05-20"
    ],
    "durationMinutes": 45,
    "allowedAttempts": 1,
    "status": "PUBLISHED",
    "shuffleQuestions": true,
    "viewSolutionsMode": "AFTER_SUBMIT",
    "totalPoints": 10,
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "asg-gk1-de-06",
    "title": "Đề số 06: Ôn thi Giữa Kỳ 1 Toán 12 (Năm học 2026 - 2027)",
    "classId": "class-12a1",
    "className": "Toán 12A1 — Ôn thi Tốt nghiệp THPT 2026",
    "teacherId": "teacher-nguyen-van-sang",
    "teacherName": "ThS. Nguyễn Văn Sang",
    "description": "Đề kiểm tra trắc nghiệm 20 câu chuẩn cấu trúc Giữa Kỳ 1. Chế độ: Đảo câu hỏi chống copy, Giới hạn làm 1 lần duy nhất, Thời gian 45 phút.",
    "questionIds": [
      "q-gk1-06-01",
      "q-gk1-06-02",
      "q-gk1-06-03",
      "q-gk1-06-04",
      "q-gk1-06-05",
      "q-gk1-06-06",
      "q-gk1-06-07",
      "q-gk1-06-08",
      "q-gk1-06-09",
      "q-gk1-06-10",
      "q-gk1-06-11",
      "q-gk1-06-12",
      "q-gk1-06-13",
      "q-gk1-06-14",
      "q-gk1-06-15",
      "q-gk1-06-16",
      "q-gk1-06-17",
      "q-gk1-06-18",
      "q-gk1-06-19",
      "q-gk1-06-20"
    ],
    "durationMinutes": 45,
    "allowedAttempts": 1,
    "status": "PUBLISHED",
    "shuffleQuestions": true,
    "viewSolutionsMode": "AFTER_SUBMIT",
    "totalPoints": 10,
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "asg-gk1-de-07",
    "title": "Đề số 07: Ôn thi Giữa Kỳ 1 Toán 12 (Năm học 2026 - 2027)",
    "classId": "class-12a1",
    "className": "Toán 12A1 — Ôn thi Tốt nghiệp THPT 2026",
    "teacherId": "teacher-nguyen-van-sang",
    "teacherName": "ThS. Nguyễn Văn Sang",
    "description": "Đề kiểm tra trắc nghiệm 20 câu chuẩn cấu trúc Giữa Kỳ 1. Chế độ: Đảo câu hỏi chống copy, Giới hạn làm 1 lần duy nhất, Thời gian 45 phút.",
    "questionIds": [
      "q-gk1-07-01",
      "q-gk1-07-02",
      "q-gk1-07-03",
      "q-gk1-07-04",
      "q-gk1-07-05",
      "q-gk1-07-06",
      "q-gk1-07-07",
      "q-gk1-07-08",
      "q-gk1-07-09",
      "q-gk1-07-10",
      "q-gk1-07-11",
      "q-gk1-07-12",
      "q-gk1-07-13",
      "q-gk1-07-14",
      "q-gk1-07-15",
      "q-gk1-07-16",
      "q-gk1-07-17",
      "q-gk1-07-18",
      "q-gk1-07-19",
      "q-gk1-07-20"
    ],
    "durationMinutes": 45,
    "allowedAttempts": 1,
    "status": "PUBLISHED",
    "shuffleQuestions": true,
    "viewSolutionsMode": "AFTER_SUBMIT",
    "totalPoints": 10,
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "asg-gk1-de-08",
    "title": "Đề số 08: Ôn thi Giữa Kỳ 1 Toán 12 (Năm học 2026 - 2027)",
    "classId": "class-12a1",
    "className": "Toán 12A1 — Ôn thi Tốt nghiệp THPT 2026",
    "teacherId": "teacher-nguyen-van-sang",
    "teacherName": "ThS. Nguyễn Văn Sang",
    "description": "Đề kiểm tra trắc nghiệm 20 câu chuẩn cấu trúc Giữa Kỳ 1. Chế độ: Đảo câu hỏi chống copy, Giới hạn làm 1 lần duy nhất, Thời gian 45 phút.",
    "questionIds": [
      "q-gk1-08-01",
      "q-gk1-08-02",
      "q-gk1-08-03",
      "q-gk1-08-04",
      "q-gk1-08-05",
      "q-gk1-08-06",
      "q-gk1-08-07",
      "q-gk1-08-08",
      "q-gk1-08-09",
      "q-gk1-08-10",
      "q-gk1-08-11",
      "q-gk1-08-12",
      "q-gk1-08-13",
      "q-gk1-08-14",
      "q-gk1-08-15",
      "q-gk1-08-16",
      "q-gk1-08-17",
      "q-gk1-08-18",
      "q-gk1-08-19",
      "q-gk1-08-20"
    ],
    "durationMinutes": 45,
    "allowedAttempts": 1,
    "status": "PUBLISHED",
    "shuffleQuestions": true,
    "viewSolutionsMode": "AFTER_SUBMIT",
    "totalPoints": 10,
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "asg-gk1-de-09",
    "title": "Đề số 09: Ôn thi Giữa Kỳ 1 Toán 12 (Năm học 2026 - 2027)",
    "classId": "class-12a1",
    "className": "Toán 12A1 — Ôn thi Tốt nghiệp THPT 2026",
    "teacherId": "teacher-nguyen-van-sang",
    "teacherName": "ThS. Nguyễn Văn Sang",
    "description": "Đề kiểm tra trắc nghiệm 20 câu chuẩn cấu trúc Giữa Kỳ 1. Chế độ: Đảo câu hỏi chống copy, Giới hạn làm 1 lần duy nhất, Thời gian 45 phút.",
    "questionIds": [
      "q-gk1-09-01",
      "q-gk1-09-02",
      "q-gk1-09-03",
      "q-gk1-09-04",
      "q-gk1-09-05",
      "q-gk1-09-06",
      "q-gk1-09-07",
      "q-gk1-09-08",
      "q-gk1-09-09",
      "q-gk1-09-10",
      "q-gk1-09-11",
      "q-gk1-09-12",
      "q-gk1-09-13",
      "q-gk1-09-14",
      "q-gk1-09-15",
      "q-gk1-09-16",
      "q-gk1-09-17",
      "q-gk1-09-18",
      "q-gk1-09-19",
      "q-gk1-09-20"
    ],
    "durationMinutes": 45,
    "allowedAttempts": 1,
    "status": "PUBLISHED",
    "shuffleQuestions": true,
    "viewSolutionsMode": "AFTER_SUBMIT",
    "totalPoints": 10,
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "asg-gk1-de-10",
    "title": "Đề số 10: Ôn thi Giữa Kỳ 1 Toán 12 (Năm học 2026 - 2027)",
    "classId": "class-12a1",
    "className": "Toán 12A1 — Ôn thi Tốt nghiệp THPT 2026",
    "teacherId": "teacher-nguyen-van-sang",
    "teacherName": "ThS. Nguyễn Văn Sang",
    "description": "Đề kiểm tra trắc nghiệm 20 câu chuẩn cấu trúc Giữa Kỳ 1. Chế độ: Đảo câu hỏi chống copy, Giới hạn làm 1 lần duy nhất, Thời gian 45 phút.",
    "questionIds": [
      "q-gk1-10-01",
      "q-gk1-10-02",
      "q-gk1-10-03",
      "q-gk1-10-04",
      "q-gk1-10-05",
      "q-gk1-10-06",
      "q-gk1-10-07",
      "q-gk1-10-08",
      "q-gk1-10-09",
      "q-gk1-10-10",
      "q-gk1-10-11",
      "q-gk1-10-12",
      "q-gk1-10-13",
      "q-gk1-10-14",
      "q-gk1-10-15",
      "q-gk1-10-16",
      "q-gk1-10-17",
      "q-gk1-10-18",
      "q-gk1-10-19",
      "q-gk1-10-20"
    ],
    "durationMinutes": 45,
    "allowedAttempts": 1,
    "status": "PUBLISHED",
    "shuffleQuestions": true,
    "viewSolutionsMode": "AFTER_SUBMIT",
    "totalPoints": 10,
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "asg-gk1-de-11",
    "title": "Đề số 11: Ôn thi Giữa Kỳ 1 Toán 12 (Năm học 2026 - 2027)",
    "classId": "class-12a1",
    "className": "Toán 12A1 — Ôn thi Tốt nghiệp THPT 2026",
    "teacherId": "teacher-nguyen-van-sang",
    "teacherName": "ThS. Nguyễn Văn Sang",
    "description": "Đề kiểm tra trắc nghiệm 20 câu chuẩn cấu trúc Giữa Kỳ 1. Chế độ: Đảo câu hỏi chống copy, Giới hạn làm 1 lần duy nhất, Thời gian 45 phút.",
    "questionIds": [
      "q-gk1-11-01",
      "q-gk1-11-02",
      "q-gk1-11-03",
      "q-gk1-11-04",
      "q-gk1-11-05",
      "q-gk1-11-06",
      "q-gk1-11-07",
      "q-gk1-11-08",
      "q-gk1-11-09",
      "q-gk1-11-10",
      "q-gk1-11-11",
      "q-gk1-11-12",
      "q-gk1-11-13",
      "q-gk1-11-14",
      "q-gk1-11-15",
      "q-gk1-11-16",
      "q-gk1-11-17",
      "q-gk1-11-18",
      "q-gk1-11-19",
      "q-gk1-11-20"
    ],
    "durationMinutes": 45,
    "allowedAttempts": 1,
    "status": "PUBLISHED",
    "shuffleQuestions": true,
    "viewSolutionsMode": "AFTER_SUBMIT",
    "totalPoints": 10,
    "createdAt": "2026-11-03T06:00:00.000Z"
  },
  {
    "id": "asg-gk1-de-12",
    "title": "Đề số 12: Ôn thi Giữa Kỳ 1 Toán 12 (Năm học 2026 - 2027)",
    "classId": "class-12a1",
    "className": "Toán 12A1 — Ôn thi Tốt nghiệp THPT 2026",
    "teacherId": "teacher-nguyen-van-sang",
    "teacherName": "ThS. Nguyễn Văn Sang",
    "description": "Đề kiểm tra trắc nghiệm 20 câu chuẩn cấu trúc Giữa Kỳ 1. Chế độ: Đảo câu hỏi chống copy, Giới hạn làm 1 lần duy nhất, Thời gian 45 phút.",
    "questionIds": [
      "q-gk1-12-01",
      "q-gk1-12-02",
      "q-gk1-12-03",
      "q-gk1-12-04",
      "q-gk1-12-05",
      "q-gk1-12-06",
      "q-gk1-12-07",
      "q-gk1-12-08",
      "q-gk1-12-09",
      "q-gk1-12-10",
      "q-gk1-12-11",
      "q-gk1-12-12",
      "q-gk1-12-13",
      "q-gk1-12-14",
      "q-gk1-12-15",
      "q-gk1-12-16",
      "q-gk1-12-17",
      "q-gk1-12-18",
      "q-gk1-12-19",
      "q-gk1-12-20"
    ],
    "durationMinutes": 45,
    "allowedAttempts": 1,
    "status": "PUBLISHED",
    "shuffleQuestions": true,
    "viewSolutionsMode": "AFTER_SUBMIT",
    "totalPoints": 10,
    "createdAt": "2026-11-03T06:00:00.000Z"
  }
];
