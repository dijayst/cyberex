import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import colors from '../JSON AND COLOR/colors';

export default function Recieve({navigation}) {
  return (
    <View  style={{ backgroundColor:colors.background,padding:18,marginTop:150}}>
         <TouchableOpacity style={styles.backbtncontainer}   onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:colors.Textcolor,marginLeft:90}}>Receive BTC</Text>
            </TouchableOpacity>
          <Text style={{color:"#000000",fontSize:16,fontWeight:"700",lineHeight:21.6}}>Scan QR Code</Text>
          <Image source={require("../image1/download.png")} style={styles.userimage} />
             
      <Text style={{color:"#000000",fontSize:16,fontWeight:"700",lineHeight:21.6,marginTop:19}}>or copy address</Text>
    
    <TouchableOpacity style={{ backgroundColor:colors.white, borderRadius: 8, marginTop: 20, height: 56, width: 350, alignItems: "center", padding: 15 }}>
    <Text style={{color:"#000000",fontSize:14,fontWeight:"500",lineHeight:18.9}}>5x26gf4648274fvwjs78evjsdhbvc45afrg34<Ionicons name="copy-sharp" size={16} color={colors.Orange}  /></Text>
    </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 30, height: 56, width: 350, alignItems: "center", padding: 10 }} >
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
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

userimage:{
    width:302,
    height:270,
    marginLeft:24,
    marginTop:90
  
   
  },
  buttonText: { 
    color: colors.white, 
    lineHeight:26,
    fontWeight:"600",
    fontSize: 16,
   
},
})