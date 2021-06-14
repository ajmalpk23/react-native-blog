import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function splash({navigation}) {
    return (
        <View style={{backgroundColor:'#fff',height:'100%'}}>
            <LottieView source={require('../images/splash.json')} autoPlay loop style={{ backgroundColor: '#FFF', height: 300, justifyContent: 'center', alignSelf: 'center', top: '20%' }} />
            <TouchableOpacity style={{ backgroundColor: '#bec3cc', height: 50, width: 50, borderRadius: 50, alignSelf: 'flex-end', marginRight: 30, top: 400 }}
                onPress={() => navigation.navigate('Bottom')}
            >
                <Ionicons name='chevron-forward-sharp' size={30} style={{ alignSelf: 'center', top: 8 }} />
            </TouchableOpacity>
        </View>

    );

}

const styles = StyleSheet.create({})