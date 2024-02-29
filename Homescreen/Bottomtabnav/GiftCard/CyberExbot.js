import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../JSON AND COLOR/colors'

import { Ionicons,Entypo } from '@expo/vector-icons';

export default function CyberExbot() {
  return (
    <View style={{ backgroundColor:colors.background,flex:1}}>
     <View style={{backgroundColor:colors.white,width:"100%",height:136}}>
            <TouchableOpacity style={styles.backbtncontainer}   onPress={()=>navigation.goBack()}>
           
            <Ionicons name="arrow-back" size={24} color={colors.Textcolor} />
            </TouchableOpacity>
             <View style={styles.container2}>
             <View style={{backgroundColor:colors.Imagecolor,width:44,height:44,borderRadius:28,justifyContent:"center",alignItems:"center"}}>
       <Image source={require("./img1/image8-2.webp")} style={styles.image} />
                 </View>
                  <View style={styles.subcontainer}>
                      <Text style={{fontWeight:"700",color:"#000000",fontSize:16,height:22,gap:10}}>Bitcoin</Text>
                     <View style={{flexDirection:"row",marginLeft:-15,marginTop:5,height:26,width:105}}>
                     <View style={{marginTop:-8,}}>
                      <Entypo name="dot-single" size={34} color="#009400" /> 
                     </View> 
                      <Text style={{ color:"#72777A",fontSize:12,fontWeight:"500"}}>Always Active</Text>
                    </View>
                        </View>
                        
             <Entypo name="dots-three-vertical" size={24} color="#1C1B1F" style={{marginLeft:170,marginTop:14}} />
             </View>
            </View>
      
      
    </View>
  )
}


const styles = StyleSheet.create({
  
container2:{
  //backgroundColor:colors.white,
  flexDirection:"row",
  width:300,
  height:81,
   //borderRadius:8,
   //padding:6,
  // paddingTop:9,
   marginLeft:50,
   marginTop:68
},
image:{width:24,
  height:24,
borderRadius:21,


},
subcontainer:{
  flexDirection:"column",
  width:92,
  height:42,
  gap:8,
  //backgroundColor:"green",
 marginLeft:3,
},
backbtncontainer:{
   display:"flex",
  position:"absolute",
  flexDirection:"row",
  //zIndex:10,
  marginRight:20,
  padding:20,
  marginTop:60


}
})



