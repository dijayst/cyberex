import { View, Text, TouchableOpacity,Image,StyleSheet} from 'react-native'
import React from 'react'
import colors from '../JSON AND COLOR/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function Successful({navigation}) {
  return (
<View style={{flex:1,backgroundColor:colors.background}}>
    <View style={{ backgroundColor:colors.background,padding:18,marginTop:150,alignItems: 'center',justifyContent:"center",}}>
          <Image source={require("../image1/image8-2.webp")} style={styles.image} />
    

      <Text style={{color:colors.Textcolor,fontSize:24,fontWeight:"800",lineHeight:35.04, marginTop: 50}}>Successful</Text>
<Text style={{fontWeight:"400",alignContent:"center",fontSize:13,lineHeight:22,width:260,height:44,color:colors.neuralblack, marginTop: 13}}>You’ve successfully sent<Text style={{color:colors.Orange,}}> 100 BTC</Text>  to 5b6gduyewfhshdvhvs.</Text>

      <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 90, height: 56, width: 350, alignItems: "center", padding: 10 }} onPress={()=>navigation.navigate("transpin")} >
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
  
    </View>
    </View>
  )
}



const styles = StyleSheet.create({
    
    image:{width:185,
        height:185,
    borderRadius:21,
    },
    buttonText: { 
      color: colors.white, 
      lineHeight:26,
      fontWeight:"600",
      fontSize: 16,
     
  },
})