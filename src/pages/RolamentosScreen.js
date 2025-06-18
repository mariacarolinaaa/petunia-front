// src/pages/RolamentosScreen.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Header from '../components/header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/footer';

import rolamento1 from '../../assets/rolamento1.png'; // verde
import rolamento2 from '../../assets/rolamento2.png'; // laranja
import rolamento4 from '../../assets/rolamento4.png'; // azul
import rolamento5 from '../../assets/rolamento5.png'; // preto
import rolamento6 from '../../assets/rolamento6.png'; // amarelo
import produto2 from '../../assets/produto2.png';     // vermelho

export default function RolamentosScreen() {
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
        <Text style={styles.sectionTitle}>Rolamentos</Text>

        <View style={styles.row}>
          <ProductCard image={rolamento1} name="Rolamento Verde" description="R$19,90" imageHeight={100} />
          <ProductCard image={rolamento2} name="Rolamento Laranja" description="R$21,90" imageHeight={100} />
        </View>

        <View style={styles.row}>
          <ProductCard image={rolamento4} name="Rolamento Azul" description="R$24,90" imageHeight={100} />
          <ProductCard image={rolamento5} name="Rolamento Preto" description="R$19,90" imageHeight={100} />
        </View>

        <View style={styles.row}>
          <ProductCard image={rolamento6} name="Rolamento Amarelo" description="R$22,90" imageHeight={100} />
          <ProductCard image={produto2} name="Rolamento Vermelho" description="R$22,90" imageHeight={100} />
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
