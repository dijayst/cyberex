import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import {NavigationContainer} from "@react-navigation/native"
import Stacknav from './Navigation/Stacknav';

export default function App() {
  const[fontsLoaded]= useFonts({
    'outfit':require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium':require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold':require('./assets/fonts/Outfit-Bold.ttf'),
  });

  const[LatoLoaded]= useFonts({
    'lato-black':require('./assets/Lato/Lato-Black.ttf'),
    'lato-blackitalic':require('./assets/Lato/Lato-BlackItalic.ttf'),
    'lato-bold':require('./assets/Lato/Lato-Bold.ttf'),
    'lato-italic':require('./assets/Lato/Lato-Italic.ttf'),
    'lato-light':require('./assets/Lato/Lato-Light.ttf'),
    'lato-lightitalic':require('./assets/Lato/Lato-LightItalic.ttf'),
    'lato-thin':require('./assets/Lato/Lato-Thin.ttf'),
    'lato-thinitalic':require('./assets/Lato/Lato-ThinItalic.ttf'),
 
  });
  return (
   <NavigationContainer>
    <Stacknav/>
   </NavigationContainer>
  );
}

// <Text style={{color:colors.White,fontSize:50,fontWeight:"bold",}}>CyberEx</Text>
   