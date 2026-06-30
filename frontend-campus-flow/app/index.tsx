import { Redirect } from 'expo-router';

export default function IndexScreen() {
  // Redirige al usuario a la ruta /login apenas abre la app
  return <Redirect href="/login" />;
}