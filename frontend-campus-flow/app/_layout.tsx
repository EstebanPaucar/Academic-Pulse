import { Stack } from 'expo-router';
import { theme } from '../config/theme'; // Importando tu paleta desde tu carpeta config

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: theme.colors.white,
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    />
  );
}