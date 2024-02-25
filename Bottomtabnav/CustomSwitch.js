import React, {useState} from 'react';
import {View, Text, Image,StyleSheet,TouchableOpacity} from 'react-native';
import colors from '../color/colors';

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  option3,
  option4,
  onSelectSwitch,
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View
      style={{
        marginTop:-20,
        height: 130,
          width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderColor: '#AD40AF',
        flexDirection: 'row',
        justifyContent: 'center',
        gap:25
      }}>



        <View style={{ marginTop:20,
          marginBottom:20,}}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
           backgroundColor:'#FFFFFF',
           width:70,
          borderColor: getSelectionMode == 1 ?   '#FF6C00':'#FFFFFF',
          flex: 1,
           borderRadius: 17,
          justifyContent: 'center',
          borderStyle:'dotted',
          alignItems: 'center',
          borderWidth:2
        }}>
         <View style={{backgroundColor:colors.Imagecolor,width:44,height:44,borderRadius:28}}>
          <Image style={styles.userimage} source={require("../image1/image8-2.webp")}/></View>
     
            </TouchableOpacity>
      <View>
      <Text
          style={{
            color:colors.Textcolor,
            fontSize: 14,
           fontWeight:700,
            fontFamily: 'Roboto-Medium',
          }}ellipsizeMode='tail'>
          {option1}
        </Text>
      </View>
      </View>











      <View style={{ marginTop:20,
          marginBottom:20
        }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          width:70,
          backgroundColor:'#FFFFFF',
          borderColor: getSelectionMode == 2 ?   '#FF6C00':'#FFFFFF',
          borderRadius: 17,
          justifyContent: 'center',
          borderStyle:'dotted',
          alignItems: 'center',
         
          borderWidth:2
        }}>
          <View style={{backgroundColor:colors.Imagecolor,width:44,height:44,borderRadius:28}}>
          <Image style={styles.userimage} source={require("../image1/image8-2.webp")}/></View>
      </TouchableOpacity>
      <View>
      <Text
          style={{
            color:colors.Textcolor,
            fontSize: 14,
            fontWeight:"bold",
            fontFamily: 'Roboto-Medium',
          }}>
          {option2}
        </Text>
      </View>
      </View>
      
      
      
      
      
      
      
      
      
      
      
      
      
      <View style={{ marginTop:20,
          marginBottom:20
        }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(3)}
        style={{
          backgroundColor:'#FFFFFF',
          borderColor: getSelectionMode == 3 ?   '#FF6C00':'#FFFFFF',
          flex: 1,
          borderRadius: 17,
          width:70,
           justifyContent: 'center',
          borderStyle:'dotted',
          alignItems: 'center',
          borderWidth:2
        }}>
         <View style={{backgroundColor:colors.Imagecolor,width:44,height:44,borderRadius:28,}}>
          <Image style={styles.userimage} source={require("../image1/image8-2.webp")}/></View>
     
          </TouchableOpacity>
      <View>
      <Text
          style={{
            color:colors.Textcolor,
            fontSize: 14,
            fontWeight:"bold",
            fontFamily: 'Roboto-Medium',
          }}>
          {option3}
        </Text>
      </View>
      </View>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <View style={{ marginTop:20,
          marginBottom:20
        }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(4)}
        style={{
          backgroundColor:'#FFFFFF',
          borderColor: getSelectionMode == 4 ?   '#FF6C00':'#FFFFFF',
          flex: 1,
            borderRadius: 17,
            width:70,
            justifyContent: 'center',
          borderStyle:'dotted',
          alignItems: 'center',
          zIndex:1,
          borderWidth:2
        }}>
         <View style={{backgroundColor:colors.Imagecolor,width:44,height:44,borderRadius:28}}>
          <Image style={styles.userimage} source={require("../image1/image8-2.webp")}/></View>
     
             </TouchableOpacity>
      <View>
      <Text
          style={{
            color:colors.Textcolor,
            fontSize: 14,
            fontWeight:"bold",
            fontFamily: 'Roboto-Medium',
          }}>
          {option4}
        </Text>
      </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  subcontainer:{display:"flex",
gap:7},
  container:{padding:10,
  backgroundColor:"white",
  borderRadius:15,
  marginBottom:15,
  display:"flex",
  flexDirection:"row",
  gap:10
},

  userimage:{
  height:24,
  width:24,
  alignSelf:"center",
borderRadius:0,borderStyle:"solid",borderWidth:1,
}
})




