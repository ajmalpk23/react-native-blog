import React from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Appbar from '../config/appbar'

export default function Menu() {
  return (
    <View style={{ backgroundColor: '#bec3cc', width: '100%', paddingBottom: 62, marginBottom: 60, height: '100%' }}>
      <Appbar />
      <TouchableOpacity style={{ marginTop: 15, width: '92%', left: '4%', right: '4%', backgroundColor: '#fff', height: 80,borderRadius:35 }}>
        <View style={{ flexDirection: 'row', top: 10, left: 10 }}>
          <Image source={require('../images/user1.jpg')} style={{ height: 60, width: 60, borderRadius: 50 }} />
          <View style={{ top: 10, left: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Muhammed Ajmal pk </Text>
            <Text style={{ fontSize: 10 }} > ajmalpk23@gmail.com </Text>

          </View>
          <Ionicons name='chevron-forward-sharp' size={30} style={{marginRight:15,top:10,left:120}}/>
        </View>

      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 15, width: '92%', left: '4%', right: '4%', backgroundColor: '#fff', height: 80,borderRadius:35 }}>
        <View style={{flexDirection:'row',top:10}}>
        <Ionicons name='log-in-outline' size={50} style={{left:15}} />
        <Text style={{ fontWeight: 'bold', fontSize:16, top:10,left:35 }} >Logout</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({})
