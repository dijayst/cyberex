import { View, Text,TouchableOpacity,StyleSheet,TextInput, Alert, } from 'react-native'
import React,{useState} from 'react'
import colors from '../JSON AND COLOR/colors'
import { Ionicons } from '@expo/vector-icons';

export default function Deposit({navigation}) {
  
  const [amount, setAmount] = useState('');

  const handledeposit=()=>{
    if (amount===""){
      Alert.alert('fill in mandatory space')
    }else{
      Alert.alert('Successful')
      navigation.navigate('home')
    }
    
  }
  const handleAmountSelection = (selectedAmount) => {
    setAmount(selectedAmount);
  };
  return (

    <View style={{}}>
      <TouchableOpacity style={styles.backbtncontainer}   onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={{fontSize:16,fontWeight:"700",lineHeight:21.6,color:colors.Textcolor,marginLeft:90}}>Deposit</Text>
            </TouchableOpacity>
      <View  style={{
 alignItems: 'center',
 justifyContent:"center",padding:9}}>
            <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 18, width: 350, height: 178,marginTop:190,padding:5 }}>
                <Text style={{ fontWeight: "700", color: colors.Textcolor, lineHeight: 21.6, fontSize: 16 }}>Amount</Text>
              <TextInput
              style={styles.input}
              placeholder="Amount(#)"
              value={amount}
              placeholderTextColor={colors.neural300}
              onChangeText={(text) => setAmount(text)}
              />
             
             <View style={{gap:10,flexDirection:"column"}}>
              <View style={{flexDirection:"row",gap:8,width:350}}>
              <TouchableOpacity style={{backgroundColor:colors.Imagecolor,height:32,width:82,borderRadius:8,padding:8,paddingLeft:19}} onPress={()=>handleAmountSelection("#1000")}>
                <Text style={{fontSize:12,fontWeight:"700",lineHeight:16.2,color:colors.Orange}}>#1000</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:colors.Imagecolor,height:32,width:82,borderRadius:8,padding:8,paddingLeft:19}} onPress={()=>handleAmountSelection("#2000")}>
                <Text style={{fontSize:12,fontWeight:"700",lineHeight:16.2,color:colors.Orange}}>#2000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:colors.Imagecolor,height:32,width:82,borderRadius:8,padding:8,paddingLeft:19}} onPress={()=>handleAmountSelection("#5000")}>
                <Text style={{fontSize:12,fontWeight:"700",lineHeight:16.2,color:colors.Orange}}>#5000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:colors.Imagecolor,height:32,width:82,borderRadius:8,padding:8,paddingLeft:19}} onPress={()=>handleAmountSelection("#10000")}>
                <Text style={{fontSize:12,fontWeight:"700",lineHeight:16.2,color:colors.Orange}}>#10000</Text>
                </TouchableOpacity>
             
                </View>

                <View style={{flexDirection:"row",gap:8,width:350}}>
              <TouchableOpacity style={{backgroundColor:colors.Imagecolor,height:32,width:82,borderRadius:8,padding:8,paddingLeft:19}}onPress={()=>handleAmountSelection("#15000")}>
                <Text style={{fontSize:12,fontWeight:"700",lineHeight:16.2,color:colors.Orange}}>#15000</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:colors.Imagecolor,height:32,width:82,borderRadius:8,padding:8,paddingLeft:19}} onPress={()=>handleAmountSelection("#20000")}>
                <Text style={{fontSize:12,fontWeight:"700",lineHeight:16.2,color:colors.Orange}}>#20000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:colors.Imagecolor,height:32,width:82,borderRadius:8,padding:8,paddingLeft:19}} onPress={()=>handleAmountSelection("#50000")}>
                <Text style={{fontSize:12,fontWeight:"700",lineHeight:16.2,color:colors.Orange}}>#50000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:colors.Imagecolor,height:32,width:82,borderRadius:8,padding:8,paddingLeft:19}} onPress={()=>handleAmountSelection("#100000")}>
                <Text style={{fontSize:12,fontWeight:"700",lineHeight:16.2,color:colors.Orange}}>#100000</Text>
                </TouchableOpacity>
             
                </View>

             
             </View>
          </View>

          <TouchableOpacity style={{ backgroundColor:colors.Orange, borderRadius: 8, marginTop: 150, height: 56, width: 350, alignItems: "center", padding: 7,marginLeft:7}} onPress={handledeposit} >
              <Text style={styles.buttonText}>Deposit</Text>
            </TouchableOpacity>
  </View>
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
   padding: 16,
   borderWidth: 1,
   width:350,
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