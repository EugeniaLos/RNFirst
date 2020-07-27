import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

import { styles } from './styles';

export const CatCard = ({ cat }) => (
  <View style={styles.catCard}>
    <View style={styles.headInfo}>
      <Text style={styles.name}>{cat.name}</Text>
      <Text style={styles.breed}>{cat.breed}</Text>
    </View>
    <View style={styles.divider} />
    <Image source={{ uri: cat.url }} style={styles.img} />
    <Text style={styles.description}>{cat.description}</Text>
  </View>
);

CatCard.propTypes = {
  cat: PropTypes.objectOf(PropTypes.string).isRequired,
};
