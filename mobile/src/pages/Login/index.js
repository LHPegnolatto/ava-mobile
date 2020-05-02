import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { PasswordTextInput } from '../../components';
import { Container, Card, LogoSou, RedTitle, BlackTitle, LoginForm, InputTitle, EmailInput, FormActions, RecoveryButton, RecoveryButtonText, LoginButton, LoginButtonText } from './styles';

import LogoAsset from '../../assets/logo-sou.png';

export default function Login() {
  const navigation = useNavigation();

  function navigateToPasswordRecovery () {
    navigation.navigate('PasswordRecovery');
  }

  return (
    <Container>
      <Card>
        <LogoSou source={LogoAsset} />

        <RedTitle>Sistema Operacional Univesp</RedTitle>
        <BlackTitle>Login</BlackTitle>

        <LoginForm>
          <InputTitle>Digite seu e-mail UNIVESP</InputTitle>
          <EmailInput selectionColor='#fca9ac' keyboardType='email-address' />
          <InputTitle>Digite sua senha</InputTitle>
          <PasswordTextInput selectionColor='#fca9ac' />

          <FormActions>
            <RecoveryButton onPress={navigateToPasswordRecovery}>
              <RecoveryButtonText>Esqueci a senha / Primeiro acesso</RecoveryButtonText>
            </RecoveryButton>

            <LoginButton>
              <LoginButtonText>ENTRAR</LoginButtonText>
            </LoginButton>
          </FormActions>
        </LoginForm>
      </Card>
    </Container>
  );
}