import { View, Text ,TouchableOpacity,StyleSheet,Animated} from 'react-native'
import Carousel from "pinar";
import React,{useState,useRef} from 'react'
import {useNavigation} from "@react-navigation/native";
import { Slid } from '../JSON AND COLOR/Data';
import colors from '../JSON AND COLOR/colors';

export default function Slider() {
  const carouselRef = useRef(null);

    const navigation=useNavigation();
    
    const handleclick=(index)=>{
      if (index === myArray.length - 1) {
        // Action to perform when the last item is clicked
        console.log('Last item clicked!');
      }
      //() => navigation.navigate("signup")
    }
    
  return (
    <View style={styles.container}>
      <Carousel 
      activeDotStyle={[styles.dotStyle, 
      { width: 32, height: 10, borderRadius: 8, backgroundColor: colors.Orange, }]} 
      dotStyle={styles.dotStyle}
       style={{ width: 350, height: 238, marginTop: 550, marginLeft: 20, gap: 32 }} 
       showsControls={false}
       loop={true}
        autoplay={true}
        autoplayInterval={5000}
       
        
      >
        {Slid.map((item) => (
            <View key={item.id}>
              <View style={{ marginBottom: 10, height: 40, width: 320, }}>
                <Text style={{ fontSize: 28, fontWeight: 700, color: colors.Textcolor, lineHeight: 40, fontFamily: "lato-bold" }}>{item.title}</Text>
              </View>
              <View style={{ width: 349, height: 52 }}>
                <Text style={{ lineHeight: 26, fontSize: 16, fontWeight: 600, color: colors.neuralblack }}>{item.description}</Text>
              </View>
              <TouchableOpacity style={{ backgroundColor: colors.Orange, height: 56, width: 350, borderRadius: 8, padding: 10, alignItems: "center", marginTop: 40, gap: 10 }} onPress={() => handleclick(index)}>
                <Text style={{ fontSize: 16, fontWeight: 700, lineHeight: 26, color: colors.white, }}>{item.click}</Text>
              </TouchableOpacity>
            </View>
          ))
        }
      </Carousel>
    </View>
  )
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:19,
      backgroundColor:colors.background,
      alignItems: 'center',
      justifyContent: 'center',



    },
    dotStyle:{
      marginBottom:250,
      width:10,
      height:10,
      borderRadius:8,
      backgroundColor:colors.GREen,
      

    }
  });

