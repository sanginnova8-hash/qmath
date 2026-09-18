import {
  Question,
  AnswerKey,
  ClassRoom,
  Assignment,
  Submission,
  StudentProgress,
  UserProfile,
  UserRole,
  StudentAnswerValue,
  StudentAnswerRecord
} from '../types';
import {
  INITIAL_TEACHER,
  INITIAL_STUDENTS,
  INITIAL_CLASSES,
  INITIAL_QUESTIONS,
  INITIAL_ANSWER_KEYS,
  INITIAL_ASSIGNMENTS
} from './seedData';
import { isFirebaseConfigured, db } from '../lib/firebase';
import {
  collection,
  doc,
  getDocs,
  setDoc,
  getDoc,
  query,
  where,
  updateDoc
} from 'firebase/firestore';

const STORAGE_KEYS = {
  USERS: 'qmath_users',
  CLASSES: 'qmath_classes',
  QUESTIONS: 'qmath_questions',
  ANSWER_KEYS: 'qmath_answer_keys',
  ASSIGNMENTS: 'qmath_assignments',
  SUBMISSIONS: 'qmath_submissions',
  PROGRESS: 'qmath_progress'
};

// Initialize Local Store with Seed Data if empty
function loadLocal<T>(key: string, defaultVal: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultVal;
    return JSON.parse(raw);
  } catch (e) {
    console.error(`Error loading localStorage ${key}:`, e);
    return defaultVal;
  }
}

function saveLocal<T>(key: string, val: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {
    console.error(`Error saving localStorage ${key}:`, e);
  }
}

// Initial state setup
if (!localStorage.getItem(STORAGE_KEYS.QUESTIONS)) {
  saveLocal(STORAGE_KEYS.USERS, [INITIAL_TEACHER, ...INITIAL_STUDENTS]);
  saveLocal(STORAGE_KEYS.CLASSES, INITIAL_CLASSES);
  saveLocal(STORAGE_KEYS.QUESTIONS, INITIAL_QUESTIONS);
  saveLocal(STORAGE_KEYS.ANSWER_KEYS, INITIAL_ANSWER_KEYS);
  saveLocal(STORAGE_KEYS.ASSIGNMENTS, INITIAL_ASSIGNMENTS);
  saveLocal(STORAGE_KEYS.SUBMISSIONS, []);
  saveLocal(STORAGE_KEYS.PROGRESS, {});
}

const TAP1_CACHE_VERSION = 'qmath_tap1_v5_deep_cleaned';

// --- QUESTIONS SERVICE ---
export async function loadExamBankTap1(forceUpdate = false): Promise<{ success: boolean; count: number; message: string }> {
  try {
    const baseUrl = import.meta.env.BASE_URL || './';
    const jsonUrl = `${baseUrl.replace(/\/$/, '')}/data/exam_bank_tap1.json`;
    const res = await fetch(jsonUrl);
    if (!res.ok) throw new Error('Không thể tải file dữ liệu chuyên đề tập 1');
    const data = await res.json();
    if (!data.questions || data.questions.length === 0) {
      throw new Error('Dữ liệu rỗng');
    }

    const currentList = loadLocal<Question[]>(STORAGE_KEYS.QUESTIONS, INITIAL_QUESTIONS);
    const updatedList: Question[] = [];
    const processedIds = new Set<string>();

    // Always prioritize freshly cleaned questions from exam_bank_tap1.json
    for (const q of data.questions) {
      updatedList.push(q);
      processedIds.add(q.id);
    }

    // Retain any custom questions created by the teacher
    for (const q of currentList) {
      if (!processedIds.has(q.id)) {
        updatedList.push(q);
      }
    }

    saveLocal(STORAGE_KEYS.QUESTIONS, updatedList);

    const currentKeys = loadLocal<Record<string, AnswerKey>>(STORAGE_KEYS.ANSWER_KEYS, INITIAL_ANSWER_KEYS);
    Object.assign(currentKeys, data.answerKeys || {});
    saveLocal(STORAGE_KEYS.ANSWER_KEYS, currentKeys);

    localStorage.setItem(TAP1_CACHE_VERSION, 'true');
    return { success: true, count: data.questions.length, message: `Đã chuẩn hóa và đồng bộ thành công ${data.questions.length} câu hỏi 21 Chuyên đề lên hệ thống!` };
  } catch (err: any) {
    console.error('loadExamBankTap1 error:', err);
    return { success: false, count: 0, message: err.message || 'Lỗi nạp dữ liệu' };
  }
}

