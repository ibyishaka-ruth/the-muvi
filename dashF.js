import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native';
import{React, useEffect, useState}from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput,CheckBox } from 'react-native-paper';
import Card from './component/series.jsx';
import Box from './component/movie.jsx';
import Pics from './component/trends.jsx';
import Pic from './component/film.jsx';
export default function Homei({ navigation}) {
    const data=[{
        id:1,
        name:"featured",
    },
      {
        id:2,
        name:"series",
      },
      {
        id:3,
        name:"films",
      },
      {
        id:4,
        name:"origin",
      },
      {
        id:5,
        name:"About us",
      }, 
]
const feature=[{
    id:1,
    name:"popular today",
},
{
    id:2,
    name:"marvel",
},
{
    id:3,
    name:"fans choice",
},
{
    id:4,
    name:"star warn",
},
{
    id:5,
    name:"trending",
},
]

const [movie,setmovie]=useState([])
const [newmovie,setnewmovie]=useState([])
const [popular,setpopular]=useState([])
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGM0YmQ2OTEzNjQ3ZWFmNGQxMGIzNWNlNWRiOWEzZCIsInN1YiI6IjY1ZDg2Y2FkNDBkMGZlMDE2MmEwOGI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XZ_fWP8lgY8d7b_PhGH4fj-9yiLaMrObycvUiAjKnWw'
    }
  };
  const Getmovi =()=>{
  
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())

    .then(response =>{ 
        setmovie(response.results)
        console.log(response.results)
      }
        )
    .catch(err => console.error(err));
}
const Getnewrelease = () =>{
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
    setnewmovie(response.results)
    console.log(response.results)
  })
  .catch(err => console.error(err));
  }
  const Getpopular=() =>{
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response =>{
    setpopular(response.results) 
    })
  .catch(err => console.error(err));
  }
    useEffect(()=>{
        Getmovi()
        Getnewrelease()
        Getpopular()
    },[])
  return (
    <View style={styles.container}>
        <View style={{height:35}}></View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{display:'flex',flexDirection:'row',gap:7,padding:20}}>
        <Text style={{color:'black',fontWeight:'bold',fontSize:20,backgroundColor:'#F4B917',padding:5,borderRadius:10,width:60,justifyContent:'center',textAlign:'center'}}>M</Text>
      <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>MUVI</Text></View>
      <View style={{display:'flex',flexDirection:'row',gap:8,padding:20}}>
      <Feather name='bookmark'style={{color:'white',fontSize:20}}/>
      <Ionicons name='notifications-outline' style={{color:'white',fontSize:20}} />
      </View>
      </View>
      <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <View style={{display:'flex',flexDirection:'row'}}>
        {data.map((item,index) =>{
        return(
            <View key={index} style={{marginRight:10,color:'white'}}>
                <Card name={item.name}/>
            </View>
        )
})}
</View>

    </ScrollView>
    </View >
    {/* <View style={{backgroundColor:'#26282C',height:''}}> */}
<ScrollView  showsHorizontalScrollIndicator={false}>
    <View style={{marginHorizontal:25,marginTop:10}}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <View style={{display:'flex',flexDirection:'row'}}>
        {feature.map((item,index) =>{
        return(
            <View key={index} style={{marginRight:10,color:'white'}}>
                <Box name={item.name}/>
            </View>
        )
})}</View>

    </ScrollView>
    </View>
    <View style={{ display: 'flex', flexDirection: 'row', paddingLeft: 20, marginTop: 15 }}>
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>New Release</Text>
          <Text style={{ color: 'gray', fontSize: 10, flex: 1, alignItems: 'flex-end', marginLeft: 180, marginTop: 10 }}>View More</Text>
</View>
<View>
<ScrollView horizontal showsHorizontalScrollIndicator={false} >
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        {movie.map((item,index) =>{
        return(
            <View key={index} style={{marginTop:30,marginRight:10,justifyContent:'space-between'}}>
                <Pics  tittle={item.vote_count} image={item.poster_path}/>
                
            </View>
        )
})}</View>
    </ScrollView>
    </View>
    <View style={{ display: 'flex', flexDirection: 'row', paddingLeft: 20, marginTop: 15 }}>
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>made for you</Text>
          <Text style={{ color: 'gray', fontSize: 10, flex: 1, alignItems: 'flex-end', marginLeft: 180, marginTop: 10 }}>View More</Text>
</View>
    <View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        {newmovie.map((item,index) =>{
        return(
            <View key={index} style={{marginTop:30,marginRight:10,justifyContent:'space-between'}}>
                <Pics  tittle={item.vote_average} image={item.poster_path}/>
                
            </View>
        )
})}</View>
    </ScrollView>
    </View>
    {/* <View></View> */}
    <View style={{display:'flex',flexDirection:'row',marginLeft:15,padding:5}}>
    <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>popular On</Text>
    <Text style={{color:"#F4B917",fontSize:20,fontWeight:'bold'}}>MUVI</Text>
    </View>

    <View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
    <View style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        {movie.map((item,index) =>{
        return(
            <View key={index} style={{marginTop:30,marginRight:10,justifyContent:'space-between'}}>
                <Pic  tittle={item.vote_average} image={item.poster_path}/>
            </View>
        )
})}</View>
    </ScrollView>  
    </View>
    
    </ScrollView>
  
    </View>
    
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    //   margin:20

    },
  });