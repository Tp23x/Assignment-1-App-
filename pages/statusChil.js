import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, Text, TouchableHighlight, TextInput, View ,Image,Button} from 'react-native';
import Mybutton from './components/Mybutton';

export default class Parent extends Component {

    _onPressButton() {
        Alert.alert('ลูกของคุณเดินทางถึงโรงเรียนแล้ว เวลา 07:30')
      }
    render() {
      return (

        <View >
          <Image  style={{width:80, height: 100 }} source={require('./img/67638670_762812224155593_7221336240858071040_n.png')} />
          <Text style={styles.welcome}>สถานะ: รถกำลังเคลื่อนที่</Text>
          <Image  style={styles.container} 
               source={require('./img/68381865_1324185627738251_6431566629288542208_n.jpg')} />
          <Text style={styles.welcome}>สถานะเด็ก: เด็กอยู่ในรถ</Text>
          <Text style={styles.welcome}>อุณหภูมิ: 26 องศา </Text>

          <Button		 
            onPress={this._onPressButton}
            title="ยืนยัน"
            color='blue'
        />
         
        </View>
  
      );
    }
  };
  
  
  const styles = StyleSheet.create({
    container: {
      //flex: 1,
      alignItems: 'center',
      width:150,
      height: 200 ,
      //paddingTop: 30,
      marginLeft:110,
      justifyContent: 'center',
      backgroundColor: '#FFCCCC'
    },
    welcome: {
      fontSize: 15,
      textAlign: 'center',
      margin: 10,
    },
    button: {
      marginBottom: 20,
      width: 100,
      height:30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FF9999',
      borderRadius:10
    },
    
    input: {
      margin: 8,
      height: 40,
      width: 260,
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius:6
    },
  });