export async function getQuestions(filter?: { grade?: number; chapter?: string; type?: string }): Promise<Question[]> {
  if (!localStorage.getItem(TAP1_CACHE_VERSION)) {
    try {
      await loadExamBankTap1(true);
    } catch (e) {
      console.warn('Auto import tap1 failed:', e);
    }
  }

  if (isFirebaseConfigured) {
    try {
      const qRef = collection(db, 'questions');
      const snap = await getDocs(qRef);
      let list: Question[] = [];
      snap.forEach(d => list.push(d.data() as Question));
      if (filter?.grade) list = list.filter(q => q.grade === filter.grade);
      if (filter?.chapter) list = list.filter(q => q.chapter === filter.chapter);
      if (filter?.type) list = list.filter(q => q.type === filter.type);
      return list;
    } catch (err) {
      console.warn('Firebase query failed, using local store fallback:', err);
    }
  }

  let list = loadLocal<Question[]>(STORAGE_KEYS.QUESTIONS, INITIAL_QUESTIONS);
  if (filter?.grade) list = list.filter(q => q.grade === filter.grade);
  if (filter?.chapter) list = list.filter(q => q.chapter === filter.chapter);
  if (filter?.type) list = list.filter(q => q.type === filter.type);
  return list;
}

export async function getQuestionsByIds(ids: string[]): Promise<Question[]> {
  const all = await getQuestions();
  const idMap = new Map(all.map(q => [q.id, q]));
  return ids.map(id => idMap.get(id)).filter(Boolean) as Question[];
}

export async function saveQuestion(question: Question, answerKey?: AnswerKey): Promise<void> {
  if (isFirebaseConfigured) {
    try {
      await setDoc(doc(db, 'questions', question.id), question);
      if (answerKey) {
        await setDoc(doc(db, 'answerKeys', question.id), answerKey);
      }
    } catch (err) {
      console.warn('Firebase saveQuestion failed, using local store:', err);
    }
  }

  const list = loadLocal<Question[]>(STORAGE_KEYS.QUESTIONS, INITIAL_QUESTIONS);
  const existingIdx = list.findIndex(q => q.id === question.id);
  if (existingIdx >= 0) {
    list[existingIdx] = question;
  } else {
    list.unshift(question);
  }
  saveLocal(STORAGE_KEYS.QUESTIONS, list);

  if (answerKey) {
    const keys = loadLocal<Record<string, AnswerKey>>(STORAGE_KEYS.ANSWER_KEYS, INITIAL_ANSWER_KEYS);
    keys[question.id] = answerKey;
    saveLocal(STORAGE_KEYS.ANSWER_KEYS, keys);
  }
}

export async function deleteQuestion(questionId: string): Promise<void> {
  const list = loadLocal<Question[]>(STORAGE_KEYS.QUESTIONS, INITIAL_QUESTIONS);
  saveLocal(STORAGE_KEYS.QUESTIONS, list.filter(q => q.id !== questionId));
}

export function getAllAnswerKeys(): Record<string, AnswerKey> {
  return loadLocal<Record<string, AnswerKey>>(STORAGE_KEYS.ANSWER_KEYS, INITIAL_ANSWER_KEYS);
}

export function getAnswerKeyById(questionId: string): AnswerKey | undefined {
  const keys = getAllAnswerKeys();
  return keys[questionId];
}

// --- CLASSES SERVICE ---
export async function getClasses(teacherId?: string): Promise<ClassRoom[]> {
  if (isFirebaseConfigured) {
    try {
      const cRef = collection(db, 'classes');
      const snap = await getDocs(cRef);
      let list: ClassRoom[] = [];
      snap.forEach(d => list.push(d.data() as ClassRoom));
      if (teacherId) list = list.filter(c => c.teacherId === teacherId);
      return list;
    } catch (err) {
      console.warn('Firebase getClasses failed, using local fallback:', err);
    }
  }

  let list = loadLocal<ClassRoom[]>(STORAGE_KEYS.CLASSES, INITIAL_CLASSES);
  if (teacherId) list = list.filter(c => c.teacherId === teacherId);
  return list;
}

