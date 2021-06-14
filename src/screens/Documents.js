import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Appbar from '../config/appbar';

export default function Documents() {
  return (
    <View
      style={{
        backgroundColor: '#bec3cc',
        width: '100%',
        height: '100%',
        marginBottom: 10,
      }}>
      <Appbar />
      <View style={{flexDirection: 'row', right: '4%', left: '4%',top:20}}>
        <TextInput
          placeholder="Search"
          style={{
            backgroundColor: '#fff',
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#bce3fa',
            width: 270,
          }}></TextInput>
        <TouchableOpacity
          style={{backgroundColor: '#bce3fa', borderRadius: 15,width:70,left:10}}>
          <Ionicons name="search" size={30} color="#fff" style={{alignSelf:'center',top:9,left:0}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
