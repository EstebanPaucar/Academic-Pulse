import { useState } from 'react';
import { useRouter } from 'expo-router';
import { authService } from '../services/http/authService';

export const useAuthViewModel = () => {
  const router = useRouter();
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validate = () => {
    if (!correo.includes('@')) {
      setError('Correo institucional inválido');
      return false;
    }
    if (contrasena.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return false;
    }
    setError(null);
    return true;
  };

  const login = async () => {
    if (!validate()) return;
    setIsLoading(true);
    try {
      const response = await authService.login({ correo, contrasena });
      // Aquí guardarías el token (ej. en AsyncStorage)
      console.log('Login Exitoso:', response.access_token);
      router.replace('/'); // Redirige al mapa/pantalla principal
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async () => {
    if (!validate() || !nombre) {
      setError('Completa todos los campos correctamente');
      return;
    }
    setIsLoading(true);
    try {
      const response = await authService.register({ nombre, correo, contrasena });
      console.log('Registro Exitoso:', response.access_token);
      router.replace('/'); // Redirige adentro de la app
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    nombre, setNombre,
    correo, setCorreo,
    contrasena, setContrasena,
    isLoading, error,
    login, register
  };
};