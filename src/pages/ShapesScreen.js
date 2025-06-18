
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Header from '../components/header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/footer';

import shape1 from '../../assets/produto5.png';
import shape2 from '../../assets/produto6.png';
import shape3 from '../../assets/produto7.png';
import shape4 from '../../assets/produto8.png';
import shape5 from '../../assets/shape1.png';
import shape6 from '../../assets/shape3.png';


export default function ShapesScreen() {
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
        <Text style={styles.sectionTitle}>Shapes</Text>

        <View style={styles.row}>
          <ProductCard image={shape1} name="Shape Wood Light Olhos" description="R$249,90" imageHeight={160} />
          <ProductCard image={shape2} name="Shape Rotten Astronauta" description="R$239,90" imageHeight={160} />
        </View>

        <View style={styles.row}>
          <ProductCard image={shape3} name="Shape Rotten Caveira" description="R$239,90" imageHeight={160} />
          <ProductCard image={shape4} name="Shape Possessed Pica-Pau" description="R$229,90" imageHeight={160} />
        </View>

        <View style={styles.row}>
          <ProductCard image={shape5} name="Shape Open Doors Roxo" description="R$259,90" imageHeight={160} />
          <ProductCard image={shape6} name="Shape Thank You Preto" description="R$239,90" imageHeight={160} />
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

