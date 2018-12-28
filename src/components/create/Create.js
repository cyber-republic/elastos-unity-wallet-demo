import React, { Component } from 'react';
import {
    Button,View, Text
} from 'react-native';
import styles from '../create/Style';

class Create extends Component {

    constructor(props) {
      super(props);
      console.log('Create : constructor');
      this.state = {
        seedText: this.props.navigation.state.params.mnemonic
        // seedText: 'lion cloud dragon kid easily cloth sail eject thumb town odor diamond month'
      };
    }
  
    componentDidMount() {
      console.log('Create : componentDidMount');
    }
  
    componentWillUnmount() {
      console.log('Create : componentWillUnmount');
    }

    submitClicked = () => {
      console.log('Create : createClicked');
      const { navigation } = this.props;
      navigation.navigate('Balance', {"publicAddress": this.props.navigation.state.params.publicAddress});
    }
  
    render() {
      const { seedText } = this.state;
      console.log(seedText);
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