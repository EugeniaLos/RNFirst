import React, { useRef, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Animated,
  FlatList,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const ImageAnim = (props) => {
  const imageAnim = useRef(new Animated.Value(0)).current

  React.useEffect(() => {
    Animated.timing(
      imageAnim, {
        toValue: 1,
        duration: 50000,
      }
    ).start()

  }, [])

  return (
    <Animated.View style={{...props.style,
    opacity: imageAnim}}>
      {props.children}
    </Animated.View>
  )
}

const TodoItems = () => {
  return (
    <View style={styles.sectionContainer}>
      <FlatList
        data={[
          {key: 'Cleaning'},
          {key: 'Studying'},
          {key: 'Read 40 pg of the Book'},
          {key: 'Go for a walk with doggo'},
          {key: 'Call mum'},
          {key: 'Make dinner'},
          {key: 'Exercise'},

        ]}
        renderItem={({item}) => <Text style={styles.highlight}>{item.key}</Text>}
      />
    </View>
  );
}

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
      
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Заголовок</Text>
              <ImageAnim style={{alignItems: 'center'}}>
                <Image source={require('./image.png')} />
              </ImageAnim>

            </View>
            <TodoItems/>
          </View>
        
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontSize: 24,
  },
});

export default App;
