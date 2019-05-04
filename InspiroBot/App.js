import React, { Component } from 'react';
import { Button, Image, View } from 'react-native';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      getImage: ''
    }
  }
  componentDidMount() {
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={pic} style={{width: 300, height: 300}} />
        <Button title="Generate Inspiration"/>
      </View>
    );
  }
}
