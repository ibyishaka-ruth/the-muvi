import React from "react";
import { View,Text,ImageBackground, TouchableOpacity } from "react-native";

export default function Pic({tittle,image,onPress}){
    return(
        <View style={{borderRadius:20}}>
            <TouchableOpacity onPress={onPress}>
            <ImageBackground source={{uri:`https://image.tmdb.org/t/p/w500${image}`}} style={{width:370,height:250}}>
            <Text style={{backgroundColor:'#F7D24A',textAlign:'left',width:40,margin:5,marginLeft:320,padding:8}}>{tittle}</Text>
           
           
            </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}