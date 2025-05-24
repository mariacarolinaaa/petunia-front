import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function RegisterScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput style={styles.input} placeholder="User name" placeholderTextColor="#fff" />
      <TextInput style={styles.input} placeholder="Endereço de e-mail" placeholderTextColor="#fff" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry placeholderTextColor="#fff" />
      <TextInput style={styles.input} placeholder="Confirme sua senha" secureTextEntry placeholderTextColor="#fff" />

      <View style={styles.row}>
        <TextInput style={[styles.input, styles.half]} placeholder="Endereço" placeholderTextColor="#fff" />
        <TextInput style={[styles.input, styles.half]} placeholder="Número" placeholderTextColor="#fff" />
      </View>

      <TextInput style={styles.input} placeholder="Cep" placeholderTextColor="#fff" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.backToLoginText}>Voltar para o login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#B22222',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  half: {
    flex: 0.48,
  },
  button: {
    backgroundColor: '#B22222',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  backToLoginText: {
    color: '#B22222',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});