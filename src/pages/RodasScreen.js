
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Header from '../components/header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/footer';


import roda1 from '../../assets/roda1.png'; 
import roda2 from '../../assets/roda2.png'; 
import roda3 from '../../assets/roda3.png';
import roda4 from '../../assets/roda4.png'; 
import roda5 from '../../assets/roda5.png'; 
import roda6 from '../../assets/roda6.png'; 

export default function RodasScreen() {
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
        <Text style={styles.sectionTitle}>Rodas</Text>

        <View style={styles.row}>
          <ProductCard image={roda1} name="OJ Wheels Citrus 53mm" description="R$159,90" imageHeight={130} />
          <ProductCard image={roda2} name="Screen Camo 53mm" description="R$139,90" imageHeight={130} />
        </View>

        <View style={styles.row}>
          <ProductCard image={roda3} name="Chocolate Burgundy 52mm" description="R$134,90" imageHeight={130} />
          <ProductCard image={roda4} name="Mandala 51mm" description="R$129,90" imageHeight={130} />
        </View>

        <View style={styles.row}>
          <ProductCard image={roda5} name="Girl Roxo/Verde 53mm" description="R$149,90" imageHeight={130} />
          <ProductCard image={roda6} name="Girl Olhos Rosa/Azul 54mm" description="R$154,90" imageHeight={130} />
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
