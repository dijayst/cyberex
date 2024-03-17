import React from 'react';
import { StyleSheet } from 'react-native'
//import {createStackNavigator} from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Signin/Login';
import Signup from '../Signin/Signup';
import Slider from '../Landingpage/Slider';
import Verifyemail from '../Signin/Verify email';
import Password from '../Signin/Password';
import Paymentpin from '../Signin/Paymentpin';
import Welcomebackscreen from '../Signin/Welcomebackscreen';
import Forgotpassword from '../Signin/Forgotpassword';
import Entercode from '../Signin/Entercode';
import Changepassword from '../Signin/Changepassword';
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

import Tabnavigation from './Tabnavigation';
    const Stack = createNativeStackNavigator();

  export default function Stacknav() {
  return (

    <Stack.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#8E3FFF",
        headerShown: false,

      }}>

<Stack.Screen name="slider" component={Slider} />

<Stack.Screen name="signup" component={Signup} />

<Stack.Screen name="login" component={Login}  options={{ tabBarVisible: false }}/>

<Stack.Screen name="verify" component={Verifyemail} />

<Stack.Screen name="password" component={Password} />

<Stack.Screen name="paymentpin" component={Paymentpin} />

<Stack.Screen name="welcome" component={Welcomebackscreen} />

<Stack.Screen name="forgot" component={Forgotpassword} />

<Stack.Screen name="enter" component={Entercode} />
<Stack.Screen name="change" component={Changepassword} />


<Stack.Screen name="home" component={Tabnavigation} />

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


    
   
  )
}


/*




 <Tab.Screen name="stack" component={Homestack} options={{headerShown:false,
    tabBarLabel:({focused})=>(<Text style={{color:focused?colors.Orange:colors.neural400,fontSize:10,marginTop:-7}}>Home</Text>),
    tabBarIcon:({focused})=>(<FontAwesome name="home"  color={focused?colors.Orange:colors.neural400} size={25}/>)}}
  />*/