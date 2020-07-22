/* eslint-disable import/no-unresolved */
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { AppearAnim } from './src/AppearAnim';
import { CatCard } from './src/CatCard/CatCard';
import { DetailedCatCard } from './src/DetailedCatCard/DetailedCatCard';
import { styles } from './src/styles';
import { TodoItems } from './src/TodoItems';

const items = [
  {
    id: 1,
    name: 'Snowball',
    breed: 'Angora',
    description: 'very informative text',
  },
  {
    id: 2,
    name: 'Prince',
    breed: 'Persian',
    description: 'very informative text',
  },
];

const renderCatItem = ({ item }, navigation) => (
  <TouchableOpacity onPress={() => (navigation.navigate('Details', { catId: item.id }))}>
    <CatCard cat={item} />
  </TouchableOpacity>
);
const renderSeparator = () => (<View style={styles.separator} />);

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={items}
        renderItem={(item) => renderCatItem(item, navigation)}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
}

function DetailsScreen({ route }) {
  const { catId } = route.params;
  return (
    <DetailedCatCard id={catId} />
  );
}

export const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

renderCatItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};
