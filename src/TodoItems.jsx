import React from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import { styles } from './styles';

const items = [
  { key: 'Cleaning' },
  { key: 'Studying' },
  { key: 'Read 40 pg of the Book' },
  { key: 'Go for a walk with doggo' },
  { key: 'Call mum' },
  { key: 'Make dinner' },
  { key: 'Exercise' },
];

const renderToDoItem = ({ item }) => (<Text style={styles.highlight}>{item.key}</Text>);

// eslint-disable-next-line import/prefer-default-export
export const TodoItems = () => (
  <View style={styles.sectionContainer}>
    <FlatList
      data={items}
      renderItem={renderToDoItem}
    />
  </View>
);
