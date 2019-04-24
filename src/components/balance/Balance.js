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
        newAddress : ''
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
        console.log(err, res)
        var transactionHistory = JSON.parse(res);
        // var transactionData, index = 0;
        // var transactionData = transactionHistory.map(element => {
        //   index++;
        //   var elementDate = new Date(element.Timestamp * 1000).toUTCString();
        //   var elementFlag, elementAmount, elementAddress;
        //   if (element.Incoming.Amount != 0) {
        //     elementFlag = "Received";
        //     elementAmount = element.Incoming.Amount;
        //     elementAddress = element.Incoming.ToAddress;
        //   } else {
        //     elementFlag = "Sent";
        //     elementAmount = element.Outcoming.Amount;
        //     elementAddress = element.Outcoming.ToAddress;
        //   }

        //   return {
        //       id : index,
        //       transaction_id : element.TxHash,
        //       amount : elementAmount,
        //       date : elementDate,
        //       flag : elementFlag,
        //       address: elementAddress
        //   }
        // });
        // this.setState({txlist : transactionData});
        this.setState({txlist : transactionHistory});
      });
    }
  
    componentWillUnmount() {
      console.log('Balance : componentWillUnmount');
    }

    sendClicked = () => {
      console.log('Balance : sendClicked');
      RNElastosMainchain.Send(this.state.sendingamount, this.state.toaddress, true, (err, res) => {
        alert("Success, your transacionId is" + res)
      });
    }

    exportClicked = () => {
      console.log('Balance : exportClicked');
      RNElastosMainchain.ExportWalletWithMnemonic("elastos2018", (err, res) => {
        alert(res)
      });
    }

    GetMultiSignPubKeyWithMnemonic = () => {
      console.log('Balance : GetMultiSignPubKeyWithMnemonic');
      RNElastosMainchain.GetMultiSignPubKeyWithMnemonic((err, res) => {
        alert(res)
      });
    }

    GetMultiSignPubKeyWithPrivKey = () => {
      console.log('Balance : GetMultiSignPubKeyWithPrivKey');
      RNElastosMainchain.GetMultiSignPubKeyWithPrivKey("", (err, res) => {
        alert(res)
      });
    }

    GetPublicKey = () => {
      console.log('Balance : GetPublicKey');
      RNElastosMainchain.GetPublicKey((err, res) => {
        alert(res)
      });
    }

    IsAddressValid = () => {
      console.log('Balance : IsAddressValid');
      RNElastosMainchain.IsAddressValid(this.state.toaddress, (err, res) => {
        alert(res)
      });
    }

    GetSupportedChains = () => {
      console.log('Balance : GetSupportedChains');
      RNElastosMainchain.GetSupportedChains((err, res) => {
        alert(res)
      });
    }

    ChangePassword = () => {
      console.log('Balance : ChangePassword');
      RNElastosMainchain.ChangePassword("","", (err, res) => {
        alert(res)
      });
    }

    GetBalanceInfo = () => {
      console.log('Balance : GetBalanceInfo');
      RNElastosMainchain.GetBalanceInfo((err, res) => {
        alert(res)
      });
    }

    GetBalanceWithAddress = () => {
      console.log('Balance : GetBalanceWithAddress');
      RNElastosMainchain.GetBalanceWithAddress(this.state.toaddress, (err, res) => {
        alert(res)
      });
    }

    GetAllAddress = () => {
      console.log('Balance : GetAllAddress');
      RNElastosMainchain.GetAllAddress((err, res) => {
        alert(res)
      });
    }
  
    render() {
      const { toaddress , sendingamount , txlist} = this.state;

      return (
        <View style={styles.container}>
            <Text style={styles.elaAmout}>Balance : {this.state.balance} ELA</Text>
            <Text style={styles.elaNewAddress}>New Address : "{this.state.newAddress}"</Text>
            
            <Text>{txlist}</Text>
            {/* <FlatList
              style={styles.list}
              bounces={false}
              data={data}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  { Platform.OS == 'ios' ?
                    <View>
                    <Text>
                    TxHash: {item.Summary.TxHash}
                  </Text>
                  <Text>
                    Amout : {item.Summary.Incoming.Amount}  {'\n'}
                    To : {item.Summary.Incoming.ToAddress}
                    </Text>
                    </View>
                  :
                  <View>
                    <Text>
                    {item.transaction_id}
                  </Text>
                  <Text>
                    {item.flag} {item.amount} {item.date} {item.address}
                    </Text>
                    </View>
                  }
                  
                </View>
              )}
            /> */}

            <View style={{marginLeft:100, marginRight:100}}>
              <Button
                onPress={this.GetBalanceInfo}
                title="GetBalanceInfo"/>
            </View>

            <View style={{marginLeft:100, marginRight:100}}>
              <Button
                onPress={this.exportClicked}
                title="Export Wallet"/>
            </View>

            <View style={{marginLeft:100, marginRight:100}}>
              <Button
                onPress={this.ChangePassword}
                title="ChangePassword"/>
            </View>

            <View style={{marginLeft:100, marginRight:100}}>
              <Button
                onPress={this.GetMultiSignPubKeyWithMnemonic}
                title="GetMultiSignPubKeyWithMnemonic"/>
            </View>

            <View style={{marginLeft:100, marginRight:100}}>
              <Button
                onPress={this.GetMultiSignPubKeyWithPrivKey}
                title="GetMultiSignPubKeyWithPrivKey"/>
            </View>

            <View style={{marginLeft:100, marginRight:100}}>
              <Button
                onPress={this.GetPublicKey}
                title="GetPublicKey"/>
            </View>

            <View style={{marginLeft:100, marginRight:100}}>
              <Button
                onPress={this.GetSupportedChains}
                title="GetSupportedChains"/>
            </View>

            <View style={{marginLeft:100, marginRight:100}}>
              <Button
                onPress={this.GetAllAddress}
                title="GetAllAddress"/>
            </View>

            <TextInput 
            style={styles.textbox} 
            placeholder="Enter amount to send" 
            onChangeText={text => this.setState({ sendingamount: text })} >
              { sendingamount }
            </TextInput>

            <TextInput 
            style={styles.textbox} 
            placeholder="Enter receiver's address" 
            onChangeText={text => this.setState({ toaddress: text })} >
              { toaddress }
            </TextInput>

            <View style={{marginLeft:100, marginRight:100}}>
              <Button
                onPress={this.IsAddressValid}
                title="IsAddressValid"/>
            </View>

            <View style={{marginLeft:100, marginRight:100}}>
              <Button
                onPress={this.GetBalanceWithAddress}
                title="GetBalanceWithAddress"/>
            </View>

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