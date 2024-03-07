import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native';
import{React,useEffect,useState}from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Pics from './component/trends.jsx';
import Feather from 'react-native-vector-icons/Feather';
import { TextInput,CheckBox } from 'react-native-paper';
import Movie from './home.js';
import YoutubePlayer from "react-native-youtube-iframe";
export default function Action({navigation,route}) {
    const muvoie=route.params
    const [newmovie,setnewmovie]=useState([])
    const [video,setvideo] = useState('')
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGM0YmQ2OTEzNjQ3ZWFmNGQxMGIzNWNlNWRiOWEzZCIsInN1YiI6IjY1ZDg2Y2FkNDBkMGZlMDE2MmEwOGI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XZ_fWP8lgY8d7b_PhGH4fj-9yiLaMrObycvUiAjKnWw'
        }
      };
      const Getnewrelease = () =>{
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => {
        setnewmovie(response.results)
        console.log(response.results)})
      .catch(err => console.error(err));
      }
      const Getpopular = () =>{
        fetch(`https://api.themoviedb.org/3/movie/${muvoie.id}/videos?language=en-US`, options)
  .then(response => response.json())
  .then(response =>{
    setvideo(response.results[0].key)
     console.log(response.results[0].key)
    })
  .catch(err => console.error(err));
      }
      useEffect(()=>{
        // Getmovi()
        Getnewrelease()
        Getpopular()
    },[])
  return (
    <View style={styles.container}>
        <View style={{height:25}}></View>
    <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',margin:30,gap:20}} >
    <TouchableOpacity onPress={() =>
        navigation.navigate('search')
        }> 
        <AntDesign name='arrowleft' style={{color:'white',color:'yellow',fontSize:20}}/>
        </TouchableOpacity>
    
       <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Action</Text>
      
    </View> 
    {/* <Image source={{uri:`https://image.tmdb.org/t/p/w500${muvoie.poster_path}`}} style={{width:'90%',height:'28%',marginLeft:23}}
    resizeMode='cover'/> */}
      <YoutubePlayer
        height={300}
        // play={playing}
        videoId={video}
        // onChangeState={onStateChange}
      />
      <ScrollView>
    <View style={{marginLeft:23,}}>
        
    <Text style={{color:'#FDFFFF',fontSize:15,fontWeight:'bold'}}>{muvoie.title} </Text>
    <Text  style={{color:'#898B8F',fontSize:15}}>{muvoie.overview}</Text>
    <Text  style={{color:'#898B8F',fontSize:15}}>{muvoie.release_date}</Text>
    <View style={{display:'flex',flexDirection:'row',gap:20,marginTop:20}}>
    <TouchableOpacity style={{display:'flex',flexDirection:'row',backgroundColor:'#FDD130',width:'40%',padding:8,borderRadius:8}}>
        <Feather name='play'style={{fontSize:20}}/>
        <Text >PLAY</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{display:'flex',flexDirection:'row',width:'40%',padding:8,borderRadius:8,borderWidth:2,borderColor:'#333438'}}>
        <AntDesign name='plus'style={{fontSize:20,color:'#FDD130'}}/>
        <Text style={{color:'#A8AAAE'}} >My list</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={{ display: 'flex', flexDirection: 'row', paddingLeft: 20, marginTop: 15 }}>
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 15}}>u.s Action Movies</Text>
          <Text style={{ color: 'gray', fontSize: 10, flex: 1, alignItems: 'flex-end', marginLeft: 180, marginTop: 10 }}>View More</Text>
</View>
<View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        {newmovie.map((item,index) =>{
        return(
            <View key={index} style={{marginTop:30,marginRight:10,justifyContent:'space-between'}}>
                <Pics   image={item.poster_path}/>
                
            </View>
        )
})}</View>
    </ScrollView>
    </View>
    <View style={{ display: 'flex', flexDirection: 'row', paddingLeft: 20, marginTop: 15 }}>
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 15}}>u.s Action Movies</Text>
          <Text style={{ color: 'gray', fontSize: 10, flex: 1, alignItems: 'flex-end', marginLeft: 180, marginTop: 10 }}>View More</Text>
</View>
<View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        {newmovie.map((item,index) =>{
        return(
            <View key={index} style={{marginTop:30,marginRight:10,justifyContent:'space-between'}}>
                <Pics   image={item.poster_path}/>
                
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
          backgroundColor: '#26282C',
        //   margin:20
    
        },
      });