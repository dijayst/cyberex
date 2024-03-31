

import { View, Text } from 'react-native'
import React,{useState,createContext,useEffect} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext=createContext()

export  function AuthProvider({children}) {
   
  const [isLoading, setIsLoading] = useState(false);
 const [userToken, setuserToken] = useState(null)
 //const login=()=>{setIsLoading(true)setuserToken('helloup');  AsyncStorage.setItem('userToken','helloup');setIsLoading(false) }
 const login = () => {
  setIsLoading(true);
  setuserToken('helloup');
  AsyncStorage.setItem('userToken', 'helloup')
    .then(() => setIsLoading(false))
    .catch(error => {
      console.log('Error during login:', error);
      setIsLoading(false);
    });
};

 
 const logout = () => {
  setIsLoading(true);
  setuserToken(null);
  AsyncStorage.removeItem('userToken')
    .then(() => setIsLoading(false))
    .catch(error => {
      console.log('Error during logout:', error);
      setIsLoading(false);
    });
};

 const isloggedin=async()=>{
  try{
    setIsLoading(true);
    let userToken=await AsyncStorage.getItem('userToken');
    setuserToken(userToken);
    setIsLoading(false)
  }catch(e){
console.log('isloggedin error $(e)');
  }
  }


/*
  
  const isloggedin = async () => {
    try {
      setIsLoading(true);
      const userToken = await AsyncStorage.getItem('userToken');
      setuserToken(userToken);
    } catch (error) {
      console.log('Error checking logged in status:', error);
    } finally {
      setIsLoading(false);
    }
  };
*/
  useEffect(() => {
   isloggedin();
  }, [])
  
  return (
    <AuthContext.Provider value={{login,logout,isLoading,userToken}}>
      {children}
      </AuthContext.Provider>
  )
}