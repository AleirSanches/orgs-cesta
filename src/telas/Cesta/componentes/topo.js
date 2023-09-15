import React from "react";
import {StyleSheet, Image, Dimensions } from "react-native";
import topo from '../../../../assets/topo.png';
import Texto from "../../../componentes/texto";


const width =Dimensions.get ('screen').width; 

export default  function Topo () {
    return <>
        <Image source = {topo} style={estilos.topo}/>
        <Texto style={estilos.titulo}>Detalhe da cesta</Texto>
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
    })