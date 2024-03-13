import {  View,Image,  Text, SafeAreaView, ScrollView,FlatList,StyleSheet,  TouchableOpacity,useWindowDimensions} from 'react-native';
import Quickactions from '../NairaAccount/Quickactions';
import React,{useEffect, useState} from 'react'
import Heading2 from './Heading2';
import { Ionicons } from '@expo/vector-icons';
import colors from '../JSON AND COLOR/colors';
import { print } from '../JSON AND COLOR/Data';


export default function Bitcoinacct ({navigation,windowWidth, windowheight}) {
  
 
    const [gamesTab, setGamesTab] = useState(1);
   
  const Colors = ['#009400','#1F2223',]; // Define your colors here
 
    //const renderBanner = ({item, index}) => {return <BannerSlider data={item} />;};
  
    const onSelectSwitch = value => {
      setGamesTab(value);
    };

    //const [print, setprint] = useState([]);
   
   
    
  return (
      <View style={{ backgroundColor:colors.background, padding:18 }}>
        <SafeAreaView>
              <ScrollView showsVerticalScrollIndicator={false}>
                
          <View style={styles.ProfileMainContainer}>
              <View style={styles.ProfileContainer}>
                  <Image source={require("../image1/img.png")} style={styles.userimage} />
                  <View style={{marginTop:-9}}>
                      <Text style={{ width: 109, height: 18, color: colors.neural400,fontSize: 16, }}>Welcome Back,</Text>
                      <Text style={{ fontSize: 16, fontFamily: 'oufit', color: "#000000" ,fontWeight:"700"}}>Leonard Victor</Text>
                  </View>
                  <Ionicons style={styles.notification} name="notifications" size={24} color="black" onPress={()=>navigation.push("notify")} />


              </View>
          </View>
          <Heading2 windowWidth={windowWidth} windowheight={windowheight} />

          <Quickactions text="Quick Actions"  style={{fontSize:16,color:colors.Textcolor}} />
                
          <View  style={{backgroundColor:colors.white,borderRadius:8,height:101,width:375,marginTop:35,display:"flex",flexDirection:"row"}}>
               <TouchableOpacity style={styles.container} onPress={()=>navigation.push("send")}>
                 
                 <View style={{backgroundColor:colors.Imagecolor,width:44,height:44,borderRadius:28,justifyContent:"center",alignItems:"center"}}>
                 <Image source={require("../image1/ICONS/money-send.png")} style={styles.userimage} />
              
        </View>
   
                  
                  <Text  style={{
          color:colors.Textcolor,
          fontSize: 14,
         fontWeight:700,gamesTab:10,
          fontFamily: 'Roboto-Medium',textAlign:"center"
        }}>Send</Text>
             
               
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.container} onPress={()=>navigation.push("recieve",{windowWidth:{windowWidth} ,windowheight:{windowheight}})}>
                 
                 <View style={{backgroundColor:colors.Imagecolor,width:44,height:44,borderRadius:28,justifyContent:"center",alignItems:"center"}}>
                 <Image source={require("../image1/ICONS/qr_code.png")} style={styles.userimage} />
              
        </View>
   
                  
                  <Text  style={{
          color:colors.Textcolor,
          fontSize: 14,
         fontWeight:700,gamesTab:10,
          fontFamily: 'Roboto-Medium',textAlign:"center"
        }}>Recieve</Text>
             
               
                    </TouchableOpacity>   
                    <TouchableOpacity style={styles.container} onPress={()=>navigation.push("sell",{windowWidth:{windowWidth} ,windowheight:{windowheight}})}>
                 
                 <View style={{backgroundColor:colors.Imagecolor,width:44,height:44,borderRadius:28,justifyContent:"center",alignItems:"center"}}>
                 <Image source={require("../image1/ICONS/sell.png")} style={styles.userimage} />
              
        </View>
   
                  
                  <Text  style={{
          color:colors.Textcolor,
          fontSize: 14,
         fontWeight:700,gamesTab:10,
          fontFamily: 'Roboto-Medium',textAlign:"center"
        }}>Buy/Sell</Text>
             
               
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={()=>navigation.push("convert",{windowWidth:{windowWidth} ,windowheight:{windowheight}})}>
                 
                 <View style={{backgroundColor:colors.Imagecolor,width:44,height:44,borderRadius:28,justifyContent:"center",alignItems:"center"}}>
                 <Image source={require("../image1/ICONS/bitcoin-convert.png")} style={styles.userimage} />
              
        </View>
   
                  
                  <Text  style={{
          color:colors.Textcolor,
          fontSize: 14,
         fontWeight:700,gamesTab:10,
          fontFamily: 'Roboto-Medium',textAlign:"center"
        }}>Convert</Text>
             
               
                    </TouchableOpacity>
                  
               </View>
               

                     
           
             <Quickactions text="Transactions"  isViewAll={true}/>

             {print.data?.length>0? <FlatList
                data={print.data}
                style={{marginTop:35,backgroundColor:colors.white,height:320,width:375.5,gap:28,padding:16,borderRadius:8}}
                renderItem={({ item, index }) =>(
                  <TouchableOpacity style={styles.container2} onPress={()=>navigation.push("btctrans",{item:item,windowWidth:{windowWidth} ,windowheight:{windowheight}})}>
                  <View style={{backgroundColor:colors.Imagecolor,width:44,height:44,borderRadius:28,justifyContent:"center",alignItems:"center"}}>
                  <Image source={item.image3} alt="img" style={styles.image}/>
                </View>
                  <View style={styles.subcontainer}>
                      <Text style={{fontWeight:"700",color:colors.Textcolor,fontSize:16,height:22,gap:10}}>{item.recieved}</Text>
                      <Text style={{fontSize:12,color:colors.neural800,fontWeight:"700"}}>{item.recipient}</Text>
                  </View>
                  <View style={styles.subcontainer}>
                     <Text style={{ color: Colors[index % Colors.length],marginTop:15,marginLeft:10,fontSize:14,fontWeight:"700"}}>{item.btcprice}</Text>
                    <Text style={{ marginLeft:20,color:colors.neural800,fontSize:12,fontWeight:"500",lineHeight:16.2}}>{item.btcptime}</Text>
                     </View>
             </TouchableOpacity>
          
)} /> :
 <View style={{ backgroundColor:colors.background,padding:18,marginTop:150,alignItems: 'center',justifyContent:"center",}}>
<Image source={require("../image1/ICONS/Group (2).png")} style={styles.image2} />


<Text style={{color:colors.Textcolor,fontSize:24,fontWeight:"800",lineHeight:35.04, marginTop: 50}}>No transaction</Text>
<Text style={{fontWeight:"400",alignContent:"center",fontSize:13,lineHeight:22,width:315,height:44,color:colors.neuralblack, marginTop: 13,marginLeft:100}}>You’ve not made any transaction</Text>

</View>
                    }

              </ScrollView>
          </SafeAreaView>
      </View>
  )
}







const styles = StyleSheet.create({
    subcontainer:{
      display:"flex",
      flexDirection:"column",
      width:190,
      height:42,
      gap:2,
      marginLeft:3,
    },

    image:{width:32,
    height:32,
borderRadius:21,


}, container:{
 width:74,
 height:69,
 alignItems: 'center',
 justifyContent:"center",
  //textAlign:"center",
  //marginRight:5,
  marginLeft:15,gap:6,
  //height:50,
  //backgroundColor:"red",
  marginTop:19
  //padding:5,
  //borderRadius:15
      } ,container2:{
       // backgroundColor:colors.white,
       marginTop:9,
       marginBottom:9,
         
       display:"flex",
       flexDirection:"row",
       width:316,
       height:51,
    },
      iconcontainer:{
          //backgroundColor:"#8E3FFF",
          padding:17,
          borderRadius:99,
          
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
    gap:9
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
  marginLeft:160,

},
searchbtn:{
  backgroundColor:"white",
  padding:10,
  borderRadius:8
},
userimage:{
  width:24,
  height:24,
  borderRadius:20
 
},
userimage2:{
  width:41.11,
  height:51.92,
  marginTop:12
 
}, image2:{width:185,
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

