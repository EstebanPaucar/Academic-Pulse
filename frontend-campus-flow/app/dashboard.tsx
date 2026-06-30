import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { theme } from '../config/theme';
import { Typography } from '../components/atoms/Typography';
import { AulaCard } from '../components/molecules/AulaCard';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={{ marginBottom: 24 }}>
         <Typography variant="h2" text="Mis Espacios" color={theme.colors.primary} />
      </View>

      <AulaCard 
        nombreAula="Aula 103"
        ubicacion="Edificio A - Planta Baja"
        profesor="Ing. Carlos Silva"
        materia="Bases de Datos"
        horario="08:00-10:00"
        tiempoRestante="1h 22m"
        estudiantes={34}
        status="DISPONIBLE"
      />

      <AulaCard 
        nombreAula="Laboratorio 4"
        ubicacion="Edificio C - Planta 2"
        profesor="Ing. Juan Guevara"
        materia="Ingeniería de Software"
        horario="10:00-12:00"
        tiempoRestante="0h 15m"
        estudiantes={28}
        status="OCUPADO"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  content: { padding: 16 }
});