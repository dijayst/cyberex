import { View, Text,StyleSheet,TextInput,Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react';
import { AntDesign,Feather } from '@expo/vector-icons';
import colors from '../color/colors';

export default function Heading ({text}) {
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={{ width: 95, height: 16, fontSize: 12, fontWeight: "500", lineHeight: 16, color: colors.neuralblack }}>available balance</Text>
        <Text style={{ color: colors.Textcolor, fontSize: 8.71, fontWeight: "500", height: 12, width: 56 ,marginRight:2}}>naira account</Text>
      </View>

      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text>₦500,000.00</Text>
        <AntDesign style={{ justifyContent: "center", marginTop: 16, }} name={isPasswordSecure ? "eye" : "eyeo"} size={24} color="black" onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true) }} />

      </View>
      <View>
        <TouchableOpacity><Text>add money</Text>
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity><Text>transfer</Text>
          <Feather name="share" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles =StyleSheet.create({
  container:{
    backgroundColor:colors.white,
    padding:20,
    marginTop:41,
    width:"100%",
    height:174,
  borderRadius:8
  }
})