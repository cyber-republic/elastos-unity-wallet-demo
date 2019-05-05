import { StyleSheet } from 'react-native';

const $black = '#000';

const styles = StyleSheet.create({
  buttonView: {
    marginBottom:10,
    marginLeft:100,
    marginRight:100
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  elaAmout : {
    marginBottom : 10,
    textAlign: 'center'
  },
  elaNewAddress : {
    marginBottom : 10,
    textAlign: 'center',
  },
  item : {
    flex : 1,
    flexDirection: 'column',
    marginBottom : 10
  },
  list: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop : 10
  },
  result : {
    marginBottom : 10,
    textAlign: 'center'
  },

  text : {
    
  },

  textbox: {
    borderBottomWidth: 1,
    borderColor: $black,
    borderRadius: 5,
    height: 50,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    textAlign: 'left'
  },
});

export default styles;
