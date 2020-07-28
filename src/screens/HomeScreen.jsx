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
import { cats } from '../data/cats';
import { styles } from '../styles';

export const HomeScreen = ({ navigation }) => {
  const openDetailedCatCard = (item) => (navigation.navigate('Details', { catId: item.id }));

  const renderCatItem = ({ item }) => (
    <TouchableOpacity onPress={() => openDetailedCatCard(item)}>
      <CatCard cat={item} />
    </TouchableOpacity>
  );

  renderCatItem.propTypes = {
    item: PropTypes.objectOf(PropTypes.string).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  const renderSeparator = () => (<View style={styles.separator} />);

  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={cats}
        renderItem={renderCatItem}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
