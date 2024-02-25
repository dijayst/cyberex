

import React from 'react';
import { StyleSheet } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import Home from '../Bottomtabnav/Home';


    const Stack = createStackNavigator();

  export default function Bottomtabstack() {
  return (

    <Stack.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#8E3FFF",
        headerShown: false,

      }}>

      <Stack.Screen name="btc" component={Bottomtabstack} />
      
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>


    
   
  )
}