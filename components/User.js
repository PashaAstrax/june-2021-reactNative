import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const User = ({item}) => {
  return <View style={[styles.userBox, styles.margins, styles.sizes]}>
      <Text>{item.name}</Text>
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
        marginBottom: 3
    },
    sizes: {
        width: "100%",
        height: 50
    }
});
