import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';

import { PasswordTextInput } from '../../components';
import { Container, Card, LogoSou, RedTitle, BlackTitle, LoginForm, InputTitle, EmailInput, FormActions, RecoveryButton, RecoveryButtonText, LoginButton, LoginButtonText } from './styles';

import LogoAsset from '../../assets/logo-sou.png';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function navigateToPasswordRecovery () {
    navigation.navigate('PasswordRecovery');
  }

  const { signIn } = useAuth();

  function handleSignIn () {
    signIn(email, password);
  }

  return (
    <Container>
      <Card>
        <LogoSou source={LogoAsset} />

        <RedTitle>Sistema Operacional Univesp</RedTitle>
        <BlackTitle>Login</BlackTitle>

        <LoginForm>
          <InputTitle>Digite seu e-mail UNIVESP</InputTitle>
          <EmailInput selectionColor='#fca9ac' keyboardType='email-address' onChange={e => setEmail(e.nativeEvent.text)}/>
          <InputTitle style={{marginTop: 10}}>Digite sua senha</InputTitle>
          <PasswordTextInput selectionColor='#fca9ac' onChange={e => setPassword(e.nativeEvent.text)}/>

          <FormActions>
            <RecoveryButton onPress={navigateToPasswordRecovery}>
              <RecoveryButtonText>Esqueci a senha / Primeiro acesso</RecoveryButtonText>
            </RecoveryButton>

            <LoginButton onPress={handleSignIn}>
              <LoginButtonText>ENTRAR</LoginButtonText>
            </LoginButton>
          </FormActions>
        </LoginForm>
      </Card>
    </Container>
  );
}