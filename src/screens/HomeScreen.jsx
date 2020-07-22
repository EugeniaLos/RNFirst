import 'react-native-gesture-handler';

import PropTypes from 'prop-types';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

import { CatCard } from '../CatCard/CatCard';
import { catItems } from '../data/catItems';
import { styles } from '../styles';

const renderSeparator = () => (<View style={styles.separator} />);

const renderCatItem = ({ item }, navigation) => (
  <TouchableOpacity onPress={() => (navigation.navigate('Details', { catId: item.id }))}>
    <CatCard cat={item} />
  </TouchableOpacity>
);

export const HomeScreen = ({ navigation }) => (
  <SafeAreaView>
    <FlatList
      style={styles.container}
      data={catItems}
      renderItem={(item) => renderCatItem(item, navigation)}
      ItemSeparatorComponent={renderSeparator}
    />
  </SafeAreaView>
);

renderCatItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};
