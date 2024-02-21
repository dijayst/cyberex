//import { View, Text } from 'react-native'
import React, {useState, useContext } from 'react'
import axios from "react-native-axios";
import { View, TextInput,Pressable,Text,StyleSheet, TouchableOpacity } from 'react-native'

import {useNavigation} from "@react-navigation/native";

//import AsyncStorage from "@react-native-async-storage/async-storage";
//import { AuthContext } from './AuthContext';

export default function Login() {
  
  const navigation=useNavigation();
  //const {updateauthstate}=useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({ 
    email: "", password: "" 
  });

  
  const handleSignin = async () => {
    // TODO: validate your userInfo
    

const apiresjson=axios.post("http://localhost:5051/login",{
  email:userInfo.email,
  password:userInfo.password,
})
    //updateauthstate({loggedin:true,profile:apiresjson.profile});
    //await AsyncStorage.setItem("auth_token",apiresjson.token)
  };
  return (
    <View style={{backgroundColor:"#F1F0F3"}}>
      <Text>Login</Text>
      
    <View tyle={styles.container}>
      <Text></Text>
      <TextInput style={styles.input} placeholder="Enter your email" value={userInfo.email} onChangeText={(email) => setUserInfo({ ...userInfo, email })} />
       <TextInput style={styles.input} placeholder="Enter your password" value={userInfo.password} onChangeText={(password) => setUserInfo({ ...userInfo, password })}/>
       <TouchableOpacity onPress={() => navigation.navigate("home")} >
        <Text style={styles.buttonText}>SignIn</Text>
        </TouchableOpacity>
       <Pressable style={{backgroundColor:"#0A2184"}} onPress={() => navigation.navigate("signup")}>
        <Text style={styles.buttonText}>I don't have an account</Text>
      </Pressable>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
  },
 
  input: {
    padding: 5,
    borderWidth: 1,
    width:"90%",
    marginVertical: 20,
    borderRadius:5
  },
  link: {
    color: "blue",
    fontSize: 20,
    paddingVertical: 10,
  },
  buttonText: { 
    color: "black", 
    fontSize: 16, 
    fontWeight: "bold", 
},

})