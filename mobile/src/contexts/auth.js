import React, { createContext, useState, useEffect, useContext } from 'react';
import { SplashScreen } from 'expo';
import { AsyncStorage } from 'react-native';
import * as auth from '../services/auth';

const AuthContext = createContext({signed: false, user: {}})

export function AuthProvider ({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadStoragedData () {
      const storagedUser = await AsyncStorage.getItem('@AVAMobile:user');
      const storagedToken = await AsyncStorage.getItem('@AVAMobile:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }

      SplashScreen.hide();
    }

    loadStoragedData();
  }, []);

  async function signIn () {
    const response = await auth.signIn();

    setUser(response.user);

    await AsyncStorage.setItem('@AVAMobile:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@AVAMobile:token', response.token);
  }

  function signOut () {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth () {
  const context = useContext(AuthContext);

  return context;
};