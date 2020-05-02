import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { useAuth } from '../../contexts/auth';

import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import { Container, Card } from './styles';

export default function PasswordRecovery() {
  const { signOut, user } = useAuth();

  function handleSignOut () {
    signOut();
  }

  return (
    <Container>
      <Card>
        <Text style={{alignSelf: 'center', fontSize: 20, color: '#1d1f23', padding: 10,}}>{user.name}</Text>
        <Text style={{alignSelf: 'center', fontSize: 18, color: '#1d1f23', padding: 10,}}>{user.email}</Text>
        <TouchableOpacity onPress={handleSignOut} style={{alignSelf: 'center', margin: 10,}}>
          <Icon name='logout' size={40} color='#1d1f23'/>
        </TouchableOpacity>
      </Card>
    </Container>
  );
}