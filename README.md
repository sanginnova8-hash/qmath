# QMath Online — Nền tảng Giao bài & Luyện thi Toán THPT

**QMath Online** là nền tảng quản trị lớp học, ngân hàng câu hỏi chuẩn GDPT 2018 (Toán 10, 11, 12), tạo đề thi/giao bài tập, thi trực tuyến với giao diện phòng thi chuẩn quốc gia, chấm điểm tự động (MCQ, Đúng/Sai 4 ý chuẩn BGD 2025, Trả lời ngắn với bàn phím toán ảo MathLive), sổ tay câu sai (My Mistakes) và phân tích tiến độ học sinh.

Được thiết kế hiện đại, responsive hoàn toàn trên máy tính, máy tính bảng và điện thoại di động (PWA-ready).

---

## 🛠 Công nghệ Sử dụng (Stack)

- **Frontend**: React 18, Vite 6, TypeScript 5, Tailwind CSS 3.
- **Biểu thức Toán học**:
  - **KaTeX**: Hiển thị công thức toán học tốc độ cao, hỗ trợ cả công thức inline `$formula$` và block `$$formula$$`.
  - **MathLive**: Tích hợp trường nhập toán học ảo `<math-field>` với thanh công cụ chèn nhanh phân số, căn bậc hai, tích phân, số mũ, vô cực, logarit...
- **Backend & Cloud (Firebase Free/Spark Tier)**:
  - **Firebase Authentication**: Đăng nhập bằng Email/Password hoặc Google.
  - **Cloud Firestore**: Lưu trữ phân tán NoSQL với cấu trúc bảo mật phân quyền nghiêm ngặt.
  - **Firebase Storage**: Lưu trữ tệp ảnh hình vẽ minh họa toán học và avatar.
  - **Firebase Hosting**: Triển khai web app production toàn cầu.
- **Iconography**: `lucide-react`.

---

## 🏛 Mô hình Dữ liệu Firestore

1. **`users`**: Thông tin người dùng (`id`, `email`, `displayName`, `role`: `ADMIN` | `TEACHER` | `STUDENT`, `grade`, `school`).
2. **`classes`**: Thông tin lớp học (`id`, `name`, `code`: mã mời 6 ký tự, `teacherId`, `grade`, `studentCount`).
3. **`classMembers`**: Thành viên lớp học (`classId`, `studentId`, `studentName`, `joinedAt`).
4. **`questions`**: Ngân hàng câu hỏi Toán (`id`, `content`, `type`: `MCQ` | `TRUE_FALSE` | `SHORT_ANSWER`, `grade`: 10 | 11 | 12, `chapter`, `difficulty`, `explanation`).
5. **`answerKeys`**: Đáp án chính xác. **Tuyệt đối không cấp quyền đọc cho học sinh** theo Firestore Rules nhằm chống gian lận.
6. **`assignments`**: Đề kiểm tra/bài tập (`id`, `title`, `classId`, `questionIds`, `durationMinutes`, `allowedAttempts`, `deadline`, `status`, `viewSolutionsMode`).
7. **`submissions`**: Lượt nộp bài (`id`, `assignmentId`, `studentId`, `score`, `totalQuestions`, `correctCount`, `timeSpentSeconds`, `answers`).
8. **`submissionAnswers`**: Chi tiết từng câu trả lời của học sinh.
9. **`studentProgress`**: Tiến độ học sinh (`averageScore`, `topicMastery`, `mistakeQuestionIds`: danh sách câu sai cho tính năng *My Mistakes*).

---

## 🔐 Bảo mật Firebase (Security Rules)

Toàn bộ quy chuẩn bảo mật đã được định nghĩa trong file `firestore.rules`:
- **Học sinh**: Chỉ được đọc/ghi thông tin cá nhân của mình, bài tập được giao và bài nộp của chính mình.
- **Giáo viên**: Có toàn quyền quản lý lớp học, ngân hàng câu hỏi, tạo đề thi và xem bảng điểm/bài nộp của học sinh.
- **Đáp án (`answerKeys`)**: Học sinh **không thể** đọc qua client request. Việc chấm điểm diễn ra tại server/logic có bảo vệ.

---

## 🚀 Hướng dẫn Cài đặt & Chạy Local

### 1. Cài đặt thư viện
```bash
npm install
```

### 2. Cấu hình Firebase
Tạo file `.env` (tham khảo `.env.example`) và điền các tham số từ Firebase Console:
```env
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:...
```

