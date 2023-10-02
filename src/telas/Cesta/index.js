import React from "react";
import {FlatList, StyleSheet, View  } from "react-native";
import Detalhes from '../Cesta/componentes/Detalhes';
import Topo from '../Cesta/componentes/topo';
import Itens from './componentes/Item';



export default  function Cesta (topo , detalhes, itens) {
   return <>

    <FlatList
            data={Itens.lista}
            renderItem={Item}
            keyExtractor={({nome}) => nome}
            
            ListHeaderComponent={() => {
                return <>
                <Topo {... topo} />

                <View style={estilos.principal}> 

                <Detalhes {...detalhes}/>
                <Texto>{itens.titulo}</Texto>
                </View>

                </>     
            }}

            
            />
            </>

     

   
}

const estilos = StyleSheet.create({
   
    principal:{
        paddingVertical: 8,
        paddingHorizontal: 16,
        
    },
    

});