import 'react-native-gesture-handler';

import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { filterCats, showAllCats } from '../actions/catActions';
import { CatCard } from '../CatCard/CatCard';
import { styles } from '../styles';

const renderSeparator = () => (<View style={styles.separator} />);

export const HomeScreen = ({ navigation }) => {
  const visibleCats = useSelector((state) => state.cats.visible);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const getCats = () => {
    setLoading(true);
    try {
      const randomDigit = Math.floor(Math.random() * 10);
      if (randomDigit === 0 || randomDigit === 1) {
        throw 'Error';
      }
    } catch (error) {
      setErr(error);
    }
    const endLoading = () => (setLoading(false));
    setTimeout(endLoading, 1000);
  };

  useEffect(() => getCats(), []);

  const openNewCatScreen = useCallback(() => {
    navigation.navigate('NewCat');
  }, []);

  const openDetailedCatCard = useCallback((item) => {
    navigation.navigate('Details', { catId: item.id });
  }, []);

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
      dispatch(showAllCats());
    } else {
      dispatch(filterCats(searchValue));
    }
  };

  const onChangeText = (text) => {
    setSearchValue(text);
    if (text === '') {
      dispatch(showAllCats());
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
      {err == false && <Text>Error have occured</Text>}
      <Button
        title="Новый котик"
        onPress={() => openNewCatScreen()}
      />
      {loading ? <ActivityIndicator /> : (
        <FlatList
          style={styles.container}
          data={visibleCats}
          renderItem={renderCatItem}
          ItemSeparatorComponent={renderSeparator}
          ListHeaderComponent={renderFlatListHeader}
          ListEmptyComponent={renderListEmptyComponent}
        />
      )}
    </SafeAreaView>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
