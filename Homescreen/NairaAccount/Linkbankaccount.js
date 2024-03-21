import { View, Text,StyleSheet,TouchableOpacity,TextInput, } from 'react-native'
import React,{useState} from 'react'
import { Ionicons ,AntDesign} from '@expo/vector-icons';
import colors from '../JSON AND COLOR/colors';
import {Picker} from '@react-native-picker/picker'





export default function Linkbankaccount({navigation, windowWidth,windowheight}) {

    
  const [userInfo, setUserInfo] = useState({
    Accountnum: "",
    Accountname:"",
    Acctverify:"",
    Accountnameverify:""
  });

  
 const handleaccount=()=>{
  
  if (userInfo.Amount === "" ||  userInfo.description === ""||selectedValue==="" ) {
    Alert.alert("Fill in mandatory details");
    } else {
     if (
       userInfo.Amountverify &&
       userInfo.descriptionverify 
     ) {console.log("correct")
     Alert.alert("Successful");
     navigation.navigate("transpin")
    
    }
      }
 }
  const handledeacctnum=(val)=>{
    if(userInfo.Accountnum.length<4){
      setuserInfo({...userInfo,Accountnum:val,Acctverify:true})
    }else{
      setuserInfo({...userInfo,Accountnum:val,Acctverify:false})
    }
      }
    
    const handledeacctname=(val)=>{
       if(userInfo.Accountname.length>4){
        setuserInfo({...userInfo,Accountname:val,Accountnameverify:true});
      }else{
        setuserInfo({...userInfo,Accountname:val,Accountnameverify:false});
      }
    
    }
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <View style={{ padding:19,marginTop:150,flex:1}}>
      <TouchableOpacity style={styles.backbtncontainer}   onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:colors.Textcolor,marginLeft:90}}>Link BanK</Text>
            </TouchableOpacity>
        
    <View style={{gap: 20,width:350,height:260,marginLeft:windowWidth>400? 29:15,alignContent:"center",justifyContent:"center",marginTop:60}}>
     
     <View style={{ display: "flex", flexDirection: "column", gap: 8, width: 350, height: 86 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Bank Name</Text>
              <Text style={{ color: colors.Orange }}>*</Text>
            </View>
            <View style={{ borderWidth: 1, borderColor: colors.neural200, height: 56, width: 350, marginTop:-5,marginLeft:-10,borderRadius:8  }}>
               
<Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
      
      <Picker.Item  label="Select Bank Name" value="Select Bank Name" />
        <Picker.Item label="First bank" value="First bank" />
        <Picker.Item label="GTB" value="GTB" />
        <Picker.Item label="UBA" value="UBA" />
        <Picker.Item label="Diamond" value="Diamond" />
     
          </Picker>
             
          
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
              value={userInfo.Accountnum}
              onChangeText={(val) =>handledeacctnum(val)}
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
              value={userInfo.Accountname}
              onChangeText={(val) => handledeacctname(val)}
            />
          </View>


          <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 70, height: 56, width: 350, alignItems: "center", padding: 10,paddingTop: 12,marginLeft:-10}} onPress={handleaccount} >
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
    
   input1: {
     padding: 16,
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

 /*
 <TextInput
              style={styles.input1}
              placeholder="Select Bank Name"
              value={userInfo.name}
              placeholderTextColor={colors.neural300}
              onChangeText={(name) => setUserInfo({ ...userInfo, name })}
            />

 */