import React, { Component } from 'react';
import { Button, Image, View } from 'react-native';


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

        <Image source={pic} style={{width: 300, height: 400, resizeMode: 'contain'}} />
        <Button onPress={this.handlePress} title="Generate Inspiration" accessibilityLabel="Click button to generate quote" />
      </View>
    );
  }
}
