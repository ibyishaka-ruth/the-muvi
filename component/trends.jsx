import React from "react";
import { View,Text,ImageBackground } from "react-native";

export default function Pics({tittle,image}){
    return(
        <View style={{borderRadius:20}}>
            <ImageBackground source={{uri:`https://image.tmdb.org/t/p/w500${image}`}} style={{width:200,height:140}}>
            <Text style={{backgroundColor:'#F7D24A',textAlign:'left',width:25,margin:5,marginLeft:170}}>{tittle}</Text>
           
           
            </ImageBackground>
        </View>
    );
}