import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React, { useContext } from 'react'
import colors from '../JSON AND COLOR/colors'
import { ThemeContext } from '../Theme/ThemeContext'

export default function Support() {
  
const theme=useContext(ThemeContext)
  return (
    <View style={{ backgroundColor:theme.backgroundColor,padding:19,flex:1}}>
      <View style={{justifyContent:"center",alignItems:"center",marginTop:60}}>
      <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:"#000000"}}>Contact & Support</Text>
      </View>
     
       <View style={{width:348,height:80,display:"flex",gap:8,marginTop:26,marginLeft:9}}>
       <View style={{flexDirection:"row",gap:8}}>
         <View style={{width:171,height:175,borderRadius:4,backgroundColor:colors.white,flexDirection:"column",gap:10,padding:15,paddingLeft:25,}}>
         <Image source={require("../image1/download (3).png")} style={{width:50,height:50.24,marginLeft:-4}} />
            <Text style={{color:"#000000",fontSize:14,lineHeight:18.9,fontWeight:"700",marginLeft:-4}}>contact via email</Text>
            <TouchableOpacity style={{ backgroundColor:colors.Orange,  borderRadius: 4, marginTop: -5, height: 32, width: 139, alignItems: "center", padding: 10,paddingTop: 5,marginLeft:-10}}  >
<Text style={styles.buttonText}>Contact Us</Text>
</TouchableOpacity>

        </View>
       
       
        <View style={{width:171,height:175,borderRadius:4,backgroundColor:colors.white,flexDirection:"column",gap:10,padding:15,paddingLeft:25}}>
        <Image source={require("../image1/download (1).png")} style={{width:50,height:50.24,marginLeft:-4}} />

            <Text style={{color:"#000000",fontSize:14,lineHeight:18.9,fontWeight:"700",marginLeft:-4}}>contact via email</Text>
            <TouchableOpacity style={{ backgroundColor:colors.Orange,  borderRadius: 4, marginTop: -5, height: 32, width: 139, alignItems: "center", padding: 10,paddingTop: 5,marginLeft:-10}}  >
<Text style={styles.buttonText}>Contact Us</Text>
</TouchableOpacity>

        </View>
        </View>
      
        <View style={{flexDirection:"row",gap:8}}>
        <View style={{width:171,height:175,borderRadius:4,backgroundColor:colors.white,flexDirection:"column",gap:10,padding:15,paddingLeft:25}}>
        <Image source={require("../image1/IG.webp")} style={{width:50,height:50.24,marginLeft:-4}} />
            <Text style={{color:"#000000",fontSize:14,lineHeight:18.9,fontWeight:"700",marginLeft:-4}}>contact via email</Text>
            <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 4, marginTop: -5, height: 32, width: 139, alignItems: "center", padding: 10,paddingTop: 5,marginLeft:-10}}  >
<Text style={styles.buttonText}>Contact Us</Text>
</TouchableOpacity>

        </View> 
       
        <View style={{width:171,height:175,borderRadius:4,backgroundColor:colors.white,flexDirection:"column",gap:10,padding:15,paddingLeft:25}}>
        <Image source={require("../image1/download (2).png")} style={{width:50,height:50.24,marginLeft:-4}} />
     <Text style={{color:"#000000",fontSize:14,lineHeight:18.9,fontWeight:"700",marginLeft:-4}}>contact via email</Text>
            <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 4, marginTop: -5, height: 32, width: 139, alignItems: "center", padding: 10,paddingTop: 5,marginLeft:-10}} >
<Text style={styles.buttonText} >Contact Us</Text>
</TouchableOpacity>

        </View>
        </View>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  
  buttonText:{
    color:colors.white,
    size:12,
    lineHeight:16.2,
    fontWeight:"700"
    },
})