import React from 'react';
import { Text, I18nManager } from 'react-native';
import { string, oneOfType, number, arrayOf, node } from 'prop-types';
import styles from './customText.styles';
// import { createPureComponent } from '../createPureComponent'

const CustomText = ({
  text, textStyle, count, children,
}) => (
  <Text 
    style={[
      styles[textStyle], 
      { writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' },
      { textAlignVertical: 'center' }
    ]} 
    numberOfLines={count}
  >
    {text}
    {children}
  </Text>
);


export default CustomText;

CustomText.propTypes = {
  text: oneOfType([
    number,
    string,
  ]),
  children: oneOfType([
    arrayOf(node),
    node,
  ]),
  textStyle: string,
  count: number,
};

CustomText.defaultProps = {
  text: '',
  children: [],
  textStyle: '',
  count: 0,
  
};
