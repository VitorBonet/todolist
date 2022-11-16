import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#262626',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  name: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 14,
    marginLeft: 16,
    marginRight: 16,
  },
  nameConcluded: {
    flex: 1,
    color: '#808080',
    fontSize: 14,
    marginLeft: 16,
    marginRight: 16,
    textDecorationLine: 'line-through',
  },
  buttonText: {
    color: '#F2F2F2',
    fontSize: 24,
  },
  button: {
    height: 56,
    justifyContent: 'center',
  }
});