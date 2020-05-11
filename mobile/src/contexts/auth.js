import React, { createContext, useState, useEffect, useContext } from 'react';
import { SplashScreen } from 'expo';
import { AsyncStorage } from 'react-native';
import api from '../services/api';

const AuthContext = createContext({signed: false, email: {}})

export function AuthProvider ({ children }) {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    async function loadStoragedData () {
      const storagedEmail = await AsyncStorage.getItem('@AVAMobile:email');
      const storagedToken = await AsyncStorage.getItem('@AVAMobile:token');

      if (storagedEmail && storagedToken) {
        setEmail(JSON.parse(storagedEmail));
      }

      SplashScreen.hide();
    }

    loadStoragedData();
  }, []);

  async function signIn (email, password) {
    const response = await api.post('/auth/authenticate', {
      email: email,
      password: password
    });

    const data = response.data

    if (data.auth) {
      setEmail(data.email);

      await AsyncStorage.setItem('@AVAMobile:email', JSON.stringify(data.email));
      await AsyncStorage.setItem('@AVAMobile:token', data.token);
    }
  }

  function signOut () {
    AsyncStorage.clear().then(() => {
      setEmail(null);
    });
  }

  return (
    <AuthContext.Provider value={{signed: !!email, email, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth () {
  const context = useContext(AuthContext);

  return context;
};