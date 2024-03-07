import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Movie({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{display:'flex',flexDirection:'row',gap:7}}>
        <TouchableOpacity onPress={() =>
        navigation.navigate('joker')
        }>
        <Text style={{color:'black',fontWeight:'bold',fontSize:30,backgroundColor:'#F4B917',padding:5,borderRadius:10,width:60,justifyContent:'center',textAlign:'center'}}>M</Text>
        </TouchableOpacity>
      <Text style={{color:'white',fontWeight:'bold',fontSize:30}}>MUVI</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
