import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React ,{useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput,CheckBox } from 'react-native-paper';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseconfiguration/firebase';
export default function Signi({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  // const auth= FIREBASE_AUTH;

  const validateForm = () => {
      let valid = true

      // Validate email
      if (email.trim() == '') {
          setEmailError('Email is required')
          valid = false
      } else if (!isValidEmail(email)) {
          setEmailError('Invalid email format')
          valid = false
      } else {
          setEmailError('')
      }
    // Validate password
    if (password.trim() == '') {
      setPasswordError('Password is required')
      valid = false
  } else {
      setPasswordError('')
  }

  return valid
}

const handleSubmit = async () => {
  if (validateForm()) {
      // Perform form submission
      navigation.navigate('mytab')
      console.log('Form submitted:', email, password)
 
      try{
        const response = await createUserWithEmailAndPassword (FIREBASE_AUTH,email,password);
        console.log(response);
        console.log('already authenticated');
      }
      catch(error) {
        console.error(error)
      }
      
        navigation.navigate('login')
  }
}

const isValidEmail = (email) => {
  // Basic email validation regex
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
  return (
    <View style={styles.container}>
    <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',margin:30,gap:20}} >
        <AntDesign name='arrowleft' style={{color:'white',color:'yellow',fontSize:20}}/>
       <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Register</Text>
      
    </View> 
    <View style={{backgroundColor:'black',height:30}}></View>
    <View style={{display:'flex',flexDirection:'row',gap:7,backgroundColor:'black',width:'100%',alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'black',fontWeight:'bold',fontSize:20,backgroundColor:'#F4B917',padding:5,borderRadius:10,width:40,justifyContent:'center',textAlign:'center'}}>M</Text>
        
      <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>MUVI</Text>
      </View>
      <View style={{height:35}}></View>
      <View style={{display:'flex',alignItems:'center'}}>
      <Text style={{color:'#F4F6F7'}}>Sign up to discover all our movies and enjoy our features.</Text>
      </View>
      <View>
        <View style={{height:40}}></View>
        < TextInput style={{width:'90%',color:'white',fontWeight:'bold',marginHorizontal:20,backgroundColor:'black' }}
        mode='offline'
        label='Email Address'
        underlineColor="transparent"
        theme={{colors:{primary:'white'}}}
        textColor='white'
        value={email}
        onChangeText={setEmail}
        error={emailError}
        
        right={<TextInput.Icon size={13}  icon={"email-outline"} color={'#FDD130'}></TextInput.Icon>}
        />
         {emailError ? <Text style={{color:'red'}}>{emailError}</Text> : null}

         <TextInput style={{width:'90%',color:'FFFFFF',fontWeight:'bold',marginHorizontal:20,marginTop:10,backgroundColor:'black' }}
         mode="offline"
         label="Password"
         underlineColor="transparent"
         theme={{colors:{primary:'white'}}}
         textColor='white'
         secureTextEntry
         right={<TextInput.Icon icon={"lock-outline"} color={'#FDD130'} size={13}></TextInput.Icon>}
        />
         <TextInput style={{width:'90%',color:'FFFFFF',fontWeight:'bold',marginHorizontal:20,marginTop:10,backgroundColor:'black' }}
         mode="offline"
         error={passwordError}
         value={password}
         onChangeText={setPassword}
         label="Password"
         underlineColor="transparent"
         theme={{colors:{primary:'white'}}}
         textColor='white'
         secureTextEntry
         right={<TextInput.Icon icon={"lock-outline"} color={'#FDD130'} size={13}></TextInput.Icon>}
        />
         {passwordError ? <Text style={{color:'red'}}>{passwordError}</Text> : null}
      </View>
      <View>
        <View style={{height:30}}></View>
        <TouchableOpacity onPress={handleSubmit}> 
      <Text style={{color:'black',fontSize:15,backgroundColor:'#FDD130',padding:13,
        borderRadius:5,width:'90%',justifyContent:'center',textAlign:'center',marginLeft:20,marginRight:20}}>Sign Up</Text>
    </TouchableOpacity>
      </View>
      <View style={{display:'flex',flexDirection:'row',margin:25}}>
      <Text style={{color:'white'}}>By signing up i accept </Text><Text style={{color:'#887C41'}}>terms of use </Text>
      <Text style={{color:'white'}}>and  </Text>
      <Text style={{color:'#887C41'}}>privacy policy</Text>
      </View>
      <Text style={{color:'white',display:'flex',justifyContent:'center',textAlign:'center'}}>Or simply sign up with</Text>
    <View style={{margin:20}}>
    <TouchableOpacity style={{display:'flex',flexDirection:'row',backgroundColor:'#111111',alignItems:'center',justifyContent:'center',borderRadius:8}}>
    <AntDesign  name='apple1' size={15} color={'white'}/>
      <Text style={{color:'white',fontSize:15,backgroundColor:'#111111',padding:13,
        borderRadius:5,width:'',justifyContent:'center',textAlign:'center'}}>Sign Up with Apple</Text>
    </TouchableOpacity>
    </View>
    <View style={{margin:5,marginHorizontal:20}}>
    <TouchableOpacity style={{display:'flex',flexDirection:'row',backgroundColor:'#FFFFFF',alignItems:'center',justifyContent:'center',borderRadius:8}}>
    <AntDesign style={{}} name='google' size={15} color={'orange'}/>
      <Text style={{color:'black',fontSize:15,backgroundColor:'#FFFFFF',padding:13,
        borderRadius:5,width:'',justifyContent:'center',textAlign:'center'}}>Or sign Up with Google</Text>
    </TouchableOpacity>
    <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:5}}> 
    <Text style={{color:'white'}}>Already have an Account? </Text>
    <TouchableOpacity onPress={() =>
        navigation.navigate('login')
        }> 
    <Text style={{color:'#887C41'}}>Sign In</Text>
    </TouchableOpacity>
    </View>
    </View>
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