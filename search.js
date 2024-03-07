import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import Pic from './component/film.jsx';
import React,{useEffect,useState} from "react";


export default function Search({navigation}) {
    const [search,setSearch] = useState([])
    const [searchdata,setSearchdata] = useState('')

    // const [movie,setmovie]=useState([])
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGM0YmQ2OTEzNjQ3ZWFmNGQxMGIzNWNlNWRiOWEzZCIsInN1YiI6IjY1ZDg2Y2FkNDBkMGZlMDE2MmEwOGI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XZ_fWP8lgY8d7b_PhGH4fj-9yiLaMrObycvUiAjKnWw'
        }
      };
      React.useEffect(()=>{
        if(searchdata.length>0){
          Searchapi()
        }else{
          setSearch([])
        }
        },[searchdata])
        const Searchapi=()=>{
            fetch(`https://api.themoviedb.org/3/search/movie?query=${searchdata}&include_adult=false&language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => 
              {
                setSearch(response.results)
                console.log(response.results[0])
              })
            .catch(err => console.error(err));
          }
    return (
        <View style={{backgroundColor:'#1F2123',height:'100%'}}>
            <ScrollView>
             <View >
                
        < TextInput style={{width:'90%',fontWeight:'bold',marginTop:20,backgroundColor:'#303234',justifyContent:'center',
        marginHorizontal:10,marginLeft:20,marginTop:50 }}
        theme={{}}
         mode='offline'
         label='Search'
         underlineColor="transparent"
         textColor='white'
         placeholderTextColor={'white'}
         onChangeText={(setSearchdata)}
         right={<TextInput.Icon size={20}  icon={"magnify"}></TextInput.Icon>}
        />
    </View>
   <Text style={{color:'white',padding:10}}>Search results for disney</Text>
    <View>
<ScrollView horizontal showsHorizontalScrollIndicator={false} >
    <View style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        {search.map((item,index) =>{
        return(
            <View key={index} style={{marginTop:30,marginRight:10,justifyContent:'space-between'}}>
                <Pic  tittle={item.vote_count} image={item.poster_path} onPress={()=>{navigation.navigate('action',item)}}
                />
                
            </View>
        )
})}</View>
    </ScrollView>
    </View>
    </ScrollView>
    </View>
        // </View>
    );
      }