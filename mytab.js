import * as React from 'react';

//screen
import Homei from './dashF';
import Search from './search';
import Profile from './profile';
import List from './mylist';

// bottom navigator

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

//icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function MyTab(){
    return (
    
            <Tab.Navigator>
                <Tab.Screen 
                name='Home' 
                component={Homei}
                options={{
                    headerShown:false,
                    tabBarStyle:{backgroundColor:'#1F2123'},
                    tabBarIcon: (focused)=>
                        <AntDesign name='home' size={25} color={focused? '#FFD130':'#AFB2B1'} />
                    
                }} 
                    
                 />
                <Tab.Screen name='Search' component={Search} 
                 options={{
                    headerShown:false,
                    tabBarStyle:{backgroundColor:'#1F2123'},
                    tabBarIcon: ({focused})=>
                        <AntDesign name='search1' size={25}color={focused? '#FFD130':'#AFB2B1'} />
                    
                }} 
                />
                <Tab.Screen name='mylist' component={List} 
                 options={{
                    headerShown:false,
                    tabBarStyle:{backgroundColor:'#1F2123'},
                    tabBarIcon: ({focused})=>
                        <Feather name='folder' size={25}color={focused? '#FFD130':'#AFB2B1'} />
                    
                }} 
                />
                <Tab.Screen name='Profile' component={Profile} 
                 options={{
                    headerShown:false,
                    tabBarStyle:{backgroundColor:'#1F2123'},
                    tabBarIcon: ({focused})=>
                        <AntDesign name='user' size={25} color={focused?'#FFD130':'#AFB2B1'} />
                    
                }} 
                />

            </Tab.Navigator>
    
    )
}