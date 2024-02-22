import React from 'react';
import { StyleSheet,Text } from 'react-native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Stacknav from '../Stack Navigation/Stacknav';
import Giftcard from './Giftcard';
import Support from './Support';
import Profile from './Profile';

import { FontAwesome,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import colors from '../color/colors';


    const Tab = createBottomTabNavigator();

  export default function  Tabnavigation() {
  return (
  
 <Tab.Navigator
 screenOptions={{
  tabBarActiveTintColor:"#8E3FFF",
  headerShown:false,
  
}}>
    
 <Tab.Screen name="stack" component={Stacknav} options={{headerShown:false,
    tabBarLabel:({color})=>(<Text style={{color:color,fontSize:10,marginTop:-7}}>Home</Text>),
    tabBarIcon:()=>(<FontAwesome name="home"  color={colors.Orange} size={25}/>)}}
  />
 <Tab.Screen name="Gift Card" component={Giftcard} options={{tabBarIcon:()=>(<MaterialIcons name="card-giftcard" size={24} color={colors.Orange} />)}}/>
 <Tab.Screen name="support" component={Support} options={{tabBarIcon:()=>(<MaterialIcons name="support-agent" size={24} color={colors.Orange} />)}}/>
 <Tab.Screen name="profile" component={Profile} 
  options={{
    tabBarIcon:()=>(<MaterialCommunityIcons name="account-circle-outline" color={colors.Orange} size={25} />) ,
     tabBarLabel:({color})=>(<Text style={{color:color,fontSize:10,marginTop:-7}}>Profile</Text>),}}
  />

</Tab.Navigator>


    
   
  )
}