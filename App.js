/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import RNElastosMainchain from 'react-native-elastos-wallet-core';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    state={
        menmonic:"",
        pk:"",
        sk:"",
        balance:""
    }


    generateMnemonic = () => {
        RNElastosMainchain.generateMnemonic( (err, res) => {
            this.setState({mnemonic: res})
        });
    }

    getSinglePublicKey = () => {
        RNElastosMainchain.getSinglePublicKey( (err, res) => {
            this.setState({pk: res})
        });
    }

    getSinglePrivateKey = () => {
        RNElastosMainchain.getSinglePrivateKey( (err, res) => {
            this.setState({sk: res})
        });
    }

    // getBalance connects to testnet and retrieve wallet's balance
    getBalance = () => {
        // connect to testnet
        fetch('http://localhost:21336', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // method name according to https://github.com/elastos/Elastos.ELA/blob/master/docs/jsonrpc_apis.md
                method: "getreceivedbyaddress",
                // additional optional parameters
                params: {address:"EcEovWPMEcGf5GV1HVEon7VY7hrogcBu8d"}
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            this.setState({balance: responseJson.result})
        }).catch((error) => { console.error(error); });

    }


  render() {
    return (
      <View style={styles.container}>

         <Button title="Generate Mnemonic" onPress={this.generateMnemonic} />

         { this.state.mnemonic == "" ?
             <View></View>
             :
             <View style={{padding:20}}><Text>{this.state.mnemonic}</Text></View>
         }

         <Button title="Get Public Key" onPress={this.getSinglePublicKey} />

         { this.state.pk == "" ?
             <View></View>
             :
             <View style={{padding:20}}><Text>{this.state.pk}</Text></View>
         }

         <Button title="Get Private Key" onPress={this.getSinglePrivateKey} />

         { this.state.sk == "" ?
             <View></View>
             :
             <View style={{padding:20}}><Text>{this.state.sk}</Text></View>
         }

         <Button title="Get wallet balance" onPress={this.getBalance} />

         { this.state.balance == "" ?
             <View></View>
             :
             <View style={{padding:20}}><Text>{this.state.balance}</Text></View>
         }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
