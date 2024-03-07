import React from "react";
import { View,Text,ImageBackground } from "react-native";

export default function Lists({tittle,image,date}){
    return(
        <View style={{borderRadius:20,display:'flex',flexDirection:'row',gap:30}}>
            <ImageBackground source={{uri:`https://image.tmdb.org/t/p/w500${image}`}} style={{width:200,height:140}}>
            </ImageBackground>
            <View>
            <Text style={{backgroundColor:'',fontSize:15,color:'white'}}>{tittle}</Text>
            <Text style={{color:'white',fontSize:15}}>{date}</Text>
            </View>
        </View>
    );
}