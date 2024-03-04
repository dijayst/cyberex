import { View, Text,StyleSheet,TouchableOpacity,TextInput } from 'react-native'
import React,{useState} from 'react'
import { Ionicons ,AntDesign} from '@expo/vector-icons';
import colors from '../JSON AND COLOR/colors';





export default function Linkbankaccount({navigation}) {

    
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    referancecode:""
  });

  return (
    <View style={{ backgroundColor:colors.background,padding:9,marginTop:150,flex:1}}>
      <TouchableOpacity style={styles.backbtncontainer}   onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:colors.Textcolor,marginLeft:90}}>Link BanK</Text>
            </TouchableOpacity>
        
    <View style={{gap: 20,backgroundColor:colors.background,padding:29}}>
     
     <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Bank Name</Text>
              <Text style={{ color: colors.Orange }}>*</Text>
            </View>

<View style={{flexDirection:"row",marginTop:20,marginLeft:-10}}>
            <TextInput
              style={styles.input1}
              placeholder="Select Bank Name"
              value={userInfo.name}
              placeholderTextColor={colors.neural300}
              onChangeText={(name) => setUserInfo({ ...userInfo, name })}
            />
              <View style={{ borderWidth: 1, borderColor: colors.neural200, height: 56, width: 40, borderTopRightRadius: 8, borderBottomRightRadius: 8,borderLeftWidth:0, marginTop:-21 }}>
                 <AntDesign style={{ justifyContent: "center", marginTop: 16, }} name="down" size={14} color="black" />
            </View>
          
            </View>
          </View>

          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Account Number</Text>
              <Text style={{ color: colors.Orange }}>*</Text>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Enter Account Number"
              
              placeholderTextColor={colors.neural300}
              value={userInfo.email}
              onChangeText={(email) => setUserInfo({ ...userInfo, email })}
            />
          </View>
          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Holders Name</Text>
              <Text style={{ color: colors.Orange }}>*</Text>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Customer Account Name"
              placeholderTextColor={colors.neural300}
              value={userInfo.email}
              onChangeText={(email) => setUserInfo({ ...userInfo, email })}
            />
          </View>


          <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 70, height: 56, width: 350, alignItems: "center", padding: 10,paddingTop: 12,marginLeft:-10}} onPress={()=>navigation.navigate("transpin")} >
              <Text style={styles.buttonText}>Save Account</Text>
            </TouchableOpacity>
  
    </View>
    </View>

     
  )
}

 const styles = StyleSheet.create({
    
  backbtncontainer:{
   
    position:"absolute",
    display:"flex",
    flexDirection:"row",
    zIndex:10,
    padding:20,
    marginTop:-90
  
 
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
   
  buttonText:{padding:10,paddingTop:3,
    color:colors.white,
    size:16,
    lineHeight:21.6,
    fontWeight:"700"
    },
    
   input1: {
    // padding: 5,
     borderWidth: 1,
     borderRightWidth:0,
     width:310,
     height:56
     ,marginTop:-21,
    // marginVertical: 20,
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8,
    // borderRadius:8,
     borderColor:colors.neural200,
   },
 })