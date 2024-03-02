import { View, Text,Image,TouchableOpacity,StyleSheet,TextInput } from 'react-native'
import React,{useState} from 'react'
import {useNavigation} from "@react-navigation/native";
import colors from '../JSON AND COLOR/colors'
import { print } from '../JSON AND COLOR/Data';

import { Ionicons,AntDesign,Entypo } from '@expo/vector-icons';

export default function BankAccount() {
  const navigation=useNavigation();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    referancecode:""
  });
  const [emptyinput, setemptyinput] = useState(["name"]);
  return (
    <View>
      {emptyinput.length>0 ?
      <View>
       <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86,marginTop:140 }}>
            <View style={{  flexDirection: "row" }}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Select Account</Text>
              <Text style={{ color: colors.Orange }}>*</Text>
            </View>
            <View style={{flexDirection:"row"}}>
            <TextInput
              style={styles.input1}
              placeholder="Select Bank Name"
              value={userInfo.name}
              onChangeText={(name) => setUserInfo({ ...userInfo, name })}
            />
              <View style={{ borderWidth: 1, borderColor: colors.neural200, height: 56, width: 40, borderTopRightRadius: 8, borderBottomRightRadius: 8,borderLeftWidth:0,  }}>
                 <AntDesign style={{ justifyContent: "center", marginTop: 16, }} name="down" size={24} color="black" />
            </View>
          
            </View>
          </View>

<View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Amount</Text>
              <Text style={{ color: colors.Orange }}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Amount to deposit"
              value={userInfo.name}
              onChangeText={(name) => setUserInfo({ ...userInfo, name })}
            />
          </View>

          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Description</Text>
              <Text style={{ color: colors.Orange }}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Desc"
              value={userInfo.name}
              onChangeText={(name) => setUserInfo({ ...userInfo, name })}
            />
               
           
          </View>

          <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 70, height: 56, width: 350, alignItems: "center", padding: 10,paddingTop: 10,marginLeft:-10}} onPress={()=>navigation.navigate("transpin")} >
              <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
          </View>
          

          
          :
      <View style={{backgroundColor:colors.background,height:320,width:350,marginLeft:-15,alignItems: 'center',justifyContent:"center",}}>
       
                        <Image source={require("../image1/121ae49d6d59c5c625c765250127d215.png")} style={{width:181.05,height:216.79,}} />
                <Text  style={{fontSize:24,fontWeight:"700",color:"#000000",lineHeight:26}}>No Linked Account</Text>
                <Text style={{fontSize:14,fontWeight:"500",color:colors.neuralblack,lineHeight:22,width:279}}>To transfer to a bank account, you need to link a bank account to your wallet</Text>
                  
                <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 70, height: 56, width: 350, alignItems: "center", padding: 10,paddingTop: 9,marginLeft:-10}} onPress={()=>navigation.navigate("link")} >
              <Text style={styles.buttonText}>Link Account</Text>
            </TouchableOpacity>
</View>}
                    </View> 
   
  )
}


const styles = StyleSheet.create({
  
  buttonText:{padding:10,
    color:colors.white,
    size:16,
    lineHeight:21.6,
    fontWeight:"700"
    },
    
  input: {
    // padding: 5,
     borderWidth: 1,
     width:350,
     height:56,
     marginLeft:-10,
     
    // marginVertical: 20,
     borderRadius:8,
     borderColor:colors.neural200,
   },
   input1: {
     // padding: 5,
      borderWidth: 1,
      borderRightWidth:0,
      width:310,
      height:56
      ,marginTop:34,marginLeft:-150,
     // marginVertical: 20,
     borderTopLeftRadius:8,
     borderBottomLeftRadius:8,
     // borderRadius:8,
      borderColor:colors.neural200,
    },
})