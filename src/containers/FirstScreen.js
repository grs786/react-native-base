import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {CustomText, CustomImage,NoInternet } from '../components'
import * as NetInfo from "@react-native-community/netinfo";
export default class FirstScreen extends React.Component {
  state = {
    isOnceConnected: false,
    allowNoNetInfoDisplay: false,
    error: false,
  };
  
  componentWillMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
        this.setState({
          isOnceConnected: isConnected,
          allowNoNetInfoDisplay: true
        });
    });
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );
  }

  handleConnectivityChange = isConnected => {
    if (!this.state.isOnceConnected && isConnected) {
      this.setState({ isOnceConnected: true });
    }
  };
  render() {
    const {
      navigation: {navigate},
    } = this.props;
    const {isOnceConnected,allowNoNetInfoDisplay } = this.state;
    if (!isOnceConnected && allowNoNetInfoDisplay) return <NoInternet />;
    return (
      <View style={styles.container}>
        <CustomText text={'First Screen'} textStyle="customTextStyle" ></CustomText>
        <CustomImage imageStyle={'blankImageStyle'}/>
        <Button
          style={styles.buttonStyle}
          title={'Next'}
          onPress={()=>navigate('SecondScreen')}
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
    backgroundColor:'white'
  },
  buttonStyle: {
    backgroundColor: 'green',
    marginTop: 5,
    width: '50%',
    borderRadius: 8,
  },
});
