import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,ScrollView
} from 'react-native';
import LottieView from 'lottie-react-native';

export default function singup() {
  return (
    <View>
      <LottieView
        source={require('../images/login.json')}
        autoPlay
        loop
        style={{
          backgroundColor: '#FFF',
          height: 300,
          justifyContent: 'center',
          alignSelf: 'center',
          top: 0,
        }}
      />
      <View style={{top:-60}} >
        <Text style={{fontWeight:'bold',left:25,}} >full name </Text>
        <TextInput
          style={{
            width: '90%',
            left: '5%',
            right: '5%',
            borderRadius: 15,
            borderColor: '#bce3fa',
            borderWidth: 1,top:10
          }}
          placeholder="Enter your full name"
        />
        <Text style={{fontWeight:'bold',left:25,top:20}} >Phone number</Text>
        <TextInput
          style={{
            width: '90%',
            left: '5%',
            right: '5%',
            borderRadius: 15,
            borderColor: '#bce3fa',
            borderWidth: 1,top:30
          }}
          placeholder="Enter your phonenumber"
        />
        <Text style={{fontWeight:'bold',left:25,top:40}} >Email</Text>
        <TextInput
          style={{
            width: '90%',
            left: '5%',
            right: '5%',
            borderRadius: 15,
            borderColor: '#bce3fa',
            borderWidth: 1,top:50
          }}
          placeholder="Enter your email address"
        />
        <Text style={{left:25,fontWeight:'bold',top:60}} >Password</Text>
        <TextInput
          style={{
            width: '90%',
            left: '5%',
            right: '5%',
            borderRadius: 15,
            borderColor: '#bce3fa',
            borderWidth: 1,top:70   
          }}
          placeholder="Enter your Password"
        />
        <Text style={{top:80,fontWeight:'bold',left:25}} >Conform Password</Text>
        <TextInput
          style={{
            width: '90%',
            left: '5%',
            right: '5%',
            borderRadius: 15,
            borderColor: '#bce3fa',
            borderWidth: 1,top:90
          }}
          placeholder="Retype your password"
        />
        <TouchableOpacity
          style={{
            width: '90%',
            left: '5%',
            right: '5%',
            backgroundColor: '#bce3fa',
            height: 50,
            borderRadius: 15,top:110
          }}>
          <Text
            style={{
              alignSelf: 'center',
              top: 10,
              fontWeight: 'bold',
              fontSize: 16,
              color: '#fff',
            }}>
            {' '}
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
