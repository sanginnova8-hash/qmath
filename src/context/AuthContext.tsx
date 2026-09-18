import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, UserRole } from '../types';
import { INITIAL_TEACHER, INITIAL_STUDENTS } from '../services/seedData';
import { isFirebaseConfigured, auth } from '../lib/firebase';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';

import { createUser } from '../services/store';

const PASSCODES_KEY = 'qmath_security_passcodes';
const DEFAULT_PASSCODES = {
  ADMIN: 'Ducthang@2025',
  TEACHER: '123456'
};

export const GUEST_USER: UserProfile = {
  id: 'guest-preview',
  email: 'guest@qmath.edu.vn',
  displayName: 'Khách trải nghiệm',
  role: 'STUDENT',
  grade: 12,
  school: 'Chưa đăng nhập',
  createdAt: '2026-01-01T00:00:00.000Z',
  isGuest: true
};

export const INITIAL_ADMIN: UserProfile = {
  id: 'admin-system',
  email: 'sanginnova@gmail.com',
  displayName: 'Quản trị viên (sanginnova)',
  role: 'ADMIN',
  school: 'Hệ thống QMath',
  createdAt: '2026-01-01T00:00:00.000Z'
};

export const getStoredPasscodes = (): { ADMIN: string; TEACHER: string } => {
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(PASSCODES_KEY) : null;
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.ADMIN === 'admin123') {
        parsed.ADMIN = 'Ducthang@2025';
        localStorage.setItem(PASSCODES_KEY, JSON.stringify(parsed));
      }
      return { ...DEFAULT_PASSCODES, ...parsed };
    }
  } catch (e) {
    console.error('Error loading passcodes:', e);
  }
  return DEFAULT_PASSCODES;
};

export const setStoredPasscode = (role: 'ADMIN' | 'TEACHER', newCode: string): void => {
  const current = getStoredPasscodes();
  current[role] = newCode;
  try {
    localStorage.setItem(PASSCODES_KEY, JSON.stringify(current));
  } catch (e) {
    console.error('Error saving passcodes:', e);
  }
};

interface AuthContextType {
  currentUser: UserProfile | null;
  role: UserRole;
  isGuest: boolean;
  loading: boolean;
  loginAsDemo: (role: UserRole, studentIndex?: number) => void;
  loginWithPasscode: (targetRole: 'ADMIN' | 'TEACHER', code: string) => { success: boolean; message?: string };
  loginStudentAccount: (user: UserProfile) => void;
  registerStudentAccount: (data: { displayName: string; email: string; grade: 10 | 11 | 12; school?: string }) => Promise<UserProfile>;
  logoutToGuest: () => void;
  logoutToStudent: () => void;
  getStoredPasscodes: () => { ADMIN: string; TEACHER: string };
  updatePasscode: (role: 'ADMIN' | 'TEACHER', newCode: string) => void;
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
      if (saved) {
        const user = JSON.parse(saved);
        if (user && (user.id === 'admin-system' || user.email === 'admin@qmath.edu.vn' || user.role === 'ADMIN')) {
          return INITIAL_ADMIN;
        }
        return user;
      }
    } catch (e) {
      console.error(e);
    }
    // Default to GUEST when fresh link is opened, requiring account for full features
    return GUEST_USER;
  });

  const isGuest = Boolean(!currentUser || currentUser.isGuest);

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
          setCurrentUser(prev => prev && !prev.isGuest ? prev : {
            id: user.uid,
            email: user.email || 'user@qmath.edu.vn',
            displayName: user.displayName || 'Người dùng QMath',
            role: 'STUDENT',
            grade: 12,
            isGuest: false,
            createdAt: new Date().toISOString()
          });
        }
      });
      return () => unsubscribe();
    }
  }, []);

  const loginStudentAccount = (user: UserProfile) => {
    setCurrentUser({ ...user, role: 'STUDENT', isGuest: false });
  };

  const registerStudentAccount = async (data: { displayName: string; email: string; grade: 10 | 11 | 12; school?: string }): Promise<UserProfile> => {
    const newUser: UserProfile = {
      id: `student-${Date.now()}`,
      displayName: data.displayName.trim(),
      email: data.email.trim(),
      role: 'STUDENT',
      grade: data.grade,
      school: data.school?.trim() || 'Trường THPT',
      createdAt: new Date().toISOString(),
      isGuest: false
    };
    await createUser(newUser);
    setCurrentUser(newUser);
    return newUser;
  };

  const logoutToGuest = () => {
    setCurrentUser(GUEST_USER);
  };

  const logoutToStudent = () => {
    logoutToGuest();
  };

  const loginWithPasscode = (targetRole: 'ADMIN' | 'TEACHER', code: string): { success: boolean; message?: string } => {
    const codes = getStoredPasscodes();
    const expected = codes[targetRole];
    if (code.trim() === expected.trim()) {
      if (targetRole === 'ADMIN') {
        setCurrentUser(INITIAL_ADMIN);
      } else {
        setCurrentUser(INITIAL_TEACHER);
      }
      return { success: true };
    }
    return { success: false, message: `Mật khẩu ${targetRole === 'ADMIN' ? 'Quản trị viên' : 'Giáo viên'} không chính xác!` };
  };


  const updatePasscode = (roleToUpdate: 'ADMIN' | 'TEACHER', newCode: string) => {
    setStoredPasscode(roleToUpdate, newCode);
  };

  const loginAsDemo = (role: UserRole, studentIndex: number = 0) => {
    if (role === 'TEACHER') {
      setCurrentUser(INITIAL_TEACHER);
    } else if (role === 'ADMIN') {
      setCurrentUser(INITIAL_ADMIN);
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
        if (email.includes('admin') || email.includes('sanginnova')) {
          setCurrentUser(INITIAL_ADMIN);
        } else if (email.includes('giao') || email.includes('teacher')) {
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
    logoutToStudent();
  };

  const switchRole = (newRole: UserRole) => {
    loginAsDemo(newRole);
  };

  const allUsers: UserProfile[] = [
    INITIAL_ADMIN,
    INITIAL_TEACHER,
    ...INITIAL_STUDENTS
  ];

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        role: currentUser?.role || 'STUDENT',
        isGuest,
        loading,
        loginAsDemo,
        loginWithPasscode,
        loginStudentAccount,
        registerStudentAccount,
        logoutToGuest,
        logoutToStudent,
        getStoredPasscodes,
        updatePasscode,
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
