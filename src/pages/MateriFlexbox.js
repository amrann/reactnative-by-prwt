import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native'

const MateriFlexbox = () => {
    return(
        <View>
            <View 
                style={{
                    // flexDirection: 'colomn',
                    flexDirection: 'row',
                    backgroundColor: '#c8d6e5',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                    // justifyContent: 'space-between'
                    // justifyContent: 'center'
                    // justifyContent: 'space-evenly'
                    // justifyContent: 'flex-end' or 'flex-start'
                }}>
                <View style={{backgroundColor: '#ee5253', width: 50, height: 50}}></View>
                <View style={{backgroundColor: '#feca57', width: 50, height: 50}}></View>
                <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}}></View>
                <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}}></View>
            </View>
            
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text>Beranda</Text>
                <Text>Video</Text>
                <Text>Playlist</Text>
                <Text>Komunitas</Text>
                <Text>Channel</Text>
                <Text>Tentang</Text>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image 
                    source={{uri: 'https://placeimg.com/640/480/people'}}
                    style={{width:100, height:100, borderRadius: 50, marginRight: 14}}
                />
                <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Meran Delima</Text>
                    <Text>100 ribu subscribe</Text>
                </View>
            </View>
        </View>
    )
}

export default MateriFlexbox