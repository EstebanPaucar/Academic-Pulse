export const theme = {
  colors: {
    primary: '#3B82F6',
    primaryLight: '#EFF6FF', // 10% opacity simulado para fondos
    secondary: '#10B981',
    tertiary: '#F59E0B',
    error: '#FF0000',
    errorLight: '#FEE2E2',
    neutral: '#757780',
    neutralLight: '#F3F4F6',
    white: '#FFFFFF',
    black: '#000000',
    border: '#E5E7EB',
  },
  typography: {
    h1: { fontSize: 48, fontWeight: '900' as const }, // Black
    h2: { fontSize: 36, fontWeight: '900' as const },
    h3: { fontSize: 24, fontWeight: '600' as const }, // SemiBold
    subtitle: { fontSize: 20, fontWeight: '400' as const }, // Regular
    body: { fontSize: 16, fontWeight: '400' as const },
    label: { fontSize: 12, fontWeight: '500' as const, textTransform: 'uppercase' as const }, // Medium
  },
};