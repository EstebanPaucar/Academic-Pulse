import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../../config/theme';
import { Typography } from './Typography';

type ButtonVariant = 'primary' | 'secondary' | 'neutral' | 'inverted' | 'danger';

interface ButtonProps {
  text: string;
  variant: ButtonVariant;
  onPress: () => void;
}

export const Button = ({ text, variant, onPress }: ButtonProps) => {
  const getStyles = () => {
    switch (variant) {
      case 'primary': return { bg: theme.colors.primary, border: theme.colors.primary, text: theme.colors.white };
      case 'secondary': return { bg: theme.colors.white, border: theme.colors.secondary, text: theme.colors.secondary };
      case 'neutral': return { bg: theme.colors.white, border: theme.colors.neutral, text: theme.colors.neutral };
      case 'inverted': return { bg: theme.colors.black, border: theme.colors.black, text: theme.colors.white };
      case 'danger': return { bg: theme.colors.white, border: theme.colors.error, text: theme.colors.error };
    }
  };

  const config = getStyles();

  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: config.bg, borderColor: config.border }]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Typography variant="body" text={text} color={config.text} style={{ fontWeight: '600' }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
});