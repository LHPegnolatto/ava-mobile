import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import { Container, Card, LogoSou, NavigateBackButton, RedTitle, BlackTitle, LoginForm, InputTitle, EmailInput, SendButton, SendButtonText } from './styles';

import LogoAsset from '../../assets/logo-sou.png';

export default function PasswordRecovery() {
  const navigation = useNavigation();

  function navigateBack () {
    navigation.goBack();
  }

  return (
    <Container>
      <Card>
        <LogoSou source={LogoAsset} />

        <NavigateBackButton onPress={navigateBack}>
          <Icon name='arrow-left' size={25} color='#1d1f23'/>
        </NavigateBackButton>

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