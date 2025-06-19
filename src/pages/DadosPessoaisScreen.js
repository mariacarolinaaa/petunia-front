
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/header';
import Footer from '../components/footer';

export default function DadosPessoaisScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header showBackButton={true} onBack={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Olá! ______</Text>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Dados pessoais</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Alterar celular</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('AlterarEmail')}
        >
          <Text style={styles.optionText}>Alterar e-mail</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Alterar senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.option, styles.section]}>
          <Text style={styles.optionText}>Meus endereços</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Termos de uso</Text>
        </TouchableOpacity>
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { padding: 16 },
  title: {
    fontSize: 20,
    backgroundColor: '#ddd',
    textAlign: 'center',
    paddingVertical: 6,
    borderRadius: 10,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#111'
  },
  option: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  section: {
    marginTop: 20,
  },
});
