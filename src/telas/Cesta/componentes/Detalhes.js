import React from "react";

import Texto from '../../../componentes/texto'
import { Image,View, StyleSheet, Text } from "react-native";


export default  function Detalhes ( nome, imagemFazenda, fazenda, descricao, preco){
    return <>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.linha}>
            <Image style={estilos.imagemFazenda} source={imagemFazenda}></Image>
            <Texto style={estilos.fazenda}>{fazenda}</Texto>

        </View>
        
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Text style={estilos.preco}>{preco}</Text>    
    </>

}

const estilos = StyleSheet.create({
  
    nome:{
        fontSize:26,
        fontWeight:"bold",
        lineHeight:42,
        color:"#464646",
        
    },
    fazenda:{
        fontSize:16,
        fontWeight:"bold",
        lineHeight:26,
        

    },
    imagemFazenda:{
        width:32,
        height:32,
    },
   

    descricao:{
        fontSize:16,
        lineHeight:26,
        color:"#a3a3a3",
        fontFamily:"fontNormal",
    },
    preco:{
        fontSize:26,
        lineHeight: 42,
        marginTop:8,
        color:"#2A9F85"


    },
    
    linha:{
        flexDirection:"row",
        paddingVertical:12,
    },

    
});
