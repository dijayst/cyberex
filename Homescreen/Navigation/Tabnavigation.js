import React from 'react';
import { StyleSheet,Text } from 'react-native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Stacknav from './Stacknav';
import Giftcard from '../Bottomtabnav/Giftcard';
import Support from '../Bottomtabnav/Support';
import Profile from '../Bottomtabnav/Profile';

import { FontAwesome,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import colors from '../JSON AND COLOR/colors';


    const Tab = createBottomTabNavigator();

  export default function  Tabnavigation() {
  return (
  
 <Tab.Navigator
 screenOptions={{
  tabBarActiveTintColor:"red",
 tabBarStyle:{height:56,backgroundColor:colors.background},
  headerShown:false,
  
}}>
    
 <Tab.Screen name="stack" component={Stacknav} options={{headerShown:false,
    tabBarLabel:({color})=>(<Text style={{color:colors.neural400,fontSize:10,marginTop:-7}}>Home</Text>),
    tabBarIcon:()=>(<FontAwesome name="home"  color={colors.Orange} size={25}/>)}}
  />

 <Tab.Screen name="Gift Card" component={Giftcard} options={{
  tabBarIcon:()=>(<MaterialIcons name="card-giftcard" size={24} color={colors.Orange} />),
  tabBarLabel:({color})=>(<Text style={{color:colors.neural400,fontSize:10,marginTop:-7}}>Giftcard</Text>),}}/>
 <Tab.Screen name="support" component={Support} options={{
  tabBarIcon:()=>(<MaterialIcons name="support-agent" size={24} color={colors.Orange} />),
  tabBarLabel:({color})=>(<Text style={{color:colors.neural400,fontSize:10,marginTop:-7}}>Support</Text>),}}/>
 <Tab.Screen name="profile" component={Profile} 
  options={{
    tabBarIcon:()=>(<MaterialCommunityIcons name="account-circle-outline" color={colors.Orange} size={25} />) ,
     tabBarLabel:({color})=>(<Text style={{color:colors.neural400,fontSize:10,marginTop:-7}}>Profile</Text>),}}
  />

</Tab.Navigator>


    
   
  )
}