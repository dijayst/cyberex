  import { View, Text, StyleSheet, TextInput, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
  import {useNavigation} from "@react-navigation/native";
import PhoneInput  from 'react-native-phone-input'; 
import CountryPicker  from 'react-native-country-picker-modal'; 
import CheckBox from 'expo-checkbox'
import colors from '../JSON AND COLOR/colors';
//import Spinner from 'react-native-loading-spinner-overlay';
import axios from "react-native-axios";


  
  export default  function Signup() {
  
   // const {isLoading, register,updateauthstate,userInfo} = useContext(AuthContext);
    const windowWidth=useWindowDimensions().width
    const windowheight=useWindowDimensions().height

    //const ltu=useContext(AuthContext);console.log(ltu)
    const navigation=useNavigation();
    const [userInfor, setuserInfor] = useState({
      name: "",
      email: "",
      referancecode:""
    });
  
    
    const handleSignup = async () => {
      navigation.navigate("verify")
};
    
  
    const [phoneNumber, setPhoneNumber] = useState(''); 
    const [countryCode, setCountryCode] = useState(''); 
    const [selectedCountry, setSelectedCountry] = 
        useState(null); 
    const [countryPickerVisible, setCountryPickerVisible] =  
        useState(false); 
  
    const onSelectCountry = (country) => { 
        setCountryCode(country.cca2); 
        setSelectedCountry(country); 
        setCountryPickerVisible(false); 
    }; 
  
    

  const toggleCountryPicker = () => { 
      setCountryPickerVisible(!countryPickerVisible); 
  }; 


  const [isChecked, setisChecked] = useState(false); 
   
    console.log(userInfor)
    console.log(handleSignup)
    //useEffect(() => {Validateform(); }, [userInfo.name])
  
const Validateform=()=>{
  let Error={}
  (!userInfo.name?Error.userInfo.name="name is required":"")
}
  
    return (
      
      <View style={{ backgroundColor:colors.background,padding:11,}}>
    
                <View style={{ height: 60, width: 240, marginTop: 68, gap: 6,padding:11 }}>
          <Text style={{ fontSize: 24, fontWeight: "700", color: colors.Textcolor, lineHeight: 28.8 }}>Create your account</Text>

          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.buttonText1}>Already have an account? </Text>
            <TouchableOpacity style={{ color: colors.Orange }} onPress={() => navigation.navigate("login")}>
              <Text style={{ color: colors.Orange, fontSize: 16, lineHeight: 19.2, fontWeight: "600" }}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ width: 350, height: 556, gap: 30, marginTop: 35,padding:11, }}>

          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Full Name
              <Text style={{ color: colors.Orange }}>*</Text></Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="E.g john doe"
              value={userInfor.name}
              
              secureTextEntry
              placeholderTextColor={colors.Textcolor}
              onChangeText={(name) => setuserInfor({ ...userInfor, name })}
            />
          </View>

          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Email Address
              <Text style={{ color: colors.Orange }}>*</Text></Text>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Example@gmail.com"
              value={userInfor.email}
              onChangeText={(email) => setuserInfor({ ...userInfor, email })}
            />
          </View>

          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Phone Number
              <Text style={{ color: colors.Orange }}>*</Text></Text>
            </View>

            <PhoneInput
              style={styles.input}
              defaultCountry="US"
              value={phoneNumber}
              onChangePhoneNumber={(number) => setPhoneNumber(number)}
              onPressFlag={toggleCountryPicker}

            />


            {countryPickerVisible && (
              <CountryPicker
                withFilter={true}
                withFlagButton={false}
                withCountryNameButton={false}
                onSelect={onSelectCountry}
                onClose={() => setCountryPickerVisible(false)}
                visible={countryPickerVisible}
                containerButtonStyle={styles.countryPickerButton}
                closeButtonImageStyle={styles.countryPickerCloseButton}
              />
            )}
          </View>


          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Referral code
              <Text style={{ color: colors.Orange }}>*</Text></Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Example@gmail.com"
              value={userInfor.referancecode}
              onChangeText={(referancecode) => setuserInfor({ ...userInfor, referancecode })}
              secureTextEntry
            />
          </View>



          <View style={{ width: 350, height: 120, gap: 16 }}>

            <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 10, height: 56, width: 350, alignItems: "center", padding: 10 }} onPress={handleSignup}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={{ width: 350, height: 48, display: "flex", flexDirection: "row", marginTop: 30, gap: 10 }}>

              <CheckBox
                style={{ height: 12, weight: 12, marginTop: 6, borderRadius: 2, borderWidth: 1, }}
                value={isChecked}
                onPress={() => {
                  setisChecked(!isChecked)
                }}

              />
              <View style={{ width: 330, height: 48, }}>

                <Text style={{ fontSize: 14, fontWeight: 600, lineHeight: 24, color: colors.Textcolor }}>By creating account,you acknowledge and accept our
                  <Text style={{ color: colors.Orange, fontSize: 14, fontWeight: 600, lineHeight: 24 }}> terms of service </Text>
                  <Text style={{ fontSize: 14, fontWeight: 600, lineHeight: 24, color: colors.Textcolor }}>and</Text>
                  <Text style={{ color: colors.Orange, fontSize: 14, fontWeight: 600, lineHeight: 24 }}> privacy policy</Text>
                </Text>


              </View>


            </View>

          </View>



        </View>
        
      </View>
    
 
    )
  }
  
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 80,
    },
    input: {
      padding: 16,
      borderWidth: 1,
      width:350,
      height:56,
     // marginVertical: 20,
      borderRadius:8,
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




//<Spinner visible={isLoading} />
   