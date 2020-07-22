import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

import { CatCard } from './src/CatCard/CatCard';
import { catItems } from './src/data/catItems';
import { DetailedCatCard } from './src/DetailedCatCard/DetailedCatCard';
import { styles } from './src/styles';

const renderCatItem = ({ item }, navigation) => (
  <TouchableOpacity onPress={() => (navigation.navigate('Details', { catId: item.id }))}>
    <CatCard cat={item} />
  </TouchableOpacity>
);
const renderSeparator = () => (<View style={styles.separator} />);

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={catItems}
        renderItem={(item) => renderCatItem(item, navigation)}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
}

function DetailsScreen({ route }) {
  const { catId } = route.params;
  return (
    <DetailedCatCard id={catId} />
  );
}

export const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

renderCatItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};
