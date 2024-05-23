import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGetUsers } from '../../api/users/useGetUsers';
import NavbarTop from '../common/NavbarTop';

export default function LoginForm({ navigation}) {
  const users = useGetUsers();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = () => {
    const currentUser = users.find(user => user.email.toLowerCase() === email.toLowerCase());
    if (currentUser) {
      AsyncStorage.setItem('userId', currentUser.id.toString());
      AsyncStorage.setItem('name', currentUser.name);
      AsyncStorage.setItem('email', currentUser.email.toLowerCase());
      navigation.navigate('Home');
    } else {
      setLoginError(true);
    }
  };

  return (
    <View>
      <NavbarTop></NavbarTop>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {loginError && <Text style={styles.error}>Invalid email or password</Text>}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});
