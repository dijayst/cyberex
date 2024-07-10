import React, {useState} from 'react';
import {View, Text, Image,StyleSheet,TouchableOpacity} from 'react-native';
import colors from '../JSON AND COLOR/colors';

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  onSelectSwitch
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
   
      <View style={{display:"flex",flexDirection:"row",marginTop:19,height:44,backgroundColor:colors.white,borderRadius:32}}>
            <TouchableOpacity   activeOpacity={1} style={{backgroundColor:getSelectionMode==1?colors.Orange:colors.white,borderRadius:32,width:180,height:44,padding:9,paddingLeft:39}} onPress={()=>{updateSwitchData(1)}}>
                <Text style={{fontWeight:"700",fontSize:14,lineHeight:18.9,color:getSelectionMode==1?colors.white:colors.neuralblack}}>{option1}</Text>
                </TouchableOpacity>
              <TouchableOpacity   activeOpacity={1} style={{backgroundColor:getSelectionMode==2 ?colors.Orange:colors.white,borderRadius:32,width:180,height:44,padding:9,paddingLeft:39}} onPress={()=>{updateSwitchData(2)}}>
                <Text style={{fontWeight:"700",fontSize:14,lineHeight:18.9,color:getSelectionMode==2?colors.white:colors.neuralblack}}>{option2}</Text>
                </TouchableOpacity>
        
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
  height:60,
  width:60,
  backgroundColor:"#FFFFFF",
borderRadius:17,borderStyle:"solid",borderWidth:1,
}
})




//clickcolor ? setclickcolor(false):setclickcolor(true)