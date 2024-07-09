import { View, ActivityIndicator } from 'react-native';
import React, { useContext,useState,useEffect } from 'react'

import {NavigationContainer,DarkTheme,DefaultTheme} from "@react-navigation/native"
//import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from './AuthContext';
import Home from '../NairaAccount/Home';
import Welcomebackscreen from '../Signin/Welcomebackscreen';
//import Adminnav from '../Navigation/Adminnav';
import { ThemeContext } from '../Theme/ThemeContext';
import {EventRegister}from 'react-native-event-listeners';
import { theme } from '../Theme/Theme';
import { App1, HomeTabs } from '../Navigation/Testing';
import { Stackna, Stacknav } from '../Navigation/Stacknav';
export default function Index() {
    
  const{isLoading,userToken}=useContext(AuthContext);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }


  
  const [isDarkMode, setisDarkMode] = useState(false);
  useEffect(() => {
   const listener=EventRegister.addEventListener('ChangeTheme',(data)=>{
    setisDarkMode(data)
   })
   return()=>{
    EventRegister.removeAllListeners(listener)
   }
  }, [isDarkMode])
  return (
    <ThemeContext.Provider value={isDarkMode===true?theme.dark:theme.light}>

    <NavigationContainer theme={isDarkMode===true?DarkTheme:DefaultTheme}>
      {userToken!== null? <Stacknav/>:<Stackna/>}
</NavigationContainer>
</ThemeContext.Provider>

  )
}