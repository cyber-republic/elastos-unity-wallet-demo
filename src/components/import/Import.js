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
            Import Seed
          </Text>
          <Text style={styles.descText}>
            Enter your 12 words.
          </Text>

          <TextInput 
            style={[styles.textbox, { marginTop: 10, marginBottom: 5 }]} 
            underlineColorAndroid="rgba(0,0,0,0)" 
            placeholder="Seed" 
            numberOfLines={10}
            multiline
            maxLength={400}
            onChangeText={text => this.setState({ seed: text })} >
          </TextInput>

          <Button
            style={[styles.importButton]} 
            onPress={this.importClicked}
            title="Import"
            color="#841584"/>

        </View>
      );
    }
  }

  export default Import;