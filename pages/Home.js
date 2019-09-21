import React, { Component } from 'react';
import { Button, View, Text, StyleSheet,Image,Alert,TextInput,TouchableHighlight } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import Mybutton from './components/Mybutton';


export default class App extends Component {

  render() {
    return (
      <View style={styles.container} >
        <Image resizeMode='center' style={{width:550, height: 300 }} source={require('./img/67638670_762812224155593_7221336240858071040_n.png')} />
        
        <Mybutton
          title="เข้าสู่ระบบ"
          customClick={() => this.props.navigation.navigate('Login')}
        />

        <Mybutton
          title="สมัครสมาชิก care your heart"
          customClick={() => this.props.navigation.navigate('RegisterO')}
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
    backgroundColor: '#FFCCCC',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});