import React, { useEffect, useState } from 'react';
import styles from './styles';
import { View, Image, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import api from '../../services/api';
import pino from '../../images/pino.png';

const MapScreen = ({ navigation, route }) => {
  const { userPosition, category } = route.params;

  const { latitude, longitude } = userPosition;
  const [data, setData] = useState([]);
  const raio = 30; //km

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get(
          `rest/estabelecimentos/latitude/${latitude}/longitude/${longitude}/raio/${raio}?categoria=${category}`,
        );

        setData(data);
      } catch (error) {
        alert(error.message);
      }
    };

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        region={{ ...userPosition, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
        showsUserLocation
        style={styles.mapStyle}
      >
        <Marker title="Minha posição" pinColor="green" coordinate={userPosition}></Marker>

        {data.map((place) => {
          return (
            <Marker
              onPress={() => navigation.navigate('Detail', { place: place })}
              image={pino}
              coordinate={{ latitude: place.lat, longitude: place.long }}
              title={place.nomeFantasia}
              description={place.turnoAtendimento}
            />
          );
        })}
      </MapView>
    </View>
  );
};

export default MapScreen;
