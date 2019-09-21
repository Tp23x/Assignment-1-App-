import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { View ,Switch } from 'react-native'
import { Alert,StyleSheet, Text, Button} from 'react-native';


export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2019-08-17"}
  }


  _onPressButton() {
    Alert.alert(
      'หยุดการรับนักเรียน',
      'เรียบร้อย!',
      [
        {
          text: 'Ok',
          onPress1: () =>
          that.props.navigation.navigate('Parent'),
        }
      ],
      { cancelable: false }
    );
  }

  state = {switchValue:false}
  toggleSwitch = (value) => {
      //onValueChange of the switch this function will be called
      this.setState({switchValue: value})
      //state changes according to switch
      //which will result in re-render the text
   }
 
  render(){
    return (
      <View style={styles.container}>
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2100-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
      <View style={{backgroundColor: '#AAEBAA' , width : 200, height:60,borderRadius: 10,margin: 90}}>
        <Text style={{ fontSize: 15}}> หยุดการรับจากบ้าน 
            <Switch
                //style={{margin:1}}
                onValueChange = {this.toggleSwitch}
                value = {this.state.switchValue}/>
        </Text>
       </View>         
        <Button		 
              onPress={this._onPressButton}
              title="ยืนยัน"
              color='blue'
        />
          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C8FAC8',
  },
})