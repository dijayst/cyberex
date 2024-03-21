import { StatusBar } from 'expo-status-bar';
import {  useFonts } from 'expo-font';
import {NavigationContainer} from "@react-navigation/native"
import React, { useEffect ,useMemo,useReducer} from 'react'
import { ActivityIndicator, View } from 'react-native';
import Stacknav from './Homescreen/Navigation/Stacknav';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from './Homescreen/Auth/AuthContext';
import Adminnav from './Homescreen/Navigation/Adminnav';
import { ThemeProvider } from './Homescreen/Navigation/ThemeContext';

export default function App() {
 

const initialloginstate={
  isLoading:true,
  userToken:null,
  email:null
}



const loginReducer=(prevstate,action)=>{
  switch(action.type){
    case"Retrieve_token":
    return{...prevstate,
      userToken:action.token,
      isLoading:false};
    case"Login":
    return{...prevstate,
      email:action.id,
      userToken:action.token,
      isLoading:false}; 
    case"Logout":
    return{...prevstate,
      email:null,
      userToken:null,
      isLoading:false};
    case"Register":
    return{...prevstate,
     // email:action.token,
      userToken:action.token,
      isLoading:false};
  }

};

  const [loginstate, dispatch] = useReducer(loginReducer, initialloginstate)

const authContext=useMemo(() => ({
  signin:async(email,password)=>{
      let userToken=null;
     //email=null;
    if (email==="user"&& password==="pass"){
    
     try{
       userToken="dfgdgf";
       await AsyncStorage.setItem('userToken',userToken)}
       catch(e){
         console.log(e);
       }
   }
     console.log("userToken:",userToken);
     dispatch({type:"Login",id:email,token:userToken});
   },
  signout:async()=>{
     try{
     
      await AsyncStorage.removeItem('userToken')}
      catch(e){
        console.log(e);
      }
    dispatch({type:"Logout"})
 
  },
  signup:()=>{
    // setuserToken("admin");
     //setisLoading(false)
   }
}), [])




  useEffect(() => {
    setTimeout(async()=>{
      //setisLoading(false)
      let userToken;
      userToken=null
      try{
        userToken=await AsyncStorage.getItem('userToken')}
        catch(e){
          console.log(e);
        }
      console.log("userToken:",userToken);
      dispatch({type:"Register",token:userToken})
    },1000);
  },[]);



  if(loginstate.isLoading){
   // return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <ActivityIndicator size="large"/>
    </View>
  //  );
  }

  
  const[LatoLoaded]= useFonts({
    'lato-black':require('./assets/Lato/Lato-Black.ttf'),
    'lato-blackitalic':require('./assets/Lato/Lato-BlackItalic.ttf'),
    'lato-bold':require('./assets/Lato/Lato-Bold.ttf'),
    'lato-italic':require('./assets/Lato/Lato-Italic.ttf'),
    'lato-light':require('./assets/Lato/Lato-Light.ttf'),
    'lato-lightitalic':require('./assets/Lato/Lato-LightItalic.ttf'),
    'lato-thin':require('./assets/Lato/Lato-Thin.ttf'),
    'lato-thinitalic':require('./assets/Lato/Lato-ThinItalic.ttf'),
 
  });

  return (
    
   <ThemeProvider>
    <NavigationContainer>
    {loginstate.userToken !== null?<Adminnav/>:
    <Stacknav/>}
</NavigationContainer>
</ThemeProvider>
  
  );
}


//{loginstate.userToken !== null?<Adminnav/>:
//<AuthContext.Provider>
/*
 <AuthContext.Provider  value={authContext}>
         <NavigationContainer>
         {loginstate.userToken !== null?<Adminnav/>:
         <Stacknav/>}
   </NavigationContainer>
   </AuthContext.Provider>
*/