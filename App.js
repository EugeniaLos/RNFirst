import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
} from 'react-native';
import { AppearAnim } from './src/AppearAnim.jsx';
import { TodoItems} from './src/TodoItems';
import { styles } from './src/styles';

export const App: () => React$Node = () => {
  return (
      <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Заголовок</Text>
              <AppearAnim style={styles.imageContainer}>
                <Image source={require('./image.png')} />
              </AppearAnim>
            </View>
            <TodoItems/>
          </View>
      </SafeAreaView>
  );
};