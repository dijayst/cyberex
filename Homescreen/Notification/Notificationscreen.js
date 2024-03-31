import { View, Text,StyleSheet,TouchableOpacity,FlatList,Image} from 'react-native'
import React ,{useState}from 'react'
import {useNavigation} from "@react-navigation/native";
import { Notify } from '../JSON AND COLOR/Data';
import colors from '../JSON AND COLOR/colors';
import { Ionicons } from '@expo/vector-icons';

export default function Notificationscreen() {
   const navigation=useNavigation();
 
    //const [Notify, setNotify] = useState(["ester"]);
   
  return (
    <View style={{ backgroundColor:colors.background, padding:19,flex:1 }}>
       <TouchableOpacity style={styles.backbtncontainer}   onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:colors.Textcolor,marginLeft:90}}>Notification</Text>
            </TouchableOpacity>


            {Notify.length >0?    <FlatList
                data={Notify}
                style={{marginTop:95,backgroundColor:colors.background,height:700,width:315.5,gap:28,padding:16,borderRadius:8}}
                renderItem={({ item, index }) =>(
                  <TouchableOpacity style={styles.container2} onPress={()=>navigation.navigate("nairatrans",{item:item})}>
                  <View style={styles.subcontainer}>
                      <Text style={{fontWeight:"700",color:colors.Textcolor,fontSize:16,height:22,gap:10}}>{item.pin}</Text>
                      <Text style={{fontSize:12,fontWeight:"500",color:colors.neuralblack,width:295}}>{item.message}</Text>
                      <Text style={{fontSize:12,fontWeight:"500",lineHeight:16.2,color:colors.Orange}}>{item.date}</Text>
                
                  </View>
             </TouchableOpacity>
          
                    )} /> :

            <View style={{ backgroundColor:colors.background,padding:18,marginTop:150,alignItems: 'center',justifyContent:"center",}}>
          <Image source={require("../image1/ICONS/Notification bell 3d cartoon style icon on white background  copy 1.png")} style={styles.image} />
    

      <Text style={{color:colors.Textcolor,fontSize:24,fontWeight:"800",lineHeight:35.04, marginTop: 50}}>No new notification</Text>
<Text style={{fontWeight:"400",alignContent:"center",fontSize:13,lineHeight:22,width:315,height:44,color:colors.neuralblack, marginTop: 13}}>You don’t have any new notification at this time</Text>

      <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 90, height: 56, width: 350, alignItems: "center", padding: 10 }} onPress={()=>navigation.navigate("home")} >
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
  
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
    marginTop:50,
  
 
},

image:{width:202,
  height:211,
//borderRadius:21,
},
buttonText: { 
color: colors.white, 
lineHeight:26,
fontWeight:"600",
fontSize: 16,

},
})





/* {Notify ?.length>0?    <FlatList
                data={Notify}
                style={{marginTop:95,backgroundColor:colors.background,height:700,width:315.5,gap:28,padding:16,borderRadius:8}}
                renderItem={({ item, index }) =>(
                  <TouchableOpacity style={styles.container2} onPress={()=>navigation.navigate("nairatrans",{item:item})}>
                  <View style={styles.subcontainer}>
                      <Text style={{fontWeight:"700",color:colors.Textcolor,fontSize:16,height:22,gap:10}}>{item.pin}</Text>
                      <Text style={{fontSize:12,fontWeight:"500",color:colors.neuralblack,width:295}}>{item.message}</Text>
                      <Text style={{fontSize:12,fontWeight:"500",lineHeight:16.2,color:colors.Orange}}>{item.date}</Text>
                
                  </View>
             </TouchableOpacity>
          
                    )} /> :
                    */