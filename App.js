import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';



import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/pages/HomeScreen'; 
import NovidadesScreen from './src/pages/NovidadesScreen';
import SobreScreen from './src/pages/SobreScreen';
import ContatoScreen from './src/pages/ContatoScreen';
import TrucksScreen from './src/pages/TrucksScreen';
import ParafusosScreen from './src/pages/ParafusosScreen';
import AmortecedoresScreen from './src/pages/AmortecedoresScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" className="drawer"  screenOptions={{ headerShown: false }} >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Novidades" component={NovidadesScreen} />
        <Drawer.Screen name="Sobre" component={SobreScreen} />
        <Drawer.Screen name="Contato" component={ContatoScreen} />
        <Drawer.Screen name="Trucks" component={TrucksScreen} />
        <Drawer.Screen name="Amortecedores" component={AmortecedoresScreen} />
        <Drawer.Screen name="Parafusos" component={ParafusosScreen} />

        {/* //aqui vão as telas q forem criadas */}
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'center',
  },
});
