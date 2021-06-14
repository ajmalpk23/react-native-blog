import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';

export default function Login() {
  return (
    <View style={{backgroundColor: '#fff'}}>
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
            top: 20,
          }}
        />
        <View style={{height:250}} >
          <Text style={{fontWeight:'800',left:25}} >Email</Text>
          <TextInput
            style={{width: '90%', left: '5%', right: '5%',borderRadius:15,borderWidth:1,top:10,
            borderColor:'#bce3fa'}}
            placeholder="Enter your Email"
          />
          <Text style={{fontWeight:'800',left:25,top:20}} > Password</Text>
          <TextInput
            style={{width: '90%', left: '5%', right: '5%',borderRadius:15,borderWidth:1,borderColor:'#bce3fa',top:30}}
            placeholder="Enter your Password"
          />
          <TouchableOpacity
            style={{
              width: '90%',
              left: '5%',
              right: '5%',
              backgroundColor: '#bce3fa',
              height: 50,
              borderRadius: 15,top:50
            }}>
            <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:16,color:'#fff',top:8}} >Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{left:'5%',right:'5%',width:'90%',top:30}}>
          <View style={{flexDirection: 'row', backgroundColor: '#FFF',borderColor:'#bce3fa',borderWidth:2,borderRadius:20,height:50}}>
            <LottieView
              source={require('../images/google.json')}
              autoPlay
              loop
              style={{
                backgroundColor: '#FFF',
                height: 40,
                justifyContent: 'center',
                alignSelf: 'center',
              }}
            />
            <Text style={{fontWeight:'bold',fontSize:16,top:10,left:15}} >Sign in with google</Text>
          </View>
          <View style={{flexDirection: 'row', backgroundColor: '#FFF',borderColor:'#bce3fa',borderWidth:2,borderRadius:20,height:50,top:10}}>
            <LottieView
              source={require('../images/facebook.json')}
              autoPlay
              loop
              style={{
                backgroundColor: '#FFF',
                height: 40,
                justifyContent: 'center',
                alignSelf: 'center',
              }}
            />
            <Text  style={{fontWeight:'bold',fontSize:16,top:10,left:15}}>Sign in with facebook</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row',alignSelf:'center',top:60}}>
          <Text style={{fontWeight:'600'}}>Not registerd yet,</Text>
          <Text style={{fontWeight:'bold',color:'#bce3fa'}}>Register Now</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
