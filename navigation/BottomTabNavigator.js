import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';

const Tab = createBottomTabNavigator()

export default class BottomTab extends React.Component{
render() {
  return (
   <Tab.Navigator>
       <Tab.Screen name={"Home"} component={HomeScreen}/>
       <Tab.Screen name={"Search"} component={SearchScreen}/>
   </Tab.Navigator>
  );
}
}