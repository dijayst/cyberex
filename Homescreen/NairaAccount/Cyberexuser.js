import { View, Text,TextInput,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import colors from '../JSON AND COLOR/colors'

export default function Cyberexuser({ windowWidth,windowheight}) {
  
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    referancecode:""
  });

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
              onChangeText={(name) => setUserInfo({ ...userInfo, name })}
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
              onChangeText={(email) => setUserInfo({ ...userInfo, email })}
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
              onChangeText={(email) => setUserInfo({ ...userInfo, email })}
              
              placeholderTextColor={colors.neural300}
            />
          </View>


          <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 30, height: 56, width: 350, alignItems: "center", padding: 10,paddingTop: 12,marginLeft:-10}} >
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
