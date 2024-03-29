import { View, Text,TouchableOpacity,StyleSheet,TextInput, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import {useNavigation} from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import colors from '../JSON AND COLOR/colors';

export default function Entercode() {
   const navigation=useNavigation();
   const [emailverify, setemailverify] = useState({
    input1: "",
    inputverify1:true,
    input2: "",
    inputverify2:true,
    input3:"",
    inputverify3:true,
    input4:"",
    inputverify4:true,
  });
console.log(emailverify)
  const [seconds, setSeconds] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        // Decrease the seconds by 1 every second if not zero
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        // Clear the interval if the timer reaches zero
        clearInterval(interval);
      }
    }, 1000);
  
    // Clear interval when component unmounts to prevent memory leaks
    return () => clearInterval(interval);
  }, [seconds]);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleSignup = async () => {
    
    if(emailverify.input1===""||emailverify.input2===""||emailverify.input3===""||emailverify.input4===""){
      
      Alert.alert("Fill in mandatory details ");
        }
        else{
if(emailverify.inputverify1&&emailverify.inputverify2&&emailverify.inputverify3&&emailverify.inputverify4){
  Alert.alert("successfull")

  navigation.navigate("change")
}
        }
   
  
  };

  
const handleinput1=(val)=>{
  
  if (/[0-9a-zA-Z]{1}/.test(val)){
  setemailverify({...emailverify,input1:val,inputverify1:true,})
  }else{
    setemailverify({
      ...emailverify,input1:val,inputverify1:false,})
  }
  
    }
  
  
    
  const handleinput2=(val)=>{
    
    if (/[0-9a-zA-Z]{1}/.test(val)){
    setemailverify({...emailverify,input2:val,inputverify2:true,})
    }else{
      setemailverify({
        ...emailverify,input2:val,inputverify2:false,})
    }
    
      }
  
      
  const handleinput3=(val)=>{
    
    if (/[0-9a-zA-Z]{1}/.test(val)){
    setemailverify({...emailverify,input3:val,inputverify3:true,})
    }else{
      setemailverify({
        ...emailverify,input3:val,inputverify3:false,})
    }
    
      }
  
      
  const handleinput4=(val)=>{
    
    if (/[0-9a-zA-Z]{1}/.test(val)){
    setemailverify({...emailverify,input4:val,inputverify4:true,})
    }else{
      setemailverify({
        ...emailverify,input4:val,inputverify4:false,})
    }
    
      }
  return (
    <View style={{ backgroundColor:colors.background, flex: 1,padding:13 }}>
      <TouchableOpacity style={styles.backbtncontainer} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>

      <View style={{ marginTop: 0, marginLeft: 20, gap: 6, height: 60, width: 308 }}>
        <Text style={{ fontSize: 24, fontWeight: "700", lineHeight: 32.4, fontFamily: "lato-bold", color: colors.Textcolor }}> Enter Code </Text>
        <Text style={{ fontWeight: "500", fontSize: 16, lineHeight: 21.6, color: colors.neuralblack, width: 330, height: 17 }}>Enter 4 digit code sent to your phone number</Text>

      </View>
      <View style={{display:"flex",flexDirection:"row",gap:16,marginLeft:59.5,marginTop:32}}>
      <TextInput
          style={styles.input}
        
          value={emailverify.input1}
          onChangeText={(val) => handleinput1(val)}
          maxLength={1}
        />

         <TextInput
        style={styles.input}
        value={emailverify.input2}
        onChangeText={(val) => handleinput2(val)}
        maxLength={1}
      />

       <TextInput
      style={styles.input}
      value={emailverify.input3}
      onChangeText={(val) => handleinput3(val)}
      maxLength={1}
    /> 
    <TextInput
    style={styles.input}
    value={emailverify.input4}
    onChangeText={(val) => handleinput4(val)}
   maxLength={1}
  />
  </View>
 
     <View style={{display:"flex",flexDirection:"row"}}>
  <Text style={{width:140,height:22,fontSize:16,fontWeight:"700",lineHeight:21.6,marginLeft:120,marginTop:15,marginBottom:20,color:colors.neuralblack}}>Resend mail ? </Text>
  <Text style={{color:colors.Orange,fontWeight:"700",lineHeight:21.6,marginTop:15,marginLeft:-29}}>{formatTime(seconds)}</Text>
  </View>
  
     
      <TouchableOpacity style={{ backgroundColor: colors.Orange, borderRadius: 8, marginTop: 44, marginLeft: 20, height: 56, width: 350, alignItems: "center", padding: 10 }} onPress={handleSignup}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>


    </View>
  )
}
const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderWidth: 1,
        width:56,
        height:56,
       
        color:colors.neural200,
        borderRadius:8
      },

    buttonText: { 
      color: colors.white, 
      fontSize: 16,
      lineHeight:26,
      fontWeight:"700",
      width:68,
      height:26
     
  },



    messagebtn:{padding:10,
        backgroundColor:"white",
        borderWidth:1,
        borderRadius:99,
        borderColor:"#8E3FFF",
      //  flex:1
    },
    image:{
        width:"90%",
        height:300,
        marginLeft:15,
        borderRadius:15,
      
    },
    backbtncontainer:{
         zIndex:10,
        padding:20,
        marginTop:68,
       
       
      
    },
    
jsicon:{
    display:"flex",
    flexWrap:"wrap",
    flexDirection:"row",
   marginRight:130
    },
    infocontainer:{
        padding:20,
        display:"flex",
        gap:-5,
        marginTop:5
    },
    subcontainer:{
        display:"flex",
        flexDirection:"column",
        gap:5,
        alignContent:"center",
    },
    bookingbtn:{
        padding:10,
        backgroundColor:"#8E3FFF",
        borderWidth:1,
        borderRadius:99,
        borderColor:"#8E3FFF",
        flex:1
    }
})