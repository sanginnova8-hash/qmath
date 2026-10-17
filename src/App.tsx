import React, { useState, useEffect } from 'react';
import { useAuth } from './context/AuthContext';
import AppLayout from './components/layout/AppLayout';

// Admin views
import AdminSettings from './pages/admin/AdminSettings';

// Teacher views
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import ClassManagement from './pages/teacher/ClassManagement';
import QuestionBank from './pages/teacher/QuestionBank';
import CreateAssignment from './pages/teacher/CreateAssignment';
import AssignmentResults from './pages/teacher/AssignmentResults';

// Student views
import StudentDashboard from './pages/student/StudentDashboard';
import ExamRoom from './pages/student/ExamRoom';
import ExamResult from './pages/student/ExamResult';
import TopicPractice from './pages/student/TopicPractice';
import MyMistakes from './pages/student/MyMistakes';

export const App: React.FC = () => {
  const { role } = useAuth();

  // Active navigation tab
  const [activeTab, setActiveTab] = useState<string>(() =>
    role === 'ADMIN' ? 'admin-settings' : role === 'TEACHER' ? 'teacher-overview' : 'student-overview'
  );

  // Focus Exam Mode states (supports direct link ?asg=... from Zalo/QR and persists through refresh)
  const [examAssignmentId, setExamAssignmentId] = useState<string | null>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlAsg = params.get('asg') || params.get('exam');
      if (urlAsg) return urlAsg;
      // Khôi phục từ localStorage nếu học sinh nhỡ tay refresh
      const savedActive = localStorage.getItem('qmath_active_exam_asg_id');
      return savedActive || null;
    } catch {
      return null;
    }
  });
  const [viewResultSubmissionId, setViewResultSubmissionId] = useState<string | null>(null);

  // Sync active exam assignment to localStorage and URL search query
  useEffect(() => {
    if (examAssignmentId) {
      localStorage.setItem('qmath_active_exam_asg_id', examAssignmentId);
      try {
        const currentParams = new URLSearchParams(window.location.search);
        if (currentParams.get('asg') !== examAssignmentId) {
          currentParams.set('asg', examAssignmentId);
          window.history.replaceState(null, '', `?${currentParams.toString()}`);
        }
      } catch (e) {
        console.error('Error syncing exam URL:', e);
      }
    }
  }, [examAssignmentId]);

  const handleFinishExam = (subId: string) => {
    localStorage.removeItem('qmath_active_exam_asg_id');
    try {
      window.history.replaceState(null, '', window.location.pathname);
    } catch (e) {
      console.error(e);
    }
    setExamAssignmentId(null);
    setViewResultSubmissionId(subId);
  };

  const handleExitExam = () => {
    localStorage.removeItem('qmath_active_exam_asg_id');
    try {
      window.history.replaceState(null, '', window.location.pathname);
    } catch (e) {
      console.error(e);
    }
    setExamAssignmentId(null);
  };

  // Sync default tab when role switches
  useEffect(() => {
    if (role === 'ADMIN') {
      if (!activeTab.startsWith('admin-') && !activeTab.startsWith('teacher-')) {
        setActiveTab('admin-settings');
      }
    } else if (role === 'TEACHER') {
      if (activeTab.startsWith('student-') || activeTab.startsWith('admin-')) {
        setActiveTab('teacher-overview');
      }
    } else {
      if (activeTab.startsWith('teacher-') || activeTab.startsWith('admin-')) {
        setActiveTab('student-overview');
      }
    }
  }, [role]);

  // If in interactive Exam Room, display focus mode without sidebar
  if (examAssignmentId) {
    return (
      <ExamRoom
        assignmentId={examAssignmentId}
        onFinish={handleFinishExam}
        onExit={handleExitExam}
      />
    );
  }

  return (
    <AppLayout activeTab={activeTab} onSelectTab={setActiveTab}>
      {/* If viewing a specific exam result */}
      {viewResultSubmissionId ? (
        <ExamResult
          submissionId={viewResultSubmissionId}
          onBackToDashboard={() => setViewResultSubmissionId(null)}
          onGoToMistakes={() => {
            setViewResultSubmissionId(null);
            setActiveTab('student-mistakes');
          }}
        />
      ) : (
        <>
          {/* ADMIN TABS */}
          {activeTab === 'admin-settings' && <AdminSettings />}

          {/* TEACHER TABS */}
          {activeTab === 'teacher-overview' && (
            <TeacherDashboard onNavigate={(tab) => setActiveTab(tab)} />
          )}
          {activeTab === 'teacher-classes' && <ClassManagement />}
          {activeTab === 'teacher-questions' && <QuestionBank />}
          {activeTab === 'teacher-create-assignment' && (
            <CreateAssignment onSuccess={() => setActiveTab('teacher-overview')} />
          )}
          {activeTab === 'teacher-results' && <AssignmentResults />}

          {/* STUDENT TABS */}
          {activeTab === 'student-overview' && (
            <StudentDashboard
              onStartExam={(id) => setExamAssignmentId(id)}
              onViewResult={(subId) => setViewResultSubmissionId(subId)}
              onNavigate={(tab) => setActiveTab(tab)}
            />
          )}
          {activeTab === 'student-practice' && <TopicPractice />}
          {activeTab === 'student-mistakes' && <MyMistakes />}
        </>
      )}
    </AppLayout>
  );
};

export default App;
