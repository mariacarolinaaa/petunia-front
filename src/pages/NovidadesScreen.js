
// src/pages/HomeScreen.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, ScrollView, Text, } from 'react-native';
import Header from '../components/header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/footer';


import logo from '../../assets/logo.jpg';
import produto5 from '../../assets/produto5.png'; 
import produto6 from '../../assets/produto6.png';
import produto7 from '../../assets/produto7.png';
import produto8 from '../../assets/produto8.png';

export default function NovidadesScreen() {
  const navigation = useNavigation(); 

  return (
     <View style={styles.container}>
      <Header
        logo={logo}
        onMenuPress={() => navigation.openDrawer()}
        onSearchPress={() => console.log('Pesquisar')}
        onNovidadesPress={() => navigation.navigate('Novidades')} 
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Best Sellers</Text>

        <View style={styles.row}>
          <ProductCard image={produto5} name="Shape W. Eye " description="R$159,90" imageHeight={400} />
          <ProductCard image={produto6} name="Shape Rotten" description="259,90" imageHeight={400} />
        </View>

        <View style={styles.row}>
          <ProductCard image={produto7} name="Shape RottenS" description="R$359,90" imageHeight={420} />
          <ProductCard image={produto8} name="Shape Caravana" description="R$359,90" imageHeight={400} />
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
    marginTop:20,
  },
  sectionTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 12,
  color: '#333',
  textAlign: 'center',
},
button: {
  backgroundColor: '#A62422',
  paddingVertical: 26,
  borderRadius: 8,
  marginTop: 12,
  padding: 32,
  alignItems: 'center',
},

buttonText: {
 fontFamily: 'Notable',
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
textAlign: 'center',
},
});
