import { View, Text,TouchableOpacity,Image,StyleSheet,useWindowDimensions } from 'react-native'
import React, { useContext } from 'react'
import colors from '../../JSON AND COLOR/colors'
import { ThemeContext } from '../../Theme/ThemeContext'

export default function Giftcard({navigation}) {
  
const theme=useContext(ThemeContext)
  const windowWidth=useWindowDimensions().width
  const windowheight=useWindowDimensions().height
  return (
    
<View style={{ padding:39,backgroundColor:theme.backgroundColor}}>
      <View style={{justifyContent:"center",alignItems:"center",marginTop:60}}>
      <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:"#000000"}}>Trade Giftcard</Text>
      </View>
      <View style={{marginTop:9}}>
      <View style={{height:320,width:350,marginLeft:-15,alignItems: 'center',justifyContent:"center",marginTop:161,gap:24}}>
      <Image source={require("./img1/7cd64e7eeb4ed7f62d61265fda1f16db.png")} style={{width:260,height:283,}} />

     <Text  style={{fontSize:24,fontWeight:"700",color:"#000000",lineHeight:26}}>Trade Giftcard</Text>
<Text style={{fontSize:14,fontWeight:"500",color:colors.neuralblack,lineHeight:22,width:317,height:44,textAlign:"center"}}>Explore a diverse range of gift cards from popular brands, offering you flexibility and choice.</Text>
  </View>
<TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 70, height: 56, width: 350, alignItems: "center", padding: 10,paddingTop: 9,marginLeft:-10}} onPress={()=>navigation.navigate("giftcard")} >
<Text style={styles.buttonText}>Trade Giftcard</Text>
</TouchableOpacity>
    </View>
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
})