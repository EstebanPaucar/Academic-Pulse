import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography } from '../atoms/Typography';
import { Input } from '../atoms/Input';
import { theme } from '../../config/theme';

interface FormFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string;
}

export const FormField = ({ label, placeholder, value, onChangeText, secureTextEntry, error }: FormFieldProps) => {
  return (
    <View style={styles.container}>
      <Typography variant="label" text={label} color={error ? theme.colors.error : theme.colors.neutral} style={styles.label} />
      <Input 
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        hasError={!!error}
      />
      {error ? (
        <Typography variant="label" text={error} color={theme.colors.error} style={styles.errorText} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    marginBottom: 8,
  },
  errorText: {
    marginTop: 4,
    textTransform: 'none',
  }
});