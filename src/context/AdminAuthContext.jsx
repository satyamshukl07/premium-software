import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('mex_admin_token') || '');
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  // Authenticated fetch helper
  const authFetch = useCallback(
    async (url, options = {}) => {
      const headers = {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(options.headers || {}),
      };

      const res = await fetch(url, { ...options, headers });

      if (res.status === 401) {
        // Token expired or invalid
        localStorage.removeItem('mex_admin_token');
        setToken('');
        setAdmin(null);
      }

      return res;
    },
    [token]
  );

  // Verify token on mount or when token changes
  useEffect(() => {
    let isMounted = true;

    async function checkAuth() {
      if (!token) {
        setAdmin(null);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch('/api/admin/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.ok) {
          const data = await res.json();
          if (isMounted) {
            setAdmin(data.admin);
          }
        } else {
          // Token invalid
          localStorage.removeItem('mex_admin_token');
          if (isMounted) {
            setToken('');
            setAdmin(null);
          }
        }
      } catch (err) {
        console.warn('Auth check error:', err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, [token]);

  // Login action
  const login = async (email, password) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success && data.token) {
        localStorage.setItem('mex_admin_token', data.token);
        setToken(data.token);
        setAdmin(data.admin);
        return { success: true };
      } else {
        return { success: false, message: data.message || 'Login failed. Please check credentials.' };
      }
    } catch (err) {
      return { success: false, message: 'Server communication error. Please try again.' };
    }
  };

  // Logout action
  const logout = () => {
    localStorage.removeItem('mex_admin_token');
    setToken('');
    setAdmin(null);
  };

  const value = {
    token,
    admin,
    loading,
    isAuthenticated: Boolean(token && admin),
    login,
    logout,
    authFetch,
  };

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
}
