import { View, Text,TouchableOpacity,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import colors from '../JSON AND COLOR/colors'
import { Ionicons } from '@expo/vector-icons';

export default function Deposit({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:colors.background,padding:19}}>
      <TouchableOpacity style={styles.backbtncontainer}   onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:colors.Textcolor,marginLeft:90}}>Deposit</Text>
            </TouchableOpacity>
      
            <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 18, width: 350, height: 178,marginTop:190, }}>
                <Text style={{ fontWeight: "700", color: colors.Textcolor, lineHeight: 21.6, fontSize: 16 }}>Amount</Text>
              <TextInput
              style={styles.input}
              placeholder="Enter Amount"
              />
             
             <View style={{gap:10}}>
              <View style={{flexDirection:"row",gap:10}}>
              <TouchableOpacity style={{backgroundColor:colors.Imagecolor,height:32,width:82,borderRadius:8,padding:8,paddingLeft:19}}>
                <Text style={{fontSize:12,fontWeight:"700",lineHeight:16.2,color:colors.Orange}}>#1000</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:colors.Imagecolor,height:32,width:82,borderRadius:8,padding:8,paddingLeft:19}}>
                <Text style={{fontSize:12,fontWeight:"700",lineHeight:16.2,color:colors.Orange}}>#2000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:colors.Imagecolor,height:32,width:82,borderRadius:8,padding:8,paddingLeft:19}}>
                <Text style={{fontSize:12,fontWeight:"700",lineHeight:16.2,color:colors.Orange}}>#5000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:colors.Imagecolor,height:32,width:82,borderRadius:8,padding:8,paddingLeft:19}}>
                <Text style={{fontSize:12,fontWeight:"700",lineHeight:16.2,color:colors.Orange}}>#10000</Text>
                </TouchableOpacity>
             
                </View>

                <View style={{flexDirection:"row",gap:10}}>
              <TouchableOpacity style={{backgroundColor:colors.Imagecolor,height:32,width:82,borderRadius:8,padding:8,paddingLeft:19}}>
                <Text style={{fontSize:12,fontWeight:"700",lineHeight:16.2,color:colors.Orange}}>#15000</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:colors.Imagecolor,height:32,width:82,borderRadius:8,padding:8,paddingLeft:19}}>
                <Text style={{fontSize:12,fontWeight:"700",lineHeight:16.2,color:colors.Orange}}>#20000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:colors.Imagecolor,height:32,width:82,borderRadius:8,padding:8,paddingLeft:19}}>
                <Text style={{fontSize:12,fontWeight:"700",lineHeight:16.2,color:colors.Orange}}>#50000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:colors.Imagecolor,height:32,width:82,borderRadius:8,padding:8,paddingLeft:19}}>
                <Text style={{fontSize:12,fontWeight:"700",lineHeight:16.2,color:colors.Orange}}>#100000</Text>
                </TouchableOpacity>
             
                </View>

             
             </View>
          </View>

          <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 190, height: 64, width: 360, alignItems: "center", padding: 10,marginLeft:10}} >
              <Text style={styles.buttonText}>Deposit</Text>
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
    marginTop:90
  
 
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
 
 buttonText: { 
  color: colors.white, 
  lineHeight:26,
  fontWeight:"600",
  fontSize: 16,
  padding:8
 
},
})