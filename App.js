import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

import {NavigationContainer} from '@react-navigation/native';
import Bootomtabbar from './src/routes/boottomtabbarnav'









export default function App() {
  return (
    <NavigationContainer>
      <Bootomtabbar />
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})
