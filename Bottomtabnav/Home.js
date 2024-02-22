
import {
  View,Image,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CustomSwitch from './CustomSwitch';
import Quickactions from './Utilities/Quickactions';
import Billslider from './Utilities/Billslider';

import React,{useState} from 'react'
import Heading from './Heading';
import colors from '../color/colors';
import { Ionicons } from '@expo/vector-icons';


export default function Home({navigation}) {
    const [gamesTab, setGamesTab] = useState(1);

    //const renderBanner = ({item, index}) => {return <BannerSlider data={item} />;};
  
    const onSelectSwitch = value => {
      setGamesTab(value);
    };
  return (
      <View style={{ backgroundColor: colors.background, padding: 18 }}>
          <View style={styles.ProfileMainContainer}>
              <View style={styles.ProfileContainer}>
                  <Image source={require("../image1/image8-2.webp")} style={styles.userimage} />
                  <View>
                      <Text style={{ width: 92, height: 18, color: colors.neural400 }}>Welcome Back,</Text>
                      <Text style={{ fontSize: 20, fontFamily: 'oufit', color: "#000000" }}>Leonard Victor</Text>
                  </View>
                  <Ionicons style={styles.notification} name="notifications" size={24} color="black" />


              </View>
          </View>
          <Heading />

          <SafeAreaView style={{ backgroundColor: '#F1F0F3', }}>
              <ScrollView >
                  {gamesTab &&
                      <Quickactions text="Economy" option1="Daily Activities" option2="Fashion" option3="Myblog" option4="Politics" isViewAll={true} />
                  }
                  <View style={{ marginTop: 20 }}>
                      <CustomSwitch
                          selectionMode={1}
                          option1="Pay Bills"
                          option2="Buy Airytime"
                          option3="Buy Crypto"
                          option4="Save"
                          onSelectSwitch={onSelectSwitch}
                      />
                  </View>
                  <View style={{ padding: 14, marginLeft: 2 }}>

                      {gamesTab == 1 &&
                          <Billslider />}


                      {gamesTab == 2 &&
                          <Billslider />}

                      {gamesTab == 3 &&
                          <Billslider />}

                      {gamesTab == 4 &&
                          <Billslider />}



                  </View>
              </ScrollView>
          </SafeAreaView>
      </View>
  )
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


},
ProfileMainContainer:{
    
    display:"flex",
    flexDirection:"row",
    alignContent:"center",
    justifyContent:"space-between",
    
    gap:167,
    marginTop:60,marginLeft:20,
    width:350,height:42
  },
  body:{
    backgroundColor:'pink',
    padding:40,
    marginTop:5,
    fontSize:20,

  },
  bold:{
    fontWeight:'bold',
    backgroundColor:'white',
    borderRadius:12,
    width:150,
    height:30

  },
  ProfileContainer:{
    display:"flex",
    flexDirection:"row",
    alignContent:"center",
  },
textinput:{
  padding:7,
  paddingHorizontal:16,
  backgroundColor:"white",
  borderRadius:8,
  width:"85%",
  fontSize:16,
 // fontFamily:'oufit'
},
notification:{
  marginTop:15,
  marginLeft:140,

},
searchbtn:{
  backgroundColor:"white",
  padding:10,
  borderRadius:8
},
userimage:{
  width:40,
  height:40,
  borderRadius:20
}

})

