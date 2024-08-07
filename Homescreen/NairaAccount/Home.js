import {  View,Image,  Text, SafeAreaView, ScrollView,FlatList,StyleSheet,  TouchableOpacity} from 'react-native';
import Quickactions from './Quickactions';
import React,{useState,useContext} from 'react';
import Heading from './Heading';
import { Ionicons,Entypo } from '@expo/vector-icons';
import { print } from '../JSON AND COLOR/Data';
import colors from '../JSON AND COLOR/colors';
import Spinner from 'react-native-loading-spinner-overlay';
import { ThemeContext } from '../Theme/ThemeContext';

export default function Home({navigation}) {
  
const theme=useContext(ThemeContext)
  
  
    const [gamesTab, setGamesTab] = useState(1);
   
  const Colors = ['#1F2223','#009400']; 
    const onSelectSwitch = value => {
      setGamesTab(value);
    };


    //const [print, setprint] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const updateloading=()=>{
      setisLoading(true);
     // <Spinner visible={isLoading} />
   }
  
   
    
  return (
    
    
      <View style={{ flex: 1,padding: 25,backgroundColor:theme.backgroundColor}}>
     
              <ScrollView   showsVerticalScrollIndicator={false}>
          <View style={styles.ProfileMainContainer}>
              <View style={styles.ProfileContainer}>
                  <Image source={require("../image1/img.png")} style={styles.userimage} />
                  <View style={{marginTop:-9}}>
                      <Text style={{ width: 109, height: 18, color: colors.neural400,fontSize: 16, }}>Welcome Back,</Text>
                      <Text style={{ fontSize: 16, fontFamily: 'oufit', color: "#000000" ,fontWeight:"700"}}>Leonard Victor</Text>
                  </View>
                  <Ionicons style={styles.notification} name="notifications" size={24} color="black"  onPress={() => navigation.navigate('notify')} />


              </View>
          </View>
          <Heading  />

          <Quickactions text="Quick Actions"  style={{fontSize:16,color:colors.Textcolor}} />
              





               <View  style={{backgroundColor:colors.white,borderRadius:8,height:101,width:"100%",marginTop:35,display:"flex",flexDirection:"row"}}>
               <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("paybills")}>
                 
                 <View style={{backgroundColor:colors.Imagecolor,width:44,height:44,borderRadius:28,justifyContent:"center",alignItems:"center"}}>
                 <Image source={require("../image1/ICONS/bill.png")} style={styles.userimage} />
              
        </View>
   
                  
                  <Text  style={{
          color:colors.Textcolor,
          fontSize: 14,
         fontWeight:700,gamesTab:10,
          fontFamily: 'Roboto-Medium',textAlign:"center"
        }}>Pay Bills</Text>
             
               
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("buyairtime")}>
                 
                 <View style={{backgroundColor:colors.Imagecolor,width:44,height:44,borderRadius:28,justifyContent:"center",alignItems:"center"}}>
                 <Image source={require("../image1/ICONS/mobile.png")} style={styles.userimage} />
              
        </View>
   
                  
                  <Text  style={{
          color:colors.Textcolor,
          fontSize: 14,
         fontWeight:700,gamesTab:10,
          fontFamily: 'Roboto-Medium',textAlign:"center"
        }}>Buy Airtime</Text>
             
               
                    </TouchableOpacity>   
                    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("buycrpto")}>
                 
                 <View style={{backgroundColor:colors.Imagecolor,width:44,height:44,borderRadius:28,justifyContent:"center",alignItems:"center"}}>
                 <Image source={require("../image1/ICONS/bitcoin-convert.png")} style={styles.userimage} />
              
        </View>
   
                  
                  <Text  style={{
          color:colors.Textcolor,
          fontSize: 14,
         fontWeight:700,gamesTab:10,
          fontFamily: 'Roboto-Medium',textAlign:"center"
        }}>Buy Crypto</Text>
             
               
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("save")}>
                 
                 <View style={{backgroundColor:colors.Imagecolor,width:44,height:44,borderRadius:28,justifyContent:"center",alignItems:"center"}}>
                 <Image source={require("../image1/ICONS/wallet.png")} style={styles.userimage} />
              
        </View>
   
                  
                  <Text  style={{
          color:colors.Textcolor,
          fontSize: 14,
         fontWeight:700,gamesTab:10,
          fontFamily: 'Roboto-Medium',textAlign:"center"
        }}>Save</Text>
             
               
                    </TouchableOpacity>
                  
               </View>
               






                     
             <TouchableOpacity style={{backgroundColor:colors.white,width:"100%",height:96,borderRadius:8,marginTop:29,}} onPress={()=>navigation.navigate("link")} >
             <View style={styles.ProfileContainer}> 
                <Image source={require("../image1/img2.png")} style={styles.userimage2}/>
                <View style={{gap:9,marginTop:12}}>
                <Text style={{ width: 230, height: 21, color: colors.Textcolor,fontSize:14,fontWeight:"700" }}>Link a bank account to your wallet</Text>
                <Text style={{ width: 230, height: 36, color: colors.neural800,fontSize:12,fontWeight:"500" }}>Finish your account setup to enjoy your banking experience</Text>
                </View>
                <View style={{height:96,width:35,gap:10,marginLeft:28}}>
                <Entypo name="chevron-right" size={24} color={colors.Orange} style={{marginTop:32}}  />
                </View>
                  </View>
             </TouchableOpacity>
             <Quickactions text="Transactions"  isViewAll={true}/>

             {print.data?.length>0?  <FlatList
                data={print.data}
                style={{marginTop:35,backgroundColor:colors.white,height:320,width:"100%",gap:28,padding:16,borderRadius:8}}
                renderItem={({ item, index }) =>(
                  <TouchableOpacity style={styles.container2} onPress={()=>navigation.navigate("nairatrans",{item:item})}>
                  <Image source={item.image1} alt="img" style={styles.image}/>
                  <View style={styles.subcontainer}>
                      <Text style={{fontWeight:"700",color:colors.Textcolor,fontSize:16,height:22,gap:10}}>{item.title}</Text>
                      <Text style={{fontFamily:"outfit-bold",fontSize:13,color:colors.neuralblack}}>{item.time}</Text>
                  </View>
                     <Text style={{ color: Colors[index % Colors.length],marginTop:15,marginLeft:95,fontWeight:"700",fontSize:16}}>{item.price}</Text>
                     
             </TouchableOpacity>
          
                    )} /> 
                    :  <View style={{ backgroundColor:colors.background,padding:18,marginTop:150,alignItems: 'center',justifyContent:"center",}}>
                    <Image source={require("../image1/ICONS/Group (2).png")} style={styles.image2} />
              
          
                <Text style={{color:colors.Textcolor,fontSize:24,fontWeight:"800",lineHeight:35.04, marginTop: 50}}>No transaction</Text>
          <Text style={{fontWeight:"400",alignContent:"center",fontSize:13,lineHeight:22,width:315,height:44,color:colors.neuralblack, marginTop: 13,marginLeft:100}}>You’ve not made any transaction</Text>
          
               
            
              </View> }


              </ScrollView>
          
      </View>
      
  )
}







const styles = StyleSheet.create({
  
  Safecontainer:{
    flex:1,
    //backgroundColor:colors.background
  },
    subcontainer:{
      display:"flex",
      flexDirection:"column",
      width:111,
      height:42,
      gap:2,
      marginLeft:3,},

    image:{width:42,
    height:42,
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
    gap:9,
    padding:2,
    //backgroundColor:"red",
    //borderRadius:8
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
 
},
image2:{width:176,
  height:176,
borderRadius:21,
},
buttonText: { 
color: colors.white, 
lineHeight:26,
fontWeight:"600",
fontSize: 16,

},

})

