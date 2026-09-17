import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, UserRole } from '../types';
import { INITIAL_TEACHER, INITIAL_STUDENTS } from '../services/seedData';
import { isFirebaseConfigured, auth } from '../lib/firebase';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';

const PASSCODES_KEY = 'qmath_security_passcodes';
const DEFAULT_PASSCODES = {
  ADMIN: 'admin123',
  TEACHER: '123456'
};

export const getStoredPasscodes = (): { ADMIN: string; TEACHER: string } => {
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(PASSCODES_KEY) : null;
    if (raw) return { ...DEFAULT_PASSCODES, ...JSON.parse(raw) };
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
  loading: boolean;
  loginAsDemo: (role: UserRole, studentIndex?: number) => void;
  loginWithPasscode: (targetRole: 'ADMIN' | 'TEACHER', code: string) => { success: boolean; message?: string };
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
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    // Default to STUDENT when fresh link is opened, protecting Teacher & Admin workspace
    return INITIAL_STUDENTS[0];
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

  const loginWithPasscode = (targetRole: 'ADMIN' | 'TEACHER', code: string): { success: boolean; message?: string } => {
    const codes = getStoredPasscodes();
    const expected = codes[targetRole];
    if (code.trim() === expected.trim()) {
      if (targetRole === 'ADMIN') {
        setCurrentUser({
          id: 'admin-system',
          email: 'admin@qmath.edu.vn',
          displayName: 'Quản trị viên QMath',
          role: 'ADMIN',
          createdAt: '2026-01-01T00:00:00.000Z'
        });
      } else {
        setCurrentUser(INITIAL_TEACHER);
      }
      return { success: true };
    }
    return { success: false, message: `Mật khẩu ${targetRole === 'ADMIN' ? 'Quản trị viên' : 'Giáo viên'} không chính xác!` };
  };

  const logoutToStudent = () => {
    setCurrentUser(INITIAL_STUDENTS[0]);
  };

  const updatePasscode = (roleToUpdate: 'ADMIN' | 'TEACHER', newCode: string) => {
    setStoredPasscode(roleToUpdate, newCode);
  };

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
        if (email.includes('admin')) {
          setCurrentUser({
            id: 'admin-system',
            email: 'admin@qmath.edu.vn',
            displayName: 'Quản trị viên QMath',
            role: 'ADMIN',
            createdAt: '2026-01-01T00:00:00.000Z'
          });
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
        loginWithPasscode,
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
