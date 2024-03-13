import React,{useContext, useEffect,useState} from 'react'

//import { View, Text } from 'react-native'
import Stacknav from '../Homescreen/Navigation/Stacknav';
import Tabnavigation from '../Homescreen/Navigation/Tabnavigation';
import Tabnav from './Tabnav';
import { AuthContext } from './AuthContext';
import Homestack from '../Homescreen/Navigation/Homestack';
import Home from '../Homescreen/NairaAccount/Home';


export default function AppNav() {
  
  const context = useContext(AuthContext);
  const{userInfo, splashLoading,isLoading}=useContext(AuthContext);
  
console.log(context)
  const {loggedin,profile} = useContext(AuthContext);
  //const [loading, setloading] = useState(false);


    const isAdmin=profile==="admin";

    {!isLoading ?<Homestack/>:null}
  {isAdmin?<Tabnav/>:null}
 
      
console.log(isAdmin);
console.log(loggedin);
console.log(profile);
  return(
    
    <Tabnavigation/>
  
  )
}
