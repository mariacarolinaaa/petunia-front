
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Header from '../components/header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/footer';

import amortecedor1 from '../../assets/amortecedor1.png'; // verde
import amortecedor2 from '../../assets/amortecedor2.png'; // laranja
import amortecedor3 from '../../assets/amortecedor4.png'; // azul
import amortecedor4 from '../../assets/amortecedor5.png'; // preto
import amortecedor5 from '../../assets/amortecedor6.png'; // amarelo
import amortecedor6 from '../../assets/produto2.png';   // vermelho

export default function AmortecedoresScreen() {
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
        <Text style={styles.sectionTitle}>Amortecedores</Text>

        <View style={styles.row}>
          <ProductCard image={amortecedor1} name="Amortecedor Verde" description="R$19,90" imageHeight={100} />
          <ProductCard image={amortecedor2} name="Amortecedor Laranja" description="R$21,90" imageHeight={100} />
        </View>

        <View style={styles.row}>
          <ProductCard image={amortecedor3} name="Amortecedor Cônico Azul" description="R$24,90" imageHeight={100} />
          <ProductCard image={amortecedor4} name="Amortecedor Barrel Preto" description="R$19,90" imageHeight={100} />
        </View>

        <View style={styles.row}>
          <ProductCard image={amortecedor5} name="Amortecedor Amarelo" description="R$22,90" imageHeight={100} />
          <ProductCard image={amortecedor6} name="Amortecedor Vermelho" description="R$22,90" imageHeight={100} />
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
