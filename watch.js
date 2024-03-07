import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import{React}from 'react';

export default function Muvi({navigation}) {
  return (
    <View style={styles.container}>
        <View style={{display:'flex',flexDirection:'row',gap:7,backgroundColor:'black',width:'100%',alignItems:'center',justifyContent:'center'}}>
       <View style={{backgroundColor:'black',height:90}}></View>
        <Text style={{color:'black',fontWeight:'bold',fontSize:20,backgroundColor:'#F4B917',padding:5,borderRadius:10,width:40,justifyContent:'center',textAlign:'center'}}>M</Text>
        
      <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>MUVI</Text>
      </View>
      <View style={{backgroundColor:'#F4B917',height:50}}></View>
      <ImageBackground source={require('./assets/play.jpg')}
        style={{
            resizeMode: 'cover',
            height: '50%',
            width: '100%',
            // padding:80,
            // color:'#2F2D2B'
          }}>
            <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:300,marginHorizontal:5}}>
            <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>welcome to Muvi</Text>
            <Text  style={{color:'#8B8D8E',marginTop:5}}>Free movie streaming all your needs</Text>
            <Text style={{color:'#8B8D8E'}}> everytime and everywhere</Text>
            </View>
            <View style={{marginTop:200}}>
        <TouchableOpacity onPress={() =>
        navigation.navigate('login')
        }>
        <Text style={{color:'black',fontSize:15,backgroundColor:'#F4B917',padding:8,
        borderRadius:10,width:'90%',justifyContent:'center',textAlign:'center',marginLeft:20,marginRight:20}}>Watch movie</Text>
        <Text style={{color:'white',padding:15,textAlign:'center'}}>Sign in</Text>
        </TouchableOpacity>
        </View>
            </ImageBackground>
    <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#26282C',
      alignItems: 'center',
    //   justifyContent: '',

    },
  });
  