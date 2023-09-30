import React from "react";
import {ScrollView, StyleSheet, View } from "react-native";
import Detalhes from '../Cesta/componentes/Detalhes';
import Topo from '../Cesta/componentes/topo';
import Itens from '../../telas/Cesta/componentes/itens';



export default  function Cesta (topo , detalhes) {
   return <ScrollView>
     <Topo {... topo} />
     <View style={estilos.principal}> </View>
     <Detalhes {...detalhes}/>
     <Itens {...Itens}/>
    </ScrollView>  
}

const estilos = StyleSheet.create({
   
    principal:{
        paddingVertical: 8,
        paddingHorizontal: 16,
        
    },
    

});