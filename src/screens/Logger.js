import React, {useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Image, ActivityIndicator,
} from 'react-native';
import Appbar from '../config/appbar';
import ImagePicker from 'react-native-image-crop-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Logger() {

  const [userid,setuserid] = useState()

useEffect(()=>{
  AsyncStorage.getItem('userid').then((res)=>{
    console.log('Async storage user id     '+res)
    setuserid(res)
  })

},[])









  const [Subject, setsubject] = useState('');
  const [dis, setdis] = useState('');

  let Daten = Date.now();

  const [isModalVisible, setModalVisible] = useState(false);
  const [done, setdone] = useState(false);
  const Donemodal = () => {
    setdone(!isModalVisible);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [image, setImage] = useState(
    'https://www.nicepng.com/png/detail/129-1298352_upload-icon-logo-upload-file-png.png',
  );

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image.path);
      setImage(image.path);
      // bs.current.snapTo(0);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      // bs.current.snapTo(0);
    });
  };
  const Submit = async () => {
    console.log('saljffffffffffffffffffshgjk');
    try {
      let file = image.substring(image.lastIndexOf('/') + 1);
      let filename = file + +Date.now() + '.';
      console.log('Welcome guest!');
      const reference = storage().ref(`/post/${filename}`);

      const task = storage().ref(`/post/${filename}`).putFile(image);

      task.on('state_changed', taskSnapshot => {
        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
        );
      });
      // console.log(storageRef.getDownloadURL())

      task
        .then(() => {
          // console.log(task.storageRef.getDownloadURL())
          console.log('Image uploaded to the bucket!');
        })

        .then((res, task) => {
          // console.log(res.getDownloadURL())
          storage()
            .ref(`/post/${filename}`)
            .getDownloadURL()
            .then(url => {
              console.log('url    ;-====' + url);
              console.log('uploaded');
              try {
                firestore()
                  .collection('Post')
                  .add({
                    Subject: Subject,
                    dis: dis,
                    date: new Date().toJSON().slice(0,10),
                    url: url,
                    userid:userid
                  })
                  .then(() => {
                    Donemodal();
                    console.log('User added!');
                  });
              } catch (err) {
                console.log(err);
              }
            });
          Donemodal();
        });
      const storageRef = storage().ref(filename);
      task.on('state_changed', taskSnapshot => {
        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
        );
      });
      // console.log(storageRef.getDownloadURL())

      task.then(() => {
        // console.log(task.storageRef.getDownloadURL())
        console.log('Image uploaded to the bucket!');
      });
    } catch (err) {
      console.log(err);
    }
  };

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
            marginBottom: 20,
          }}>
          <TextInput
            onChangeText={e => setsubject(e)}
            multiline={true}
            style={{
              top: 20,
              borderRadius: 15,
              borderWidth: 1,
              height: 80,
              width: '90%',
              left: '5%',
              right: '5%',
              borderColor: '#bce3fa',
              textAlign: 'center',
            }}
            placeholder="Subject"
            numberOfLines={7}
            placeholderTextColor="#000"
          />
          <TextInput
            onChangeText={e => {
              setdis(e);
            }}
            multiline={true}
            style={{
              top: 40,
              borderRadius: 15,
              borderWidth: 1,
              height: 250,
              width: '90%',
              left: '5%',
              right: '5%',
              borderColor: '#bce3fa',
              textAlign: 'center',
            }}
            placeholder="Subject"
            numberOfLines={7}
            placeholderTextColor="#000"
          />
          <TouchableOpacity
            onPress={() => toggleModal()}
            style={{
              top: 60,
              borderRadius: 15,
              borderWidth: 1,
              height: 150,
              width: '90%',
              left: '5%',
              right: '5%',
              borderColor: '#bce3fa',
            }}>
            <ImageBackground
              source={{
                uri: image,
              }}
              style={{height: 150, width: '100%'}}
              imageStyle={{borderRadius: 10}}></ImageBackground>
            <Modal
              isVisible={isModalVisible}
              hasBackdrop={true}
              backdropOpacity={0}
              style={{
                backgroundColor: 'rgba(52, 52, 52, alpha)',
                margin: 0,
                padding: 0,
              }}
              onBackdropPress={() => {
                toggleModal();
              }}>
              <View style={{bottom: -240, margin: 0, padding: 0}}>
                <View style={styles.panel}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={styles.panelTitle}>Upload Photo</Text>
                    <Text style={styles.panelSubtitle}>
                      Choose Your Picture
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.panelButton}
                    onPress={takePhotoFromCamera}>
                    <Text style={styles.panelButtonTitle}>Take Photo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.panelButton}
                    onPress={choosePhotoFromLibrary}>
                    <Text style={styles.panelButtonTitle}>
                      Choose From Library
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.panelButton}
                    onPress={() => {
                      // bs.current.snapTo(0);
                      toggleModal();
                    }}>
                    <Text style={styles.panelButtonTitle}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Submit()}
            style={{
              borderRadius: 15,
              marginTop: 80,
              // borderWidth: 1,
              height: 50,
              width: '90%',
              left: '5%',
              right: '5%',
              backgroundColor: '#bce3fa',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                alignSelf: 'center',
                fontSize: 20,
                color: '#fff',
                top: 10,
              }}>
              Post
            </Text>
          </TouchableOpacity>
          <Modal
            isVisible={done}
            hasBackdrop={true}
            backdropOpacity={0}
            style={{backgroundColor: 'rgba(0,0,0,0.2)', margin: 0}}
            onBackdropPress={() => {
              setdone(false);
            }}>
            <View
              style={{
                height: 300,
                width: '80%',
                backgroundColor: '#fff',
                alignSelf: 'center',
                borderRadius: 15,
              }}>
              <View style={{}}>
                <LottieView
                  source={require('../images/DONEjson.json')}
                  autoPlay
                  loop
                  style={{
                    backgroundColor: '#FFF',
                    height: 270,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    top: 10,
                  }}
                />
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    top: '1%',
    alignSelf: 'center',
  },
  img: {
    height: '220%',
    width: '15%',
    // tintColor: Colors.backgroundcolor,
  },
  txt: {
    // color: Colors.backgroundcolor,
    fontWeight: 'bold',
    fontSize: 17,
    top: 12,
    left: 4,
  },
  txt2: {
    // color: Colors.backgroundcolor,
    fontWeight: '700',
    fontSize: 15,
    alignSelf: 'center',
    top: '30%',
  },
  // header: {
  //   width: 414,
  //   height: 100,
  //   flexDirection: 'row',
  //   paddingTop: 1,
  //   alignItems: 'center',
  //   elevation: 1,
  //   backgroundColor: Colors.primarycolor,
  // },
  // headingStyle: {
  //   marginTop: 10,
  //   marginBottom: 10,
  //   left:10,
  //   fontSize: 16,
  //   fontWeight: '900',
  //   textAlign: 'center',
  //   alignItems: 'center',
  //   fontWeight: 'bold',
  //   color: Colors.backgroundcolor,
  // },

  // text: {
  //   fontSize: 20,
  //   fontWeight: '900',
  //   fontWeight: 'bold',
  //   color: Colors.backgroundcolor,
  //   right: 10,
  // },
  labelContainer: {
    flexDirection: 'column',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 15,
  },
  // appbarcontainer: {
  //   width: 360,
  //   height: 50,
  //   backgroundColor: Colors.primarycolor,
  //   borderBottomEndRadius: 17,
  //   borderBottomStartRadius: 17,
  // },
  labelText: {
    fontWeight: 'bold',
    color: '#5F5F82',
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // marginTop: 20,
  },
  txtInput: {
    borderRadius: 8,
    borderColor: '#dcdcdc',
    // margin: 10,
    borderWidth: 2,
    bottom: '12%',
    width: '92%',
    height: 40,
    left: '4%',
    right: '4%',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  btn1: {
    borderRadius: 8,
    // borderColor: Colors.primarycolor,
    marginRight: 20,
    borderWidth: 2,
    width: 96,
    height: 40,
    alignItems: 'center',
  },
  btn2: {
    borderRadius: 8,
    // backgroundColor: Colors.primarycolor,
    width: 96,
    height: 40,
    alignItems: 'center',
  },

  // textInput: {
  //   top: '10%',
  //   textAlign: 'center',
  //   color: Colors.text,
  //   fontSize: 20,
  // },
  button: {
    // backgroundColor: Colors.primarycolor,
    width: '40%',
    height: 40,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  bottomHeader: {
    backgroundColor: '#ffffff',
    shadowColor: '#333333',
    shadowOffset: {width: -2, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 30,
  },
  panelHeader: {
    alignItems: 'center',
  },
  // panelHandle: {
  //   width: 40,
  //   height: 8,
  //   borderRadius: 4,
  //   backgroundColor: Colors.continercolor,
  //   // marginBottom: 10,
  // },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panel: {
    padding: 20,
    backgroundColor: '#ffffff',
    paddingTop: 20,
    margin: 0,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#bce3fa',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
});
