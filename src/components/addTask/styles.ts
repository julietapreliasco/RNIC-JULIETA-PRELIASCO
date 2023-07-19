import {StyleSheet} from 'react-native';
import {isAndroid} from '../../constants/utils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  addTask: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: '700',
  },
  input: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: isAndroid ? '#6e6ec9' : 'black',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});
