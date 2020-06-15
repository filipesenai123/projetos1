import React from "react";
import { StyleSheet, Text, View} from 'react-native';
import Constant from 'expo-constants'
import Home from "./src/screen/Home";
import Busca from './src/screen/Busca'


export default function App() {
  return (
    <View style={{
      flex:1,
      marginTop:Constant.statusBarHeight, 
    
    
    }}>
       {/* <Home/> */}
       <Busca />
    </View>
  
  );
}
