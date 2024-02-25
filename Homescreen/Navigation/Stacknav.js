import React from 'react';
import { StyleSheet } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import Login from '../Signin/Login';
import Signup from '../Signin/Signup';
import Slider from '../Landingpage/Slider';
import Verifyemail from '../Signin/Verify email';
import Password from '../Signin/Password';
import Paymentpin from '../Signin/Paymentpin';
import Welcomebackscreen from '../Signin/Welcomebackscreen';
import Forgotpassword from '../Signin/Forgotpassword';
import Entercode from '../Signin/Entercode';
import Changepassword from '../Signin/Changepassword';
import Home from '../Nairacct/Home';
import Bitcoinacct from '../BTCacct/Bitcoinacct';
import Bitcointransactiondetails from '../BTCacct/Bitcointransactiondetails';
import Nairatransactiondetails from '../Nairacct/Nairatransactiondetails';


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
      
      <Stack.Screen name="btc" component={Bitcoinacct} />
      
      <Stack.Screen name="btctrans" component={Bitcointransactiondetails} />
      
      <Stack.Screen name="nairatrans" component={Nairatransactiondetails} />
      
      
    </Stack.Navigator>


    
   
  )
}