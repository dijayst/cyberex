import React, { createContext,useState,useEffect ,useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'react-native-axios';
import { BASE_URL } from '../Homescreen/Config';
import { isLoading } from 'expo-font';

export const AuthContext =createContext({isLoading:false,userInfo:null,splashLoading:false,updateauthstate(){}});

export default function AuthProvider({children}) {
  
  /*
  
  const [authstate, setauthstate] = useState({ loggedin:false,  profile:null })
  


// const [loggedin, setloggedin] = useState(false);
    //const [profile, setprofile] = useState(null);
 
    
   // const [isLoading, setisLoading] = useState(true);
   // const [userToken, setuserToken] = useState(null);
    const updateauthstate=()=>{
         // setprofile();
        //  setisLoading(false);
          setauthstate({...state})
      }
      const getAuthState=async()=>{
        const token =  await AsyncStorage.getItem("auth_token").then(res=>console.log(res))
        if(!token){
          const apiresjson= axios.get("https://portfoliobackendno5.onrender.com/signin").then((response)=>{
           console.log((response))
        })
        console.log((apiresjson))
       }
      if(apiresjson.profile){
          updateauthstate({loggedin:true,profile:apiresjson.profile})
      }
       }
       
useEffect(() => {
    getAuthState()
    console.log(getAuthState)
    })





*/

const [authstate, setauthstate] = useState({ isLoading:false,userInfo:null,splashLoading:false })
  
const updateauthstate=()=>{
  // setprofile();
 //  setisLoading(false);
   setauthstate({...authstate});
}


   // const [userInfo,setUserInfo] = useState({});
   // const [isLoading, setIsLoading] = useState(false);
    //const [splashLoading, setSplashLoading] = useState(false);
  
    /*
  const register = ({name,email,referancecode,...userInfor}) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/register`, {
        name,
        email,
        referancecode,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
        
       navigation.navigate("verify")
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };


  const login = ({email,password}) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/login`, {
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        
     navigation.navigate("welcome")
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };


  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };
  
  useEffect(() => {
    isLoggedIn();
  }, []);
  */
    return (
        <AuthContext.Provider value={{...authstate,updateauthstate}}>
            {children}
        </AuthContext.Provider>
    )
}
