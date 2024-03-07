import React from "react";
import { View,Text } from "react-native";

export default function Card({name}){
    
    return(
        <View style={{borderWidth:1,borderRadius:50,paddingVertical:0,paddingHorizontal:15,}}>
            <Text style={{textAlign:'center',padding:10,color:'white'}}>{name}</Text>
        </View>
    );
}