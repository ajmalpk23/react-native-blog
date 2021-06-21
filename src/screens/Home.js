import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppBar from '../config/appbar';

import Story from '../config/storys';
import Modal from 'react-native-modal';
import firestore from '@react-native-firebase/firestore';

function Home({navigation}) {
  const [refreshing, setRefreshing] = useState(false);
  const [Data, setdata] = useState([]);
  const [user, setuser] = useState([]);
  const list = [];

  
  const Show = () => {
    firestore()
      .collection('Post')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        // console.log(querySnapshot)

        const Posts = querySnapshot.docs.map(pro => {
          return {
            ...pro.data(),
            id: pro.id,
          };
        });
        setdata(Posts);
      })

      console.log('==========uu=========')
     
    
  
        
        
     
    

  };
  




  useEffect(() => {
    Show();
    const  UserDatails =  () =>{
        
      Data.map(uu=>{
            firestore().collection('Users').where('id','==',uu.userid).get().then((res)=>{
              console.log('uis'+res.size)
              res.forEach(doc=>{
                console.log('==========uu=========')
                const kk = doc.data()
                console.log('doc datea   '+kk.name)
                setuser(kk)
              })
            })
        })
        }
        UserDatails()
        console.log(user.name)
   
  }, []);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    Show();

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View>
      <AppBar />
      <ScrollView
        style={{
          backgroundColor: '#bec3cc',
          width: '100%',
          paddingBottom: 62,
          marginBottom: 60,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{width: '100%', backgroundColor: '#fff', height: 120}}>
          <Text
            style={{color: '#000', fontWeight: 'bold', fontSize: 18, left: 15}}>
            Discover
          </Text>
          <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
            <Story />
          </ScrollView>
        </View>

        <View style={{marginBottom: 90}}>
          {Data.map(rs => {
            return (
              <TouchableOpacity
                key={rs.id}
                onPress={() => navigation.navigate('POstDetail', {head: rs})}
                style={{
                  width: '92%',
                  left: '4%',
                  right: '4%',
                  backgroundColor: '#fff',
                  borderRadius: 15,
                  // top: 10,
                  paddingBottom: 20,
                  marginTop: 10,
                  marginBottom: 0,
                }}>
                <View style={{flexDirection: 'row', left: 10, top: 10}}>
                  <Image
                    source={require('../images/user1.jpg')}
                    style={{height: 40, width: 40, borderRadius: 50}}
                  />
                  <View>
                 {user.map(ff=>{
                   return(
                    <Text style={{fontWeight: 'bold', left: 6, top: 2}}>
                   {ff.name}
                  </Text>
                   )
                 })}
                    {/* <Text style={{fontSize: 10, left: 6}}>Newyork</Text> */}
                  </View>
                </View>
                <Image
                  source={{uri: rs.url}}
                  style={{
                    height: 200,
                    width: '90%',
                    alignSelf: 'center',
                    top: 20,
                    borderRadius: 15,
                  }}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    left: 15,
                    top: 20,
                    justifyContent: 'center',
                    flex: 1,
                    marginRight: 25,
                  }}>
                  {' '}
                  {rs.Subject}
                  {/* a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, a */}
                </Text>
                <Text
                  style={{fontSize: 10, paddingBottom: 20, top: 20, left: 15}}>
                  {' '}
                  {rs.date}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
