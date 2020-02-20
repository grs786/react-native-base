import React from 'react';
import {View, StyleSheet,TouchableOpacity,SafeAreaView} from 'react-native';
import {CustomText, CustomImage,NoInternet } from '../components'
import * as NetInfo from "@react-native-community/netinfo";
export default class FirstScreen extends React.Component {
  
  state = {
    isOnceConnected: false,
    allowNoNetInfoDisplay: false,
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
      <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        
        <View style={styles.subContainer}>
        <CustomImage imageStyle={'blankImageStyle'}/>
        <CustomText text={'simarrajput12'} textStyle="customTextStyle" ></CustomText>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={()=>navigate('SecondScreen')}
        ><CustomText text={'Next'} textStyle="customTextStyle" ></CustomText>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

  safeAreaView: {
    flex:1,
    backgroundColor:'white'
  },
  container: {
    flex: 1,
    backgroundColor:'white',
    marginTop:10
  },
  subContainer: {
    flex:1,
    alignItems:'flex-end',
    marginRight:20
  },
  buttonStyle: {
    backgroundColor: 'green',
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
    height:50,
    bottom:0,
    position:'absolute',
  },
});
