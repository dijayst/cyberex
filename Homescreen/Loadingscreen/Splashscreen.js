import { View, ActivityIndicator} from 'react-native'
import React from 'react'


export default function Splashscreen() {
  return (
    <View
    style={{flex: 1, justifyContent: 'center', backgroundColor: '#06bcee'}}>
    <ActivityIndicator size="large" color="#ffffff" />
  </View>
  )
}