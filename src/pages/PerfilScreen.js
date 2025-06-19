// src/pages/PerfilScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/header';
import Footer from '../components/footer';

export default function PerfilScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        onSearchPress={() => console.log('Pesquisar')}
        onNovidadesPress={() => navigation.navigate('Drawer', { screen: 'Novidades' })}
        onSobrePress={() => navigation.navigate('Drawer', { screen: 'Sobre' })}
        onContatoPress={() => navigation.navigate('Drawer', { screen: 'Contato' })}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Olá! ________</Text>

        <View style={styles.card}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => navigation.navigate('DadosPessoais')}
          >
            <Text style={styles.optionText}>Meus dados</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Meus endereços</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Termos e condições</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Excluir conta</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Sobre</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.logout}
          onPress={() => navigation.navigate('Drawer', { screen: 'Home' })}
        >
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  scrollContent: { padding: 16 },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#111',
  },
  card: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  logout: {
    alignSelf: 'center',
    marginTop: 10,
  },
  logoutText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
