import React, { Component } from 'react';
import {
    Button,View,TextInput,Text,Platform
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
      RNElastosMainchain.ImportWalletWithMnemonic("cry mechanic bean they discover vendor couple adapt walk room edit dinner", (err, res) => {
        // if successful import
        if (res == "success"){
          const { navigation } = this.props;
          navigation.navigate('Balance');
        }
        else {
          console.log('Import : Error occurred while importing');
        }
      })
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
            placeholder="maximum farm someone leg music federal pyramid lounge scrap bomb skin mystery" 
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