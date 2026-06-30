import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../../config/theme';

// Los 3 estados exactos que definiste en Figma
export type StatusType = 'DISPONIBLE' | 'OCUPADO' | 'PROXIMO';

interface StatusDotProps {
  status: StatusType;
}

export const StatusDot = ({ status }: StatusDotProps) => {
  const getBadgeConfig = () => {
    switch (status) {
      case 'DISPONIBLE':
        return { color: theme.colors.secondary, label: 'DISPONIBLE' };
      case 'OCUPADO':
        return { color: theme.colors.error, label: 'OCUPADO' };
      case 'PROXIMO':
        return { color: theme.colors.tertiary, label: 'PRÓXIMO' };
    }
  };

  const config = getBadgeConfig();

  return (
    <View style={[styles.container, { borderColor: config.color }]}>
      {/* Opcional: El "Punto" visual o icono (Figma muestra un candado/reloj que luego inyectaremos) */}
      <View style={[styles.dot, { backgroundColor: config.color }]} />
      
      <Text style={[styles.text, { color: config.color }]}>
        {config.label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 16,
    borderWidth: 1.5,
    backgroundColor: theme.colors.white,
    alignSelf: 'flex-start',
    gap: 6, // Espacio entre el punto y el texto
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  text: {
    fontSize: theme.typography.caption,
    fontWeight: '700',
  },
});