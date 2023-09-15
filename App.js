
import React from 'react';
import { StatusBar, SafeAreaView , View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Cesta from './src/telas/Cesta/index';


export default function App() {

  const [fontCarregada] = useFonts (
    { "fontNormal": Montserrat_400Regular , "fontForte": Montserrat_700Bold

  })

  if (!fontCarregada){
    return <View/>
  }
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta/>
    
    </SafeAreaView>
      
    
  );
}


