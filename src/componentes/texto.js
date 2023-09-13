import React from "react";
import {View, StyleSheet } from "react-native";

export default function Texto ({children, style}){

    return <Text style ={ [style , estilos.texto]}>{children} </Text>
}

const estilos = StyleSheet ({
    texto:{
        fontFamili: "fontNormal",
    }
})