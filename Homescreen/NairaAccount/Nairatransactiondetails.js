import { View, Text,Image,TouchableOpacity,StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons,FontAwesome6 } from '@expo/vector-icons';
import colors from '../JSON AND COLOR/colors';

export default function Nairatransactiondetails({navigation,route,windowWidth, windowheight}) {
    const {price,Status,recipientnaira,transactionref,Charges,date,description}=route.params.item;
 
  return (
    <View style={{padding:16,width:windowWidth>400? 375:392}}>
        <TouchableOpacity style={styles.backbtncontainer}   onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:colors.Textcolor,marginLeft:90}}>Transaction Details</Text>
            </TouchableOpacity>
            <View style={{marginTop:windowheight>800? 90:90,alignItems: 'center',justifyContent:"center",}}>
                <Text style={{fontSize:32,fontWeight:"700",lineHeight:43.2}}>{price}</Text>
                 </View>
   <View style={{backgroundColor:colors.white,display:"flex",marginTop:50,borderRadius:8,padding:16}}>
    <View style={{flexDirection:"row",height:22,width:318}}>
        <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:"#000000"}}>DATE </Text>
    <Text style={{marginLeft:windowheight>800? 190:175,fontSize:14,fontWeight:"700",lineHeight:18.9,color:colors.neural800}}>{date}</Text>
    </View>
    <View style={{flexDirection:"row",height:22,width:318,marginTop:15}}>
        <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:"#000000"}}>Status</Text>
        <Text style={{marginLeft:windowheight>800? 229:215,color:colors.textgreen,fontSize:14,fontWeight:"700",lineHeight:18.9}}>{Status}</Text>
    </View>
    <View style={{flexDirection:"row",height:22,width:318,marginTop:19,}}>
        <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:"#000000"}}>Recipient</Text>
    <Text style={{marginLeft:windowheight>800? 110:85,color:colors.neural800,fontSize:14,fontWeight:"700",lineHeight:18.9}}>{recipientnaira}</Text>
    </View>
   </View>

   <View style={{backgroundColor:colors.white,display:"flex",marginTop:30,borderRadius:8,padding:16,}}>
    <View style={{flexDirection:"row",height:22,width:318,}}>
        <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:"#000000"}}>Transaction Ref</Text>
    <Text  style={{marginLeft:windowheight>800? 100:80,color:colors.neural800,fontSize:14,fontWeight:"700",lineHeight:18.9}}>{transactionref}</Text>
    </View>
    <View style={{flexDirection:"row",height:22,width:318,marginTop:15}}>
        <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:"#000000"}}>Charges</Text>
    <Text style={{marginLeft:windowheight>800? 240:223,color:"#000000",fontSize:14,fontWeight:"700",lineHeight:18.9}}>{Charges}</Text>
    </View>
    <View style={{flexDirection:"row",height:22,width:318,marginTop:19}}>
        <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:"#000000"}}>Description</Text>
    <Text  style={{marginLeft:windowheight>800? 240:223,color:colors.neural800,fontSize:12,fontWeight:"700",lineHeight:16.2}}>{description}</Text></View>
   </View>
   <TouchableOpacity style={{ backgroundColor: colors.Orange, borderRadius: 8, marginTop: 20, height: windowheight>800? 56:56, alignItems: "center", padding: 10 }}>
            <Text style={styles.buttonText}>Share Reciept</Text>
          </TouchableOpacity>

             <Text style={{color:colors.Orange,fontSize:14,lineHeight:18.9,fontWeight:"700",marginLeft:130,marginTop:30}}>report an issue</Text>
         
    </View>
  )
}




const styles = StyleSheet.create({
    buttonText:{padding:10,
    color:colors.white,
    size:16,
    lineHeight:21.6,
    fontWeight:"700"
    },
    image:{
        width:"100%",
        height:300
    },
    backbtncontainer:{
        position:"absolute",
        display:"flex",
        flexDirection:"row",
        zIndex:10,
        padding:20,
        marginTop:50
    },
    
jsicon:{
    display:"flex",
    flexWrap:"wrap",
    flexDirection:"row",
    //justifyContent:"flex-start",
  marginRight:130
    },
    infocontainer:{
        padding:20,
        display:"flex",
        gap:-5,
        marginTop:5
    },
    subcontainer:{
        display:"flex",
        flexDirection:"column",
        gap:5,
        alignContent:"center",
    },
    bookingbtn:{
        padding:10,
        backgroundColor:"#8E3FFF",
        borderWidth:1,
        borderRadius:99,
        borderColor:"#8E3FFF",
        flex:1
    }
})