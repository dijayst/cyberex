import { StatusBar } from 'expo-status-bar';
import { isLoading, useFonts } from 'expo-font';
import {NavigationContainer} from "@react-navigation/native"
import React, { useState, useEffect ,useMemo,useReducer} from 'react'
//import Tabnavigation from './Homescreen/Navigation/Tabnavigation';
import { AuthContext } from './Homescreen/Auth/AuthContext';
import { ActivityIndicator, View } from 'react-native';
import Adminnav from './Homescreen/Navigation/Adminnav';
import Homestack from './Homescreen/Navigation/Homestack';
import Stacknav from './Homescreen/Navigation/Stacknav';

export default function App() {
 // const [isLoading, setisLoading] = useState(true);
  //const [userAuth, setuserAuth] = useState(null)

 const initialloginstate={
    isLoading:true,
    userToken:null,
    email:null
  }
 const loginReducer=(prevstate,action)=>{
    switch(action.type){
      case"Retrieve_token":
      return{...prevstate,userToken:action.token,isLoading:false};
      case"Login":
      return{...prevstate,email:action.id,userToken:action.token,isLoading:false}; 
      case"Logout":
      return{...prevstate,
        email:null,
        userToken:null,
        isLoading:false};
      case"Register":
      return{...prevstate,email:action.id,
        userToken:action.token,
        isLoading:false};
    }

  }
  const [loginstate, dispatch] = useReducer(loginReducer, initialloginstate)

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

  const authContext=useMemo(() => ({
    signin:async(email,password)=>{
     // setuserToken("admin");
      //setisLoading(false)
      let userToken;
      email=null;
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
      //setuserToken(null);
      //setisLoading(false)
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
  }),[]);



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
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <ActivityIndicator size="large"/>
    </View>
  }
  return (
  
      <NavigationContainer>
        <Stacknav/>
   </NavigationContainer>
  
 
  );
}
/*

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function EmptyScreen() {
  return <View />;
}

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Feed" component={EmptyScreen} />
      <Tab.Screen name="Notifications" component={EmptyScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Profile" component={EmptyScreen} />
        <Stack.Screen name="Settings" component={EmptyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

*/