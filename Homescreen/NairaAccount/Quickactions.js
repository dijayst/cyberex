import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import colors from '../JSON AND COLOR/colors'

export default function Quickactions({text,isViewAll=false}) {
return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
            {isViewAll && <Text style={{fontSize:16,color:colors.Orange,fontWeight:"700",lineHeight:21.6}}>See all</Text>}
    </View>
  )
}


const styles=StyleSheet.create({  
  container:{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      marginTop:-9,
marginBottom:-25,
//backgroundColor:"blue",
width:"90%",
//marginLeft:22

  },
  heading:{
      fontWeight:"700",
      fontSize:16,
    //  fontFamily:"outfit-medium",
   // width:"50%",
      //marginBottom:-20,
      marginTop:10,
      padding:12,
  },

})