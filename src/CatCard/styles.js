import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  catCard: {
    borderColor: 'grey',
    borderWidth: 3,
    borderRadius: 10,
  },
  headInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  img: {
    alignSelf: 'center',
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
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
  },
});
