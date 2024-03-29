
import { View, Text,StyleSheet,Image,TouchableOpacity,TextInput, Alert} from 'react-native'
import React,{useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import colors from '../JSON AND COLOR/colors';

export default function Password({navigation}) {

    //const navigation=useNavigation();

    const [userInfo, setUserInfo] = useState({
        password:"",
        reenterpassword:"",
        isPasswordSecure:true,
        error:""
      });
      

const handleSignup = async () => {
   
  if (userInfo.password === userInfo.reenteredPassword) {
    setUserInfo({...userInfo,error:'Passwords do not match'})
    //setError('Passwords do not match');
    Alert.alert("Passwords do not match")
  }else{
    if (userInfo.password.length < 8) {
      // setError('Password must be at least 8 characters long');
      setUserInfo({...userInfo,error:'Password must be at least 8 characters long'})
      Alert.alert("Password must be at least 8 characters long")
     } else {
       //setError('');
       // Password is valid, you can proceed with your logic here
       setUserInfo({...userInfo,error:'successful'})
       Alert.alert("successful")
  
       navigation.navigate("home")
     }
  }  
 };
 console.log(userInfo)

 const handlepassword=(val)=>{
  if(/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(val)){
    setuserInfo({...userInfo,password:val,passwordverify:true})
}else{setuserInfo({...userInfo,password:val,passwordverify:false})
}

}

  return (
    <View style={{ backgroundColor:colors.background, padding: 5 }}>
      <TouchableOpacity style={styles.backbtncontainer} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>

      <View style={{ height: 60, width: 237, marginTop: 38, marginLeft: 20, gap: 6 }}>
        <Text style={{ fontSize: 24, fontWeight: "700", color: colors.Textcolor, lineHeight: 28.8, width: 250, height: 32, gap: 10 }}>Change Password</Text>

        <View style={{ display: "flex", flexDirection: "row", width: 330, height: 22 }}>
          <Text style={styles.buttonText1}>Enter 4 digit code sent to your phone number </Text>

        </View>
      </View>



      <View style={{ width: 350, height: 556, gap: 30, marginLeft: 20, marginTop: 50 }}>

        <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Enter Password
            <Text style={{ color: colors.Orange }}>*</Text></Text>
          </View>

          <View style={{ display: "flex", flexDirection: "row" }}>

            <TextInput
              style={styles.password}
              placeholder="Enter new password"
              maxLength={8}
              placeholderTextColor={colors.neural300}
              value={userInfo.password}
              onChangeText={(password) => setUserInfo({ ...userInfo, password })}
              secureTextEntry={userInfo.isPasswordSecure}
          
            />
            <View style={{ borderWidth: 1, borderColor: colors.neural200, height: 56, width: 40, borderTopRightRadius: 8, borderBottomRightRadius: 8,borderLeftWidth:0,  }}>
            <AntDesign style={{ justifyContent: "center", marginTop: 16, }} name={userInfo.isPasswordSecure ? "eye" : "eyeo"} size={24} color="black" onPress={() => {  userInfo.isPasswordSecure ? setUserInfo({...userInfo,isPasswordSecure:false}) : setUserInfo({...userInfo,isPasswordSecure:true}) }} />

            </View>

          </View>

        </View>

        <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16, width: 149, height: 22 }}>Confirm Password
            <Text style={{ color: colors.Orange }}>*</Text></Text>
          </View >

          <View style={{ display: "flex", flexDirection: "row" }}>

            <TextInput
              style={styles.input}
              placeholder="Confirm new password"
              value={userInfo.reenterpassword}
              secureTextEntry={userInfo.isPasswordSecure}
              placeholderTextColor={colors.neural300}
              maxLength={8}
              onChangeText={(reenterpassword) => setUserInfo({ ...userInfo, reenterpassword })}
            />
            <View style={{ borderWidth: 1, borderColor: colors.neural200, height: 56, width: 40, borderTopRightRadius: 8, borderBottomRightRadius: 8,borderLeftWidth:0,  }}>
            <AntDesign style={{ justifyContent: "center", marginTop: 16, }} name={userInfo.isPasswordSecure ? "eye" : "eyeo"} size={24} color="black" onPress={() => {  userInfo.isPasswordSecure ? setUserInfo({...userInfo,isPasswordSecure:false}) : setUserInfo({...userInfo,isPasswordSecure:true}) }} />

            </View>
          </View>
        </View>




        <View style={{ width: 350, height: 120, gap: 16 }}>

          <TouchableOpacity style={{ backgroundColor: colors.Orange, borderRadius: 8, marginTop: 10, height: 56, width: 350, alignItems: "center", padding: 10 }} onPress={handleSignup}>
            <Text style={styles.buttonText}>Done</Text>
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
     padding: 16,
      borderWidth: 1,
      borderRightWidth:0, 
      width:310,
      height:56,
    //  marginLeft:-126,
     // marginVertical: 20,
     borderTopLeftRadius:8,
      borderBottomLeftRadius:8,
       borderColor:colors.neural200,
    },
    
    password: {
       padding: 16,
       borderWidth: 1,
       width:310,
       height:56,
       borderRightWidth:0, 
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
  
  backbtncontainer:{
    zIndex:10,
   padding:20,
   marginTop:68,
  
  
 
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
  
  
  
  