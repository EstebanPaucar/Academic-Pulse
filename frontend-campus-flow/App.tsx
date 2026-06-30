import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { theme } from './config/theme';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: theme.colors.primary }}>
          ¡Campus Flow Inicializado! 🚀
        </Text>
      </View>
    </SafeAreaView>
  );
}