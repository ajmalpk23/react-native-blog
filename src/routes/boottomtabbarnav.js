import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';



import TabComponent from '../config/tabbar';
const Tab = createBottomTabNavigator();



import Home from './homestack';
import Logger from '../screens/Logger';
import Documents from '../screens/Documents';
import Profile from './ProfileStack';

export default function App() {
  return (
    
      <Tab.Navigator  tabBarOptions={{
        activeTintColor: '#e91e63',
        style:{borderRadius:50,
          backgroundColor:"#fff",
          position: 'absolute',
          overflow:'hidden',
          left: 9,
          bottom: 20,
          right: 9,
          padding:5,height:55,zIndex:1,paddingBottom:0
        },showLabel: false 
      }} >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarButton: (props) => <TabComponent label="home" {...props} />,
          }}
        />
        <Tab.Screen
          name="Add"
          component={Logger}
          options={{
            tabBarButton: (props) => <TabComponent label="Add" {...props} />,
          }}
        />
        <Tab.Screen
          name="Serach"
          component={Documents}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="Serach" {...props} />
            ),
          }}
        />
        <Tab.Screen
          name="user"
          component={Profile}
          options={{
            tabBarButton: (props) => <TabComponent label="user" {...props} />,
          }}
        />
      </Tab.Navigator>

  );
}

const styles = StyleSheet.create({})
