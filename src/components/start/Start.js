import React, { Component } from 'react';
import {
    Button,View, Text
} from 'react-native';
import styles from '../start/Style';
import RNElastosMainchain from 'react-native-elastos-wallet-core';

class Start extends Component {

  state = {
    testText: ''
  }

  constructor(props) {
    super(props);
    console.log('Start : constructor');
  }

  componentDidMount() {
    console.log('Start : componentDidMount');
  }

  componentWillUnmount() {
    console.log('Start : componentWillUnmount');
  }

  importClicked = () => {
    console.log('Start : importClicked');
    const { navigation } = this.props;
    navigation.navigate('Import');
  }

  createClicked = () => {
    const { navigation } = this.props;
    navigation.navigate('Create');
  }

  test = () => {
    RNElastosMainchain.test( (err, res) => {
      this.setState({testText: res})
    });
  }

  render() {
    return (
      <View style={styles.container}>
          <Button testID={'btn:testBridgeButton'} 
            onPress={this.test}
            title="Test"/>
          
          <Text testID={'txt:testBridgeText'}>{this.state.testText}</Text>
          <View style={{padding:20}}></View>

          <Button 
            onPress={this.createClicked}
            title="Create"/>
          
          <View style={{padding:20}}></View>

          <Button
            onPress={this.importClicked}
            title="Import"/>
      </View>
    );
  }
}

export default Start