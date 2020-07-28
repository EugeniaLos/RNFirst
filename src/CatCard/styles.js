import { StyleSheet } from 'react-native';

import { GREY } from '../colors';

export const styles = StyleSheet.create({
  catCard: {
    borderColor: GREY,
    borderWidth: 3,
    borderRadius: 10,
  },
  headInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 15,
    marginHorizontal: 5,
  },
  img: {
    alignSelf: 'center',
    width: 320,
    height: 236,
  },
  name: {
    fontWeight: '600',
    fontSize: 20,
  },
  breed: {
    fontSize: 20,
  },
  description: {
    fontSize: 20,
    paddingTop: 15,
  },
  divider: {
    borderBottomColor: GREY,
    borderBottomWidth: 1,
    marginHorizontal: 30,
    marginBottom: 15,
  },
});
