import React, { Component } from 'react';
import { ActionSheetIOS, TouchableWithoutFeedback, TouchableOpacity, Text, Image, View, Share } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import * as RNFS from 'react-native-fs';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      getImage: 'https://i.imgur.com/2h816KP.jpg',
      share: ''
    }
    this.handlePress = this.handlePress.bind(this);
    this.handleLongPress = this.handleLongPress.bind(this);
    this.imageShare = this.imageShare.bind(this);
  }
  handlePress() {
      fetch('https://inspirobot.me/api?generate=true')
        .then((res) => {
          return res.text()
      })
        .then((item) => {
         this.setState({
        getImage: item,
        share: 'Share this photo'
    })
  })
}
handleLongPress() {
  ActionSheetIOS.showActionSheetWithOptions({options: ['Save Image', 'Cancel'], saveButtonIndex: 0, cancelButtonIndex: 1}, (index) => {
    if(index === 0) {
      CameraRoll.saveToCameraRoll(this.state.getImage)
    }
  })
}
imageShare() {
  alert('clicked')
  Share.share({
    url: this.state.getImage,
    message: '#Inspired'
  })
}
  render() {
    let pic = {
      uri: this.state.getImage
    }
    return (
      <View style={{ flex: 1, flexirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 10}}>InspiroBot Mobile</Text>
        <TouchableWithoutFeedback onPress={this.handlePress} onLongPress={this.handleLongPress}>
        <Image source={pic} style={{width: 300, height: 300, marginBottom: 10, resizeMode: 'contain'}} />
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={this.imageShare}>
          <Text style={{fontSize: 16, marginTop: 5, marginBottom: 10}}>{this.state.share}
            </Text>
            </TouchableOpacity>
          <Text style={{fontSize: 20, marginBottom: 10}}>Tap image to generate inspiration
            </Text>
      </View>
    );
  }
}
