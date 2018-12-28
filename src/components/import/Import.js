import React, { Component } from 'react';
import {
    Button,View,TextInput,Text
} from 'react-native';
import RNElastosMainchain from 'react-native-elastos-wallet-core';
import styles from '../import/Style';

class Import extends Component {

    constructor(props) {
      super(props);
      console.log('Import : constructor');
      this.state = {
        seedText : ''
      }
    }
  
    componentDidMount() {
      console.log('Import : componentDidMount');
    }
  
    componentWillUnmount() {
      console.log('Import : componentWillUnmount');
    }

    importClicked = () => {
      console.log('Import : importClicked');
      const { navigation } = this.props;
      RNElastosMainchain.importWalletWithMnemonic(this.state.seedText , (err, res) => {
      });
      navigation.navigate('Balance');
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.topText}>
            IMPORT SEED
          </Text>
          <Text style={styles.descText}>
            Enter your 12 words seed here
          </Text>

          <TextInput 
            style={styles.textbox} 
            placeholder="Seed" 
            multiline
            maxLength={120}
            onChangeText={text => this.setState({ seedText: text })} >
          </TextInput>

          <Button
            style={[styles.importButton]} 
            onPress={this.importClicked}
            title="Import"/>

        </View>
      );
    }
  }

  export default Import;