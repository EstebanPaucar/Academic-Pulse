import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { theme } from '../config/theme';
import { Typography } from '../components/atoms/Typography';
import { Button } from '../components/atoms/Button';
import { FormField } from '../components/molecules/FormField';
import { useAuthViewModel } from '../viewModels/useAuthViewModel';

export default function LoginScreen() {
  const router = useRouter();
  const { correo, setCorreo, contrasena, setContrasena, login, isLoading, error } = useAuthViewModel();

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        <View style={styles.header}>
          <Typography variant="h1" text="Bienvenido" color={theme.colors.primary} />
          <Typography variant="subtitle" text="Ingresa con tu correo institucional" />
        </View>

        <View style={styles.form}>
          <FormField 
            label="CORREO ELECTRÓNICO" 
            placeholder="ejemplo@uce.edu.ec" 
            value={correo} 
            onChangeText={setCorreo} 
            error={error?.includes('Correo') ? error : undefined}
          />
          <FormField 
            label="CONTRASEÑA" 
            placeholder="Escribe tu contraseña" 
            value={contrasena} 
            onChangeText={setContrasena} 
            secureTextEntry 
            error={error && !error.includes('Correo') ? error : undefined}
          />
        </View>

        <View style={styles.actions}>
          <Button text={isLoading ? "Cargando..." : "INICIAR SESIÓN"} variant="primary" onPress={login} />
          <View style={styles.spacer} />
          <Button text="CREAR CUENTA" variant="secondary" onPress={() => router.push('/register')} />
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  scroll: { flexGrow: 1, padding: 24, justifyContent: 'center' },
  header: { marginBottom: 40, alignItems: 'center' },
  form: { marginBottom: 32 },
  actions: { width: '100%' },
  spacer: { height: 16 }
});