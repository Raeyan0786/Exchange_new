// /services/auth.service.ts
import apiClient from '@/lib/axios';
import { SignupData, LoginData, AuthResponse, ApiError } from '@/types/auth';
import axios from 'axios';

class AuthService {
  private static instance: AuthService;
  private readonly AUTH_ENDPOINTS = {
    SIGNUP: '/auth/signup',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    VERIFY: '/auth/verify',
  };

  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  /**
   * Sign up a new user
   */
  public async signup(data: SignupData): Promise<AuthResponse> {
    try {
      const response = await apiClient.post<AuthResponse>(
        this.AUTH_ENDPOINTS.SIGNUP,
        data
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Log in an existing user
   */
  public async login(credentials: LoginData): Promise<AuthResponse> {
    try {
      const response = await apiClient.post<AuthResponse>(
        this.AUTH_ENDPOINTS.LOGIN,
        credentials
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Log out the current user
   */
  public async logout(): Promise<AuthResponse> {
    try {
      const response = await apiClient.post<AuthResponse>(
        this.AUTH_ENDPOINTS.LOGOUT
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Verify the current auth token
   */
  public async verifyToken(): Promise<boolean> {
    try {
      await apiClient.get(this.AUTH_ENDPOINTS.VERIFY);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Handle API errors
   */
  private handleError(error: any): ApiError {
    if (axios.isAxiosError(error)) {
      return {
        message: error.response?.data?.message || 'An error occurred',
        status: error.response?.status
      };
    }
    return {
      message: 'An unexpected error occurred',
      status: 500
    };
  }
}

export const authService = AuthService.getInstance();