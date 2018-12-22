import React, { Component } from 'react';
import {
    Button,View
} from 'react-native';
import styles from '../start/Style';
import RNElastosMainchain from 'react-native-elastos-wallet-core';

class Start extends Component {

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

      // create the wallet here and send the mnemonic to the next view once wallet creation succeeds
      RNElastosMainchain.createWallet( (err, res) => {
        this.setState({mnemonic: res})
        console.log('Start : createClicked');
        const { navigation } = this.props;
        navigation.navigate('Create', {"mnemonic": res});
      });
    }
  
    render() {
      return (
        <View style={styles.container}>
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