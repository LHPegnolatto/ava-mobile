import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Login() {
  return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.redBox}>
            <Text style={styles.redBoxText}>#SOU</Text>
          </View>
          <Text style={styles.redTitle}>Sistema Operacional Univesp</Text>
          <Text style={styles.blackTitle}>Login</Text>

          <View style={styles.form}>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput style={styles.formInput}/>
            <Text style={styles.inputTitle}>Senha</Text>
            <TextInput style={styles.formInput}/>
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}
