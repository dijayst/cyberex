import {  View,Image,  Text, SafeAreaView, ScrollView,FlatList,StyleSheet,  TouchableOpacity,} from 'react-native';
import Quickactions from './Utilities/Quickactions';
import { print } from './Global';
import React,{useEffect, useState} from 'react'
import Heading from './Heading';
import colors from '../color/colors';
import { Ionicons,Entypo } from '@expo/vector-icons';


export default function Home({navigation}) {
    const [gamesTab, setGamesTab] = useState(1);
   
  const Colors = ['#1F2223','#009400']; // Define your colors here
 
    //const renderBanner = ({item, index}) => {return <BannerSlider data={item} />;};
  
    const onSelectSwitch = value => {
      setGamesTab(value);
    };


   
    
  return (
      <View style={{ backgroundColor: colors.background, padding:18 }}>
        <SafeAreaView>
              <ScrollView >
          <View style={styles.ProfileMainContainer}>
              <View style={styles.ProfileContainer}>
                  <Image source={require("../image1/img.png")} style={styles.userimage} />
                  <View style={{marginTop:-9}}>
                      <Text style={{ width: 99, height: 18, color: colors.neural400,fontSize: 16, }}>Welcome Back,</Text>
                      <Text style={{ fontSize: 16, fontFamily: 'oufit', color: "#000000" ,fontWeight:"700"}}>Leonard Victor</Text>
                  </View>
                  <Ionicons style={styles.notification} name="notifications" size={24} color="black" />


              </View>
          </View>
          <Heading />

          <Quickactions text="Quick Actions"  style={{fontSize:16,color:colors.Textcolor}} />
                 <FlatList
                pagingEnabled
                horizontal
                style={{backgroundColor:colors.white,borderRadius:8,height:101,width:375,marginTop:35,}}
                showsHorizontalScrollIndicator={false}
                data={print.data}
                renderItem={({ item, index }) => index<=3&&(
                    <TouchableOpacity style={styles.container} onPress={()=>navigation.push("itemlistbycategoryscreen",{category:item.shoetype})}>
                 
                   <View style={{backgroundColor:colors.Imagecolor,width:44,height:44,borderRadius:28,justifyContent:"center",alignItems:"center"}}>
          <Image style={styles.userimage} source={item.image1}/></View>
     
                    
                    <Text  style={{
            color:colors.Textcolor,
            fontSize: 14,
           fontWeight:700,gamesTab:10,
            fontFamily: 'Roboto-Medium',textAlign:"center"
          }}>{item.shoetype}</Text>
               
                 
                      </TouchableOpacity>)} />


                     
             <View style={{backgroundColor:colors.white,width:380,height:96,borderRadius:8,marginTop:29,marginLeft:2}}>
              <View style={styles.ProfileContainer}> 
                <Image source={require("../image1/img2.png")} style={styles.userimage2}/>
                <View style={{gap:9,marginTop:12}}>
                <Text style={{ width: 230, height: 21, color: colors.Textcolor,fontSize:14,fontWeight:"700" }}>link a bank account to your wallet</Text>
                <Text style={{ width: 230, height: 36, color: colors.neural800,fontSize:12,fontWeight:"500" }}>finish your account setup to enjoy your banking experience</Text>
                </View>
                <View style={{height:96,width:35,gap:10,}}>
                <Entypo name="chevron-right" size={24} color={colors.Orange} style={{marginTop:32}}  />
                </View>
                  </View>
             </View>
             <Quickactions text="Transaction"  isViewAll={true}/>

             {print.data?.length>0?  <FlatList
                data={print.data}
                style={{marginTop:45,backgroundColor:colors.white,height:320,width:380,gap:28,padding:16,borderRadius:8}}
                renderItem={({ item, index }) =>(
                  <TouchableOpacity style={styles.container2} onPress={()=>navigation.push("itemdetails",{item:item})}>
                  <Image source={item.image1} alt="img" style={styles.image}/>
                  <View style={styles.subcontainer}>
                      <Text style={{fontWeight:"700",color:colors.Textcolor,fontSize:16,height:22,gap:10}}>{item.title}</Text>
                      <Text style={{fontFamily:"outfit-bold",fontSize:13,color:colors.neuralblack}}>{item.time}</Text>
                  </View>
                     <Text style={{ color: Colors[index % Colors.length],marginTop:15,marginLeft:130,fontWeight:"700",fontSize:16}}>{item.price}</Text>
                     
             </TouchableOpacity>
          
                    )} /> : <View style={{backgroundColor:colors.white,height:320,width:380}}>
                    <Image source={require("../image1/img.png")} style={{width:176,height:176,opacity:"80%"}} />
            <Text>No transaction</Text>
            <Text>You’ve not made any transaction</Text>
                </View> }


              </ScrollView>
          </SafeAreaView>
      </View>
  )
}







const styles = StyleSheet.create({
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
  marginLeft:140,

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
 
}

})

