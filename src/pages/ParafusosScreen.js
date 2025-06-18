// src/pages/ParafusosScreen.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Header from '../components/header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/footer';

import parafuso1 from '../../assets/parafuso1.png';
import parafuso2 from '../../assets/parafuso2.png';
import parafuso4 from '../../assets/parafuso4.png';
import produto3 from '../../assets/produto3.png'; // Independent Allen preto

export default function ParafusosScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        onMenuPress={() => navigation.openDrawer()}
        onSearchPress={() => console.log('Pesquisar')}
        onNovidadesPress={() => navigation.navigate('Novidades')}
        onSobrePress={() => navigation.navigate('Sobre')}
        onContatoPress={() => navigation.navigate('Contato')}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Parafusos</Text>

        <View style={styles.row}>
          <ProductCard image={parafuso1} name='Parafuso Krux Allen 1"' description='R$17,90' imageHeight={140} />
          <ProductCard image={parafuso2} name='Parafuso Ace Allen 1"' description='R$16,90' imageHeight={140} />
        </View>

        <View style={styles.row}>
          <ProductCard image={parafuso4} name='Parafuso Independent Phillips 1"' description='R$18,90' imageHeight={140} />
          <ProductCard image={produto3} name='Parafuso Independent Allen 1"' description='R$14,90' imageHeight={140} />
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  scrollContent: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
  },
});

