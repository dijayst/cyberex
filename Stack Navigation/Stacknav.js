import React from 'react';
import { StyleSheet } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import Login from './Login';
import Signup from './Signup';
import Slider from './Slider';
import Verifyemail from './Verify email';
import Password from './Password';
import Paymentpin from './Paymentpin';
import Welcomebackscreen from './Welcomebackscreen';
import Forgotpassword from './Forgotpassword';
import Entercode from './Entercode';
import Changepassword from './Changepassword';
import Home from '../Bottomtabnav/Home';


    const Stack = createStackNavigator();

  export default function Stacknav() {
  return (

    <Stack.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#8E3FFF",
        headerShown: false,

      }}>

      <Stack.Screen name="slider" component={Slider} />

      <Stack.Screen name="signup" component={Signup} />

      <Stack.Screen name="login" component={Login} />

      <Stack.Screen name="verify" component={Verifyemail} />

      <Stack.Screen name="password" component={Password} />

      <Stack.Screen name="paymentpin" component={Paymentpin} />

      <Stack.Screen name="welcome" component={Welcomebackscreen} />

      <Stack.Screen name="forgot" component={Forgotpassword} />

      <Stack.Screen name="enter" component={Entercode} />
      <Stack.Screen name="change" component={Changepassword} />

      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>


    
   
  )
}