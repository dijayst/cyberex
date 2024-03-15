  import { View, Text, StyleSheet, TextInput, TouchableOpacity, useWindowDimensions, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
  import {useNavigation} from "@react-navigation/native";
import PhoneInput  from 'react-native-phone-input'; 
import CountryPicker  from 'react-native-country-picker-modal'; 
import CheckBox from 'expo-checkbox';
import colors from '../JSON AND COLOR/colors';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from "react-native-axios";


  
  export default  function Signup() {
  
   // const {isLoading, register,updateauthstate,userInfo} = useContext(AuthContext);
    const windowWidth=useWindowDimensions().width
    const windowheight=useWindowDimensions().height

    //const ltu=useContext(AuthContext);console.log(ltu)
    const navigation=useNavigation();
    const [userInfor, setuserInfor] = useState({
      name: "",
      nameverify:true,
      email: "",
      emailverify:true,
      referancecode:"",
      referancecodeverify:true,
      errormessage:"",
      phoneNumber:"",
      phoneNumberverify:true,
      check_textinputchange:false,
      isChecked:false,
      countryPickerVisible:false,
      selectedCountry:null,
      countryCode:"",
    });
    
  const handleSignup =() => {
    if(userInfor.nameverify&&userInfor.emailverify&&userInfor.referancecodeverify&&userInfor.phoneNumberverify&&userInfor.isChecked){
   //axios.post("http://localhost:5051/Signup",{name:userInfor.name,    email:userInfor.email,referancecode:userInfor.referancecode,phoneNumber:userInfor.phoneNumber})
   //.then(Response=>{
  //setwhatido(Response.data)
  //setwhatido(Response.data.whatido)
  //   console.log(Response.data)
   //  console.log(Response.data.result)
     console.log("i gotten it")
     console.log(userInfor)
     navigation.navigate("verify")
    //})
   //.catch(error=>{     console.log(error)     console.log("i deny")})
  }
   else{
     Alert.alert("fill in mandatory details")
   }


};





const handleemail=(val)=>{
  if(/[a-zA-Z]+@[a-z]+\.[a-z]{2,3}/.test(val)){
    setuserInfor({...userInfor,email:val,emailverify:true})
}else{setuserInfor({...userInfor,email:val,emailverify:false})
}

}




const handlephonenumber=(val)=>{
  //const phonevar=e.nativeEvent.text;
  //setPhoneNumber(phonevar);
  //setuserInfor.phoneNumberverify(false);
  if(/[6-9]{1}[0-9]{9}/.test(val)){
    setuserInfor({...userInfor,phoneNumber:val,phoneNumberverify:true})
  }else{setuserInfor({...userInfor,phoneNumber:val,phoneNumberverify:false})
}

}


const handlename=(val)=>{
  //const namevar=e.nativeEvent.text;
  //setuserInfor.name(namevar);
  //setuserInfor.nameverify(false);
  //if(namevar.length>1){
    //setuserInfor.name(namevar);
    //setuserInfor.nameverify(true)
if (/[a-zA-Z]{2,40} [a-zA-Z]{2,4}/.test(val)){
setuserInfor({...userInfor,name:val,nameverify:true,check_textinputchange:true})
}else{
  setuserInfor({
    ...userInfor,name:val,nameverify:false,check_textinputchange:false
  })
}

  }

  const handlevalidname=(val)=>{
if(userInfor.name.length>4){
  setuserInfor({...userInfor,nameverify:true})
}else{
  setuserInfor({...userInfor,nameverify:false})
}
  }



const handlereferencecode=(val)=>{
  //const referancecodevar=e.nativeEvent.text;
  //setuserInfor.referancecode(referancecodevar);
  //setuserInfor.referancecodeverify(false);
  if(userInfor.referancecode.length<4){
    setuserInfor({...userInfor,referancecode:val,referancecodeverify:true});
  }else{
    setuserInfor({...userInfor,referancecode:val,referancecodeverify:false});
  }

}
console.log({userInfor})
  
   
    //const [countryCode, setCountryCode] = useState(''); 
    //const [selectedCountry, setSelectedCountry] =  useState(null); 
   
    const onSelectCountry = (country) => { 
      setuserInfor({...userInfor,countryCode:country.cca2})
        //setCountryCode(country.cca2); 
         setuserInfor({...userInfor,selectedCountry:country})
        setuserInfor({...userInfor,countryPickerVisible:false}); 
    }; 
  
    

  const toggleCountryPicker = () => { 
     // setCountryPickerVisible(!countryPickerVisible); 
      setuserInfor({...userInfor,countryPickerVisible:!countryPickerVisible})
  }; 

  
    console.log(userInfor)
    console.log(handleSignup)
  
    return (
      <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={true}>
      <View style={{ backgroundColor:colors.background,padding:11,}}>
    <Spinner/>
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
              placeholderTextColor={colors.Textcolor}
              onChangeText={(val)=>handlename(val)}
                         />
            {userInfor.nameverify?null:<Text style={{color:colors.Orange,}}>Full4name is required</Text>}
        
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
              onChangeText={(val) => handleemail(val)}
            />
             {userInfor.emailverify?null:<Text style={{color:colors.Orange,}}>email is required</Text>}
        
          </View>

          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Phone Number
              <Text style={{ color: colors.Orange }}>*</Text></Text>
            </View>

            <PhoneInput
              style={styles.input}
              defaultCountry="US"
              value={userInfor.phoneNumber}
              onChangePhoneNumber={(val) => handlephonenumber(val)}
              onPressFlag={toggleCountryPicker}
            />


            {userInfor.countryPickerVisible && (
              <CountryPicker
                withFilter={true}
                withFlagButton={false}
                withCountryNameButton={false}
                onSelect={userInfor.onSelectCountry}
                onClose={() => setuserInfor({...userInfor,CountryPickerVisible:false})}
                visible={userInfor.countryPickerVisible}
                containerButtonStyle={styles.countryPickerButton}
                closeButtonImageStyle={styles.countryPickerCloseButton}
              />
            )}
               {userInfor.phoneNumberverify?null:<Text style={{color:colors.Orange,}}>phone number must be 10 digit</Text>}
        
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
               maxLength={4}
              onChangeText={(val) =>handlereferencecode(val)}
              
            />
             {userInfor.referancecodeverify?null:<Text style={{color:colors.Orange,}}>enter a valid referancecode</Text>}
        
          </View>



          <View style={{ width: 350, height: 120, gap: 16 }}>

            <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 10, height: 56, width: 350, alignItems: "center", padding: 10 }} onPress={handleSignup}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={{ width: 350, height: 48, display: "flex", flexDirection: "row", marginTop: 30, gap: 10 }}>

              <CheckBox
                style={{ height: 12, weight: 12, marginTop: 6, borderRadius: 2, borderWidth: 1, }}
                value={userInfor.isChecked}
                onValueChange={() => {setuserInfor({...userInfor,isChecked:true})}}

              />
              <View style={{ width: 330, height: 48, }}>

                <Text style={{ fontSize: 14, fontWeight: 600, lineHeight: 24, color: colors.Textcolor }}>By creating account,you acknowledge and accept our
                  <Text style={{ color: colors.Orange, fontSize: 14, fontWeight: 600, lineHeight: 24 }}> terms of service </Text>
                  <Text style={{ fontSize: 14, fontWeight: 600, lineHeight: 24, color: colors.Textcolor }}>and</Text>
                  <Text style={{ color: colors.Orange, fontSize: 14, fontWeight: 600, lineHeight: 24 }}> privacy policy</Text>
                </Text>


              </View>

              
            </View>
            {!userInfor.isChecked?<Text style={{color:colors.Orange,}}>box has not been checked</Text>:null}
        
          </View>



        </View>
        
      </View>
    
    </ScrollView>
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
   