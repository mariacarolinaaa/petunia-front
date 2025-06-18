
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Header from '../components/header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/footer';

import truck1 from '../../assets/truck1.png';
import truck2 from '../../assets/truck2.png';
import truck3 from '../../assets/truck3.png';
import truck4 from '../../assets/truck4.png';
import truck5 from '../../assets/truck5.png';
import produto4 from '../../assets/produto4.png'; 

export default function TrucksScreen() {
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
        <Text style={styles.sectionTitle}>Trucks</Text>

        <View style={styles.row}>
          <ProductCard image={truck1} name="Truck Prata" description="R$499,90" />
          <ProductCard image={truck2} name="Truck Preto" description="R$479,90" />
        </View>

        <View style={styles.row}>
          <ProductCard image={truck3} name="Truck Base Vermelha" description="R$459,90" />
          <ProductCard image={truck4} name="Truck Preto cru" description="R$469,90" />
        </View>

        <View style={styles.row}>
          <ProductCard image={truck5} name="Truck prata e preto" description="R$439,90" />
          <ProductCard image={produto4} name="Truck Dourado" description="R$499,90" />
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
