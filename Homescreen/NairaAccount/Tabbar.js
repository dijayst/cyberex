import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,StyleSheet,
} from 'react-native';
import CustomSwitch from './CustomSwitch';
import Cyberexuser from './CyberExUser';
import BankAccount from './BankAccount';


export default function Tabbar({navigation}) {
  const [gamesTab, setGamesTab] = useState(1);

  //const renderBanner = ({item, index}) => {return <BannerSlider data={item} />;};

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
    <View style={{width:360,}} >
  
        <View style={{marginTop:10}}>
          <CustomSwitch
            selectionMode={1}
            option1="CyberEx User"
            option2="Bank Account"
               onSelectSwitch={onSelectSwitch}
              
          />
        </View>
     
         <View style={{padding:13,marginTop:10}}>
         
           {gamesTab == 1 &&
       <Cyberexuser />}

       
{gamesTab == 2 &&
       <BankAccount />}

       

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

    image:{width:100,
    height:100,
borderRadius:15,


}
})








//