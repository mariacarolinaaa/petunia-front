
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Header from '../components/header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/footer';

import lixa1 from '../../assets/lixa1.png';
import lixa2 from '../../assets/lixa2.png';
import lixa3 from '../../assets/lixa3.png';
import lixa4 from '../../assets/lixa4.png';

export default function LixasScreen() {
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
        <Text style={styles.sectionTitle}>Lixas</Text>

        <View style={styles.row}>
          <ProductCard image={lixa1} name="Lixa MOB Bear Roxa" description="R$49,90" imageHeight={150} />
          <ProductCard image={lixa2} name="Lixa MOB Bear Flames" description="R$59,90" imageHeight={150} />
        </View>

        <View style={styles.row}>
          <ProductCard image={lixa3} name="Lixa Mushroom Color" description="R$64,90" imageHeight={150} />
          <ProductCard image={lixa4} name="Lixa Diamond Steel" description="R$54,90" imageHeight={150} />
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
