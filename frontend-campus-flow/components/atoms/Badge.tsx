import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../config/theme';
import { Typography } from './Typography';

export type BadgeType = 'DISPONIBLE' | 'OCUPADO' | 'PROXIMO' | 'INFO';

interface BadgeProps {
  type: BadgeType;
  text?: string;
}

export const Badge = ({ type, text }: BadgeProps) => {
  const getConfig = () => {
    switch (type) {
      case 'DISPONIBLE': return { color: theme.colors.secondary, icon: 'lock-open-outline' as const, defaultText: 'DISPONIBLE' };
      case 'OCUPADO': return { color: theme.colors.error, icon: 'lock-closed-outline' as const, defaultText: 'OCUPADO' };
      case 'PROXIMO': return { color: theme.colors.tertiary, icon: 'time-outline' as const, defaultText: 'PRÓXIMO' };
      case 'INFO': return { color: theme.colors.primary, icon: 'person-circle-outline' as const, defaultText: '' };
    }
  };

  const config = getConfig();
  const displayText = text || config.defaultText;

  return (
    <View style={[styles.container, { borderColor: config.color }]}>
      <Ionicons name={config.icon} size={14} color={config.color} />
      <Typography variant="label" text={displayText} color={config.color} style={{ fontSize: 10 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: theme.colors.white,
    gap: 4,
    alignSelf: 'flex-start'
  }
});