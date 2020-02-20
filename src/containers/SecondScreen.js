import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

export default class SecondScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> This is Second Screen </Text>
        <Button style={styles.buttonStyle} title={'Next'} />
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
