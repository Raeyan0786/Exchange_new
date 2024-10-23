// /hooks/useAuth.ts
import { useState } from 'react';
import { authService } from '@/service/auth.service';
import { SignupData, LoginData, User, ApiError } from '@/types/auth';
import { setCookie } from 'cookies-next';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  token:string | null
}

export const useAuth = () => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: false,
    error: null,
    token:null,
  });

  const resetError = () => {
    setState(prev => ({ ...prev, error: null }));
  };

  const setLoading = (isLoading: boolean) => {
    setState(prev => ({ ...prev, isLoading }));
  };

  const handleError = (error: ApiError) => {
    setState(prev => ({
      ...prev,
      error: error.message,
      isLoading: false
    }));
  };

  const signup = async (data: SignupData) => {
    try {
      setLoading(true);
      resetError();
      const response = await authService.signup(data);
      setState(prev => ({
        ...prev,
        user: response.user || null,
        isLoading: false
      }));
      return response;
    } catch (error) {
      handleError(error as ApiError);
      throw error;
    }
  };

  const login = async (credentials: LoginData) => {
    try {
      setLoading(true);
      resetError();
      const response = await authService.login(credentials);
      setState(prev => ({
        ...prev,
        user: response.user || null,
        isLoading: false,
        token:response.token
      }));
      setCookie('token', response.token, {
        // domain: process.env['NEXT_PUBLIC_ADMIN_PORTAL_DOMAIN'],
        maxAge: 86400,
      })
      return response;
    } catch (error) {
      handleError(error as ApiError);
      throw error;
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      resetError();
      const response = await authService.logout();
      setState(prev => ({
        ...prev,
        user: null,
        isLoading: false
      }));
      return response;
    } catch (error) {
      handleError(error as ApiError);
      throw error;
    }
  };

  return {
    user: state.user,
    isLoading: state.isLoading,
    error: state.error,
    token:state.token,
    signup,
    login,
    logout,
    resetError
  };
};