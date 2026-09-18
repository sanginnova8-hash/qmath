export type UserRole = 'ADMIN' | 'TEACHER' | 'STUDENT';

export interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  role: UserRole;
  avatarUrl?: string;
  grade?: 10 | 11 | 12;
  school?: string;
  createdAt: string;
  isGuest?: boolean;
}

export type QuestionType = 'MCQ' | 'TRUE_FALSE' | 'SHORT_ANSWER';
export type DifficultyLevel = 'NB' | 'TH' | 'VD' | 'VDC'; // Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao

export interface McqOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
  is_correct?: boolean;
}

export interface TrueFalseSubItem {
  id: 'a' | 'b' | 'c' | 'd';
  statement: string;
  is_correct?: boolean;
}

export interface Question {
  id: string;
  teacherId: string;
  content: string; // Contains text and LaTeX $...$
  type: QuestionType;
  options?: McqOption[]; // For MCQ
  correctOption?: 'A' | 'B' | 'C' | 'D';
  subItems?: TrueFalseSubItem[]; // For TRUE_FALSE (format Bộ GD 2025)
  grade: 10 | 11 | 12;
  chapter: string;
  topic: string;
  difficulty: DifficultyLevel;
  explanation: string; // Step-by-step solution with LaTeX
  images?: string[];
  createdAt: string;
}

export interface AnswerKey {
  questionId: string;
  type: QuestionType;
  correctOption?: 'A' | 'B' | 'C' | 'D'; // For MCQ
  correctSubItems?: {
    a: boolean;
    b: boolean;
    c: boolean;
    d: boolean;
  }; // For TRUE_FALSE
  shortAnswer?: string | string[]; // Numeric or exact/equivalent math string
}

export interface ClassRoom {
  id: string;
  name: string;
  code: string; // 6-character code
  teacherId: string;
  teacherName: string;
  grade: 10 | 11 | 12;
  description?: string;
  studentCount: number;
  createdAt: string;
}

export interface ClassMember {
  id: string;
  classId: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
  joinedAt: string;
}

export type AssignmentStatus = 'DRAFT' | 'PUBLISHED' | 'CLOSED';
export type SolutionViewMode = 'ALWAYS' | 'AFTER_DEADLINE' | 'AFTER_SUBMIT';

export interface Assignment {
  id: string;
  title: string;
  classId: string;
  className: string;
  teacherId: string;
  teacherName?: string;
  description?: string;
  questionIds: string[];
  durationMinutes: number; // e.g. 15, 45, 90 mins (0 for unlimited)
  allowedAttempts: number; // e.g. 1, 2, 3 (0 for unlimited)
  deadline?: string; // ISO string
  status: AssignmentStatus;
  shuffleQuestions: boolean;
  viewSolutionsMode: SolutionViewMode;
  totalPoints: number; // default 10
  createdAt: string;
}

export type SubmissionStatus = 'IN_PROGRESS' | 'SUBMITTED' | 'GRADED';

export type StudentAnswerValue = 
  | string // 'A' | 'B' | 'C' | 'D' or Short answer text
  | { a?: boolean; b?: boolean; c?: boolean; d?: boolean }; // for True/False

export interface StudentAnswerRecord {
  questionId: string;
  answer: StudentAnswerValue;
  isCorrect?: boolean;
  earnedPoints?: number;
  maxPoints?: number;
  flagged?: boolean; // Mark for review
}

export interface Submission {
  id: string;
  assignmentId: string;
  assignmentTitle: string;
  classId: string;
  studentId: string;
  studentName: string;
  attemptNumber: number;
  score: number; // Thang 10
  totalQuestions: number;
  correctCount: number;
  startedAt: string;
  submittedAt?: string;
  timeSpentSeconds: number;
  status: SubmissionStatus;
  answers: Record<string, StudentAnswerRecord>; // questionId -> answer
}

export interface TopicProgress {
  topic: string;
  chapter: string;
  totalAttempted: number;
  totalCorrect: number;
  accuracy: number;
}

export interface StudentProgress {
  studentId: string;
  totalAssignmentsDone: number;
  averageScore: number;
  topicMastery: Record<string, { correct: number; total: number }>;
  mistakeQuestionIds: string[]; // For "Sổ tay câu sai"
  lastActive: string;
}
