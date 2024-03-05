import { View, Text,TouchableOpacity,StyleSheet,TextInput } from 'react-native'
import React ,{useState}from 'react'
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import colors from '../JSON AND COLOR/colors';

export default function Paymentpin() {
  
  const navigation=useNavigation();
  const [emailverify, setemailverify] = useState({
   input1: "",
   input2: "",
   input3:"",
   input4:""
 });

 const handleSignup = async () => {
   
  
    navigation.navigate("login")
 
 };
  return (
    <View style={{ backgroundColor:colors.background,flex:1,padding:13 }}>
      <TouchableOpacity style={styles.backbtncontainer} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>

      <View style={{ marginTop: 0, marginLeft: 20, gap: 6, height: 60, width: 308 }}>
        <Text style={{ fontSize: 24, fontWeight: "700", lineHeight: 32.4, fontFamily: "lato-bold", color: colors.Textcolor }}> Create Payment Pin</Text>
        <Text style={{ fontWeight: "500", fontSize: 16, lineHeight: 21.6, color: colors.neuralblack }}>Create a pin for your transactions</Text>

      </View>

      <View style={{ display: "flex", flexDirection: "row", gap: 16, marginLeft: 59.5, marginTop: 32 }}>
        <TextInput
          style={styles.input}

          placeholderTextColor={colors.neural300}
          value={emailverify.input1}
          onChangeText={(input1) => setemailverify({ ...emailverify, input1 })}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          value={emailverify.input2}
          onChangeText={(input2) => setemailverify({ ...emailverify, input2 })}
          secureTextEntry
          
          placeholderTextColor={colors.neural300}
        />

        <TextInput
          style={styles.input}

          placeholderTextColor={colors.neural300}
          value={emailverify.input3}
          onChangeText={(input3) => setemailverify({ ...emailverify, input3 })}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          value={emailverify.input4}
          
          placeholderTextColor={colors.neural300}
          onChangeText={(input4) => setemailverify({ ...emailverify, input4 })}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 59, marginLeft: 20, height: 56, width: 350, alignItems: "center", padding: 10 }} onPress={handleSignup}>
        <Text style={styles.buttonText}>Done</Text>
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