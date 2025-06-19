
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';


import HomeScreen from './src/pages/HomeScreen';
import NovidadesScreen from './src/pages/NovidadesScreen';
import SobreScreen from './src/pages/SobreScreen';
import ContatoScreen from './src/pages/ContatoScreen';


import TrucksScreen from './src/pages/TrucksScreen';
import RodasScreen from './src/pages/RodasScreen';
import ShapesScreen from './src/pages/ProductScreen';
import LixasScreen from './src/pages/LixasScreen';
import RolamentosScreen from './src/pages/RolamentosScreen';
import AmortecedoresScreen from './src/pages/AmortecedoresScreen';
import ParafusosScreen from './src/pages/ParafusosScreen';
import ChavesScreen from './src/pages/ChavesScreen';


import PerfilScreen from './src/pages/PerfilScreen';
import DadosPessoaisScreen from './src/pages/DadosPessoaisScreen';
import AlterarEmailScreen from './src/pages/AlterarEmailScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#aaa',
        drawerStyle: { backgroundColor: '#111' },
        drawerLabelStyle: { marginLeft: -10, fontSize: 15 },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Novidades"
        component={NovidadesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="new-releases" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sobre"
        component={SobreScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="info" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contato"
        component={ContatoScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="mail" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="SeparadorProdutos"
        component={() => null}
        options={{
          drawerLabel: '—— Produtos ——',
          drawerItemStyle: { backgroundColor: '#111' },
          drawerLabelStyle: {
            color: '#888',
            fontWeight: 'bold',
            fontSize: 13,
          },
          headerShown: false,
        }}
      />

      <Drawer.Screen name="Trucks" component={TrucksScreen} />
      <Drawer.Screen name="Rodas" component={RodasScreen} />
      <Drawer.Screen name="Shapes" component={ShapesScreen} />
      <Drawer.Screen name="Lixas" component={LixasScreen} />
      <Drawer.Screen name="Rolamentos" component={RolamentosScreen} />
      <Drawer.Screen name="Amortecedores" component={AmortecedoresScreen} />
      <Drawer.Screen name="Parafusos" component={ParafusosScreen} />
      <Drawer.Screen name="Chaves" component={ChavesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Drawer" component={DrawerRoutes} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
        <Stack.Screen name="DadosPessoais" component={DadosPessoaisScreen} />
        <Stack.Screen name="AlterarEmail" component={AlterarEmailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
