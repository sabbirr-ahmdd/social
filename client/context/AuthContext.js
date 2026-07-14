"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import app from "@/lib/axios";
import { getAccessToken } from "@/utils/auth";
import { getUser } from "@/utils/user";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState(null);

  const tokenRef = useRef(null);

  const updateToken = (token) => {
    setAccessToken(token);
    tokenRef.current = token;
  };

  const clearTokens = () => {
    updateToken(null);
    setUser(null);
  };

  // ── Interceptors ──────────────────────────────────────────────
  useEffect(() => {
    const reqInterceptor = app.interceptors.request.use((config) => {
      const token = tokenRef.current;
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    });

    const resInterceptor = app.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (originalRequest.url?.includes("/api/v1/auth/refresh")) {
          return Promise.reject(error);
        }

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const newToken = await getAccessToken();
            updateToken(newToken);
            originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
            return app(originalRequest);
          } catch (refreshError) {
            clearTokens();
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      app.interceptors.request.eject(reqInterceptor);
      app.interceptors.response.eject(resInterceptor);
    };
  }, []);

  // ── App load ──────────────────────────────────────────────────
  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = await getAccessToken();
        if (!token) return;
        updateToken(token);
        await getUser(token, setUser, clearTokens);
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, []);

  const login = (userData, token) => {
    updateToken(token);
    setUser(userData);
  };

  const logout = async () => {
    try {
      await app.post("/api/v1/auth/logout");
    } finally {
      clearTokens();
      window.location.href = "/auth/login";
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, accessToken, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);