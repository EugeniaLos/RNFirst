import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import { AppearAnim } from './src/AppearAnim';
import { styles } from './src/styles';
import { TodoItems } from './src/TodoItems';

export const App = () => (
  <SafeAreaView>
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Заголовок</Text>
        <AppearAnim style={styles.imageContainer}>
          <Image source={require('./image.png')} />
        </AppearAnim>
      </View>
      <TodoItems />
    </View>
  </SafeAreaView>
);
