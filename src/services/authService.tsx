// src/services/authService.ts
import axiosInstance from '../api/axiosInstance';

// Login User
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post('/auth/login', { email, password });
    const { token } = response.data;
    localStorage.setItem('token', token);  // Save token to localStorage
    return token;
  } catch (error) {
    throw new Error('Login failed');
  }
};

// Sign Up User
export const signUpUser = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post('/auth/signup', { email, password });
    return response.config;
  } catch (error) {
    throw new Error('Sign up failed');
  }
};

// Logout User
export const logoutUser = () => {
  localStorage.removeItem('token');
};
