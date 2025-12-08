import { api } from './api';

export const Signup = (data) => api.post('auth/signup', data);

export const Signin = (data) => api.post('auth/login', data);