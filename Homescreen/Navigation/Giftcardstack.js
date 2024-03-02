import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import Giftcard from '../Bottomtabnav/GiftCard/Giftcard';
import Tradegiftcard from '../Bottomtabnav/GiftCard/Tradegiftcard';
import CyberExbot from '../Bottomtabnav/GiftCard/CyberExbot';


const Stack = createStackNavigator();

export default function Giftcardstack() {
  return (
   
    <Stack.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#8E3FFF",
        headerShown: false,

      }}>

      <Stack.Screen name="slider" component={Giftcard} />
      <Stack.Screen name="giftcard" component={Tradegiftcard} />
      <Stack.Screen name="bot" component={CyberExbot} />
    
</Stack.Navigator>
  )
}