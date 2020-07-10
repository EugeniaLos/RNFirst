import React from 'react';
import {
    View,
    Text,
    FlatList,
  } from 'react-native';
import { styles } from './styles.js';

const items = [
    {key: 'Cleaning'},
    {key: 'Studying'},
    {key: 'Read 40 pg of the Book'},
    {key: 'Go for a walk with doggo'},
    {key: 'Call mum'},
    {key: 'Make dinner'},
    {key: 'Exercise'},
  ];

export const TodoItems = () => {
    return (
      <View style={styles.sectionContainer}>
        <FlatList
          data={items}
          renderItem={({item}) => <Text style={styles.highlight}>{item.key}</Text>}
        />
      </View>
    );
}