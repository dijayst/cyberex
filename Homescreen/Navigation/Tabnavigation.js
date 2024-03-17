import React from 'react';
import { StyleSheet,Text } from 'react-native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Stacknav from './Stacknav';
//import Giftcard from '../Bottomtabnav/GiftCard/Giftcard';
import Support from '../Bottomtabnav/Support';
import Profile from '../Bottomtabnav/Profile';
import { FontAwesome,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import colors from '../JSON AND COLOR/colors';
import Giftcardstack from './Giftcardstack';
//import Homestack from '../../../Auth/Homestack';
import Home from '../NairaAccount/Home';


    const Tab = createBottomTabNavigator();

  export default function  Tabnavigation() {
    

  return (
  
 <Tab.Navigator
 screenOptions={{
 tabBarStyle:{height:60,backgroundColor:colors.background},
  headerShown:false,
  tabBarInactiveTintColor:"blue",
  tabBarActiveTintColor:"red",
  
}}>
    
 <Tab.Screen name="home" component={Home} options={{headerShown:false,
    tabBarLabel:({focused})=>(<Text style={{color:focused?colors.Orange:colors.neural400,fontSize:10,marginTop:-7}}>Home</Text>),
    tabBarIcon:({focused})=>(<FontAwesome name="home"  color={focused?colors.Orange:colors.neural400} size={25}/>)}}
  />

 <Tab.Screen name="Gift Card" component={Giftcardstack} options={{
  tabBarIcon:({focused})=>(<MaterialIcons name="card-giftcard" size={24}  color={focused?colors.Orange:colors.neural400} />),
  tabBarLabel:({focused})=>(<Text style={{color:focused?colors.Orange:colors.neural400,fontSize:10,marginTop:-7}}>Giftcard</Text>),}}/>
 
 <Tab.Screen name="support" component={Support} options={{
  tabBarIcon:({focused})=>(<MaterialIcons name="support-agent" size={24}  color={focused?colors.Orange:colors.neural400} />),
  tabBarLabel:({focused})=>(<Text style={{color:focused?colors.Orange:colors.neural400,fontSize:10,marginTop:-7}}>Support</Text>),}}/>
 <Tab.Screen name="profile" component={Profile} 
  options={{
    tabBarIcon:({focused})=>(<MaterialCommunityIcons name="account-circle-outline"  color={focused?colors.Orange:colors.neural400} size={25} />) ,
     tabBarLabel:({focused})=>(<Text style={{color:focused?colors.Orange:colors.neural400,fontSize:10,marginTop:-7}}>Profile</Text>),}}
  />

</Tab.Navigator>


    
   
  )
}