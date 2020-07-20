/* eslint-disable import/no-unresolved */
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

export const App = () => (
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

renderToDoItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};
