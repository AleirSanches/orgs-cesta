import React from "react";
import {FlatList, StyleSheet, View  } from "react-native";
import Detalhes from '../Cesta/componentes/Detalhes';
import Topo from '../Cesta/componentes/topo';
import Item from './componentes/Item';
import Texto from '../../componentes/texto';



export default  function Cesta (topo , detalhes, itens) {
   return <>

    <FlatList
            data={Item.lista}
            renderItem={Item}
            
            keyExtractor={({nome}) => nome}
            
            ListHeaderComponent={() => {
                return <>
                <Topo {... topo} />

                <View style={estilos.principal}> 

                <Detalhes {...detalhes}/>
                <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                </View>

                </>     
            }}

            
            />
            </>

     

   
}

const estilos = StyleSheet.create({

    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
      },
   
    principal:{
        paddingVertical: 8,
        paddingHorizontal: 16,
        
    },
    

});