> **Ghi chú về Chế độ Demo:** Nếu chưa điền thông số Firebase trong `.env`, ứng dụng sẽ tự động kích hoạt **Bộ dữ liệu mẫu (Seed Data)** có sẵn ngân hàng câu hỏi Toán 10, 11, 12 và tài khoản mẫu (Giáo viên Nguyễn Văn An, Học sinh Lê Bảo Nam...) để trải nghiệm tức thì toàn bộ tính năng 2 chiều mà không bị lỗi.

### 3. Khởi chạy máy chủ phát triển
```bash
npm run dev
```
Mở trình duyệt tại: `http://localhost:5173`.

### 4. Build kiểm thử Production
```bash
npm run build
```

---

## 🌟 Các Tính năng Cốt lõi của MVP

### 👨‍🏫 Dành cho Giáo viên:
- **Tải lên Đề thi từ File Word (.docx)**:
  - Tự động bóc tách **hình vẽ minh họa** (đồ thị hàm số, hình không gian Oxyz, bảng biến thiên) nhúng trong file Word.
  - Tự động chuyển đổi công thức toán học **MathType / Equation OMML** sang LaTeX chuẩn KaTeX (`\frac`, `\sqrt`, `^{...}`, `_{...}`, `\int`, `\vec`, `\lim`...).
  - Nhận diện phân loại tự động: Trắc nghiệm 4 lựa chọn (MCQ), Đúng/Sai (4 mệnh đề a, b, c, d chuẩn 2025), Trả lời ngắn, Đáp án và Lời giải chi tiết.
  - Màn hình duyệt & xem trước (Preview) trực quan trước khi lưu vào ngân hàng.
  - Tích hợp tính năng tải file Word mẫu (`.docx`) chuẩn cấu trúc.
- **Quản lý Lớp học**: Tạo lớp, cấp mã mời 6 ký tự để học sinh tham gia tự động.
- **Ngân hàng Câu hỏi Toán THPT**:
  - Bộ lọc đa chiều: Khối lớp (10, 11, 12), Dạng câu (MCQ, Đúng/Sai, Trả lời ngắn), Mức độ (Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao).
  - Soạn câu hỏi thủ công hoặc nhập hàng loạt từ Word với xem trước KaTeX trực quan.
  - Soạn đáp án Trả lời ngắn với bàn phím ảo MathLive.
- **Tạo & Giao bài tập**: Chọn câu hỏi từ ngân hàng, cài đặt thời gian làm bài (ví dụ 15 phút), số lần làm tối đa, hạn chót (deadline) và chế độ xem đáp án.
- **Bảng điểm & Phổ điểm (Analytics)**:
  - Thống kê Điểm trung bình, Cao nhất, Thấp nhất.
  - Biểu đồ phổ điểm: Xuất sắc, Khá, Trung bình, Cần ôn lại.
  - Phân tích những câu hỏi có tỷ lệ học sinh làm sai nhiều nhất.

### 🎓 Dành cho Học sinh:
- **Bảng học tập cá nhân**: Theo dõi bài tập cần làm gấp, bài đã nộp, điểm trung bình và biểu đồ thông thạo chuyên đề.
- **Phòng thi trực tuyến (Exam Room)**:
  - Đồng hồ đếm ngược kỹ thuật số với cảnh báo đổi màu theo thời gian còn lại.
  - Chế độ toàn màn hình tập trung làm bài.
  - Lưới điều hướng câu hỏi (Question Palette) đổi màu trực quan: Đã làm (Xanh), Chưa làm (Trắng), Cắm cờ xem lại (Cam), Đang xem (Viền sáng).
  - Tự động nộp bài khi hết giờ.
  - Cảnh báo câu chưa làm trước khi xác nhận nộp bài.
- **Chấm điểm tự động theo chuẩn Bộ GD&ĐT 2025**:
  - MCQ: Trọn điểm theo câu.
  - Đúng/Sai (4 ý a, b, c, d): Thang điểm bậc thang 0.1đ - 0.25đ - 0.5đ - 1.0đ.
  - Trả lời ngắn: Nhận diện biểu thức toán học hoặc số thực tương đương.
- **Xem Lời giải chi tiết & Sổ tay câu sai (My Mistakes)**:
  - Tự động gom các câu làm sai vào Sổ tay câu sai.
  - Học sinh có thể làm lại riêng từng câu sai, nhận phản hồi tức thì và xóa câu hỏi khỏi sổ tay khi đã làm đúng.
- **Luyện tập tự do theo Chuyên đề (Topic Practice)**: Rèn luyện giải đề từng câu và mở lời giải ngay.

---

## 🚢 Triển khai Firebase Hosting

1. Cài đặt Firebase CLI:
```bash
npm install -g firebase-tools
```
2. Đăng nhập và liên kết dự án:
```bash
firebase login
firebase use --add
```
3. Triển khai Firestore Rules và Hosting:
```bash
firebase deploy
```
