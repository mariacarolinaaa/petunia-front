// src/components/ProductCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProductCard({ image, name, description, imageHeight = 120 }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={[styles.image, { height: imageHeight }]} resizeMode="contain" />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    width: '48%',
    marginBottom: 16,
    alignItems: 'center', // centraliza tudo no card
    elevation: 2,
  },
  image: {
    width: '100%',
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
  },
});
