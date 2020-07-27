import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

import { cats } from '../data/cats';
import { styles } from './styles';

export const DetailedCatCard = ({ id }) => {
  const findCat = () => cats.find((item) => item.id === id);
  const cat = findCat();
  return (
    <View style={styles.detailedCard}>
      <View style={styles.headInfo}>
        <Text style={styles.name}>{cat.name}</Text>
        <Text style={styles.breed}>{cat.breed}</Text>
      </View>
      <View style={styles.divider} />
      <Image source={{ uri: cat.url }} style={styles.img} />
      <Text style={styles.breed}>{cat.age}</Text>
      <Text style={styles.description}>{cat.description}</Text>
      <Text style={styles.description}>{cat.randomFact}</Text>
    </View>
  );
};

DetailedCatCard.propTypes = {
  id: PropTypes.objectOf(PropTypes.number).isRequired,
};
