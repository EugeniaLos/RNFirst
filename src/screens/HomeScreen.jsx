import 'react-native-gesture-handler';

import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { CatCard } from '../CatCard/CatCard';
import { cats } from '../data/cats';
import { styles } from '../styles';

const renderSeparator = () => (<View style={styles.separator} />);

export const HomeScreen = ({ navigation }) => {
  const [visibleCats, setVisibleCats] = useState(cats);
  const [searchValue, setSearchValue] = useState('');

  const openDetailedCatCard = useCallback((item) => (navigation.navigate('Details', { catId: item.id })), []);

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

  const changeCats = () => {
    if (searchValue === '') {
      setVisibleCats(cats);
    } else {
      setVisibleCats(cats.filter((cat) => cat.name === searchValue));
    }
  };
  const onChangeText = (text) => {
    setSearchValue(text);
    if (text === '') {
      setVisibleCats(cats);
    }
  };

  const renderFlatListHeader = () => (
    <View style={styles.header}>
      <TextInput
        value={searchValue}
        onChangeText={(text) => onChangeText(text)}
        style={styles.textInput}
      />
      <Button
        title="Поиск"
        onPress={changeCats}
      />
    </View>
  );

  const renderListEmptyComponent = () => (
    <Text>Упс, нет котиков, которые удовлетворяют вашему поисковому запросу</Text>
  );

  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={visibleCats}
        renderItem={renderCatItem}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderFlatListHeader}
        ListEmptyComponent={renderListEmptyComponent}
      />
    </SafeAreaView>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
