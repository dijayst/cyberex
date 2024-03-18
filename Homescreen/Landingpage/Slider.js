import { View, Text ,TouchableOpacity,StyleSheet,useWindowDimensions, SafeAreaView,Platform, FlatList,Image, Dimensions} from 'react-native'
import Carousel from "pinar";
import React,{useState,useRef} from 'react'
import {useNavigation} from "@react-navigation/native";
import { Slid } from '../JSON AND COLOR/Data';
import colors from '../JSON AND COLOR/colors';
//import Carousel from 'react-native-snap-carousel';
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const SCEEN_wIDTH=Dimensions.get('window').width
export default function Slider() {
  const carouselRef = useRef(null);
  const windowWidth=useWindowDimensions().width
  const windowheight=useWindowDimensions().height
  
 const [slideindex, setslideindex] = useState(0)
 const [nextdisabled, setnextdisabled] = useState(false)
    const navigation=useNavigation();

    const handleclick = (index) => {
      setslideindex(index);

      if (index === Slid.length-1 )
        {navigation.navigate("signup") 
       console.log("yeppp")} 
     else{

    //if (slideindex===Slid.length )return;
  if(carouselRef.current)
  {carouselRef.current.scrollToIndex({index:index+1})}
  console.log(slideindex)
 

    };
    console.log(slideindex)
  }
  return (
    <SafeAreaView style={styles.Safecontainer}>
      
       <View style={styles.container}>
        
      <FlatList
       ref={carouselRef}
       style={{  height:windowheight>800? 238:0, marginTop:windowheight>800?580:473, marginLeft: windowheight>800?4:6, gap: 32 }} 
                pagingEnabled
                horizontal
                snapToInterval={SCEEN_wIDTH}
                snapToAlignment='center'
                decelerationRate={'fast'}
                showsHorizontalScrollIndicator={false}
                data={Slid}
                onScroll={Slid=>{
                  const offset=Slid.nativeEvent.contentOffset.x/SCEEN_wIDTH;
                  const hasDecimal=offset-Math.floor(offset) !==1;
                  if(!hasDecimal){
                    const newSlide=offset+1
                    if(newSlide>=1||newSlide<=Slid.length);
                    setnextdisabled(newSlide===Slid.length)

                    setslideindex(offset);
                  
                  }
                  console.log("offset",offset);
              }}
              scrollEventThrottle={0}
                renderItem={({ item, index }) => (
                  <View key={item.id} style={{ width: SCEEN_wIDTH }}>
                  <View style={{ marginLeft: 21, padding: -2 }}>
                    <View style={{ marginBottom: 10, height: 40, width: 320 }}>
                      <Text style={{ fontSize: 28, fontWeight: 700, color: colors.Textcolor, lineHeight: 40, fontFamily: "lato-bold" }}>{item.title}</Text>
                    </View>
            
                    <View style={{ width: 349, height: 52 }}>
                      <Text style={{ lineHeight: 26, fontSize: 16, fontWeight: 600, color: colors.neuralblack }}>{item.description}</Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: colors.Orange, height: 56, width: 350, borderRadius: 8, padding: 10, alignItems: "center", marginTop: 40, gap: 10 }} onPress={() => handleclick(index)}>
                      <Text style={{ fontSize: 16, fontWeight: 700, lineHeight: 26, color: colors.white }}>{item.click}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                   )} />
      </View>
      <View style={styles.dotContainer}>
        {Slid.map((_, index) => (
          <TouchableOpacity key={index} style={[styles.dot, slideindex === index && styles.activeDot]} onPress={() => handleclick(index)} />
        ))}
      </View>
{/*
 <View style={styles.container}>
      <Carousel 
      ref={carouselRef}
      activeDotStyle={[styles.dotStyle, 
      { width:32, height:10, borderRadius: 8, backgroundColor: colors.Orange, }]} 
      dotStyle={styles.dotStyle}
       style={{ width:windowWidth>400? 350:"95%", height:windowheight>800? 238:0, marginTop:windowheight>800?580:473, marginLeft: windowheight>800?4:6, gap: 32,alignItems:"center",justifyContent:"center" }} 
       showsControls={false}
       //onSnapToItem={(index) => slideindex(index)}
      // loop={true}
        //autoplay={true}
        //autoplayInterval={5000}
      >
        {Slid.map((item) => (
            <View key={item.id} >
              <View style={{ marginBottom: 10, height: 40, width: 320, }}>
                <Text style={{ fontSize: 28, fontWeight: 700, color: colors.Textcolor, lineHeight: 40, fontFamily: "lato-bold" }}>{item.title}</Text>
              </View>
              
              <View style={{ width: 349, height: 52 }}>
                
                <Text style={{ lineHeight: 26, fontSize: 16, fontWeight: 600, color: colors.neuralblack }}>{item.description}</Text>
              </View>
              <TouchableOpacity style={{ backgroundColor: colors.Orange, height: 56, width: 350, borderRadius: 8, padding: 10, alignItems: "center", marginTop: 40, gap: 10 }} onPress={()=>handleclick(index)}>
                <Text style={{ fontSize: 16, fontWeight: 700, lineHeight: 26, color: colors.white, }}>{item.click}</Text>
              </TouchableOpacity>
            </View>
          ))
        }
      </Carousel>
    </View>
 */}
      
      
   
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  Safecontainer:{
    flex:1,
    backgroundColor:colors.background
  },
    container: {
     flex: 1,
      padding:10,
      backgroundColor:colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    dotStyle:{
      marginBottom:300,
      width:10,
      height:10,
      borderRadius:8,
      backgroundColor:colors.GREen,
      

    },


    container1:{
      flex:1,
      alignItems:"center",
      marginRight:5,
      marginLeft:10,
      //height:50,
      //backgroundColor:"red",
      //padding:5,
      //borderRadius:15
          },
          iconcontainer:{
              //backgroundColor:"#8E3FFF",
              padding:17,
              borderRadius:99,
              
            },
  })