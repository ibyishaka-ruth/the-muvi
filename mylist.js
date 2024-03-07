import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native';
import Lists from './component/list';

export default function List({navigation}) {
    const[list,setlist]=useState ([])
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGM0YmQ2OTEzNjQ3ZWFmNGQxMGIzNWNlNWRiOWEzZCIsInN1YiI6IjY1ZDg2Y2FkNDBkMGZlMDE2MmEwOGI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XZ_fWP8lgY8d7b_PhGH4fj-9yiLaMrObycvUiAjKnWw'
        }
      };
       const Getlist=() =>{
      fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => 
            {
                setlist(response.results)
               })
        .catch(err => console.error(err));
       }
       useEffect(() =>{
        Getlist()
       }
       )
  return (
    <View style={styles.container}>
        <View style={{height:20}}></View>
 <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start'}}>
        <View style={{display:'flex',flexDirection:'row',gap:7,padding:20}}>
        <Text style={{color:'black',fontWeight:'bold',fontSize:20,backgroundColor:'#F4B917',padding:5,borderRadius:10,width:60,justifyContent:'center',textAlign:'center'}}>M</Text>
      <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>MUVI</Text></View>
    </View>
    <View style={{display:'flex',flexDirection:'row',gap:25,marginLeft:15}}>
        <Text style={{color:'white',fontSize:15}}>My List</Text>
        <Text style={{color:'white',fontSize:15}}>Download</Text>
    </View>
    <View>
<ScrollView  showsHorizontalScrollIndicator={false} >
    <View style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        {list.map((item,index) =>{
        return(
            <View key={index} style={{marginTop:30,marginRight:10,justifyContent:'space-between'}}>
                <Lists  tittle={item.title} image={item.poster_path} date={item.release_date}/>
                
            </View>
        )
})}</View>
    </ScrollView>
    </View>
     </View>
     );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'flex-start',
        // justifyContent: 'center',
      },
    });
    