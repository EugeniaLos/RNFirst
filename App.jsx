import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import catReducer from './src/reducers/catReducer';
import { DetailsScreen } from './src/screens/DetailsScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { NewCatScreen } from './src/screens/NewCatScreen';

const store = createStore(catReducer);
const Stack = createStackNavigator();

export const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="NewCat" component={NewCatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);
