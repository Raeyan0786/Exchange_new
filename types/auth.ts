export interface UserInput {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }
  
  export interface UserDocument extends Document {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
  }
  
  export interface JwtPayload {
    userId: string;
    email: string;
    iat?: number;
    exp?: number;
  }

  export interface User {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
  }
  
  export interface SignupData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
  
  export interface LoginData {
    email: string;
    password: string;
  }
  
  export interface AuthResponse {
    message: string;
    user?: User;
    token?: string;
  }
  
  export interface ApiError {
    message: string;
    status?: number;
  }