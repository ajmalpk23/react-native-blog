import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'


import AppBar from '../config/appbar'

export default function PostDetail() {
    return (
        <View style={{ backgroundColor: '#bec3cc', width: '100%', height: '100%',marginBottom:160 }}>
            <AppBar />
            <ScrollView >
                <View style={{ backgroundColor: '#fff', width: '92%', left: '4%', right: '4%', marginTop: 10, borderRadius: 15, paddingBottom: 60 }}>
                    <View style={{ flexDirection: 'row', left: 15, top: 20 }}>
                        <Image
                            source={require('../images/user1.jpg')}
                            style={{ height: 40, width: 40, borderRadius: 50 }}
                        />
                        <View>
                            <Text style={{ fontWeight: 'bold', left: 6, top: 2 }}>
                                muhammed ajmal pk
                            </Text>
                            <Text style={{ fontSize: 10, left: 6 }}>Newyork</Text>
                        </View>
                    </View>
                    <Image source={require('../images/p7.jpg')} style={{ width: '90%', borderRadius: 20, top: 30, height: 250, alignSelf: 'center' }} />
                    <View style={{top:40}}>




                        <Text style={{ marginRight: 15, marginLeft: 15, fontWeight: 'bold', fontSize: 16 }}>
                            a long established fact that a reader will be distracted by the readable content of a
                        </Text>
                        <Text style={{ marginRight: 15, marginLeft: 15, fontWeight: '200', fontSize: 12 }} >
                            em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                            em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).



                        </Text>


                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})