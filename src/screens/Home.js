import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppBar from '../config/appbar';

import Story from '../config/storys';
import Modal from 'react-native-modal';




function Home({navigation}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <AppBar />
      <ScrollView
        style={{backgroundColor: '#bec3cc', width: '100%', paddingBottom: 62,marginBottom:60}}>
        <View style={{width: '100%', backgroundColor: '#fff', height: 120}}>
          <Text
            style={{color: '#000', fontWeight: 'bold', fontSize: 18, left: 15}}>
            Discover
          </Text>
          <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
            <Story />
          </ScrollView>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('POstDetail')}
          style={{
            width: '92%',
            left: '4%',
            right: '4%',
            backgroundColor: '#fff',
            borderRadius: 15,
            // top: 10,
            paddingBottom: 20,
            marginTop:10
          }}>
          <View style={{flexDirection: 'row', left: 10, top: 10}}>
            <Image
              source={require('../images/user1.jpg')}
              style={{height: 40, width: 40, borderRadius: 50}}
            />
            <View>
              <Text style={{fontWeight: 'bold', left: 6, top: 2}}>
                muhammed ajmal pk
              </Text>
              <Text style={{fontSize: 10, left: 6}}>Newyork</Text>
            </View>
          </View>
          <Image
            source={require('../images/p7.jpg')}
            style={{
              height: 200,
              width: '90%',
              alignSelf: 'center',
              top: 20,
              borderRadius: 15,
            }}
          />
          <Text style={{fontWeight: 'bold', fontSize: 14, left: 15, top: 20,justifyContent:'center',flex:1,marginRight:25 }}>
            {' '}
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, a
          </Text>
          <Text style={{fontSize: 10, paddingBottom: 20, top: 20,left:15}}> DAte</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('POstDetail')}
          style={{
            width: '92%',
            left: '4%',
            right: '4%',
            backgroundColor: '#fff',
            borderRadius: 15,
            // top: 10,
            paddingBottom: 20,
            marginTop:10
          }}>
          <View style={{flexDirection: 'row', left: 10, top: 10}}>
            <Image
              source={require('../images/user1.jpg')}
              style={{height: 40, width: 40, borderRadius: 50}}
            />
            <View>
              <Text style={{fontWeight: 'bold', left: 6, top: 2}}>
                muhammed ajmal pk
              </Text>
              <Text style={{fontSize: 10, left: 6}}>Newyork</Text>
            </View>
          </View>
          <Image
            source={require('../images/p7.jpg')}
            style={{
              height: 200,
              width: '90%',
              alignSelf: 'center',
              top: 20,
              borderRadius: 15,
            }}
          />
          <Text style={{fontWeight: 'bold', fontSize: 14, left: 15, top: 20,justifyContent:'center',flex:1,marginRight:25 }}>
            {' '}
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, a
          </Text>
          <Text style={{fontSize: 10, paddingBottom: 20, top: 20,left:15}}> DAte</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('POstDetail')}
          style={{
            width: '92%',
            left: '4%',
            right: '4%',
            backgroundColor: '#fff',
            borderRadius: 15,
            // top: 10,
            paddingBottom: 20,
            marginTop:10
          }}>
          <View style={{flexDirection: 'row', left: 10, top: 10}}>
            <Image
              source={require('../images/user1.jpg')}
              style={{height: 40, width: 40, borderRadius: 50}}
            />
            <View>
              <Text style={{fontWeight: 'bold', left: 6, top: 2}}>
                muhammed ajmal pk
              </Text>
              <Text style={{fontSize: 10, left: 6}}>Newyork</Text>
            </View>
          </View>
          <Image
            source={require('../images/p7.jpg')}
            style={{
              height: 200,
              width: '90%',
              alignSelf: 'center',
              top: 20,
              borderRadius: 15,
            }}
          />
          <Text style={{fontWeight: 'bold', fontSize: 14, left: 15, top: 20,justifyContent:'center',flex:1,marginRight:25 }}>
            {' '}
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, a
          </Text>
          <Text style={{fontSize: 10, paddingBottom: 20, top: 20,left:15}}> DAte</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('POstDetail')}
          style={{
            width: '92%',
            left: '4%',
            right: '4%',
            backgroundColor: '#fff',
            borderRadius: 15,
            // top: 10,
            paddingBottom: 20,
            marginTop:10
          }}>
          <View style={{flexDirection: 'row', left: 10, top: 10}}>
            <Image
              source={require('../images/user1.jpg')}
              style={{height: 40, width: 40, borderRadius: 50}}
            />
            <View>
              <Text style={{fontWeight: 'bold', left: 6, top: 2}}>
                muhammed ajmal pk
              </Text>
              <Text style={{fontSize: 10, left: 6}}>Newyork</Text>
            </View>
          </View>
          <Image
            source={require('../images/p7.jpg')}
            style={{
              height: 200,
              width: '90%',
              alignSelf: 'center',
              top: 20,
              borderRadius: 15,
            }}
          />
          <Text style={{fontWeight: 'bold', fontSize: 14, left: 15, top: 20,justifyContent:'center',flex:1,marginRight:25 }}>
            {' '}
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, a
          </Text>
          <Text style={{fontSize: 10, paddingBottom: 20, top: 20,left:15}}> DAte</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </View>
  );
}

export default Home;
