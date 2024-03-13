import { View, Text, TouchableOpacity,StyleSheet,FlatList,Image } from 'react-native'
import React from 'react'
import colors from '../../JSON AND COLOR/colors'
import Quickactions from '../../NairaAccount/Quickactions'
import { print } from '../../JSON AND COLOR/Data'

export default function Tradegiftcard() {

    const Colors = ['#1F2223','#009400']; // Define your colors here

  return (
    <View style={{ backgroundColor:colors.background,padding:11}}>
          <View style={{justifyContent:"center",alignItems:"center",marginTop:60,}}>
      <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:"#000000"}}>Trade Giftcard</Text>
      </View>
      <View style={{width:348,height:80,display:"flex",flexDirection:"row",gap:8,marginTop:26,marginLeft:9}}>
        <TouchableOpacity style={{width:170,height:80,borderRadius:8,backgroundColor:"#32140A",flexDirection:"column",gap:10,padding:13,}}>
            <Text style={{color:colors.white,fontSize:12,fontWeight:"500",lineHeight:16.2,marginLeft:9}}>Total Transactions</Text>
            <Text style={{color:colors.white,fontSize:22,lineHeight:29.7,fontWeight:"500",marginLeft:9}}>35</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:170,height:80,borderRadius:8,backgroundColor:"#32140A",flexDirection:"column",gap:10,padding:13,}}>
        <Text style={{color:colors.white,fontSize:12,fontWeight:"500",lineHeight:16.2,marginLeft:9}}>Total Value</Text>
            <Text style={{color:colors.white,fontSize:22,lineHeight:29.7,fontWeight:"500",marginLeft:9}}>₦50,000</Text>
        </TouchableOpacity>
      </View>
      
<TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 21, height: 56, width: 350, alignItems: "center", paddingTop: 9,marginLeft:9}}  >
<Text style={styles.buttonText}>Trade New Giftcard</Text>
</TouchableOpacity>
      <Quickactions text="Transactions"  isViewAll={true}/>

              <FlatList
                data={print.data}
                style={{marginTop:45,backgroundColor:colors.white,height:420,width:350.5,borderRadius:8,gap:28,marginLeft:9,padding:10}}
                renderItem={({ item, index }) =>(
                  <TouchableOpacity style={styles.container2} onPress={()=>navigation.push("nairatrans",{item:item})}>
                   <View style={{backgroundColor:colors.Imagecolor,width:44,height:44,borderRadius:28,justifyContent:"center",alignItems:"center",}}>
                  <Image source={item.image4} alt="img" style={styles.image}/>
                  </View>
                  <View style={styles.subcontainer}>
                      <Text style={{fontWeight:"700",color:colors.Textcolor,fontSize:16,height:22,gap:10}}>{item.tradegift}</Text>
                      <Text style={{fontSize:13,color:colors.neuralblack}}>{item.time}</Text>
                  </View>
                  <Text style={{color:colors.Greeen,lineHeight:10.8,fontSize:8,fontWeight:"500",marginTop:29,marginLeft:-30}}>Approved</Text>
                  <View style={styles.subcontainer2}>
                      <Text style={{fontWeight:"700",color:colors.Textcolor,fontSize:16,height:22,gap:10}}>₦100,000</Text>
                      <Text style={{fontSize:13,color:colors.neuralblack}}>1 unit = $185.00</Text>
                  </View>
                
                        </TouchableOpacity>
          
                    )} /> 
    </View>
  )
}

const styles = StyleSheet.create({
    
  buttonText:{padding:10,
    color:colors.white,
    size:16,
    lineHeight:21.6,
    fontWeight:"700"
    }
    ,container2:{
    // backgroundColor:"red",
    marginTop:9,
    marginBottom:9,
        flexDirection:"row",
        width:316,
        height:61,
        
     }, subcontainer:{
        display:"flex",
        flexDirection:"column",
        width:111,
        height:42,
        gap:2,
        marginLeft:3,},
        
    image:{width:42,
        height:42,
    borderRadius:21,
    
    
    }, subcontainer2:{
        display:"flex",
        flexDirection:"column",
        width:111,
        height:42,
        gap:2,
        marginLeft:68,},
})
