/*Screen to register the user*/
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import ViewAllUser from './ViewAllUser';
var db = openDatabase({ name: 'UserDatabase.db' });
 
export default class Login2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_email: '',
      user_password: '',
    };
  }
 
  Login_user = () => {
    var that = this;
    const { user_email } = this.state;
    const { user_password} = this.state;
    //alert(user_name, user_contact, user_address);
    if (user_email) {
      if (user_password) {
            db.transaction(function(tx) {
              tx.executeSql(
               'INSERT INTO table_user (user_email, user_password) VALUES (?,?)',
               [user_email, user_password],
                (tx, results) => {
                 console.log('Results', results.rowsAffected);
                  if (results.rowsAffected > 0) {
                    Alert.alert(
                      'Success',
                      'You are Registered Successfully',
                      [
                        {
                          text: 'Ok',
                           onPress: () =>
                            that.props.navigation.navigate('HomeScreen'),
                        },
                      ],
                      { cancelable: false }
                    );
                  } else {
                    alert('Registration Failed');
                  }
                }
              );
            });
          } else {
            alert('Please fill Email');
          }
        } else {
          alert('Please fill Password');
        }  
      
  };
 
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="Email"
              onChangeText={user_email => this.setState({ user_email })}
              style={{ padding:10,borderRadius:6}}
            />
            <Mytextinput
              placeholder="password"
              onChangeText={user_password => this.setState({ user_password})}
              maxLength={10}
              keyboardType="numeric"
              style={{ padding:10,borderRadius:6 }}
            />
            <Mybutton
              title="Submit"
              customClick={this.Login_user.bind(this)}
            />
            <Mybutton
          title="ตั้งค่า"
          customClick={() => this.props.navigation.navigate('ViewAll')}
        />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}