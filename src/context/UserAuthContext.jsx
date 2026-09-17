import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getApiUrl } from '../config/api.js';

const UserAuthContext = createContext(null);

export function UserAuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('techtonika_user_data') || localStorage.getItem('mex_user_data');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem('techtonika_user_token') || localStorage.getItem('mex_user_token') || null;
  });

  const [loading, setLoading] = useState(true);

  // Validate session on boot
  useEffect(() => {
    const verifySession = async () => {
      const storedToken = localStorage.getItem('techtonika_user_token') || localStorage.getItem('mex_user_token');
      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(getApiUrl('/api/user/me'), {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          if (data.success && data.user) {
            setUser(data.user);
            localStorage.setItem('techtonika_user_data', JSON.stringify(data.user));
            localStorage.removeItem('mex_user_data');
          }
        } else {
          // Token invalid or expired
          logout();
        }
      } catch (err) {
        console.warn('Could not verify session with server:', err);
      } finally {
        setLoading(false);
      }
    };

    verifySession();
  }, []);

  const login = async (email, password) => {
    try {
      const res = await fetch(getApiUrl('/api/user/login'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('techtonika_user_token', data.token);
        localStorage.setItem('techtonika_user_data', JSON.stringify(data.user));
        localStorage.removeItem('mex_user_token');
        localStorage.removeItem('mex_user_data');
        return { success: true, user: data.user };
      } else {
        return { success: false, message: data.message || 'Login failed. Please check your credentials.' };
      }
    } catch (err) {
      console.error('Login error:', err);
      return { success: false, message: 'Unable to connect to server. Please try again.' };
    }
  };

  const signup = async ({ name, email, password, company, phone }) => {
    try {
      const res = await fetch(getApiUrl('/api/user/signup'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, company, phone }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Automatically login user upon registration!
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('techtonika_user_token', data.token);
        localStorage.setItem('techtonika_user_data', JSON.stringify(data.user));
        localStorage.removeItem('mex_user_token');
        localStorage.removeItem('mex_user_data');
        return { success: true, user: data.user, message: data.message };
      } else {
        return { success: false, message: data.message || 'Sign up failed. Please try again.' };
      }
    } catch (err) {
      console.error('Sign up error:', err);
      return { success: false, message: 'Unable to connect to server. Please try again.' };
    }
  };

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('techtonika_user_token');
    localStorage.removeItem('techtonika_user_data');
    localStorage.removeItem('mex_user_token');
    localStorage.removeItem('mex_user_data');
  }, []);

  const authFetch = useCallback(
    async (url, options = {}) => {
      const headers = {
        ...options.headers,
        Authorization: token ? `Bearer ${token}` : '',
      };
      return fetch(getApiUrl(url), { ...options, headers });
    },
    [token]
  );

  return (
    <UserAuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: Boolean(user && token),
        loading,
        login,
        signup,
        logout,
        authFetch,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}

export function useUserAuth() {
  const context = useContext(UserAuthContext);
  if (!context) {
    throw new Error('useUserAuth must be used within a UserAuthProvider');
  }
  return context;
}
