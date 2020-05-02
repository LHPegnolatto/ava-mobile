import React from 'react';

import { Container, Card, LogoSou, RedTitle, BlackTitle, LoginForm, InputTitle, EmailInput, SendButton, SendButtonText } from './styles';

import LogoAsset from '../../assets/logo-sou.png';

export default function PasswordRecovery() {
  return (
    <Container>
      <Card>
        <LogoSou source={LogoAsset} />

        <RedTitle>Sistema Operacional Univesp</RedTitle>
        <BlackTitle>Redefinição de senha</BlackTitle>

        <LoginForm>
          <InputTitle>Digite seu e-mail UNIVESP</InputTitle>
          <EmailInput selectionColor='#fca9ac' keyboardType='email-address' />

          <SendButton>
            <SendButtonText>ENVIAR EMAIL</SendButtonText>
          </SendButton>
        </LoginForm>
      </Card>
    </Container>
  );
}