// src/pages/HomeScreen.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity} from 'react-native';
import Header from '../components/header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/footer';


import logo from '../../assets/logo.jpg';
import produto1 from '../../assets/produto1.png';
import produto2 from '../../assets/produto2.png';
import produto3 from '../../assets/produto3.png';
import produto4 from '../../assets/produto4.png';

export default function HomeScreen() {
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
        <Text style={styles.sectionTitle}>Best Sellers</Text>

        <View style={styles.row}>
          <ProductCard image={produto1} name="Chave em T PTN " description="R$39,90" />
          <ProductCard image={produto2} name="Amortecedor 04" description="49,90" />
        </View>
        <View style={styles.row}>
          <ProductCard image={produto3} name="Paeaf Indep " description="R$39,90" />
          <ProductCard image={produto4} name="Truck Gold " description="R$499,90" />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => console.log('Botão 1')}>
            <Text style={styles.buttonText} >SALE PTN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => console.log('Botão 2')}>
            <Text style={styles.buttonText}>Cadastre-se e obtenha descontos exclusivos!</Text>
        </TouchableOpacity>
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
    marginBottom: 16,
  },
  sectionTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 12,
  color: '#333',
  paddingHorizontal: 8,
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
