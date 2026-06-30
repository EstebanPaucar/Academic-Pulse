import { API_URL } from '../../core/constants/apiConfig';
//import { LoginRequest, RegisterRequest, AuthResponse } from '../../models/Auth';
import { LoginRequest, RegisterRequest, AuthResponse } from '../../models/auth';

export const authService = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Credenciales incorrectas');
    return await response.json();
  },

  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Error al registrar usuario');
    return await response.json();
  }
};