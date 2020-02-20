import {StyleSheet } from 'react-native';
import { wp, hp } from '../../helper/index'

const styles = StyleSheet.create({
    blankImageStyle: {
    height:hp(10),
    width: wp(20)
  },
  noInternet: {
    height:hp(25),
    width: wp(100),
    resizeMode:'contain'
  }
})

export default styles;