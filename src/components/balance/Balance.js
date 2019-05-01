import React, { Component } from 'react';
import {
    Button,View,Text,FlatList,TextInput,Platform
} from 'react-native';
import RNElastosMainchain from 'react-native-elastos-wallet-core';
import styles from '../balance/Style';

class Balance extends Component {

    constructor(props) {
      super(props);
      console.log('Balance : constructor');
      this.state = {
        txlist : [],
        toaddress : '',
        sendingamount : '',
        balance : '',
        newAddress : '',
        result: ''
      }
    }
  
    componentDidMount() {
      console.log('Balance : componentDidMount');
      RNElastosMainchain.GetBalance(0, (err, res) => {
        this.setState({balance: parseFloat(res / 100000000).toFixed(2)})
      });
      RNElastosMainchain.CreateAddress( (err, res) => {
        this.setState({newAddress: res})
      });
      RNElastosMainchain.GetAllTransaction( (err, res) => {
        var transactionHistory = JSON.parse(res);
        this.setState({txlist : transactionHistory});
      });
    }
  
    componentWillUnmount() {
      console.log('Balance : componentWillUnmount');
    }

    GetBalance = () => {
      console.log('Balance : GetBalance');
      RNElastosMainchain.GetBalance(0, (err, res) => {
        // this.setState({balance: parseFloat(res / 100000000).toFixed(2)})
        this.setState({result: parseFloat(res / 100000000).toFixed(2)})
      });
    }

    CreateAddress = () => {
      console.log('Balance : CreateAddress');
      RNElastosMainchain.CreateAddress( (err, res) => {
        // this.setState({newAddress: res})
        this.setState({result: res})
      });
    }

    GetAllTransaction = () => {
      console.log('Balance : GetAllTransaction');
      RNElastosMainchain.GetAllTransaction( (err, res) => {
        // var transactionHistory = JSON.parse(res);
        // this.setState({txlist : transactionHistory});
        this.setState({result: res})
      });
    }

    sendClicked = () => {
      console.log('Balance : sendClicked');
      RNElastosMainchain.Send(this.state.sendingamount, this.state.toaddress, true, (err, res) => {
        this.setState({result: res})
      });
    }

    exportClicked = () => {
      console.log('Balance : exportClicked');
      RNElastosMainchain.ExportWalletWithMnemonic("elastos2018", (err, res) => {
        this.setState({result: res})
      });
    }

    GetMultiSignPubKeyWithMnemonic = () => {
      console.log('Balance : GetMultiSignPubKeyWithMnemonic');
      RNElastosMainchain.GetMultiSignPubKeyWithMnemonic("cry mechanic bean they discover vendor couple adapt walk room edit dinner", (err, res) => {
        this.setState({result: res})
      });
    }

    GetMultiSignPubKeyWithPrivKey = () => {
      console.log('Balance : GetMultiSignPubKeyWithPrivKey');
      RNElastosMainchain.GetMultiSignPubKeyWithPrivKey("", (err, res) => {
        this.setState({result: res})
      });
    }

    GetPublicKey = () => {
      console.log('Balance : GetPublicKey');
      RNElastosMainchain.GetPublicKey((err, res) => {
        this.setState({result: res})
      });
    }

    IsAddressValid = () => {
      console.log('Balance : IsAddressValid');
      RNElastosMainchain.IsAddressValid("EWzDfqRmfYKHhg2V4gPGz3jQJkZU97grow", (err, res) => {
        if (res == true) {
          this.setState({result: "True"})
        } else {
          this.setState({result: "False"})
        }
      });
    }

    GetSupportedChains = () => {
      console.log('Balance : GetSupportedChains');
      RNElastosMainchain.GetSupportedChains((err, res) => {
        this.setState({result: JSON.stringify(res)})
      });
    }

    ChangePassword = () => {
      console.log('Balance : ChangePassword');
      RNElastosMainchain.ChangePassword("elastos2018","elastos2018", (err, res) => {
        this.setState({result: res})
      });
    }

    GetBalanceInfo = () => {
      console.log('Balance : GetBalanceInfo');
      RNElastosMainchain.GetBalanceInfo((err, res) => {
        this.setState({result: res})
      });
    }

    GetBalanceWithAddress = () => {
      console.log('Balance : GetBalanceWithAddress');
      RNElastosMainchain.GetBalanceWithAddress(this.state.toaddress, (err, res) => {
        this.setState({result: res})
      });
    }

    GetAllAddress = () => {
      console.log('Balance : GetAllAddress');
      RNElastosMainchain.GetAllAddress((err, res) => {
        this.setState({result: res})
      });
    }
  
    render() {
      const { toaddress , sendingamount , txlist} = this.state;

      return (
        <View style={styles.container}>
            <Text testID={'txt:Result'} accessibilityLabel={"txt:Result"} style={styles.result}>{this.state.result}</Text>

            {/* <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
              <Button
                onPress={this.GetBalance}
                title="GetBalance"/>
            </View> */}

            <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
              <Button
                testID={'btn:CreateAddress'}
                accessibilityLabel={"btn:CreateAddress"}
                onPress={this.CreateAddress}
                title="CreateAddress"/>
            </View>

            {/* <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
              <Button
                onPress={this.GetAllTransaction}
                title="GetAllTransaction"/>
            </View> */}

            <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
              <Button
                testID={'btn:GetBalanceInfo'}
                accessibilityLabel={"btn:GetBalanceInfo"}
                onPress={this.GetBalanceInfo}
                title="GetBalanceInfo"/>
            </View>

            <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
              <Button
                testID={'btn:exportClicked'}
                accessibilityLabel={"btn:exportClicked"}
                onPress={this.exportClicked}
                title="Export Wallet"/>
            </View>

            <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
              <Button
                testID={'btn:ChangePassword'}
                accessibilityLabel={"btn:ChangePassword"}
                onPress={this.ChangePassword}
                title="ChangePassword"/>
            </View>

            <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
              <Button
                testID={'btn:GetMultiSignPubKeyWithMnemonic'}
                accessibilityLabel={"btn:GetMultiSignPubKeyWithMnemonic"}
                onPress={this.GetMultiSignPubKeyWithMnemonic}
                title="GetMultiSignPubKeyWithMnemonic"/>
            </View>

            {/* <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
              <Button
                onPress={this.GetMultiSignPubKeyWithPrivKey}
                title="GetMultiSignPubKeyWithPrivKey"/>
            </View> */}

            <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
              <Button
                testID={'btn:GetPublicKey'}
                accessibilityLabel={"btn:GetPublicKey"}
                onPress={this.GetPublicKey}
                title="GetPublicKey"/>
            </View>

            <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
              <Button
                testID={'btn:GetSupportedChains'}
                accessibilityLabel={"btn:GetSupportedChains"}
                onPress={this.GetSupportedChains}
                title="GetSupportedChains"/>
            </View>

            {/* <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
              <Button
                onPress={this.GetAllAddress}
                title="GetAllAddress"/>
            </View> */}

            <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
              <Button
                testID={'btn:IsAddressValid'}
                accessibilityLabel={"btn:IsAddressValid"}
                onPress={this.IsAddressValid}
                title="IsAddressValid"/>
            </View>

            {/* <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
              <Button
                onPress={this.GetBalanceWithAddress}
                title="GetBalanceWithAddress"/>
            </View> */}

            {/* <View style={{marginLeft:100, marginRight:100, marginBottom:10}}>
              <Button
                onPress={this.sendClicked}
                title="SEND"/>
            </View> */}
        
        </View>
      );
    }
  }

  export default Balance;