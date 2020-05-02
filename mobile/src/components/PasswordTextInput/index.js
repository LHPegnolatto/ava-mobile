import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

import { Container, PasswordInput, EyeButton } from './styles';

export default function PasswordTextInput(props) {
  const [stateProps] = useState(props);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [iconName, setIconName] = useState('eye');

  function onIconPress () {
    setIconName(secureTextEntry ? 'eye-off' : 'eye');
    setSecureTextEntry(!secureTextEntry);
  }

  return (
    <Container>
      <PasswordInput 
        {...stateProps}
        secureTextEntry={secureTextEntry}
      />
      <EyeButton onPress={onIconPress}>
        <Icon name={iconName} size={20} color='#1d1f23'/>
      </EyeButton>
    </Container>
  );
}