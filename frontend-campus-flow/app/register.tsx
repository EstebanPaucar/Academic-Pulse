import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { theme } from '../config/theme';
import { Typography } from '../components/atoms/Typography';
import { Button } from '../components/atoms/Button';
import { FormField } from '../components/molecules/FormField';
import { useAuthViewModel } from '../viewModels/useAuthViewModel';

export default function RegisterScreen() {
  const router = useRouter();
  const { nombre, setNombre, correo, setCorreo, contrasena, setContrasena, register, isLoading, error } = useAuthViewModel();

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        
        <View style={styles.header}>
          <Typography variant="h2" text="Crear Cuenta" color={theme.colors.primary} />
          <Typography variant="subtitle" text="Únete a Campus Flow" />
        </View>

        <View style={styles.form}>
          <FormField 
            label="NOMBRE COMPLETO" 
            placeholder="Esteban Paucar" 
            value={nombre} 
            onChangeText={setNombre} 
          />
          <FormField 
            label="CORREO INSTITUCIONAL" 
            placeholder="ejemplo@uce.edu.ec" 
            value={correo} 
            onChangeText={setCorreo} 
          />
          <FormField 
            label="CONTRASEÑA" 
            placeholder="Mínimo 6 caracteres" 
            value={contrasena} 
            onChangeText={setContrasena} 
            secureTextEntry 
          />
          {error && <Typography variant="label" text={error} color={theme.colors.error} style={{marginTop: 8}} />}
        </View>

        <View style={styles.actions}>
          <Button text={isLoading ? "Registrando..." : "REGISTRARSE"} variant="primary" onPress={register} />
          <View style={styles.spacer} />
          <Button text="VOLVER AL LOGIN" variant="neutral" onPress={() => router.back()} />
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  scroll: { flexGrow: 1, padding: 24, justifyContent: 'center' },
  header: { marginBottom: 32, alignItems: 'center' },
  form: { marginBottom: 32 },
  actions: { width: '100%' },
  spacer: { height: 16 }
});