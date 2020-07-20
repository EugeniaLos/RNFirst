/* eslint-disable import/no-unresolved */
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import { AppearAnim } from './src/AppearAnim';
import { CatCard } from './src/CatCard/CatCard';
import { styles } from './src/styles';
import { TodoItems } from './src/TodoItems';

const items = [
  {
    name: 'Snowball',
    breed: 'Angora',
    description: 'very informative text',
  },
  {
    name: 'Prince',
    breed: 'Persian',
    description: 'very informative text',
  },
];

const renderToDoItem = ({ item }) => (<CatCard cat={item} />);

const renderSeparator = () => (<View style={styles.separator} />);

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={items}
          renderItem={renderToDoItem}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </SafeAreaView>
  );
}

export const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="AllCats" component={HomeScreen} />

    </Stack.Navigator>
  </NavigationContainer>
);

renderToDoItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};
