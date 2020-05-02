import styled from 'styled-components/native';

export const Container  = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

export const Card = styled.View`
  margin: 0 20px;
  align-self: stretch;
  background-color: #ffffff;
`;

export const LogoSou = styled.Image`
  align-self: center;
  height: 100px;
  width: 100px;
  margin-top: -50px;
`;

export const NavigateBackButton = styled.TouchableOpacity`
  position: absolute;
  padding: 10px;
`;

export const LoginForm = styled.View`
  margin: 20px;
  align-self: stretch;
`;

export const RedTitle = styled.Text`
  align-self: center;
  font-size: 16px;
  margin-top: 20px;
  color: #d13239;
`;

export const BlackTitle = styled.Text`
  align-self: center;
  font-size: 16px;
  margin-top: 5px;
  color: #1d1f23;
`;

export const InputTitle = styled.Text`
  font-size: 14px;
  margin: 5px 0;
  color: #d13239;
`;

export const EmailInput = styled.TextInput`
  border-bottom-color: #1d1f23;
  border-bottom-width: 1px;
  border-color: #f4f4f4;
  border-width: 1px;
  font-size: 14px;
  padding: 0 5px;
`;

export const SendButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-top: 20px;
  padding: 10px;
  height: 40px;
  width: 150px;
  background-color: #d13239;
`;

export const SendButtonText = styled.Text`
  align-self: center;
  text-align: center;
  font-size: 14px;
  color: #fff;
`; 