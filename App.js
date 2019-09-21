/*Example of SQLite Database in React Native*/
import React from 'react';
//For React Navigation Version 2+
//import {createStackNavigator} from 'react-navigation';
//For React Navigation Version 3+
import {createStackNavigator,createAppContainer} from 'react-navigation';
//import home from './App copy';
import HomeScreen from './pages/HomeScreen';
import Home from './pages/Home';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';
import Login from './pages/Login';
import Parent from './pages/Parent';
import Tellteacher from './pages/Tellteacher';
import Telldriver from './pages/Telldriver';
import statusChil from './pages/statusChil';
import Login2 from './pages/Login2';
import RegisterO from './pages/RegisterO';
import Stoptravel from './pages/Stoptravel';


const App = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Care Your Heart',
      headerStyle: { backgroundColor: '#FFCCCC' },
      headerTintColor: '#ffffff',
    },
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'ตั้งค่าระบบ',
      headerStyle: { backgroundColor: '#FFCCCC' },
      headerTintColor: '#ffffff',
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Care Your Heart',
      headerStyle: { backgroundColor: '#FFCCCC' },
      headerTintColor: '#ffffff',
    },
  },
  Login2: {
    screen: Login2,
    navigationOptions: {
      title: 'Care Your Heart',
      headerStyle: { backgroundColor: '#FFCCCC' },
      headerTintColor: '#ffffff',
    },
  },
  Parent: {
    screen: Parent,
    navigationOptions: {
      title: 'ผู้ปกครอง',
      headerStyle: { backgroundColor: '#FFCCCC' },
      headerTintColor: '#ffffff',
    },
  },
  Tellteacher: {
    screen: Tellteacher,
    navigationOptions: {
      title: 'ติดต่อครูประจำรถ',
      headerStyle: { backgroundColor: '#FFCC99' },
      headerTintColor: '#ffffff',
    },
  },
  Telldriver: {
    screen: Telldriver,
    navigationOptions: {
      title: 'ติดต่อคนขับรถ',
      headerStyle: { backgroundColor: '#A0AFFF' },
      headerTintColor: '#ffffff',
    },
  },
  statusChil: {
    screen: statusChil,
    navigationOptions: {
      title: 'สถานะนักเรียน',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Stoptravel: {
    screen: Stoptravel,
    navigationOptions: {
      title: 'แจ้งหยุดการรับส่ง',
      headerStyle: { backgroundColor: '#C8FAC8' },
      headerTintColor: '#000000',
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'View User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'View All User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Update User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  RegisterO: {
    screen: RegisterO,
    navigationOptions: {
      title: 'สมัครสมาชิก',
      headerStyle: { backgroundColor: '#FFCCCC' },
      headerTintColor: '#ffffff',
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'Delete User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
});
//For React Navigation Version 2+
//export default App;
//For React Navigation Version 3+
export default createAppContainer(App);