import { View, Text,StyleSheet,TouchableOpacity,Image,TextInput } from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import colors from '../JSON AND COLOR/colors';
import Tabbar from './Tabbar';

export default function Transfernaira() {
  
  const [clickcolor, setclickcolor] = useState(true);
  
  const [clickcolor2, setclickcolor2] = useState(true);
  console.log(clickcolor)

  return (
    <View style={{ backgroundColor:colors.background,padding:28,marginTop:150,flex:1}}>
      <TouchableOpacity style={styles.backbtncontainer}   onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:colors.Textcolor,marginLeft:90}}>Transfer</Text>
            </TouchableOpacity>
            
            <View style={styles.container2}>
       <Image source={require("../image1/image8-2.webp")} style={styles.image} />
                  <View style={styles.subcontainer}>
                      <Text style={{fontWeight:"700",color:"#000000",fontSize:16,height:22,gap:10}}>Bitcoin</Text>
                      <Text style={{ color:"#000000",marginLeft:119,fontSize:16,fontWeight:"700"}}>Available Balance</Text>
                        </View>
                  <View style={styles.subcontainer}>
                      <Text style={{fontFamily:"outfit-bold",fontSize:14,color:colors.neural800,fontWeight:"700",marginTop:26,marginLeft:-318}}>NGN</Text>
                    <Text style={{ marginLeft:180,color:colors.neuralblack,fontSize:14,fontWeight:"700",lineHeight:18.9,marginTop:26,}}>₦1,000,000</Text>
                     </View>
             </View>
            
             <Tabbar/>
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
  
 
}
,container2:{
  backgroundColor:colors.white,
  display:"flex",
  flexDirection:"row",
  width:360,
  height:81,
   borderRadius:8,
   padding:6,
   paddingTop:9
},

image:{width:38,
  height:38,
borderRadius:21,


},

subcontainer:{
  display:"flex",
  flexDirection:"row",
  width:318,
  height:42,
  //gap:8,
 // backgroundColor:"green",
 marginLeft:3,
},
  
})