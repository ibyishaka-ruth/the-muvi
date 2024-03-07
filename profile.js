// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import { Button } from 'react-native-paper';
import { FIREBASE_AUTH } from './firebaseconfiguration/firebase';
export default function Profile({navigation}) {
  const logout = async() =>{
    FIREBASE_AUTH.signOut()
    navigation.navigate("login")
  }
    return (
        <View style={styles.container}>
            {/* <View style={{height:30}}></View> */}
            <Text style={{color:'white',padding:30,backgroundColor:'#202123'}}>MORE</Text>
            <View style={{backgroundColor:'#25272A',display:'flex',justifyContent:'center',alignItems:'center',padding:60}}>
          
            <View style={{width:80, height:80,borderRadius:10,overflow:"hidden"}}>
    <Image source={require('./assets/me myself.jpg')} style={{width:"100%",height:"100%"}} />
    </View>
     
        
        <Text style={{color:'#878A8A',justifyContent:'center',textAlign:'center'}}> Ibyishaka Ruth</Text>
        <Text style={{color:'#565657',justifyContent:'center',textAlign:'center'}}>ibyishakar25@gmail.com </Text>
        <Text style={{color:'#FDCF30',justifyContent:'center',textAlign:'center'}}>Edit Profile</Text>
    </View>
    <View style={{backgroundColor:'#2B2D30',height:'100%',padding:20}}>
      <View style={{display:'flex',flexDirection:'row',padding:10,gap:30}}>
       <AntDesign name='inbox' style={{color:'#C6C9C7',fontSize:20}}/>
        <Text style={{color:'#C6C9C7',fontSize:15}}>Inbox</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',padding:10,gap:30}}>
       <AntDesign name='setting' style={{color:'#C6C9C7',fontSize:20}}/>
        <Text style={{color:'#C6C9C7',fontSize:15}}>Account settings</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',padding:10,gap:30}}>
       <MaterialIcons name='language' style={{color:'#C6C9C7',fontSize:20}}/>
        <Text style={{color:'#C6C9C7',fontSize:15}}>Language</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',padding:10,gap:30}}>
       <Feather name='help-circle' style={{color:'#C6C9C7',fontSize:20}}/>
        <Text style={{color:'#C6C9C7',fontSize:15}}>Help, FAQ</Text>
      </View>
      <View style={{padding:20,marginTop:5}}>
      <Text style={{color:'#737576'}}>Terms & conditions</Text>
      <Text style={{color:'#737576'}}>Privacy and policy</Text>
      </View>
      <View style={{height:10}}></View>
      <TouchableOpacity style={{color:'#E2886F',borderWidth:3,borderColor:'#41464A'}} onPress={logout} >
        <Text style={{color:'#C36F60',textAlign:'center',padding:7}}>Log Out</Text>
        </TouchableOpacity>
        </View>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#2B2D30',
    //   alignItems: 'flex-start',
    //   justifyContent: 'center',
    },
  });
  