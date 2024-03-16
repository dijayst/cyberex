import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer=createDrawerNavigator()

export  function Post() {
  return (
    <View>
      <Text>Adminnav</Text>
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