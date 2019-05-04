import React, { Component } from 'react';
import { Image, View } from 'react-native';

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://generated.inspirobot.me/a/p9eZk8yqJV.jpg'
    }
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={pic} style={{width: 300, height: 300}} />
      </View>
    );
  }
}
