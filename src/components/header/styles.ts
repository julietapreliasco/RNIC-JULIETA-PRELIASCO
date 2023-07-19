import {StyleSheet} from 'react-native';
import {isAndroid} from '../../constants/utils';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: 10,
    height: 70,
    backgroundColor: isAndroid ? '#6e6ec9' : 'black',
  },
  mainTitle: {
    padding: 15,
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
  },
});
