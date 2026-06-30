import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { theme } from '../../../config/theme';

interface BodyTextProps {
  text: string;
  color?: string;
  style?: TextStyle;
}

export const BodyText = ({ text, color = theme.colors.neutral, style }: BodyTextProps) => {
  return <Text style={[styles.body, { color }, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  body: {
    fontSize: theme.typography.body,
    fontWeight: '400', // Inter Regular
  },
});