export async function saveClass(cls: ClassRoom): Promise<void> {
  if (isFirebaseConfigured) {
    try {
      await setDoc(doc(db, 'classes', cls.id), cls);
    } catch (err) {
      console.warn('Firebase saveClass failed:', err);
    }
  }

  const list = loadLocal<ClassRoom[]>(STORAGE_KEYS.CLASSES, INITIAL_CLASSES);
  const idx = list.findIndex(c => c.id === cls.id);
  if (idx >= 0) list[idx] = cls;
  else list.unshift(cls);
  saveLocal(STORAGE_KEYS.CLASSES, list);
}

// --- ASSIGNMENTS SERVICE ---
export async function getAssignments(classId?: string): Promise<Assignment[]> {
  if (isFirebaseConfigured) {
    try {
      const aRef = collection(db, 'assignments');
      const snap = await getDocs(aRef);
      let list: Assignment[] = [];
      snap.forEach(d => list.push(d.data() as Assignment));
      if (classId) list = list.filter(a => a.classId === classId);
      return list;
    } catch (err) {
      console.warn('Firebase getAssignments fallback:', err);
    }
  }

  let list = loadLocal<Assignment[]>(STORAGE_KEYS.ASSIGNMENTS, INITIAL_ASSIGNMENTS);
  if (classId) list = list.filter(a => a.classId === classId);
  return list;
}

export async function getAssignmentById(id: string): Promise<Assignment | null> {
  const all = await getAssignments();
  return all.find(a => a.id === id) || null;
}

export async function saveAssignment(asg: Assignment): Promise<void> {
  if (isFirebaseConfigured) {
    try {
      await setDoc(doc(db, 'assignments', asg.id), asg);
    } catch (err) {
      console.warn('Firebase saveAssignment fallback:', err);
    }
  }

  const list = loadLocal<Assignment[]>(STORAGE_KEYS.ASSIGNMENTS, INITIAL_ASSIGNMENTS);
  const idx = list.findIndex(a => a.id === asg.id);
  if (idx >= 0) list[idx] = asg;
  else list.unshift(asg);
  saveLocal(STORAGE_KEYS.ASSIGNMENTS, list);
}

// --- GRADING & SUBMISSIONS SERVICE ---
export function normalizeMathString(str: string): string {
  if (!str) return '';
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/\\left/g, '')
    .replace(/\\right/g, '')
    .replace(/,/g, '.'); // Vietnamese decimal comma to dot
}

