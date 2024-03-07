import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Movie from './home';
import Image from './joker';
import Muvi from './watch';
import Signi from './sign';
import MyTab  from './mytab';
import Logini from './login';
import List from './mylist';
import Profile from './profile';
import Search from './search';
import Action from './action';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='login' options={{headerShown:false}}>
            <Stack.Screen name='home' component={Movie} options={{headerShown:false}}/>
            <Stack.Screen name='joker' component={Image} options={{headerShown:false}} />
            <Stack.Screen name='watch' component={Muvi} options={{headerShown:false}} />
            < Stack.Screen name='sign' component={Signi} options={{headerShown:false}}/>
            <Stack.Screen name='login' component={Logini} options={{headerShown:false}} />
            <Stack.Screen name='mytab' component={MyTab} options={{headerShown:false}}/>
            <Stack.Screen name='mylist' component={List} options={{headerShown:false}}/>
            <Stack.Screen name='profile' component={Profile} options={{headerShown:false}}/>
            <Stack.Screen name='search' component={Search} options={{headerShown:false}}/>
            <Stack.Screen name='action' component={Action} options={{headerShown:false}}/>
          </Stack.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



//  import { StatusBar } from 'expo-status-bar';
//  import { StyleSheet, Text, View } from 'react-native';
// import MyTab  from './mytab';
//  export default function App() {
//  return (
//   <MyTab/>
    
//   );
//   }
  
 