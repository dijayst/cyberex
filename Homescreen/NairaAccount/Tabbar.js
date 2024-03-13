import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,StyleSheet,
} from 'react-native';
import CustomSwitch from './CustomSwitch';
import Cyberexuser from './Cyberexuser';
import BankAccount from './BankAccount';


export default function Tabbar({navigation,windowWidth, windowheight}) {
  const [gamesTab, setGamesTab] = useState(1);

  //const renderBanner = ({item, index}) => {return <BannerSlider data={item} />;};

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
    <View style={{width:windowWidth>400?360:360,}} >
  
        <View style={{marginTop:10}}>
          <CustomSwitch
            selectionMode={1}
            option1="CyberEx User"
            option2="Bank Account"
               onSelectSwitch={onSelectSwitch}
               windowWidth={windowWidth} 
               windowheight={windowheight}
          />
        </View>
     
         <View style={{padding:13,marginTop:10}}>
         
           {gamesTab == 1 &&
       <Cyberexuser  windowWidth={windowWidth}  windowheight={windowheight}/>}

       
{gamesTab == 2 &&
       <BankAccount windowWidth={windowWidth}  windowheight={windowheight}/>}

       

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