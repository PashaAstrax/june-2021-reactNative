import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const User = (props) => {
        let {item, nav:{navigate}} = props;

    let onPress = () => {
        navigate("uDetails", {data:item})
    };

  return <View style={[styles.userBox, styles.margins, styles.sizes]}>
      <Text>{item.name}</Text>
      <Button title={"user details"} onPress={onPress}/>
  </View>;
};
export default User

let styles = StyleSheet.create({
    userBox: {
        // flex: 1,
        backgroundColor: "silver",
        justifyContent: "center",
        alignItems: "center"
    },
    margins: {
        marginBottom: 1
    },
    sizes: {
        width: "100%",
        height: 50
    }
});