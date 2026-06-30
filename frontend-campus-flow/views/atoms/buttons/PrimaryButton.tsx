import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { theme } from '../../../config/theme';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export const PrimaryButton = ({ title, onPress, isLoading = false, disabled = false }: PrimaryButtonProps) => {
  return (
    <TouchableOpacity 
      style={[styles.button, disabled ? styles.disabled : null]} 
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={0.8}
    >
      {isLoading ? (
        <ActivityIndicator color={theme.colors.white} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  disabled: {
    backgroundColor: theme.colors.neutral,
    opacity: 0.6,
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.typography.body,
    fontWeight: '600',
  },
});