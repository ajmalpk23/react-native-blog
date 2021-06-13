import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Story from 'react-native-story';

import Modal from 'react-native-modal';

const Instgram = (props) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const [pressed, setunpressed] = useState('#e95950')
    const press = () => {
        setunpressed('#ebebeb')
    }
    return (
        <View style={{ top: 5, height: 100, zIndex: 60, left: 5, paddingRight: 5 }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => { toggleModal(); press() }}>
                    <Image
                        style={{
                            height: 70,
                            width: 70,
                            borderRadius: 40,
                            borderColor: pressed,
                            borderWidth: 2,
                        }}
                        source={props.image}
                    />
                    <Text style={{ alignSelf: 'center', fontWeight: '800' }} >{props.name}</Text>
                    <Modal
                        isVisible={isModalVisible}
                        onBackButtonPress={() => {
                            setModalVisible(false);
                        }}
                        hasBackdrop={true}
                        backdropOpacity={0}
                        style={{
                            backgroundColor: 'rgba(52, 52, 52, alpha)',
                            margin: 0,
                            padding: 0,
                        }}
                    //   onBackdropPress={()=>{toggleModal()}}
                    >
                        <ImageBackground
                            source={props.content}
                            style={{
                                height: '100%',
                                width: '100%',
                            }}>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        style={{
                                            height: 45,
                                            width: 45,
                                            borderRadius: 40,
                                            // borderColor: '#e95950',
                                            borderWidth: 2,
                                            top: 10,
                                            left: 10,
                                        }}
                                        source={props.image}
                                    />
                                    <Text style={{
                                        alignSelf: 'center', fontWeight: '800', color: '#fff', top: 10, left: 18
                                    }} >{props.name}</Text>

                                </View>
                                <View style={{ marginBottom: 0, top: 650 }}>
                                    <TextInput
                                        placeholder="Send message"
                                        placeholderTextColor="white"
                                        style={{
                                            height: 40,
                                            width: '90%',
                                            left: '5%',
                                            right: '5%',
                                            borderWidth: 1,
                                            borderRadius: 35,
                                            borderColor: '#edeef0',
                                        }}
                                    />
                                </View>
                            </View>
                        </ImageBackground>
                    </Modal>
                </TouchableOpacity>
            </View>
        </View>
    )
}



export default function storys() {



    return (
        <View style={{ flexDirection: 'row' }}>
            <Instgram name='ajmal' image={require('../images/user1.jpg')} content={require('../images/p1.jpg')} />
            <Instgram name='suhail mk' image={require('../images/user4.jpeg')} content={require('../images/p2.jpg')} />
            <Instgram name='Fasil' image={require('../images/user6.png')} content={require('../images/p3.jpg')} />
            <Instgram name='Nizam' image={require('../images/user5.jpg')} content={require('../images/p4.jpg')} />
            <Instgram name='Tintu mon' image={require('../images/user2.jpg')} content={require('../images/p5.jpg')} />
            <Instgram name='Kuttu mon' image={require('../images/user3.jpg')} content={require('../images/p6.jpg')} />
            <Instgram name='ajmal' image={require('../images/user1.jpg')} content={require('../images/p1.jpg')} />
            <Instgram name='suhail mk' image={require('../images/user4.jpeg')} content={require('../images/p2.jpg')} />
            <Instgram name='Fasil' image={require('../images/user6.png')} content={require('../images/p3.jpg')} />
            <Instgram name='Nizam' image={require('../images/user5.jpg')} content={require('../images/p4.jpg')} />
            <Instgram name='Tintu mon' image={require('../images/user2.jpg')} content={require('../images/p5.jpg')} />
            <Instgram name='Kuttu mon' image={require('../images/user3.jpg')} content={require('../images/p6.jpg')} />
            <Instgram name='ajmal' image={require('../images/user1.jpg')} content={require('../images/p1.jpg')} />
            <Instgram name='suhail mk' image={require('../images/user4.jpeg')} content={require('../images/p2.jpg')} />
            <Instgram name='Fasil' image={require('../images/user6.png')} content={require('../images/p3.jpg')} />
            <Instgram name='Nizam' image={require('../images/user5.jpg')} content={require('../images/p4.jpg')} />
            <Instgram name='Tintu mon' image={require('../images/user2.jpg')} content={require('../images/p5.jpg')} />
            <Instgram name='Kuttu mon' image={require('../images/user3.jpg')} content={require('../images/p6.jpg')} />
        </View>
    )
}


