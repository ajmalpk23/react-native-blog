import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
import auth from '@react-native-firebase/auth';

export default function Login({navigation}) {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState();
  const [userid, setuserid] = useState();
  const [log, setlog] = useState(false);
  console.log(email, password);

  const submit = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        navigation.navigate('Bottom')
        console.log(response);
        console.log('User account created & signed in!');
        setlog(true);
      })
      .catch(error => {
        setlog(false);
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };


const Forgot = () => {
  auth().sendPasswordResetEmail(email)
      .then(function (user) {
        alert('Please check your email...')
      }).catch(function (e) {
        console.log(e)
      })
}





  return (
    <View style={{backgroundColor: '#fff', height: 900}}>
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
        <View style={{height: 250}}>
          <Text style={{fontWeight: '800', left: 25}}>Email</Text>
          <TextInput
            style={{
              width: '90%',
              left: '5%',
              right: '5%',
              borderRadius: 15,
              borderWidth: 1,
              top: 10,
              borderColor: '#bce3fa',
            }}
            onChangeText={e => setemail(e)}
            placeholder="Enter your Email"
          />
          <Text style={{fontWeight: '800', left: 25, top: 20}}> Password</Text>
          <TextInput
            style={{
              width: '90%',
              left: '5%',
              right: '5%',
              borderRadius: 15,
              borderWidth: 1,
              borderColor: '#bce3fa',
              top: 30,
            }}
            onChangeText={e => {
              setpassword(e);
            }}
            placeholder="Enter your Password"
          />
          <TouchableOpacity
            onPress={() => {
              submit();
              // log ? navigation.navigate('Bottom') : '';
              // navigation.navigate('Bottom')
            }}
            style={{
              width: '90%',
              left: '5%',
              right: '5%',
              backgroundColor: '#bce3fa',
              height: 50,
              borderRadius: 15,
              top: 50,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 16,
                color: '#fff',
                top: 8,
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>Forgot()}
            style={{top: 55, alignSelf: 'flex-end', marginRight: '8%'}}>
            <Text style={{fontWeight: 'bold', color: '#bce3fa'}} >Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={{left: '5%', right: '5%', width: '90%', top: 30}}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#FFF',
              borderColor: '#bce3fa',
              borderWidth: 2,
              borderRadius: 20,
              height: 50,
            }}>
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
            <Text style={{fontWeight: 'bold', fontSize: 16, top: 10, left: 15}}>
              Sign in with google
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#FFF',
              borderColor: '#bce3fa',
              borderWidth: 2,
              borderRadius: 20,
              height: 50,
              top: 10,
            }}>
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
            <Text style={{fontWeight: 'bold', fontSize: 16, top: 10, left: 15}}>
              Sign in with facebook
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: 60}}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={{fontWeight: '600'}}>Not registerd yet,</Text>
          <Text style={{fontWeight: 'bold', color: '#bce3fa'}}>
            Register Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
