// src/components/ProductCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ image, name, description }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
  },
  name: {
    alignItems: 'center',
    display: 'flex',
    fontSize: 16,
    marginTop: 8,
    marginHorizontal: 8,
  },
  description: {
    fontWeight: 'bold',
    alignItems: 'center',
    display: 'flex',
    fontSize: 14,
    color: '#555',
    marginHorizontal: 8,
    marginBottom: 8,
  },
});

export default ProductCard;
