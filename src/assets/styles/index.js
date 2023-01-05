import colors from '../colors';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  headingText: {
    fontSize: 36,
    fontColor: colors.blue,
    fontWeight: 800,
  },
  box: {
    backgroundColor: colors.blue,
    height: 70,
    width: '47%',
  },
  semiCircle: {
    height: 200,
    backgroundColor: colors.blue,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
    opacity: 0.4,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  textInput: {
    width: '100%',
    backgroundColor: colors.blue,
    height: 50,
    justifyContent: 'center',
    marginBottom: 30,
    borderRadius: 15,
    paddingLeft: 15,
  },
  button: {
    // backgroundColor: colors.red,
    width: '40%',
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  parentView:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    padding:10,
    backgroundColor:colors.white,
  }
});

export default styles;
