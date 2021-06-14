import React from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput,TouchableOpacity} from 'react-native';
import Appbar from '../config/appbar';

export default function Logger() {
  return (
    <View
      style={{
        backgroundColor: '#bec3cc',
        width: '100%',
        height: '100%',
        marginBottom: 0,
      }}>
      <Appbar />
      <ScrollView>
        <View
          style={{
            width: '92%',
            left: '4%',
            right: '4%',
            backgroundColor: '#fff',
            top: 20,
            borderRadius: 25,
            height: 630,
            marginBottom:20
          }}>
          <TextInput
            multiline={true}
            style={{
              top: 20,
              borderRadius: 15,
              borderWidth: 1,
              height: 80,
              width: '90%',
              left: '5%',
              right: '5%',
              borderColor: '#bce3fa',textAlign:'center'
            }}
            placeholder="Subject"
            numberOfLines={7}
            placeholderTextColor='#000'
          />
           <TextInput
            multiline={true}
            style={{
              top: 40,
              borderRadius: 15,
              borderWidth: 1,
              height: 250,
              width: '90%',
              left: '5%',
              right: '5%',
              borderColor: '#bce3fa',textAlign:'center'
            }}
            placeholder="Subject"
            numberOfLines={7}
            placeholderTextColor='#000'
          />
          <View style={{
              top: 60,
              borderRadius: 15,
              borderWidth: 1,
              height: 150,
              width: '90%',
              left: '5%',
              right: '5%',
              borderColor: '#bce3fa',
            }} >

          </View>

          <TouchableOpacity style={{borderRadius: 15,
          top:80,
              // borderWidth: 1,
              height: 50,
              width: '90%',
              left: '5%',
              right: '5%',
              backgroundColor: '#bce3fa'}}>
                <Text style={{fontWeight:'bold',alignSelf:'center',fontSize:20,color:'#fff',top:10}} >Post</Text>

          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
