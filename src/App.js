import * as React from 'react';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import DetailsScreen from './screens/DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: '# Mapa da Saúde #' }} component={HomeScreen} />
        <Stack.Screen
          name="Map"
          options={({ route }) => ({ title: route.params.category, headerBackTitleVisible: false })}
          component={MapScreen}
        />
        <Stack.Screen
          name="Detail"
          options={({ route }) => ({
            title: route.params.place.nomeFantasia,
            headerBackTitleVisible: false,
          })}
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
