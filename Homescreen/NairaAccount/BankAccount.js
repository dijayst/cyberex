import { View, Text,Image,TouchableOpacity,StyleSheet,TextInput} from 'react-native'
import React,{useState} from 'react'
import {useNavigation} from "@react-navigation/native";
import colors from '../JSON AND COLOR/colors'
import { print } from '../JSON AND COLOR/Data';
import {Picker} from '@react-native-picker/picker';

import { Ionicons,AntDesign,Entypo } from '@expo/vector-icons';

export default function BankAccount({ windowWidth,windowheight}) {
  const navigation=useNavigation();

  const [userInfo, setUserInfo] = useState({
    Amount: "",
    description: "",
    Amountverify:"",
    descriptionverify:""
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
  
  const handledescription=(val)=>{
    if(userInfo.description.length<400){
      setuserInfo({...userInfo,description:val,descriptionverify:true})
    }else{
      setuserInfo({...userInfo,description:val,descriptionverify:false})
    }
      }
    
    const handleamount=(val)=>{
       if(userInfo.amount.length>4){
        setuserInfo({...userInfo,referancecode:val,amountverify:true});
      }else{
        setuserInfo({...userInfo,referancecode:val,amountverify:false});
      }
    
    }

  const [emptyinput, setemptyinput] = useState(["hjgh"]);
  
  const [selectedValue, setSelectedValue] = useState("");

  console.log(selectedValue)
  return (
    <View  style={{padding:windowWidth>400?16:2}}>
      {emptyinput.length>0 ?
      <View >
       <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, height: 86, }}>
            <View style={{  flexDirection: "row" }}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16,marginLeft:-10 }}>Select Account</Text>
              <Text style={{ color: colors.Orange }}>*</Text>
            </View>
              <View style={{ borderWidth: 1, borderColor: colors.neural200, height: 56, width: 350, marginTop:-5,marginLeft:-10,borderRadius:8  }}>
             
             <Picker
        selectedValue={selectedValue}
        style={{color:colors.neural300}}
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
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16,marginLeft:-10 }}>Amount</Text>
              <Text style={{ color: colors.Orange }}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Amount to deposit"
              
              placeholderTextColor={colors.neural300}
              value={userInfo.Amount}
              onChangeText={(val=>handleamount(val))}
            />
          </View>

          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16,marginLeft:-10 }}>Description</Text>
              <Text style={{ color: colors.Orange }}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Desc"
              value={userInfo.description}
              
              placeholderTextColor={colors.neural300}
              onChangeText={(val) => handledescription(val)}
            />
           </View>

          <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 70, height: 56, width: 350, alignItems: "center", padding: 10,paddingTop: 10,marginLeft:-10}} onPress={handleaccount} >
              <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
          </View>
          

          
          :
      <View style={{width:350,alignItems: 'center',justifyContent:"center",marginTop:90,height:windowWidth>400? 375.5:'60%',}}>
       
                        <Image source={require("../image1/121ae49d6d59c5c625c765250127d215.png")} style={{width:181.05,height:216.79,}} />
                <Text  style={{fontSize:24,fontWeight:"700",color:"#000000",lineHeight:26}}>No Linked Account</Text>
                <Text style={{fontSize:14,fontWeight:"500",color:colors.neuralblack,lineHeight:22,width:279}}>To transfer to a bank account, you need to link a bank account to your wallet</Text>
                  
                <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 109, height: 56, width: 350, alignItems: "center", padding: 10,paddingTop: 9,marginLeft:-10}} onPress={()=>navigation.navigate("link",windowWidth={windowWidth} ,windowheight={windowheight})} >
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
     padding: 16,
     borderWidth: 1,
     width:350,
     height:56,
     marginLeft:-10,
     
    // marginVertical: 20,
     borderRadius:8,
     borderColor:colors.neural200,
   },
input1:{
  padding: 16,
  borderWidth: 2,
  width:350,
  height:56,
  marginLeft:-10,
  
 // marginVertical: 20,
  borderRadius:8,
  borderColor:colors.neural200,
},
   input2: {
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