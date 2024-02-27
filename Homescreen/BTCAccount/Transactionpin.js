import { View, Text,TouchableOpacity,StyleSheet,TextInput } from 'react-native'
import React ,{useState}from 'react'
import colors from '../JSON AND COLOR/colors';
import { Ionicons } from '@expo/vector-icons';


export default function Transactionpin() {

  
  const [emailverify, setemailverify] = useState({
    input1: "",
    input2: "",
    input3:"",
    input4:""
  });

  const handleSignup = async () => {
    
   
     navigation.navigate("password")
  
  };
  return (
    <View style={{backgroundColor:colors.background,flex:1,padding:19,}}>
         <TouchableOpacity style={styles.backbtncontainer}   onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color="black" />
            <Text  style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:colors.Textcolor,marginLeft:90}}>Transaction Pin</Text>
            </TouchableOpacity>

            <View style={{marginTop:190,marginLeft:20,gap:6,height:60,width:308}}>
            <Text style={{fontSize:24,fontWeight:"700",lineHeight:32.4,fontFamily:"lato-bold",color:"#000000"}}>  Enter Transaction Pin</Text>
      <Text style={{fontWeight:"500",fontSize:14,lineHeight:18.9,color:colors.neural800}}>Enter your four digit pin or use biometrics</Text>
     
     </View>

      <View style={{display:"flex",flexDirection:"row",gap:16,marginLeft:59.5,marginTop:32}}>
      <TextInput
          style={styles.input}
        
          value={emailverify.input1}
          onChangeText={(input1) => setemailverify({ ...emailverify, input1 })}
          secureTextEntry
        />

         <TextInput
        style={styles.input}
        value={emailverify.input2}
        onChangeText={(input2) => stemailverify({ ...emailverify, input2 })}
        secureTextEntry
      />

       <TextInput
      style={styles.input}
    
      value={emailverify.input3}
      onChangeText={(input3) => setemailverify({ ...emailverify, input3 })}
      secureTextEntry
    /> 
    <TextInput
    style={styles.input}
    value={emailverify.input4}
    onChangeText={(input4) => setemailverify({ ...emailverify, input4 })}
    secureTextEntry
  />
  </View>
  
  <Text style={{width:140,height:22,fontSize:16,fontWeight:"700",lineHeight:21.6,marginLeft:120,marginTop:15,marginBottom:20,color:colors.neuralblack}}>Resend mail ? <Text style={{color:colors.Orange,fontWeight:"700",lineHeight:21.6}}>8:04</Text></Text>

  <TouchableOpacity style={{backgroundColor:colors.Orange,borderRadius:8,marginTop:44,marginLeft:20, height:56,width:350,alignItems: "center",padding:10}} >
    <Text style={styles.buttonText}>Continue</Text>
    </TouchableOpacity> 

            
       </View>
  )
}



const styles = StyleSheet.create({
  input: {
      //padding: 5,
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
    position:"absolute",
    display:"flex",
    flexDirection:"row",
    zIndex:10,
    padding:20,
    marginTop:50
  
    
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