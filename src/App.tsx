import React, { useState, useEffect } from 'react';
import { useAuth } from './context/AuthContext';
import AppLayout from './components/layout/AppLayout';

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
    role === 'TEACHER' ? 'teacher-overview' : 'student-overview'
  );

  // Focus Exam Mode states
  const [examAssignmentId, setExamAssignmentId] = useState<string | null>(null);
  const [viewResultSubmissionId, setViewResultSubmissionId] = useState<string | null>(null);

  // Sync default tab when role switches
  useEffect(() => {
    if (role === 'TEACHER' || role === 'ADMIN') {
      if (activeTab.startsWith('student-')) {
        setActiveTab('teacher-overview');
      }
    } else {
      if (activeTab.startsWith('teacher-')) {
        setActiveTab('student-overview');
      }
    }
  }, [role]);

  // If in interactive Exam Room, display focus mode without sidebar
  if (examAssignmentId) {
    return (
      <ExamRoom
        assignmentId={examAssignmentId}
        onFinish={(subId) => {
          setExamAssignmentId(null);
          setViewResultSubmissionId(subId);
        }}
        onExit={() => setExamAssignmentId(null)}
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
