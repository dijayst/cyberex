import React,{useEffect,useState} from 'react'
import { View, Text, FlatList ,StyleSheet,TouchableOpacity,Image} from 'react-native'
//import {useRoute,usenavigation} from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {useNavigation} from "@react-navigation/native";
import axios from "react-native-axios";
import { print } from '../Global';


export default function Billslider () {
  //  const {category}=route.params;

   //const navigation=useNavigation();
  /*  useEffect(() => {
        effect
console.log("category",param.category);
    }, [])*/


     const [whatido, setwhatido] = useState([])
   
  useEffect(() => {
   
    axios.get("http://172.20.10.2:5051/Post",)
    .then(Response=>{
   setwhatido(Response.data)
   setwhatido(Response.data.whatido)
   //setproductlist(Response.productimage)
      console.log(Response.data)
      console.log(Response.data.result)
     // console.log(Response.productimage)
      console.log("i gotten it")
    })
    .catch(error=>{
      console.log(error)
      console.log("i deny")
    })
   }, [])
    console.log(whatido)
    return (
        
  <View style={{marginTop:10,backgroundColor:"#F1F0F3",color:"black",padding:5}}>
        {print.data?.length>0? 
        <FlatList
                data={print.data}
                style={{marginTop:15}}
                renderItem={({ item, index }) =>(
                    <TouchableOpacity style={styles.container}>
                    <Image source={item.image1} alt="img" style={styles.image}/>
                    <View style={styles.subcontainer}>
                         <Text style={{fontFamily:"outfit-bold",fontSize:18,fontWeight:"bold"}}>{item.title}</Text>
                        <Text style={{fontFamily:"outfit",color:"black",fontSize:16}}>{item.description}</Text>
                        
                          <View style={{display:"flex",flexDirection:"row",gap:10,borderRadius:15,borderStyle:"solid",gap:5}}>
                         <View style={{borderRadius:5,borderStyle:"solid",borderWidth:1,display:"flex",flexDirection:"row",gap:10}}>
                         <Text>Vote</Text> 
                          <MaterialCommunityIcons name="thumb-up" size={24} color="#E15790" />
                          <MaterialCommunityIcons name="thumb-down" size={24} color="#E15790" />
                   </View>
                     <Text>posted:18/02/2024</Text>
                    
                          </View>
                         
                    
                    </View>
                      
               </TouchableOpacity>
          
                    )} />:
                    <Text style={{fontFamily:"outfit-medium",color:"black",fontSize:20,textAlign:"center",marginTop:"20%"}}>No item Found</Text>}
              
        </View>
    )
}



const styles = StyleSheet.create({
    subcontainer:{display:"flex",
gap:7},
    container:{
      padding:10,
    backgroundColor:"white",
    borderRadius:15,
    marginBottom:15,
    display:"flex",
    flexDirection:"row",
    gap:10
},

    image:{width:44,
    height:44,
borderRadius:28,
}
})








// onPress={()=>navigation.navigate("homelistitem",{item:item})}