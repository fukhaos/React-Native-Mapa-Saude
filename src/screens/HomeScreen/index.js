import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import logo from '../../images/logo.png';

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [message, setMessage] = useState('Carregando...');

  useEffect(() => {
    const getPosition = async () => {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        //não liberou
        setMessage('Cliente não autorizou o uso da geolocalização');
        return;
      }

      //tem acesso
      const location = await Location.getCurrentPositionAsync();
      setMessage('');
      setLocation(location.coords);
    };

    getPosition();
  }, []);

  const callHospital = () => {
    navigation.navigate('Map', { userPosition: location, category: 'HOSPITAL' });
  };

  const callPost = () => {
    navigation.navigate('Map', { userPosition: location, category: 'POSTO DE SAÚDE' });
  };

  const callSamu = () => {
    navigation.navigate('Map', { userPosition: location, category: 'SAMU' });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo}></Image>
      <Text style={styles.title}>MAPA DA SAÚDE</Text>
      <Text>{message}</Text>

      {location && (
        <>
          <TouchableOpacity onPress={callHospital} style={styles.button}>
            <Text>Procurar Hospitais</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={callPost} style={styles.button}>
            <Text>Procurar Postos de Sáude</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={callSamu} style={styles.button}>
            <Text>Procurar Samu</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default HomeScreen;
