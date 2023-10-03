
import React from 'react';
import { StatusBar, SafeAreaView , View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Cesta from './src/telas/Cesta/index';
import mock from './src/mocks/cesta'
import AppLoading from 'expo-app-loading';


export default function App() {

  const [fontCarregada] = useFonts (
    { "fontNormal": Montserrat_400Regular , "fontForte": Montserrat_700Bold

  })

  if (!fontCarregada){
    return <AppLoading/>
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar/>
      <Cesta {...mock}/>
    
    </SafeAreaView>
      
    
  );
}


