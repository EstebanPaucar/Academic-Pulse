export interface LoginRequest {
  correo: string;
  contrasena: string;
}

export interface RegisterRequest {
  nombre: string;
  correo: string;
  contrasena: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
  // Agrega aquí los datos del usuario si tu backend los devuelve
}