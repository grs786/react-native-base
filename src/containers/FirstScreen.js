import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

export default class FirstScreen extends React.Component {
  render() {
    const {
      navigation: {navigate},
    } = this.props;
    return (
      <View style={styles.container}>
        <Text> This is First Screen </Text>
        <Button
          style={styles.buttonStyle}
          title={'Next'}
          onPress={navigate('SecondScreen')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: 'green',
    marginTop: 5,
    width: '50%',
    borderRadius: 8,
  },
});
