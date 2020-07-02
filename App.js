import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import importMacbook from './macbook.jpg';

const App = () => {
  // return <Text>Meran</Text>
  return (
    // Ingat, dalam return hanya bisa punya 1 induk doang
    <StyleComponent/>
  )
}

const StyleComponent = () => {
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

const SammpleComponent = () => {
  return(
    <View>
      <View
        // source backgroundColor = https://flatuicolors.com/palette/fr 
        style = {{width: 80, height: 80, backgroundColor: '#fa983a'}}
      />
      <Text>Teks 1</Text>
      <Kalimat2/>
      <Text>Teks 2</Text>
      <Text>Teks 3</Text>
      <Foto/>
      <TextInput style={{borderWidth: 1}}/>
      <BoxGreen/>
      <Profile/>
    </View>
  )
}

const Kalimat2 = () => {
  return <Text>Ini kalimat kedua</Text>
}

const Foto = () => {
  return (
    <Image
      source = {{uri: 'https://placeimg.com/500/300/tech'}}
      style = {{width: 80, height:80}}
    />
  )
}

class BoxGreen extends Component {
  render(){
    return <Text>Ini component dari Class 'BoxGreen'</Text>
  }
}

class Profile extends Component{
  render(){
    return(
      <View>
        <Image 
          source={{uri: 'https://placeimg.com/100/100/animals'}} 
          style = {{width: 100, height:100, borderRadius: 50}} 
        />
        <Text>Ini adalah hewan</Text>
      </View>
    )
  }
}

export default App;