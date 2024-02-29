import { View, Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native";
import { Notify } from '../JSON AND COLOR/Data';
import colors from '../JSON AND COLOR/colors';
import { Ionicons } from '@expo/vector-icons';

export default function Notificationscreen() {
   const navigation=useNavigation();
 
  return (
    <View style={{ backgroundColor:colors.background, padding:19,flex:1 }}>
       <TouchableOpacity style={styles.backbtncontainer}   onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:colors.Textcolor,marginLeft:90}}>Notification</Text>
            </TouchableOpacity>
            {Notify ?.length>0?    <FlatList
                data={Notify}
                style={{marginTop:95,backgroundColor:colors.background,height:700,width:315.5,gap:28,padding:16,borderRadius:8}}
                renderItem={({ item, index }) =>(
                  <TouchableOpacity style={styles.container2} onPress={()=>navigation.push("nairatrans",{item:item})}>
                  <View style={styles.subcontainer}>
                      <Text style={{fontWeight:"700",color:colors.Textcolor,fontSize:16,height:22,gap:10}}>{item.pin}</Text>
                      <Text style={{fontFamily:"outfit-bold",fontSize:12,fontWeight:"500",color:colors.neuralblack,width:295}}>{item.message}</Text>
                      <Text style={{fontFamily:"outfit-bold",fontSize:12,fontWeight:"500",lineHeight:16.2,color:colors.Orange}}>{item.date}</Text>
                
                  </View>
             </TouchableOpacity>
          
                    )} /> : <View style={{backgroundColor:colors.white,height:320,width:380}}>
                    <Image source={require("../image1/img.png")} style={{width:176,height:176,opacity:"80%"}} />
            <Text style={{fontSize:24,fontWeight:"700",color:"#000000"}}>No transaction</Text>
            <Text style={{fontSize:14,fontWeight:"700",color:colors.Textcolor}}>You’ve not made any transaction</Text>
                </View> }
    </View>
  )
}

const styles = StyleSheet.create({
  container2:{
    height:98,
    width:275,
  },
  
  backbtncontainer:{
   
    position:"absolute",
    display:"flex",
    flexDirection:"row",
    zIndex:10,
    padding:20,
    marginTop:50
  
 
},

})