import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

import { styles } from './styles';

export const DetailedCatCard = ({ catId }) => (
  <View style={styles.detailedCard}>
    <View style={styles.headInfo}>
      <Text style={styles.name}>{catId}</Text>
      <Text style={styles.breed}>cat.breed</Text>
    </View>
    <View style={styles.divider} />
    <Image source={require('../catImg/angora.png')} style={styles.img} />
    <Text style={styles.breed}>cat.age</Text>
    <Text style={styles.description}>cat.Bigdescription</Text>
  </View>
);

DetailedCatCard.propTypes = {
  cat: PropTypes.objectOf(PropTypes.string).isRequired,
};
