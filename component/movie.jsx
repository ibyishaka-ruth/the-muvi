import React from "react";
import { View,Text } from "react-native";

export default function Box({name}){
    
    return(
        <View style={{borderWidth:1,borderRadius:5,paddingVertical:1,paddingHorizontal:2,borderColor:'white',marginTop:10}}>
            <Text style={{textAlign:'center',padding:5,color:'white'}}>{name}</Text>
        </View>
    );
}