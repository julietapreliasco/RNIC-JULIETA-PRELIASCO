import {StyleSheet} from 'react-native';
import {isAndroid} from '../../constants/utils';

export const styles = StyleSheet.create({
  completedTask: {
    margin: 12,
    padding: 20,
    backgroundColor: isAndroid ? '#68e39e' : '#0f5729',
    borderRadius: 15,
  },
  uncompletedTask: {
    margin: 12,
    padding: 20,
    backgroundColor: isAndroid ? '#f9cbae' : '#e84596',
    borderRadius: 15,
  },
  title: {
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: '600',
    color: isAndroid ? '#283039' : 'white',
    fontFamily: 'Lato-Bold',
  },
  description: {
    color: isAndroid ? '#283039' : 'white',
    fontFamily: 'Lato-Regular',
    fontSize: 17,
  },
  state: {
    marginTop: 15,
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: isAndroid ? '#444044' : 'white',
    textAlign: 'right',
    color: isAndroid ? 'black' : 'white',
    fontFamily: 'Lato-Bold',
  },
});
