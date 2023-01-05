import React from "react";
import {View,Button,Text} from "react-native";
import colors from "../../assets/colors";
import styles from "../../assets/styles";
import { Navigation } from "react-native-navigation";
import { TextInput } from "../../components/login";

const Login = () =>{
return (
    <View style={styles.parentView}>
      <TextInput title={"Email"}/>
      <TextInput title={"Password"}/>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width:"100%",
        }}>
        <View styles={[styles.button,{backgroundColor: colors.red, marginRight:20}]}>
          <Text  style={[styles.text,{color:"#000"}]}>Reset</Text>
        </View>
        <Button styles={[styles.button,{color:colors.green}]} title ="confirm" color="green"
        onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'Content',
            options: {
              topBar: {
                title: {
                  text: 'Content'
                }
              }
            }
          }
        })}/>
          
       
      </View> 
</View>
)
}
export default Login;