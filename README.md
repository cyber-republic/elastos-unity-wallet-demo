# react-native-elastos-mainchain-demo

This is a demo app using the react-native-elastos-wallet-core npm package.

## How to use for ios

```
$ git clone https://github.com/cyber-republic/react-native-elastos-wallet-core-demo
$ cd react-native-elastos-wallet-core-demo
$ npm i
$ cd node_modules/react-native-elastos-wallet-core/Elastos.ORG.Wallet.Lib.C/build/ios/src
$ install_name_tool -id  "$(pwd)/libElastos.Wallet.Utility.dylib" libElastos.Wallet.Utility.dylib
$ react-native start
$ react-native run-ios
```

## How to use for android

```
$ git clone https://github.com/cyber-republic/react-native-elastos-wallet-core-demo
$ cd react-native-elastos-wallet-core-demo
$ npm i
$ react-native run-android
```

<img src="https://ademcan.net/images/ElaWalletGenerateMnemonic.png" width="400">


## Connect to elastos testnet

In order to access some functionalities (such as wallet balance, sending transactions...) the app needs to connect to the elastos testnet. Follow the guidelines below to connect to elastos testnet:

```
# the config.json on ademcan/Elastos.ELA is already configured for testnet
# you can alternatively clone the main repo and perform the changes yourself

$ git clone https://github.com/ademcan/Elastos.ELA
$ cd docker
$ docker build -t ela_node_run .
$ docker run -p 21334:21334 -p 21335:21335 -p 21336:21336 -p 21338:21338 ela_node_run
```

To confirm that you are successfully connected to the elastos testnet you can run the following two commands:
```
# Node API example
curl http://localhost:21334/api/v1/block/height

# JSON-RPC example
curl --request POST \
  --url http://localhost:21336 \
  --header 'Content-Type: application/json' \
  --data '{  "method": "getbestblockhash"}'

```
