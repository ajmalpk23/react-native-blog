import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

import {NavigationContainer} from '@react-navigation/native';
import Bootomtabbar from './src/routes/boottomtabbarnav'

import Post from './src/screens/Logger'


import Splashs from './src/routes/LoginStack'




export default function App() {
  return (
    <NavigationContainer>
      <Splashs />
     
    </NavigationContainer>
    // <Post />
  );
}

const styles = StyleSheet.create({})
