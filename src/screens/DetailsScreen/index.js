import React from 'react';
import styles from './styles';
import { View, Image, Text } from 'react-native';

const DetailsScreen = ({ navigatiom, route }) => {
  const { place } = route.params;
  const { nomeFantasia, descricaoCompleta, logradouro, numero, telefone } = place;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome Fantasia</Text>
      <Text style={styles.content}>{nomeFantasia}</Text>

      <Text style={styles.title}>Endereço</Text>
      <Text style={styles.content}>{`${logradouro}, ${numero}`}</Text>

      <Text style={styles.title}>Telefone</Text>
      <Text style={styles.content}>{telefone}</Text>

      <Text style={styles.title}>Descricao Completa</Text>
      <Text style={styles.content}>{descricaoCompleta}</Text>
    </View>
  );
};

export default DetailsScreen;
