import { View, Text,TouchableOpacity,Image,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import colors from '../JSON AND COLOR/colors';



export default function Sell({navigation}) {
  

  return (
    <View  style={{ backgroundColor:colors.background,padding:28,marginTop:150}}>
        <TouchableOpacity style={styles.backbtncontainer}   onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:colors.Textcolor,marginLeft:90}}>Sell BTC</Text>
            </TouchableOpacity>
      
       <View style={styles.container2}>
       <Image source={require("../image1/image8-2.webp")} style={styles.image} />
                  <View style={styles.subcontainer}>
                      <Text style={{fontWeight:"700",color:"#000000",fontSize:16,height:22,gap:10}}>Bitcoin</Text>
                      <Text style={{ color:"#000000",marginLeft:119,fontSize:16,fontWeight:"700"}}>Available Balance</Text>
                        </View>
                  <View style={styles.subcontainer}>
                      <Text style={{fontFamily:"outfit-bold",fontSize:14,color:colors.neural800,fontWeight:"700",marginTop:26,marginLeft:-318}}>BTC</Text>
                    <Text style={{ marginLeft:180,color:colors.neuralblack,fontSize:14,fontWeight:"700",lineHeight:16.2,marginTop:26,}}>0 BTC ($0.00)</Text>
                     </View>
             </View>

             <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86,marginTop:30 }}>
                <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Enter Amount (BTC)</Text>
              <TextInput
              style={styles.input}
              placeholder="Enter Amount"
              />
              <Image source={require("../image1/image8-2.webp")} style={{zIndex:1,width:32,height:32,borderRadius:21,marginTop:-11,marginLeft:160}} />
               <TextInput
              style={styles.input2}
              placeholder="Price"
              />
          </View>
         
          <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 190, height: 56, width: 360, alignItems: "center", padding: 10}} onPress={() => navigation.navigate("sellsuccess")} >
              <Text style={styles.buttonText}>Sell</Text>
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
container:{
  width:74,
  height:69,
  alignItems: 'center',
  justifyContent:"center",
   //textAlign:"center",
   //marginRight:5,
   marginLeft:15,gap:6,
   //height:50,
   //backgroundColor:"red",
   marginTop:19
   //padding:5,
   //borderRadius:15
       } , subcontainer:{
        display:"flex",
        flexDirection:"row",
        width:318,
        height:42,
        //gap:8,
       // backgroundColor:"green",
       marginLeft:3,
      },
      
    image:{width:38,
      height:38,
  borderRadius:21,
  
  
  },
  
  input: {
    // padding: 5,
     borderWidth: 1,
     width:360,
     height:56,
    // marginVertical: 20,
     borderRadius:8,
     borderColor:colors.neural200,
   },
   input2: {
     // padding: 5,
      borderWidth: 1,
      width:360,
      height:56,
      marginTop:-19,
     // marginVertical: 20,
      borderRadius:8,
      borderColor:colors.neural200,
    },
    
  buttonText: { 
    color: colors.white, 
    lineHeight:26,
    fontWeight:"600",
    fontSize: 16,
    padding:8
   
},
})