import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';

import AppBar from '../config/appbar';

export default function PostDetail({route, navigation}) {
  const {head} = route.params;
  console.log(head);
  return (
    <View
      style={{
        backgroundColor: '#bec3cc',
        width: '100%',
        height: '100%',
        marginBottom: 160,
      }}>
      <AppBar />
      <ScrollView style={{marginBottom:0}}>
       <View style={{marginBottom:90}}>
       <View
          style={{
            backgroundColor: '#fff',
            width: '92%',
            left: '4%',
            right: '4%',
            marginTop: 10,
            borderRadius: 15,
            paddingBottom: 60,
          }}>
          <View style={{flexDirection: 'row', left: 15, top: 20}}>
            <Image
              source={require('../images/user1.jpg')}
              style={{height: 40, width: 40, borderRadius: 50}}
            />
            <View>
              <Text style={{fontWeight: 'bold', left: 6, top: 2}}>
                muhammed ajmal pk
              </Text>
              <Text style={{fontSize: 10, left: 6}}>{head.date}</Text>
            </View>
          </View>
          <Image
            source={{uri: head.url}}
            style={{
              width: '90%',
              borderRadius: 20,
              top: 30,
              height: 250,
              alignSelf: 'center',
            }}
          />
          <View style={{top: 40}}>
            <Text
              style={{
                marginRight: 15,
                marginLeft: 15,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              {head.Subject}
            </Text>
            <Text
              style={{
                marginRight: 15,
                marginLeft: 15,
                fontWeight: '200',
                fontSize: 12,
              }}>
             {head.dis}
            </Text>
          </View>
        </View>
       </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
