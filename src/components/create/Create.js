import React, { Component } from 'react';
import {
    Button,View, Text
} from 'react-native';
import RNElastosMainchain from 'react-native-elastos-wallet-core';
import styles from '../create/Style';

class Create extends Component {

    constructor(props) {
      super(props);
      console.log('Create : constructor');
      this.state = {
        seedText: ''
      };
    }
  
    componentDidMount() {
      console.log('Create : componentDidMount');
      RNElastosMainchain.GenerateMnemonic( (err, res) => {
        this.setState({seedText: res})
      });
    }
  
    componentWillUnmount() {
      console.log('Create : componentWillUnmount');
    }

    submitClicked = () => {
      console.log('Create : createClicked');
      RNElastosMainchain.CreateWallet(this.state.seedText , (err, res) => {
        // if successful import
        if (res == "success"){
          const { navigation } = this.props;
          navigation.navigate('Balance');
        }
        else {
          console.log('Import : Error occurred while importing');
        }
      });
    }
  
    render() {
      const { seedText } = this.state;
      return (
        <View style={styles.container}>
          <Text style={styles.seedTxtStyle}>
            {seedText}
          </Text>
          <Button
            onPress={this.submitClicked}
            title="OK GOT IT"/>
        </View>
      );
    }
  }

  export default Create;