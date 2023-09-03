import React from "react";
import {StyleSheet, Image, Dimensions, Text, View } from "react-native";
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png'

const width =Dimensions.get ('screen').width; 

export default  function Cesta () {
   return <>
    <Image source = {topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhe da cesta</Text>
    

    <View style={estilos.principal}>
        <Text style={estilos.nome}>Cesta de Verduras</Text>
        <View style={estilos.linha}>
            <Image style={estilos.imagemFazenda} source={logo}></Image>
            <Text style={estilos.fazenda}>Sanches Farm</Text>

        </View>
        
        <Text style={estilos.descricao}>Uma cesta de prudutos 
            selecionados cuidadosamente da 
            fazenda direto para a sua cozinha</Text>
        <Text style={estilos.preco}>R$ 40,00</Text>    

    </View>
    </>  
}

const estilos = StyleSheet.create({
    topo: {
        width:"100%",
        height: 578/ 768 * width,
    },
    titulo:{
        width:"100%",
        position:"absolute",
        textAlign: "center",
        fontSize: 20,
        lineHeight: 26,
        fontWeight:"bold",
        padding: 16,
        color:"white",
        
       
    },
    principal:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
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
    linha:{
        flexDirection:"row",
        paddingVertical:12,
    },

    descricao:{
        fontSize:16,
        lineHeight:26,
        color:"#a3a3a3",

    },
    preco:{
        fontSize:26,
        lineHeight: 42,
        marginTop:8,
        color:"#2A9F85"


    },
    


});