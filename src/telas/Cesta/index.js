import React from "react";
import {StyleSheet, View } from "react-native";
import Detalhes from '../Cesta/componentes/Detalhes';
import Topo from '../Cesta/componentes/topo';



export default  function Cesta () {
   return <>
     <Topo />
     <View style={estilos.principal}> </View>
     <Detalhes/>
    </>  
}

const estilos = StyleSheet.create({
   
    principal:{
        paddingVertical: 8,
        paddingHorizontal: 16,
        
    },
    

});