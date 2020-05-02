import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import PasswordRecovery from '../pages/PasswordRecovery';

const AuthStack = createStackNavigator();

export default function AuthRoutes () {
  return(
    <AuthStack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="PasswordRecovery" component={PasswordRecovery} />
    </AuthStack.Navigator>
  );
}