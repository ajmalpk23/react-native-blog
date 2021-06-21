import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,ScrollView
} from 'react-native';
import LottieView from 'lottie-react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function singup() {

  const [email,setemail] = useState('')
  const [password,setpassword]=useState()
  const[name,setname] = useState('')
  const [phone,setphone]=useState()
  const [userid,seuserid] = useState()
console.log(email,password,name,phone)

const Submit = () =>{
  auth()
  .createUserWithEmailAndPassword(email,password)
  .then((response) => {
    console.log(response  )
    console.log(response.user.uid)
    try {
      firestore()
    .collection('Users')
    .add({
      id:response.user.uid,
      name: name,
      phone: phone,
      email:email
    })
    .then((res) => {
      console.log(res)
      console.log('User added!');
    });
    }
    catch(err) {
      console.log('errorr'+err)
    }
    seuserid(response.user.uid)
    console.log('User account created & signed in!');


    





  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });


}




  return (
    <View style={{backgroundColor:'#fff',height:800}}>
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
            borderWidth: 1,top:10,
            color:'#000'
          }}
          placeholder="Enter your full name"
          onChangeText={(e)=>{setname(e)}}
        />
        <Text style={{fontWeight:'bold',left:25,top:20}} >Phone number</Text>
        <TextInput
          style={{
            width: '90%',
            left: '5%',
            right: '5%',
            borderRadius: 15,
            borderColor: '#bce3fa',
            borderWidth: 1,top:30,  color:'#000'
          }}
          placeholder="Enter your phonenumber"
          onChangeText={(e)=>{setphone(e)}}
        />
        <Text style={{fontWeight:'bold',left:25,top:40}} >Email</Text>
        <TextInput
          style={{
            width: '90%',
            left: '5%',
            right: '5%',
            borderRadius: 15,
            borderColor: '#bce3fa',
            borderWidth: 1,top:50,  color:'#000'
          }}
          placeholder="Enter your email address"
          onChangeText={(e)=>setemail(e)}
        />
        <Text style={{left:25,fontWeight:'bold',top:60}} >Password</Text>
        <TextInput
          style={{
            width: '90%',
            left: '5%',
            right: '5%',
            borderRadius: 15,
            borderColor: '#bce3fa',
            borderWidth: 1,top:70,  color:'#000'
          }}
          placeholder="Enter your Password"
          onChangeText={(e)=>setpassword(e)}
        />
        <Text style={{top:80,fontWeight:'bold',left:25}} >Conform Password</Text>
        <TextInput
          style={{
            width: '90%',
            left: '5%',
            right: '5%',
            borderRadius: 15,
            borderColor: '#bce3fa',
            borderWidth: 1,top:90,  color:'#000'
          }}
          placeholder="Retype your password"
        />
        <View style={{marginTop:110}}>
        <TouchableOpacity
        onPress={()=>Submit()}
          style={{
            width: '90%',
            left: '5%',
            right: '5%',
            backgroundColor: '#bce3fa',
            height: 50,
            borderRadius: 15,
            // top:110
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
          SingUp
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
