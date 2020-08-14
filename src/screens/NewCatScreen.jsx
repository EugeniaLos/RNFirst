import React, { useState } from 'react';
import {
  Alert,
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { addNewCat } from '../actions/catActions';
import { styles } from '../styles';

export const NewCatScreen = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [description, setDescription] = useState('');
  const [additional, setAdditional] = useState('');
  const [age, setAge] = useState('');

  const handlePress = () => {
    dispatch(addNewCat(name, breed, age, description, additional));
    return (Alert.alert(
      'Добавлена запись о новом котике',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.highlight}>Введите данные о котике</Text>
      <View style={styles.inputUnit}>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <Text style={styles.label}>Имя</Text>
      </View>
      <View style={styles.inputUnit}>
        <TextInput
          value={breed}
          onChangeText={(text) => setBreed(text)}
          style={styles.input}
        />
        <Text style={styles.label}>Порода</Text>
      </View>
      <View style={styles.inputUnit}>
        <TextInput
          value={age}
          onChangeText={(text) => setAge(text)}
          style={styles.input}
        />
        <Text style={styles.label}>Возраст</Text>
      </View>
      <View style={styles.inputUnit}>
        <TextInput
          value={description}
          onChangeText={(text) => setDescription(text)}
          style={styles.input}
        />
        <Text style={styles.label}>Описание</Text>
      </View>
      <View style={styles.inputUnit}>
        <TextInput
          value={additional}
          onChangeText={(text) => setAdditional(text)}
          style={styles.input}
        />
        <Text style={styles.label}>Дополнительные сведения</Text>
      </View>
      <Button
        title="Добавить запись"
        onPress={handlePress}
      />
    </View>
  );
};
