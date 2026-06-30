import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { theme } from '../../../config/theme';

interface HeadingProps {
  text: string;
  level?: 1 | 2 | 3;
  color?: string;
  style?: TextStyle;
}

export const Heading = ({ text, level = 1, color = theme.colors.black, style }: HeadingProps) => {
  const getStyle = () => {
    switch (level) {
      case 1: return styles.h1;
      case 2: return styles.h2;
      case 3: return styles.h3;
      default: return styles.h1;
    }
  };

  return <Text style={[getStyle(), { color }, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  h1: { fontSize: theme.typography.h1, fontWeight: '900' }, // Inter Black
  h2: { fontSize: theme.typography.h2, fontWeight: '900' }, // Inter Black
  h3: { fontSize: theme.typography.h3, fontWeight: '600' }, // Inter SemiBold
});