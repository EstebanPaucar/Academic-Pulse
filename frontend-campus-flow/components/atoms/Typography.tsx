import React from 'react';
import { Text, TextStyle } from 'react-native';
import { theme } from '../../config/theme';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'subtitle' | 'body' | 'label';
  text: string;
  color?: string;
  style?: TextStyle;
}

export const Typography = ({ variant, text, color, style }: TypographyProps) => {
  const baseStyle = theme.typography[variant];
  const defaultColor = variant.includes('h') ? theme.colors.black : theme.colors.neutral;

  return (
    <Text style={[baseStyle, { color: color || defaultColor }, style]}>
      {text}
    </Text>
  );
};