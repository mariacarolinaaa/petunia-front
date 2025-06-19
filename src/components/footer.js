import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function Footer() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#111',
      }}
    >
      
      <TouchableOpacity onPress={() => navigation.navigate('Drawer', { screen: 'Home' })}>
        <Ionicons name="home-outline" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log('Notificações')}>
        <Ionicons name="notifications-outline" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log('Carrinho')}>
        <Ionicons name="cart-outline" size={24} color="#fff" />
      </TouchableOpacity>

      
      <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
        <Feather name="user" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