export async function gradeSubmission(
  assignment: Assignment,
  studentUser: UserProfile,
  rawAnswers: Record<string, { answer: StudentAnswerValue; flagged?: boolean }>,
  timeSpentSeconds: number
): Promise<{ submission: Submission; gradedAnswers: Record<string, StudentAnswerRecord> }> {
  // Fetch Answer Keys (Teacher/System only)
  const keys = loadLocal<Record<string, AnswerKey>>(STORAGE_KEYS.ANSWER_KEYS, INITIAL_ANSWER_KEYS);
  const questions = await getQuestionsByIds(assignment.questionIds);

  const gradedAnswers: Record<string, StudentAnswerRecord> = {};
  let totalScore = 0;
  let correctCount = 0;
  const pointsPerQuestion = assignment.totalPoints / (questions.length || 1);

  const newlyWrongQuestions: string[] = [];

  for (const q of questions) {
    const raw = rawAnswers[q.id];
    const key = keys[q.id];
    const studentAns = raw ? raw.answer : '';

    let isCorrect = false;
    let earnedPoints = 0;

    const expectedOpt = key?.correctOption || q.options?.find(o => o.is_correct)?.id;

    if (q.type === 'MCQ') {
      const studentLetter = typeof studentAns === 'string' ? studentAns.trim().toUpperCase() : '';
      const targetLetter = (key?.correctOption || expectedOpt || '').trim().toUpperCase();
      if (studentLetter && studentLetter === targetLetter) {
        isCorrect = true;
        earnedPoints = pointsPerQuestion;
        correctCount++;
      }
    } else if (q.type === 'TRUE_FALSE') {
      if (key) {
        // Chuẩn Bộ Giáo dục 2025:
        // 1 ý đúng: 10% điểm (0.1 / 1.0)
        // 2 ý đúng: 25% điểm (0.25 / 1.0)
        // 3 ý đúng: 50% điểm (0.5 / 1.0)
        // 4 ý đúng: 100% điểm (1.0 / 1.0)
        const subAns = (typeof studentAns === 'object' && studentAns !== null) ? studentAns as { a?: boolean; b?: boolean; c?: boolean; d?: boolean } : {};
        const correctSub = key.correctSubItems || { a: false, b: false, c: false, d: false };

        let matchCount = 0;
        const subKeys: ('a' | 'b' | 'c' | 'd')[] = ['a', 'b', 'c', 'd'];
        for (const k of subKeys) {
          if (subAns[k] !== undefined && subAns[k] === correctSub[k]) {
            matchCount++;
          }
        }

        let ratio = 0;
        if (matchCount === 1) ratio = 0.1;
        else if (matchCount === 2) ratio = 0.25;
        else if (matchCount === 3) ratio = 0.5;
        else if (matchCount === 4) ratio = 1.0;

        earnedPoints = Number((pointsPerQuestion * ratio).toFixed(2));
        if (matchCount === 4) {
          isCorrect = true;
          correctCount++;
        }
      }
    } else if (q.type === 'SHORT_ANSWER') {
      if (key) {
        const studentNorm = normalizeMathString(String(studentAns));
        const acceptableKeys = Array.isArray(key.shortAnswer) ? key.shortAnswer : [String(key.shortAnswer || '')];
        const match = acceptableKeys.some(ans => {
          const keyNorm = normalizeMathString(ans);
          if (studentNorm === keyNorm) return true;
          // numeric check
          const sNum = parseFloat(studentNorm);
          const kNum = parseFloat(keyNorm);
          return !isNaN(sNum) && !isNaN(kNum) && Math.abs(sNum - kNum) < 1e-4;
        });

        if (match) {
          isCorrect = true;
          earnedPoints = pointsPerQuestion;
          correctCount++;
        }
      }
    }

    if (!isCorrect) {
      newlyWrongQuestions.push(q.id);
    }

    totalScore += earnedPoints;

    gradedAnswers[q.id] = {
      questionId: q.id,
      answer: studentAns,
      isCorrect,
      earnedPoints,
      maxPoints: pointsPerQuestion,
      flagged: raw?.flagged || false
    };
  }

  // Cap score to totalPoints and round to 2 decimals
  const finalScore = Math.min(assignment.totalPoints, Number(totalScore.toFixed(2)));

  const submission: Submission = {
    id: `sub-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    assignmentId: assignment.id,
    assignmentTitle: assignment.title,
    classId: assignment.classId,
    studentId: studentUser.id,
    studentName: studentUser.displayName,
    attemptNumber: 1,
    score: finalScore,
    totalQuestions: questions.length,
    correctCount,
    startedAt: new Date(Date.now() - timeSpentSeconds * 1000).toISOString(),
    submittedAt: new Date().toISOString(),
    timeSpentSeconds,
    status: 'GRADED',
    answers: gradedAnswers
  };

  // Save submission
  await saveSubmission(submission);

  // Update student progress & "My Mistakes"
  await recordStudentProgress(studentUser.id, finalScore, questions, gradedAnswers, newlyWrongQuestions);

  return { submission, gradedAnswers };
}

export async function saveSubmission(submission: Submission): Promise<void> {
  if (isFirebaseConfigured) {
    try {
      await setDoc(doc(db, 'submissions', submission.id), submission);
    } catch (err) {
      console.warn('Firebase saveSubmission fallback:', err);
    }
  }

  const list = loadLocal<Submission[]>(STORAGE_KEYS.SUBMISSIONS, []);
  list.unshift(submission);
  saveLocal(STORAGE_KEYS.SUBMISSIONS, list);
}

export async function getSubmissions(assignmentId?: string, studentId?: string): Promise<Submission[]> {
  if (isFirebaseConfigured) {
    try {
      const sRef = collection(db, 'submissions');
      const snap = await getDocs(sRef);
      let list: Submission[] = [];
      snap.forEach(d => list.push(d.data() as Submission));
      if (assignmentId) list = list.filter(s => s.assignmentId === assignmentId);
      if (studentId) list = list.filter(s => s.studentId === studentId);
      return list;
    } catch (err) {
      console.warn('Firebase getSubmissions fallback:', err);
    }
  }

  let list = loadLocal<Submission[]>(STORAGE_KEYS.SUBMISSIONS, []);
  if (assignmentId) list = list.filter(s => s.assignmentId === assignmentId);
  if (studentId) list = list.filter(s => s.studentId === studentId);
  return list;
}

export async function getSubmissionById(id: string): Promise<Submission | null> {
  const all = await getSubmissions();
  return all.find(s => s.id === id) || null;
}

// --- STUDENT PROGRESS & "MY MISTAKES" SERVICE ---
export async function getStudentProgress(studentId: string): Promise<StudentProgress> {
  const progressMap = loadLocal<Record<string, StudentProgress>>(STORAGE_KEYS.PROGRESS, {});
  if (progressMap[studentId]) {
    return progressMap[studentId];
  }

  // Default empty progress
  const initial: StudentProgress = {
    studentId,
    totalAssignmentsDone: 0,
    averageScore: 0,
    topicMastery: {},
    mistakeQuestionIds: [],
    lastActive: new Date().toISOString()
  };
  return initial;
}

export async function recordStudentProgress(
  studentId: string,
  newScore: number,
  questions: Question[],
  gradedAnswers: Record<string, StudentAnswerRecord>,
  wrongQuestionIds: string[]
): Promise<void> {
  const progressMap = loadLocal<Record<string, StudentProgress>>(STORAGE_KEYS.PROGRESS, {});
  const current = progressMap[studentId] || {
    studentId,
    totalAssignmentsDone: 0,
    averageScore: 0,
    topicMastery: {},
    mistakeQuestionIds: [],
    lastActive: new Date().toISOString()
  };

  const newTotal = current.totalAssignmentsDone + 1;
  const newAvg = Number(((current.averageScore * current.totalAssignmentsDone + newScore) / newTotal).toFixed(2));

  // Update topic mastery
  const mastery = { ...current.topicMastery };
  for (const q of questions) {
    const isCorrect = gradedAnswers[q.id]?.isCorrect || false;
    const topicKey = `${q.chapter} — ${q.topic}`;
    if (!mastery[topicKey]) {
      mastery[topicKey] = { correct: 0, total: 0 };
    }
    mastery[topicKey].total += 1;
    if (isCorrect) mastery[topicKey].correct += 1;
  }

  // Add mistakeQuestionIds (unique)
  const mistakesSet = new Set(current.mistakeQuestionIds);
  wrongQuestionIds.forEach(id => mistakesSet.add(id));

  // If student answered correctly an old mistake, remove it!
  for (const q of questions) {
    if (gradedAnswers[q.id]?.isCorrect) {
      mistakesSet.delete(q.id);
    }
  }

  const updated: StudentProgress = {
    studentId,
    totalAssignmentsDone: newTotal,
    averageScore: newAvg,
    topicMastery: mastery,
    mistakeQuestionIds: Array.from(mistakesSet),
    lastActive: new Date().toISOString()
  };

  progressMap[studentId] = updated;
  saveLocal(STORAGE_KEYS.PROGRESS, progressMap);

  if (isFirebaseConfigured) {
    try {
      await setDoc(doc(db, 'studentProgress', studentId), updated);
    } catch (err) {
      console.warn('Firebase studentProgress fallback:', err);
    }
  }
}

export async function clearMistake(studentId: string, questionId: string): Promise<void> {
  const progressMap = loadLocal<Record<string, StudentProgress>>(STORAGE_KEYS.PROGRESS, {});
  if (progressMap[studentId]) {
    progressMap[studentId].mistakeQuestionIds = progressMap[studentId].mistakeQuestionIds.filter(id => id !== questionId);
    saveLocal(STORAGE_KEYS.PROGRESS, progressMap);
  }
}

// --- USER MANAGEMENT & ADMIN SERVICES ---
export async function getAllUsers(): Promise<UserProfile[]> {
  const defaultList: UserProfile[] = [
    {
      id: 'admin-system',
      email: 'sanginnova8@gmail.com',
      displayName: 'Quản trị viên (sanginnova8)',
      role: 'ADMIN',
      school: 'Hệ thống QMath',
      createdAt: '2026-01-01T00:00:00.000Z'
    },
    INITIAL_TEACHER,
    ...INITIAL_STUDENTS
  ];

  if (isFirebaseConfigured) {
    try {
      const snap = await getDocs(collection(db, 'users'));
      const list: UserProfile[] = [];
      snap.forEach(d => list.push(d.data() as UserProfile));
      if (list.length > 0) return list;
    } catch (e) {
      console.warn('Firebase getAllUsers fallback:', e);
    }
  }

  const stored = loadLocal<UserProfile[]>(STORAGE_KEYS.USERS, defaultList);
  // Ensure default admin exists
  if (!stored.some(u => u.role === 'ADMIN')) {
    stored.unshift(defaultList[0]);
    saveLocal(STORAGE_KEYS.USERS, stored);
  }
  return stored;
}

export async function updateUserRole(userId: string, newRole: UserRole): Promise<void> {
  const users = await getAllUsers();
  const idx = users.findIndex(u => u.id === userId);
  if (idx >= 0) {
    users[idx].role = newRole;
    saveLocal(STORAGE_KEYS.USERS, users);

    if (isFirebaseConfigured) {
      try {
        await updateDoc(doc(db, 'users', userId), { role: newRole });
      } catch (e) {
        console.warn('Firebase updateUserRole fallback:', e);
      }
    }
  }
}

export async function createUser(user: UserProfile): Promise<void> {
  const users = await getAllUsers();
  const existingIdx = users.findIndex(u => u.id === user.id || u.email === user.email);
  if (existingIdx >= 0) {
    users[existingIdx] = user;
  } else {
    users.push(user);
  }
  saveLocal(STORAGE_KEYS.USERS, users);

  if (isFirebaseConfigured) {
    try {
      await setDoc(doc(db, 'users', user.id), user);
    } catch (e) {
      console.warn('Firebase createUser fallback:', e);
    }
  }
}

export async function deleteUser(userId: string): Promise<void> {
  let users = await getAllUsers();
  users = users.filter(u => u.id !== userId);
  saveLocal(STORAGE_KEYS.USERS, users);
}

export async function getSystemStats(): Promise<{
  totalQuestions: number;
  totalChapters: number;
  totalUsers: number;
  totalTeachers: number;
  totalStudents: number;
  totalClasses: number;
  totalAssignments: number;
  totalSubmissions: number;
}> {
  const questions = await getQuestions();
  const users = await getAllUsers();
  const classes = await getClasses();
  const assignments = await getAssignments();
  const submissions = await getSubmissions();

  const chaptersSet = new Set(questions.map(q => q.chapter).filter(Boolean));

  return {
    totalQuestions: questions.length,
    totalChapters: chaptersSet.size,
    totalUsers: users.length,
    totalTeachers: users.filter(u => u.role === 'TEACHER').length,
    totalStudents: users.filter(u => u.role === 'STUDENT').length,
    totalClasses: classes.length,
    totalAssignments: assignments.length,
    totalSubmissions: submissions.length
  };
}

export async function resetAllDataToSeed(): Promise<void> {
  localStorage.removeItem(STORAGE_KEYS.USERS);
  localStorage.removeItem(STORAGE_KEYS.CLASSES);
  localStorage.removeItem(STORAGE_KEYS.QUESTIONS);
  localStorage.removeItem(STORAGE_KEYS.ANSWER_KEYS);
  localStorage.removeItem(STORAGE_KEYS.ASSIGNMENTS);
  localStorage.removeItem(STORAGE_KEYS.SUBMISSIONS);
  localStorage.removeItem(STORAGE_KEYS.PROGRESS);
  window.location.reload();
}
