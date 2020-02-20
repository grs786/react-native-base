import React from 'react';
import { Image } from 'react-native';
import { string, oneOfType, number, shape } from 'prop-types';
import styles from './customImage.styles';

const uri = require('../../assets/images/placeholder/placeholder.png');

const CustomImage = ({ source, imageStyle, resizeMode }) => {
//   if (source.uri === '') {
//     source = require('../../assets/images/placeholder/placeholder.png')
//   }
  return (
    <Image
      resizeMode={resizeMode}
      source={source}
      style={styles[imageStyle]}
      defaultSource={uri}
    />
  )
};

export default CustomImage;

CustomImage.propTypes = {
  source: oneOfType([number, string, shape({})]),
  imageStyle: string,
  contain: string,
};
