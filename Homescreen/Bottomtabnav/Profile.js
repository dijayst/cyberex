import { View, Text,StyleSheet,Image,FlatList,TouchableOpacity, ScrollView,SafeAreaView } from 'react-native'
import React ,{useState}from 'react'

import { Ionicons,Entypo,MaterialCommunityIcons,MaterialIcons,FontAwesome6,FontAwesome } from '@expo/vector-icons';
import colors from '../JSON AND COLOR/colors';
import Quickactions from '../NairaAccount/Quickactions';
import { print } from '../JSON AND COLOR/Data';

export default function Profile() {

  
const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  return (
    <View style={{ backgroundColor:colors.background, flex: 1, padding: 29 }}>
      <ScrollView >
      <View style={styles.ProfileMainContainer}>
              <View style={styles.ProfileContainer}>
                  <Image source={require("../image1/img.png")} style={styles.userimage} />
                  <View style={{marginTop:15,  gap:4,}}>
                       <Text style={{ fontSize: 18, fontFamily: 'oufit', color: "#000000" ,fontWeight:"700",lineHeight:24.3}}>Leonard Victor</Text>
                       <Text style={{ width: 198, height: 18, color: colors.neuralblack,fontSize: 13, }}>ID: Leonardvictor694@gmail.com</Text>
                  </View>
                   </View>
          </View>
        

            <View style={{marginTop:50,height:223,width:350,gap:5}}>
            <Quickactions text="Account Information"/>
       
          <View style={{backgroundColor:colors.white,width:350,height:189,display:"flex",flexDirection:"column",marginTop:29,borderRadius:8,padding:9}}>
                <View style={styles.container2} onPress={()=>navigation.push("nairatrans")}>
             
             <View style={{height:32,width:32}}>
             <FontAwesome6 name="user-large" size={24} color={colors.Orange} />
             </View>   
              <View style={styles.subcontainer}>
                      <Text style={{fontWeight:"500",color:colors.neuralblack,fontSize:12,height:22,lineHeight:16.2}}>Full Name</Text>
                      <Text style={{fontFamily:"outfit-bold",fontSize:14,color:"#000000",lineHeight:18.9,fontWeight:"700"}}>Leonard Victor</Text>
                  </View>
                        </View>

                        <View style={styles.container2} onPress={()=>navigation.push("nairatrans")}>
             
             <View style={{height:32,width:32}}>
             <Ionicons name="call" size={24} color={colors.Orange} />
              </View>   
              <View style={styles.subcontainer}>
              <Text style={{fontWeight:"500",color:colors.neuralblack,fontSize:12,height:22,lineHeight:16.2}}>Phone Number</Text>
                      <Text style={{fontFamily:"outfit-bold",fontSize:14,color:"#000000",lineHeight:18.9,fontWeight:"700"}}>0801 234 5678</Text>
                     </View>
                        </View>

                         <View style={styles.container2} onPress={()=>navigation.push("nairatrans")}>
             
             <View style={{height:32,width:32}}>
             <Entypo name="mail" size={24} color={colors.Orange} />
               </View>   
                 <View style={styles.subcontainer}>
                 <Text style={{fontWeight:"500",color:colors.neuralblack,fontSize:12,height:22,lineHeight:16.2}}>E-mail</Text>
                      <Text style={{fontFamily:"outfit-bold",fontSize:14,color:"#000000",lineHeight:18.9,fontWeight:"700",width:157}}>Leonard123@gmail.com</Text>
            
                    </View>
              
                        </View>
          
</View>



          </View>
              


          <View style={{marginTop:25,height:223,width:350,gap:5,}}>
            <Quickactions text="Security"/>
       
          <View style={{backgroundColor:colors.white,width:350,height:189,display:"flex",flexDirection:"column",marginTop:29,borderRadius:8,padding:9}}>
                <View style={styles.container2} onPress={()=>navigation.push("nairatrans")}>
             
             <View style={{height:32,width:32}}>
             <FontAwesome6 name="user-large" size={24} color={colors.Orange} />
             </View>   
              <View style={styles.subcontainer}>
              <Text style={{fontWeight:"500",color:colors.neuralblack,fontSize:12,height:22,lineHeight:16.2}}>Password</Text>
                      <Text style={{fontFamily:"outfit-bold",fontSize:14,color:"#000000",lineHeight:18.9,fontWeight:"700",width:118}}>Change Password</Text>
                      <View style={{height:96,width:35,gap:10,marginLeft:258,marginTop:-70}}>
                <Entypo name="chevron-right" size={24} color="#1C1B1F" style={{marginTop:32}}  />
                </View>
             
                     </View>
                        </View>

                        <View style={styles.container2} onPress={()=>navigation.push("nairatrans")}>
             
             <View style={{height:32,width:32}}>
             <MaterialIcons name="password" size={24} color={colors.Orange} />
              </View>   
              <View style={styles.subcontainer}>
              <Text style={{fontWeight:"500",color:colors.neuralblack,fontSize:12,height:22,lineHeight:16.2}}>Transaction Pin</Text>
                      <Text style={{fontFamily:"outfit-bold",fontSize:14,color:"#000000",lineHeight:18.9,fontWeight:"700",width:155}}>Change Transaction Pin</Text>
                      <View style={{height:96,width:35,gap:10,marginLeft:258,marginTop:-70}}>
                <Entypo name="chevron-right" size={24} color="#1C1B1F" style={{marginTop:32}}  />
                </View>
             
                      </View>
                        </View>

                         <View style={styles.container2} onPress={()=>navigation.push("nairatrans")}>
             
             <View style={{height:32,width:32}}>
             <Ionicons name="finger-print" size={24} color={colors.Orange} />
               </View>   
                 <View style={styles.subcontainer}>
                 <Text style={{fontWeight:"500",color:colors.neuralblack,fontSize:12,height:22,lineHeight:16.2}}>Phone Lock</Text>
                      <Text style={{fontFamily:"outfit-bold",fontSize:14,color:"#000000",lineHeight:18.9,fontWeight:"700"}}>Lock Method</Text>
                      <View style={{height:96,width:35,gap:10,marginLeft:258,marginTop:-70}}>
                <Entypo name="chevron-right" size={24} color="#1C1B1F" style={{marginTop:32}}  />
                </View>
             
                    </View>
              
                        </View>
          
</View>



          </View>

        

          <View style={{marginTop:25,height:223,width:350,gap:5,}}>
          
          <Quickactions text="about us"/>
          
          <View style={{backgroundColor:colors.white,width:350,height:220,display:"flex",flexDirection:"column",marginTop:29,borderRadius:8,padding:9}}>
                <View style={styles.container2} onPress={()=>navigation.push("nairatrans")}>
             
             <View style={{height:32,width:32}}>
             <FontAwesome6 name="user-large" size={24} color={colors.Orange} />
             </View>   
              <View style={styles.subcontainer}>
                      <Text style={{fontFamily:"outfit-bold",fontSize:14,color:"#000000",lineHeight:18.9,fontWeight:"700",width:118}}>About Cyberex</Text>
                      <View style={{height:96,width:35,gap:10,marginLeft:258,marginTop:-20}}>
                <Entypo name="chevron-right" size={24} color="#1C1B1F"   />
                </View>
             
                     </View>
                        </View>

                        <View style={styles.container2} onPress={()=>navigation.push("nairatrans")}>
             
             <View style={{height:32,width:32}}>
             <MaterialIcons name="privacy-tip" size={24} color={colors.Orange} />
              </View>   
              <View style={styles.subcontainer}>
                     <Text style={{fontFamily:"outfit-bold",fontSize:14,color:"#000000",lineHeight:18.9,fontWeight:"700",width:155}}>Privacy Policy</Text>
                      <View style={{height:96,width:35,gap:10,marginLeft:258,marginTop:-25}}>
                <Entypo name="chevron-right" size={24} color="#1C1B1F"   />
                </View>
             
                      </View>
                        </View>

                         <View style={styles.container2} onPress={()=>navigation.push("nairatrans")}>
             
             <View style={{height:32,width:32}}>
             <Ionicons name="finger-print" size={24} color={colors.Orange} />
               </View>   
                 <View style={styles.subcontainer}>
                      <Text style={{fontFamily:"outfit-bold",fontSize:14,color:"#000000",lineHeight:18.9,fontWeight:"700",width:127}}>Terms & Conditions</Text>
                      <View style={{height:96,width:35,gap:10,marginLeft:258,marginTop:-35}}>
                <Entypo name="chevron-right" size={24} color="#1C1B1F"   />
                </View>
             
                    </View>
              
                        </View>
                        <View style={styles.container2} onPress={()=>navigation.push("nairatrans")}>
             
             <View style={{height:32,width:32}}>
             <MaterialCommunityIcons name="frequently-asked-questions" size={24} color={colors.Orange} />
                 
             </View>   
              <View style={styles.subcontainer}>
                     <Text style={{fontFamily:"outfit-bold",fontSize:14,color:"#000000",lineHeight:18.9,fontWeight:"700",width:177}}>Frequently asked questions</Text>
                      <View style={{height:96,width:35,gap:10,marginLeft:258,marginTop:-25}}>
                <Entypo name="chevron-right" size={24} color="#1C1B1F"   />
                </View>
             
                      </View>
                        </View>
          
</View>



          </View>

          <View style={{marginTop:55,height:130,width:350,gap:5,}}>
           
          <Quickactions text="Settings"/>
          
          <View style={{backgroundColor:colors.white,width:350,height:130,display:"flex",flexDirection:"column",marginTop:29,borderRadius:8,padding:9}}>
                <View style={styles.container2} onPress={()=>navigation.push("nairatrans")}>
             
             <View style={{height:32,width:32}}>
             <FontAwesome6 name="user-large" size={24} color={colors.Orange} />
             </View>   
              <View style={styles.subcontainer}>
              <Text style={{fontWeight:"500",color:colors.neuralblack,fontSize:12,height:22,lineHeight:16.2}}>Theme</Text>
                      <Text style={{fontFamily:"outfit-bold",fontSize:14,color:"#000000",lineHeight:18.9,fontWeight:"700",width:118}}>Dark Mode</Text>
                      <View style={{height:96,width:35,gap:10,marginLeft:258,marginTop:-33}}>
                      <MaterialCommunityIcons name={isPasswordSecure ? "toggle-switch-off" : "toggle-switch-outline"} size={24} color="black"   onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true) }} />
 
                 </View>
             
                     </View>
                        </View>

                        <View style={styles.container2} onPress={()=>navigation.push("nairatrans")}>
             
             <View style={{height:32,width:32}}>
             <MaterialIcons name="password" size={24} color={colors.Orange} />
              </View>   
              <View style={styles.subcontainer}>
              <Text style={{fontWeight:"500",color:colors.neuralblack,fontSize:12,height:22,lineHeight:16.2}}>Earn Rewards</Text>
                      <Text style={{fontFamily:"outfit-bold",fontSize:14,color:"#000000",lineHeight:18.9,fontWeight:"700",width:155}}>Referrals</Text>
                      <View style={{height:96,width:35,gap:10,marginLeft:258,marginTop:-60}}>
                      <Entypo name="chevron-right" size={24} color="#1C1B1F" style={{marginTop:32}}  />
                       </View>
             
                      </View>
                        </View>

                       
          
