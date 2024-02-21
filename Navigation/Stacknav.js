import React from 'react';
import { StyleSheet } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import Login from './Login';
import Signup from './Signup';
import Slider from './Slider';
import Verifyemail from './Verify email';


    const Stack = createStackNavigator();

  export default function Stacknav() {
  return (
  
 <Stack.Navigator
 screenOptions={{
  tabBarActiveTintColor:"#8E3FFF",
  headerShown:false,
  
}}>
    
 <Stack.Screen name="slider" component={Slider}/>

 <Stack.Screen name="signup" component={Signup}/>

 <Stack.Screen name="login" component={Login}/>
 
 <Stack.Screen name="verify" component={Verifyemail}/>
 



</Stack.Navigator>


    
   
  )
}