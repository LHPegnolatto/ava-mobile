import 'react-native-gesture-handler';

import React from 'react';
import { SplashScreen } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';

import Routes from './src/routes';

export default function App() {
  SplashScreen.preventAutoHide();

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}