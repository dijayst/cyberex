import { View, Text,useContext } from 'react-native'
import React from 'react'

import Home from '../NairaAccount/Home';
import Bitcoinacct from '../BTCAccount/Bitcoinacct';
import Bitcointransactiondetails from '../BTCAccount/Bitcointransactiondetails';
import Nairatransactiondetails from '../NairaAccount/Nairatransactiondetails';
import Notificationscreen from '../Notification/Notificationscreen';
import Paybills from '../NairaAccount/Paybills';
import Buyairtime from '../NairaAccount/BuyAirtime';
import Buycrpto from '../NairaAccount/BuyCrpto';
import Save from '../NairaAccount/Save';
import Send from '../BTCAccount/Send';
import Recieve from '../BTCAccount/Recieve';
import Sell from '../BTCAccount/Sell';
import Convert from '../BTCAccount/Convert';
import Successful from '../BTCAccount/Successful';
import Transactionpin from '../BTCAccount/Transactionpin';
import Sellsuccessfull from '../BTCAccount/Sellsuccessfull';
import Deposit from '../NairaAccount/Deposit';
import Transfernaira from '../NairaAccount/Transfernaira';
import Linkbankaccount from '../NairaAccount/LinkBankAccount';

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack";
import Splashscreen from '../Loadingscreen/Splashscreen';

const Stack = createStackNavigator();

export default function Homestack() {
  
 // const context = useContext(AuthContext);const{userInfo, splashLoading,isLoading}=useContext(AuthContext);console.log(context)
 
 return (
    
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#8E3FFF",
        headerShown: false,

      }}>

          <Stack.Screen
            name="Splash Screen"
            component={Splashscreen}
            options={{headerShown: false}}
          />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="btc" component={Bitcoinacct} />
    
      <Stack.Screen name="btctrans" component={Bitcointransactiondetails} />
      
      <Stack.Screen name="nairatrans" component={Nairatransactiondetails} />
      
      <Stack.Screen name="notify" component={Notificationscreen} />
      
      <Stack.Screen name="paybills" component={Paybills} />
      
      <Stack.Screen name="buyairtime" component={Buyairtime} />
      
      <Stack.Screen name="buycrpto" component={Buycrpto} />
      
      <Stack.Screen name="save" component={Save} />
      
      <Stack.Screen name="send" component={Send} />
      
      <Stack.Screen name="recieve" component={Recieve} />
      
      <Stack.Screen name="sell" component={Sell} />
      
      <Stack.Screen name="convert" component={Convert} />
      
      <Stack.Screen name="successful" component={Successful} />
      
      <Stack.Screen name="transpin" component={Transactionpin} />
      
      <Stack.Screen name="sellsuccess" component={Sellsuccessfull} />
      
      <Stack.Screen name="deposit" component={Deposit} />
      
      <Stack.Screen name="transfer" component={Transfernaira} />
      
      <Stack.Screen name="link" component={Linkbankaccount} />
      
  
 

  
    </Stack.Navigator>
</NavigationContainer>

    
  )
}