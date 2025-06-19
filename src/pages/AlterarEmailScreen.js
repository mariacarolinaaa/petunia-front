
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/header';

export default function AlterarEmailScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleSalvar = () => {
    if (!email.includes('@')) {
      Alert.alert('Erro', 'Digite um e-mail válido.');
      return;
    }

    
    Alert.alert('Sucesso', 'E-mail atualizado com sucesso!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header onBack={() => navigation.goBack()} />

      <View style={styles.form}>
        <Text style={styles.label}>Novo e-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="email@exemplo.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={handleSalvar}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    marginTop: 40,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#111',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});