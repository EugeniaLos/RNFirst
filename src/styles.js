import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// eslint-disable-next-line import/prefer-default-export
export const styles = StyleSheet.create({
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
  imageContainer: {
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'crimson',
  },
  seperator: {
    borderBottomColor: 'black',
    borderBottomWidth: 10,
  },
});
