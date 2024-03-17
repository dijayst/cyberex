import { View, Text,TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthContext } from '../Auth/AuthContext';


const Drawer=createDrawerNavigator()

export  function Post() {
  
  const {signout} = useContext(AuthContext);
  
  return (
    <View>
      <Text>Adminnav</Text>
      <TouchableOpacity  onPress={()=>signout()} >
          
          <Text >Sign Out</Text>
</TouchableOpacity>
     
    </View>
  )
}

export  function Dashboard() {
    return (
      <View>
        <Text>Adminnav</Text>
      </View>
    )
  }
export default function Adminnav() {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Dashboard" component={Dashboard}/>
     <Drawer.Screen name="post" component={Post}/>
              
   </Drawer.Navigator>
  )
}