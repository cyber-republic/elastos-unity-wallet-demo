import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginLeft : 30,
    marginRight : 30
  },
  importButton : {
    marginTop : 50
  },
  topText : {
    height : 30,
    textAlign: 'left',
  },
  descText : {
    height : 30,
    textAlign: 'left',
  },
  textbox: {
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 5,
    padding : 10
  },
});

export default styles;
