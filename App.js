import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
  // return <Text>Meran</Text>
  return (
    // Ingat, dalam return hanya bisa punya 1 induk doang
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