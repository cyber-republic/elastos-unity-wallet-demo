import React, { Component } from 'react';
import {
    Button,View,Text,FlatList,TextInput
} from 'react-native';
import styles from '../balance/Style';

class Balance extends Component {

    constructor(props) {
      super(props);
      console.log('Balance : constructor');
      this.state = {
        data : [
            {
              id : 1,
              transaction_name : "trans 1",
              amout : "1",
              date : "10,10,10",
              destination : "from"
            },
            {
              id : 2,
              transaction_name : "trans 1",
              amout : "1",
              date : "10,10,10",
              destination : "from"
            },
            {
              id : 3,
              transaction_name : "trans 1",
              amout : "1",
              date : "10,10,10",
              destination : "from"
            },
            {
              id : 4,
              transaction_name : "trans 1",
              amout : "1",
              date : "10,10,10",
              destination : "from"
            },
            {
              id : 5,
              transaction_name : "trans 1",
              amout : "1",
              date : "10,10,10",
              destination : "from"
            },
            {
              id : 6,
              transaction_name : "trans 1",
              amout : "1",
              date : "10,10,10",
              destination : "from"
            },
            {
              id : 7,
              transaction_name : "trans 1",
              amout : "1",
              date : "10,10,10",
              destination : "from"
            },
            {
              id : 8,
              transaction_name : "trans 1",
              amout : "1",
              date : "10,10,10",
              destination : "from"
            },
            {
              id : 11,
              transaction_name : "trans 1",
              amout : "1",
              date : "10,10,10",
              destination : "from"
            },
            {
              id : 9,
              transaction_name : "trans 1",
              amout : "1",
              date : "10,10,10",
              destination : "from"
            },
            {
              id : 10,
              transaction_name : "trans 1",
              amout : "1",
              date : "10,10,10",
              destination : "from"
            }
        ],
        address : '',
        amount : ''
      }
    }
  
    componentDidMount() {
      console.log('Balance : componentDidMount');
    }
  
    componentWillUnmount() {
      console.log('Balance : componentWillUnmount');
    }

    sendClicked = () => {
      console.log('Balance : sendClicked');

    }

    keyExtractor = (item, index) => item.id.toString();
  
    render() {
      const { address , amount , data} = this.state;

      return (
        <View style={styles.container}>
            <Text style={styles.elaAmout}>10 ELA</Text>
            <Text style={styles.elaPublicAddress}>"Public Address"</Text>
            
            <FlatList
              style={styles.list}
              bounces={false}
              data={data}
              keyExtractor={this.keyExtractor}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text>
                    Transaction 1
                  </Text>
                  <Text>
                    Sent 10 ELA 10/10/18 to Me
                    </Text>
                </View>
              )}
            />

            <TextInput 
            style={[styles.textbox, { marginTop: 10, marginBottom: 5 }]} 
            underlineColorAndroid="rgba(0,0,0,0)" 
            placeholder="Enter Amount to Send" 
            onChangeText={text => this.setState({ amount: text })} >
              { amount }
            </TextInput>

            <TextInput 
            style={[styles.textbox, { marginTop: 10, marginBottom: 5 }]} 
            underlineColorAndroid="rgba(0,0,0,0)" 
            placeholder="Enter Receiver's Address" 
            onChangeText={text => this.setState({ address: text })} >
              { address }
            </TextInput>

            <Button
              style={[styles.sendButton]} 
              onPress={this.sendClicked}
              title="Send"
              color="#841584"/>
        
        </View>
      );
    }
  }

  export default Balance;