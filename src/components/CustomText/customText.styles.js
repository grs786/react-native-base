// import EStyleSheet from 'react-native-extended-stylesheet';
import { moderateScale, wp, hp } from '../../helper/index'
import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  customTextStyle: {
    textAlign: 'center',
    fontSize: moderateScale(15),
    color: 'black',
  },
  noInternetText: {
    textAlign: 'center',
    fontSize: moderateScale(16),
    color: 'red',
  },
 
});

export default styles;