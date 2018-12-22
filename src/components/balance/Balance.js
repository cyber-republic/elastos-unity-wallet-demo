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
              transaction_name : "trans 2",
              amout : "2",
              date : "10,10,10",
              destination : "from"
            },
            {
              id : 3,
              transaction_name : "trans 3",
              amout : "3",
              date : "10,10,10",
              destination : "from"
            },
            {
              id : 4,
              transaction_name : "trans 4",
              amout : "4",
              date : "10,10,10",
              destination : "from"
            },
            {
              id : 5,
              transaction_name : "trans 5",
              amout : "5",
              date : "10,10,10",
              destination : "from"
            },
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
                    {item.transaction_name}
                  </Text>
                  <Text>
                    Sent {item.amout} ELA {item.date} to Me
                    </Text>
                </View>
              )}
            />

            <TextInput 
            style={styles.textbox} 
            placeholder="Enter amount to send" 
            onChangeText={text => this.setState({ amount: text })} >
              { amount }
            </TextInput>

            <TextInput 
            style={styles.textbox} 
            placeholder="Enter receiver's address" 
            onChangeText={text => this.setState({ address: text })} >
              { address }
            </TextInput>

            <View style={{padding:10}}></View>

            <View style={{marginLeft:100, marginRight:100}}>
              <Button
                onPress={this.sendClicked}
                title="SEND"/>
            </View>
            
            <View style={{padding:10}}></View>
        
        </View>
      );
    }
  }

  export default Balance;