</View>

          </View>
        
        
         
          <TouchableOpacity style={{ backgroundColor:colors.Imagecolor, borderRadius: 8, height: 56, width: 350, alignItems: "center",justifyContent:"center", padding: 10,paddingTop:-190,marginTop:100,marginBottom:50,display:"flex",flexDirection:"row",gap:100}} onPress={()=>navigation.navigate("giftcard")} >
          <FontAwesome name="sign-out" size={24} color="#FF0000" style={{marginLeft:-100}} /><Text style={styles.buttonText}>Sign Out</Text>
</TouchableOpacity>
          </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  
userimage:{
  width:80,
  height:80,
  borderRadius:40
 
},image:{width:24,
  height:24,
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
ProfileContainer:{
  display:"flex",
  flexDirection:"row",
  alignContent:"center",
  gap:9,
  padding:2,
  //backgroundColor:"red",
  //borderRadius:8
}, subcontainer:{
  display:"flex",
  flexDirection:"column",
  width:100,
  height:39,
  gap:2,
  marginLeft:3,},
  
  container2:{
    // backgroundColor:"red",
    marginTop:9,
    marginBottom:9,
        flexDirection:"row",
        width:141,
        height:39,
        
     },
     
  buttonText:{
    color:"#FF0000",
    size:14,
    lineHeight:18.9,
    fontWeight:"700"
    },
  
})

