import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function appbar() {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: 70,
        }}>
        <View
          style={{
            width: '92%',
            justifyContent: 'space-between',
            flex: 1,
            flexDirection: 'row',
            left: '4%',
            right: '4%',
            top: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="ios-location" size={30} color="#267cfc" />
            <Text style={{color: '#000', fontWeight: 'bold', top: 9,fontSize:10
          }}>
              Malappuram ,Kerala
            </Text>
          </View>
          <View>
            <Text
              style={{color: '#000', fontWeight: 'bold', top: 6, fontSize: 18}}>
              BLOG
            </Text>
          </View>
          <View><Ionicons name="notifications" size={30} color="#267cfc" /></View>
        </View>
      </View>
    </View>
  );
}

export default appbar;
