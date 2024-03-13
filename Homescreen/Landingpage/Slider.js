import { View, Text ,TouchableOpacity,StyleSheet,useWindowDimensions, SafeAreaView,Platform, FlatList} from 'react-native'
import Carousel from "pinar";
import React,{useState,useRef} from 'react'
import {useNavigation} from "@react-navigation/native";
import { Slid } from '../JSON AND COLOR/Data';
import colors from '../JSON AND COLOR/colors';
//import Carousel from 'react-native-snap-carousel';
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Slider() {
  const carouselRef = useRef(null);
  const windowWidth=useWindowDimensions().width
  const windowheight=useWindowDimensions().height
  
 // const {styles}=useStyle();
const [slideindex, setslideindex] = useState(0)
    const navigation=useNavigation();

    const handleclick = (index) => {
      setslideindex(index);

      if (index === Slid.length-1 ) {
        // Perform your action when the last index is clicked
       navigation.navigate("signup")
       console.log("yeppp")
    //(nextquestion<Slid.length?setslideindex(nextquestion):setslideindex(slideindex))

      } 
      else{
       
 //if (slideindex < Slid.length - 1){setslideindex(slideindex + 1 )}
  if (slideindex===Slid.length )return;
  if(carouselRef.current){carouselRef.current.scrollToIndex({index:slideindex+1})}
  console.log(slideindex)
//setslideindex(index + 1);
// const nextquestion=slideindex+1;
//(nextquestion===Slid.length?setslideindex(nextquestion):setslideindex(slideindex))
//setslideindex(slideindex+1);
  //  console.log("Moving to the next slide");
 

    };
    console.log(slideindex)
  }
    /*
     const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };*/
  //console.log(handleclick(index))
  return (
    <SafeAreaView style={styles.Safecontainer}>
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
              {/*
<Text>{windowWidth},{windowheight}</Text> */}
              <View style={{ marginBottom: 10, height: 40, width: 320, }}>
                <Text style={{ fontSize: 28, fontWeight: 700, color: colors.Textcolor, lineHeight: 40, fontFamily: "lato-bold" }}>{item.title}</Text>
              </View>
              
              <View style={{ width: 349, height: 52 }}>
                
                <Text style={{ lineHeight: 26, fontSize: 16, fontWeight: 600, color: colors.neuralblack }}>{item.description}</Text>
              </View>
              <TouchableOpacity style={{ backgroundColor: colors.Orange, height: 56, width: 350, borderRadius: 8, padding: 10, alignItems: "center", marginTop: 40, gap: 10 }} onPress={()=>handleclick(Slid.indexOf(item))}>
                <Text style={{ fontSize: 16, fontWeight: 700, lineHeight: 26, color: colors.white, }}>{item.click}</Text>
              </TouchableOpacity>
            </View>
          ))
        }
      </Carousel>
    </View>
    </SafeAreaView>
  )
}


 // const {width,height}=useWindowDimensions();
 
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
   //width:(width > 500)?200:100,
  // width:dimensions.width,
   //height:dimensions.height
    },
    dotStyle:{
      marginBottom:300,
      width:10,
      height:10,
      borderRadius:8,
      backgroundColor:colors.GREen,
      

    },
  })