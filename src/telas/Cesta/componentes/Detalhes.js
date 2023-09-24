import React from "react";
import logo from '../../../../assets/logo.png'
import Texto from '../../../componentes/texto'
import { Image,View, StyleSheet, Text } from "react-native";


export default  function Detalhes (){
    return <>
        <Texto style={estilos.nome}>Cesta de Verduras</Texto>
        <View style={estilos.linha}>
            <Image style={estilos.imagemFazenda} source={logo}></Image>
            <Texto style={estilos.fazenda}>Jenny Jack Farm</Texto>

        </View>
        
        <Texto style={estilos.descricao}>Uma cesta de prudutos 
            selecionados cuidadosamente da 
            fazenda direto para a sua cozinha</Texto>
        <Text style={estilos.preco}>R$ 40,00</Text>    
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
