import { View, Text,TextInput,StyleSheet,TouchableOpacity, Alert } from 'react-native'
import React,{useState} from 'react'
import colors from '../JSON AND COLOR/colors'
import {Picker} from '@react-native-picker/picker'
export default function Cyberexuser({ windowWidth,windowheight}) {
  
  const [userInfo, setuserInfo] = useState({
    
    email: "",
    emailverify:true,
    amount: "",
    amountverify:true,
    description:"",
    descriptionverify:true
  });

  const handletransfer =  () => {
    // signin(email,password);
    
   if (userInfo.email === "" ||  userInfo.amount === ""||userInfo.description==="" ) {
 Alert.alert("Fill in mandatory details");
 } else {
  if (
    userInfo.emailverify &&
    userInfo.amountverify&&userInfo.descriptionverify 
  ) {console.log("correct")
  Alert.alert("Successful");
  navigation.navigate("welcome")
 
 }
   }
  };
 

  const handleemail=(val)=>{
     
    if(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(val)){
      setuserInfo({...userInfo,email:val,emailverify:true})
  }else{setuserInfo({...userInfo,email:val,emailverify:false})
  }
  }

  const handledescription=(val)=>{
    if(userInfo.description.length<4){
      setuserInfo({...userInfo,description:val,descriptionverify:true})
    }else{
      setuserInfo({...userInfo,description:val,descriptionverify:false})
    }
      }
    
    const handleamount=(val)=>{
       if(userInfo.amount.length>4){
        setuserInfo({...userInfo,amount:val,amountverify:true});
      }else{
        setuserInfo({...userInfo,amount:val,amountverify:false});
      }
    
    }


    console.log(userInfo)
  return (
    <View style={{gap: 20,width:windowWidth>400? 29:360}}>
     
     <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
            <View style={{ display: "flex", flexDirection: "row",marginLeft:-10 }}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Recipients Email Address</Text>
              <Text style={{ color: colors.Orange }}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Example@gmail.com"
              value={userInfo.name}
              onChangeText={(val) => handleemail(val)}
            />
          </View>

          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
            <View style={{ display: "flex", flexDirection: "row",marginLeft:-10 }}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Amount</Text>
              <Text style={{ color: colors.Orange }}>*</Text>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Amount(#)"
              value={userInfo.email}
              onChangeText={(val) => handleamount(val)}
            />
          </View>
          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
            <View style={{ display: "flex", flexDirection: "row" ,marginLeft:-10}}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight:19.2, fontSize: 16 }}>Description</Text>
              <Text style={{ color: colors.Orange }}>*</Text>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Desc"
              value={userInfo.email}
              onChangeText={(val) => handledescription(val)}
              placeholderTextColor={colors.neural300}
            />
          </View>


          <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 30, height: 56, width: 350, alignItems: "center", padding: 10,paddingTop: 12,marginLeft:-10}} onPress={handletransfer}>
              <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
  
    </View>
  )
}


const styles = StyleSheet.create({
  
  input: {
     padding: 16,
     borderWidth: 1,
     width:350,
     height:56,
     marginLeft:-10,
    // marginVertical: 20,
     borderRadius:8,
     borderColor:colors.neural200,
   },
   
  buttonText:{padding:10,paddingTop:3,
    color:colors.white,
    size:16,
    lineHeight:21.6,
    fontWeight:"700"
    },
})
