import React from "react";
import { View,Text } from "react-native";
import colors from "../../assets/colors";
import styles from "../../assets/styles";

const TextInput = ({title}) => {
return(
    <View style={styles.textInput}>
        <Text style={styles.text} >
          {title}
        </Text>
      </View>
)
}
export default TextInput;