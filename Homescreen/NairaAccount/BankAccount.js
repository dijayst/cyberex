import { View, Text,Image,TouchableOpacity,StyleSheet,TextInput } from 'react-native'
import React,{useState} from 'react'
import colors from '../JSON AND COLOR/colors'

export default function BankAccount({navigation}) {
  
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    referancecode:""
  });
  const [emptyinput, setemptyinput] = useState([]);
  return (
    <View>
      {emptyinput==="" ?
      <View>
       <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Recipients Email Address</Text>
              <Text style={{ color: colors.Orange }}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Example@gmail.com"
              value={userInfo.name}
              onChangeText={(name) => setUserInfo({ ...userInfo, name })}
            />
          </View>

<View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Recipients Email Address</Text>
              <Text style={{ color: colors.Orange }}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Example@gmail.com"
              value={userInfo.name}
              onChangeText={(name) => setUserInfo({ ...userInfo, name })}
            />
          </View>

          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Recipients Email Address</Text>
              <Text style={{ color: colors.Orange }}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Example@gmail.com"
              value={userInfo.name}
              onChangeText={(name) => setUserInfo({ ...userInfo, name })}
            />
          </View>
          </View>
          

          
          :
      <View style={{backgroundColor:colors.background,height:320,width:350,marginLeft:-15,alignItems: 'center',justifyContent:"center",}}>
       
                        <Image source={require("../image1/121ae49d6d59c5c625c765250127d215.png")} style={{width:181.05,height:216.79,}} />
                <Text  style={{fontSize:24,fontWeight:"700",color:"#000000",lineHeight:26}}>No Linked Account</Text>
                <Text style={{fontSize:14,fontWeight:"500",color:colors.neuralblack,lineHeight:22,width:279}}>To transfer to a bank account, you need to link a bank account to your wallet</Text>
                   </View>}
                <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 70, height: 56, width: 350, alignItems: "center", padding: 10,paddingTop: 9,marginLeft:-10}} onPress={() => navigation.navigate("link")} >
              <Text style={styles.buttonText}>Link Account</Text>
            </TouchableOpacity>

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
})