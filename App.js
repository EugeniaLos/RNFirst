import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
} from 'react-native';
import { AppearAnim } from './src/AppearAnim.js';
import { TodoItems} from './src/TodoItems.js';
import { styles } from './src/styles.js';

export const App: () => React$Node = () => {
  return (
      <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Заголовок</Text>
              <AppearAnim style={{alignItems: 'center'}}>
                <Image source={require('./image.png')} />
              </AppearAnim>
            </View>
            <TodoItems/>
          </View>
      </SafeAreaView>
  );
};