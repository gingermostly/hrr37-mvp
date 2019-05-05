import React, { Component } from 'react';
import { TouchableOpacity, Text, Button, Image, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      getImage: 'https://i.imgur.com/2h816KP.jpg'
    }
    this.handlePress = this.handlePress.bind(this)
  }
  handlePress() {
      fetch('https://inspirobot.me/api?generate=true')
        .then((res) => {
          return res.text()
      })
        .then((item) => {
         this.setState({
        getImage: item
    })
  })
}
  render() {
    let pic = {
      uri: this.state.getImage
    }
    return (
      <View style={{ flex: 1, flexirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 10}}>InspiroBot Mobile</Text>
        <Image source={pic} style={{width: 300, height: 400, resizeMode: 'contain'}} />
        <TouchableOpacity onPress={this.handlePress}><Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 10}}>Generate inspiration</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.saveData}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Click to save quote</Text>
        </TouchableOpacity>
      </View>
    );
  }
  saveData() {
    alert('saved!')
  }
}
