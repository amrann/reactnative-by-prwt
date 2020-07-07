import React, {Component} from 'react'
import {Text, View, Image} from 'react-native'
import importMacbook from '../assets/images/macbook.jpg'

const MateriStyleComponent = () => {
    return(
      <View style={{padding: 12, backgroundColor: 'white', width: 212, borderRadius: 8}}>
        <Image source={importMacbook} style={{width: 188, height: 107, borderRadius: 8}}/>
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>New Macbook Pro</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#F2994A'}}>Rp 25.000.000</Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>Jakarta Barat</Text>
        <View style={{backgroundColor: '#6FCF97', paddingVertical: 6, borderRadius: 25, marginTop: 20}}>
          <Text style={{fontSize: 14, fontWeight: '600', color: 'white', textAlign: 'center'}}>Beli</Text>
        </View>
      </View>
    )
}

export default MateriStyleComponent