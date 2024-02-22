import { View, Text,Image ,StyleSheet,TextInput,TouchableOpacity,} from 'react-native'
import React,{useState} from 'react'
import axios from "react-native-axios";
import {useNavigation} from "@react-navigation/native";
import colors from '../color/colors';
import { AntDesign } from '@expo/vector-icons';



export default  function Welcomebackscreen () {
  const navigation=useNavigation();
 
const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password:"",
  });

  
  const handleSignup = async () => {
   
     navigation.navigate("home")
  
  };

  


const [isChecked, setisChecked] = useState(false); 
 
  console.log(userInfo)
  console.log(handleSignup)


  return (
    <View style={{ backgroundColor: colors.background, flex: 1, padding: 18 }}>

      <View style={{ height: 60, width: 237, marginTop: 68, marginLeft: 20, gap: 6 }}>
        <Text style={{ fontSize: 24, fontWeight: "700", color: colors.Textcolor, lineHeight: 28.8, width: 260, height: 32, gap: 10 }}>Welcome Back Leonard</Text>

        <View style={{ display: "flex", flexDirection: "row", width: 234, height: 22 }}>
          <Text style={styles.buttonText1}>Sign in to your account  </Text>
        </View>
      </View>



      <View style={{ width: 350, height: 556, gap: 30, marginLeft: 20, marginTop: 50 }}>




        <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ fontWeight: "600", color: colors.smalltext, lineHeight: 19.2, fontSize: 16 }}>Enter password</Text>
            <Text style={{ color: colors.Orange }}>*</Text>
          </View>

          <View style={{ display: "flex", flexDirection: "row" }}>

            <TextInput
              style={styles.password}
              placeholder="Password"
              value={userInfo.password}
              onChangeText={(password) => setUserInfo({ ...userInfo, password })}
              secureTextEntry
            />
            <View style={{ borderWidth: 1, borderColor: colors.neural200, height: 56, width: 40, borderTopRightRadius: 8, borderBottomRightRadius: 8 }}>
              <AntDesign style={{ justifyContent: "center", marginTop: 16, }} name={isPasswordSecure ? "eye" : "eyeo"} size={24} color="black" onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true) }} />

            </View>

          </View>

        </View>


        <TouchableOpacity onPress={() => navigation.navigate("forgot")}>
          <Text style={{ marginLeft: 220, marginTop: -2, lineHeight: 21.6, fontSize: 16, fontWeight: "700", color: colors.Orange, width: 134, height: 22 }}>forgot password?</Text>
        </TouchableOpacity>

        <View style={{ width: 350, height: 120, gap: 16 }}>

          <TouchableOpacity style={{ backgroundColor: colors.Orange, borderRadius: 8, marginTop: 10, height: 56, width: 350, alignItems: "center", padding: 10 }} onPress={handleSignup}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>


        </View>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
  },
  
userimage:{
  width:25,
  height:25,
  borderRadius:99,
  marginTop:-1,
 // marginLeft:30
 justifyContent:"center"
},
  input: {
   // padding: 5,
    borderWidth: 1,
    width:350,
    height:56,
   // marginVertical: 20,
    borderRadius:8,
    borderColor:colors.neural200,
  },
  
  password: {
    // padding: 5,
     borderWidth: 1,
     width:310,
     height:56,
    // marginVertical: 20,
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8,
     borderColor:colors.neural200,
   },
  link: {
    color: "blue",
    fontSize: 20,
    paddingVertical: 10,

    borderRadius:5,
    width:"90%",
  },
  buttonText1: { 
    color: colors.neuralblack, 
    lineHeight:19.2,
    fontWeight:"600",
    fontSize: 16,
   
},

buttonText: { 
  color: colors.white, 
  lineHeight:26,
  fontWeight:"600",
  fontSize: 16,
 
},

phoneInput: { 
  height: 50, 
  width: '100%', 
  borderWidth: 1, 
  borderColor: '#ccc', 
  marginBottom: 20, 
  paddingHorizontal: 10, 
}, 
countryButton: { 
  marginBottom: 20, 
}, 
countryPickerButton: { 
  borderRadius: 5, 
  backgroundColor: '#fff', 
  marginBottom: 20, 
}, 
countryPickerCloseButton: { 
  width: 20, 
  height: 20, 
}, 
submitButton: { 
  width: '100%', 
}, 
});



