import React from "react";
import {StyleSheet, View } from "react-native";
import Detalhes from '../Cesta/componentes/Detalhes';
import Topo from '../Cesta/componentes/topo';



export default  function Cesta (topo , detalhes) {
   return <>
     <Topo{... topo} />
     <View style={estilos.principal}> </View>
     <Detalhes {...detalhes}/>
    </>  
}

const estilos = StyleSheet.create({
   
    principal:{
        paddingVertical: 8,
        paddingHorizontal: 16,
        
    },
    

});