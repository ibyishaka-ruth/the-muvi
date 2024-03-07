import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import{React}from 'react';

export default function Image({navigation}) {
  return (
    <View style={{Color:'#2F2D2B'}}>
        <View>
        <ImageBackground source={require('./assets/jokeri.webp')}
        style={{
            resizeMode: 'cover',
            height: '100%',
            width: '100%',
            // color:'#2F2D2B'
          }}>
            <View style={{backgroundColor:'rgba(000,000,000,0.5)',height:'100%',width:'100%'}}>
            <View style={{display:'flex',justifyContent:'center',marginTop:305,marginHorizontal:20}}>
       <Text style={{color:'white',fontWeight:'bold',fontSize:25}}>Enjoy your favorite </Text>
        <Text style={{color:'white',fontWeight:'bold',fontSize:25}}>movie everywhere</Text>
        <View style={{backgroundColor:'',height:20}}></View>
        <Text style={{color:'white',fontSize:15,}}>Browse through our collections</Text>
        <Text style={{color:'white',fontSize:15,}}> and discover hundreds of movies and series that</Text>
        <Text style={{color:'white',fontSize:15,}}> you'll love</Text>
        <Text style={{backgroundColor:'#F4B917',width:'30%',height:'2%',marginTop:8}}></Text>
        </View>
        <View >
            <View style={{height:260}}></View>
        <TouchableOpacity onPress={() =>
        navigation.navigate('watch')
        }>
        <Text style={{color:'black',fontSize:15,backgroundColor:'#F4B917',padding:8,
        borderRadius:10,width:'90%',justifyContent:'center',textAlign:'center',marginLeft:20,marginRight:20}}>Get started</Text>
        </TouchableOpacity>
        </View>
        </View>
        </ImageBackground>
        </View>
    <StatusBar style="auto" />
    </View>
  );
}