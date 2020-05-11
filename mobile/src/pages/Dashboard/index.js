import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { AsyncStorage } from 'react-native';

import { useAuth } from '../../contexts/auth';

import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import { Container, Card } from './styles';

export default function PasswordRecovery() {
  const { signOut, email } = useAuth();

  const [token, setToken] = useState('');

  function handleSignOut () {
    signOut();
  }

  async function getStoragedToken () {
    const storageToken = await AsyncStorage.getItem('@AVAMobile:token');
    setToken(storageToken);
  }

  useEffect(() => {
    getStoragedToken();
  }, []);

  return (
    <Container>
      <Card>
        <Text style={{alignSelf: 'center', fontSize: 18, color: '#1d1f23', padding: 10,}}>{email}</Text>
        <Text style={{alignSelf: 'center', fontSize: 18, color: '#1d1f23', padding: 10,}}>{token}</Text>
        <TouchableOpacity onPress={handleSignOut} style={{alignSelf: 'center', margin: 10,}}>
          <Icon name='logout' size={40} color='#1d1f23'/>
        </TouchableOpacity>
      </Card>
    </Container>
  );
}