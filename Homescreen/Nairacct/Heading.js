import { View, Text,StyleSheet,TextInput,Image, TouchableOpacity, Modal } from 'react-native'
import React,{useState} from 'react';
import { AntDesign,Feather,Entypo } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import Quickactions from './Quickactions';
import colors from '../JSON AND COLOR/colors';

export default function Heading ({text}) {
  const navigation=useNavigation();
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  
  const [showModal, setshowmodal] = useState(false)
  const handleshowmodal=()=>{
    setshowmodal(!showModal)
  }
console.log(showModal)
  return (
    <View style={styles.container}  onPress={()=>showModal(true)}>
      <View style={{ display: "flex", flexDirection: "row",gap:109 }}>
        <Text style={{ width: 109, height: 16, fontSize: 12, fontWeight: "500", lineHeight: 16, color: colors.neuralblack , }}>Available Balance</Text>
        <TouchableOpacity  style={{backgroundColor:colors.background,borderRadius:32,height:24,width:95,flexDirection:"row",gap:4,alignItems: 'center',justifyContent:"center",}}  onPress={handleshowmodal}>
        <Text style={{ color:colors.Textcolor, fontSize: 8.71, fontWeight: "500",}}>Naira Account</Text>
        <Entypo name="chevron-small-down" size={14} color={colors.Orange} />
        </TouchableOpacity>
       </View>

      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={{color:colors.Textcolor,lineHeight:37,fontSize:28,fontWeight:"900",width:174,height:38}}>₦500,000.00</Text>
        <AntDesign style={{ justifyContent: "center", marginTop: 4,marginLeft:9.69,height:25,width:25 }} name={isPasswordSecure ? "eye" : "eyeo"} size={24} color={colors.neural400} onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true) }} />

      </View>
      <View style={{ display: "flex", flexDirection: "row",gap:19, }}>
        <TouchableOpacity style={{backgroundColor:colors.Imagecolor,borderRadius:32,height:44,width:153,flexDirection:"row",alignItems: 'center',justifyContent:"center",}}>
          <Text style={{color:colors.Orange,textAlign:"center"}}>Add Money</Text>
          <AntDesign name="plus" size={18} color={colors.Orange} />
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:colors.Imagecolor,borderRadius:32,height:44,width:153,flexDirection:"row",alignItems: 'center',justifyContent:"center",}}>
          <Text style={{color:colors.Orange ,textAlign:"center"}}>Transfer</Text>
          <Feather name="share" size={18} color={colors.Orange} />
        </TouchableOpacity>
      </View>
      
<Modal animationType="slide"
 visible={showModal} transparent={true}>
  <View  style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:colors.white,marginTop:600,borderTopLeftRadius:32,borderTopRightRadius:32,}}>
<Quickactions  hidemodal={()=>setshowmodal(false)}/>
    <Text style={{fontSize:24,fontWeight:"700",lineHeight:32.4,color: "#000000",marginLeft:-254,}}>Accounts</Text>
   
    <View style={{display:"flex",flexDirection:"column",gap:9,padding:9}}>
    <TouchableOpacity onPress={()=>navigation.navigate("home")} style={{borderColor:colors.Orange,borderWidth:1,borderRadius:8,display:"flex",flexDirection:"row",height:72,width:360,padding:5}}>
    <Image source={require("../image1/img.png")} style={styles.userimage} />
    <View style={{flexDirection:"row",alignItems: 'center',justifyContent:"center",}}>
      <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,width:106,height:22}}>Naira Account</Text>
      <Text style={styles.price1}>₦100,000</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("btc")} style={{borderColor:colors.Orange,borderWidth:1,borderRadius:8,display:"flex",flexDirection:"row",height:72,width:360,padding:5}} >
    <Image source={require("../image1/img.png")} style={styles.userimage} />
    <View style={{flexDirection:"row",alignItems: 'center',justifyContent:"center",}}>
    <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,width:106,height:22}} >BTC Account</Text>
      <Text style={styles.price2}>0.003245 <Text style={{color:colors.Orange,fontSize:18,fontWeight:"900"}}>BTC</Text></Text>
    </View>
       </TouchableOpacity>
    </View>
  </View>
</Modal>
    </View>
  )
}


const styles =StyleSheet.create({
  container:{
    backgroundColor:colors.white,
    padding:20,
    marginTop:41,
    width:"100%",
    height:174,
  borderRadius:8
  },
  
userimage:{
  width:36,
  height:36,
  borderRadius:18,
  marginTop:15,
},
price1:{
  marginLeft:120,
  color:"#000000",fontSize:18,fontWeight:"900",
  height:24,width:128
},

price2:{
  marginLeft:90,
  color:"#000000",fontSize:18,fontWeight:"900",
  height:24,width:128
},
})