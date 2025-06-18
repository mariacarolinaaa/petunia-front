import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Header from '../components/header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/footer';

import rolamento1 from '../../assets/rolamento1.png';
import rolamento2 from '../../assets/rolamento2.png';
import rolamento3 from '../../assets/rolamento3.png';
import rolamento4 from '../../assets/rolamento4.png';
import rolamento5 from '../../assets/rolamento5.png';
import rolamento6 from '../../assets/rolamento6.png';

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
          <ProductCard image={rolamento1} name="Rolamento Bronson G2" description="R$89,90" imageHeight={130} />
          <ProductCard image={rolamento2} name="Rolamento Girl Skate Co." description="R$79,90" imageHeight={130} />
        </View>

        <View style={styles.row}>
          <ProductCard image={rolamento3} name="Rolamento Bronson G3 Jaws" description="R$119,90" imageHeight={130} />
          <ProductCard image={rolamento4} name="Rolamento Bronson G3 Gravette" description="R$119,90" imageHeight={130} />
        </View>

        <View style={styles.row}>
          <ProductCard image={rolamento5} name="Rolamento Bones Reds" description="R$109,90" imageHeight={130} />
          <ProductCard image={rolamento6} name="Rolamento Bones Super Reds" description="R$129,90" imageHeight={130} />
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
