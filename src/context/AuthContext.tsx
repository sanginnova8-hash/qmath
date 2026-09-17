import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, UserRole } from '../types';
import { INITIAL_TEACHER, INITIAL_STUDENTS } from '../services/seedData';
import { isFirebaseConfigured, auth } from '../lib/firebase';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';

interface AuthContextType {
  currentUser: UserProfile | null;
  role: UserRole;
  loading: boolean;
  loginAsDemo: (role: UserRole, studentIndex?: number) => void;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => Promise<void>;
  switchRole: (role: UserRole) => void;
  allUsers: UserProfile[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_AUTH_KEY = 'qmath_current_user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_AUTH_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    // Default to Teacher Nguyễn Văn An for instant full review
    return INITIAL_TEACHER;
  });

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(LOCAL_AUTH_KEY, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(LOCAL_AUTH_KEY);
    }
  }, [currentUser]);

  useEffect(() => {
    if (isFirebaseConfigured) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // If logged in via Firebase Auth
          setCurrentUser(prev => prev || {
            id: user.uid,
            email: user.email || 'user@qmath.edu.vn',
            displayName: user.displayName || 'Người dùng QMath',
            role: 'STUDENT',
            createdAt: new Date().toISOString()
          });
        }
      });
      return () => unsubscribe();
    }
  }, []);

  const loginAsDemo = (role: UserRole, studentIndex: number = 0) => {
    if (role === 'TEACHER') {
      setCurrentUser(INITIAL_TEACHER);
    } else if (role === 'ADMIN') {
      setCurrentUser({
        id: 'admin-system',
        email: 'admin@qmath.edu.vn',
        displayName: 'Quản trị viên QMath',
        role: 'ADMIN',
        createdAt: '2026-01-01T00:00:00.000Z'
      });
    } else {
      const std = INITIAL_STUDENTS[studentIndex] || INITIAL_STUDENTS[0];
      setCurrentUser(std);
    }
  };

  const login = async (email: string, pass: string) => {
    setLoading(true);
    try {
      if (isFirebaseConfigured) {
        await signInWithEmailAndPassword(auth, email, pass);
      } else {
        // Mock login lookup
        if (email.includes('giao') || email.includes('teacher')) {
          setCurrentUser(INITIAL_TEACHER);
        } else {
          setCurrentUser(INITIAL_STUDENTS[0]);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    if (isFirebaseConfigured) {
      try {
        await signOut(auth);
      } catch (e) {
        console.error(e);
      }
    }
    setCurrentUser(null);
  };

  const switchRole = (newRole: UserRole) => {
    loginAsDemo(newRole);
  };

  const allUsers: UserProfile[] = [
    INITIAL_TEACHER,
    ...INITIAL_STUDENTS,
    {
      id: 'admin-system',
      email: 'admin@qmath.edu.vn',
      displayName: 'Quản trị viên QMath',
      role: 'ADMIN',
      createdAt: '2026-01-01T00:00:00.000Z'
    }
  ];

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        role: currentUser?.role || 'STUDENT',
        loading,
        loginAsDemo,
        login,
        logout,
        switchRole,
        allUsers
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
