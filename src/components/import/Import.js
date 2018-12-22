import React, { Component } from 'react';
import {
    Button,View,TextInput,Text
} from 'react-native';
import styles from '../import/Style';

class Import extends Component {

    constructor(props) {
      super(props);
      console.log('Import : constructor');
      this.state = {
        seed : ''
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
            onChangeText={text => this.setState({ seed: text })} >
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