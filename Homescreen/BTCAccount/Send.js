import { View, Text,TouchableOpacity,Image,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import { Ionicons,AntDesign,Entypo } from '@expo/vector-icons';
import colors from '../JSON AND COLOR/colors';



export default function Send({navigation}) {
  

  return (
    <View  style={{ backgroundColor:colors.background,padding:28,marginTop:150,flex:1}}>
        <TouchableOpacity style={styles.backbtncontainer}   onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:colors.Textcolor,marginLeft:90}}>Send BTC</Text>
            </TouchableOpacity>
      
       <View style={styles.container2}>
       <Image source={require("../image1/image8-2.webp")} style={styles.image} />
                 <View style={styles.subcontainer}>
                      <Text style={{fontWeight:"700",color:"#000000",fontSize:16,height:22,gap:10}}>Bitcoin</Text>
                      <Text style={{ color:"#000000",marginLeft:119,fontSize:16,fontWeight:"700"}}>Available Balance</Text>
                        </View>
                  <View style={styles.subcontainer}>
                      <Text style={{fontFamily:"outfit-bold",fontSize:14,color:colors.neural800,fontWeight:"700",marginTop:26,marginLeft:-318}}>BTC</Text>
                    <Text style={{ marginLeft:170,color:colors.neuralblack,fontSize:14,fontWeight:"700",lineHeight:16.2,marginTop:26,}}>0 BTC ($0.00)</Text>
                     </View>
             </View>

             <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86,marginTop:30 }}>
             <View style={{flexDirection:"row", alignItems: "flex-start", gap: 8, width: 350, height: 86,marginTop:30 }}>
                <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 , marginTop: 5}}>Enter Amount (BTC)</Text>
              <TextInput
              style={styles.input}
              placeholder="Enter Amount"
              />
                <View style={{ borderWidth: 1, borderColor: colors.neural200, height: 56, width: 40, borderTopRightRadius: 8, borderBottomRightRadius: 8,borderLeftWidth:0, marginTop: 34,marginLeft:-8  }}>
         <Text style={{ justifyContent: "center",color:colors.Orange,fontSize:14,fontWeight:"700",lineHeight:18.9,paddingTop:15}}>max</Text>
            </View>
            </View>
              <Image source={require("../image1/image8-2.webp")} style={{zIndex:1,width:32,height:32,borderRadius:21,marginTop:-11,marginLeft:160}} />
               <TextInput
              style={styles.input2}
              placeholder="Price"
              />
          </View>
          <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, width: 350, height: 86,marginTop:140 }}>
                <Text style={{ fontWeight: "600", color: colors.Textcolor, lineHeight: 19.2, fontSize: 16 }}>Enter Address</Text>
                <View style={{flexDirection:"row"}}>
              <TextInput
              style={styles.input3}
              placeholder="Enter BTC Address"
              />
                <View style={{ borderWidth: 1, borderColor: colors.neural200, height: 56, width: 40, borderTopRightRadius: 8, borderBottomRightRadius: 8,borderLeftWidth:0,  }}>
               <Entypo style={{ justifyContent: "center", marginTop: 16, }} name="address" size={24} color={colors.Orange} />
            </View>
            </View>
          </View>
          <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 30, height: 56, width: 360, alignItems: "center", padding: 10}} onPress={() => navigation.navigate("successful")} >
              <Text style={styles.buttonText}>Send</Text>
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
  gap:8,
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
     borderRightWidth:0,
     width:310,
     height:56
     ,marginTop:34,marginLeft:-150,
    // marginVertical: 20,
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8,
    // borderRadius:8,
     borderColor:colors.neural200,
   },
   input2: {
     // padding: 5,
      borderWidth: 1,
      width:350,
      height:56,
      marginTop:-19,
     // marginVertical: 20,
      borderRadius:8,
      borderColor:colors.neural200,
    },
    input3: {
      // padding: 5,
       borderWidth: 1,
       borderRightWidth:0,
       width:310,
       height:56,
       //,marginTop:30,marginLeft:-60,
      // marginVertical: 20,
      borderTopLeftRadius:8,
      borderBottomLeftRadius:8,
      // borderRadius:8,
       borderColor:colors.neural200,
     },
  buttonText: { 
    color: colors.white, 
    lineHeight:26,
    fontWeight:"600",
    fontSize: 16,
   
},
})