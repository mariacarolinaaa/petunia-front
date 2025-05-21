import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Notable': require('./assets/fonts/Notable-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <ImageBackground
      source={require('./assets/fundo.png')} // troque o nome se necessário
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>PETUNIA BOARDS</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#fff"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#fff"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.registerText}>
            Não possui conta? Cadastre-se{'\n'}aqui
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    width: 350,
    height: 450,
    flexShrink: 0,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Notable',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 57,
    marginBottom: 40,
    
  },
  input: {
    backgroundColor: '#B22222',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    color: '#fff',
  },
  button: {
    backgroundColor: '#B22222',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerText: {
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    fontSize: 12,
  },
});