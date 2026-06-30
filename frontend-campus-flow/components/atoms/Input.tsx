import React, { useState } from 'react';
import { TextInput, StyleSheet, TextInputProps, View } from 'react-native';
import { theme } from '../../config/theme';

interface InputProps extends TextInputProps {
  hasError?: boolean;
}

export const Input = ({ hasError, onFocus, onBlur, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const getBorderColor = () => {
    if (hasError) return theme.colors.error;
    if (isFocused) return theme.colors.primary;
    return theme.colors.border;
  };

  const getBackgroundColor = () => {
    if (hasError) return theme.colors.errorLight;
    return theme.colors.white;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          { borderColor: getBorderColor(), backgroundColor: getBackgroundColor() }
        ]}
        placeholderTextColor={theme.colors.neutral}
        onFocus={(e) => {
          setIsFocused(true);
          if (onFocus) onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          if (onBlur) onBlur(e);
        }}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.black,
  }
});