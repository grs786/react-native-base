import React from 'react';
import { View,StyleSheet } from 'react-native';
import {CustomImage,CustomText} from '../../components';
const illustration = require('../../assets/images/no_internet.png')

export default NoInternet = () => <View style={styles.center}>
        <CustomImage source={illustration} imageStyle="noInternet" />
        <CustomText text={'Make sure your internet connection is connected.'} textStyle="noInternetText" />
</View>

const styles = StyleSheet.create({
    center: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
    },
})

