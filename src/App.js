import React, {Component} from 'react'
import {Text, View, Image, TextInput, ScrollView} from 'react-native'
import MateriSimpleComponent from './pages/MateriSampelComponent'
import MateriStyleComponent from './pages/MateriStyleComponent'
import MateriFlexbox from './pages/MateriFlexbox'
import MateriPosition from './pages/MateriPosition'

const App = () => {
  // return <Text>Meran</Text>
  return (
    // Ingat, dalam return hanya bisa punya 1 induk doang
    <View>
      <ScrollView>
        {/* <MateriSimpleComponent /> */}
        {/* <MateriStyleComponent /> */}
        {/* <MateriFlexbox /> */}
        <MateriPosition />
      </ScrollView>
    </View>
    
  )
}
export default App;