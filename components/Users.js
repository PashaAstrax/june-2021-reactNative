import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {getUsers} from "../services/api.service";
import User from "./User";

const Users = (props) => {
    let {navigation} = props;

    let [user, setUser] = useState();

    useEffect(() => {
        getUsers().then(value => setUser([...value]))
    }, [])

  return <View style={styles.wrap}>
      <FlatList
          data={user}
          renderItem={({item}) => <User item={item} nav={navigation}/>}
          keyExtractor={item => `${item.id}`}
      />
  </View>;
};
export default Users

let styles = StyleSheet.create({
    wrap: {
        backgroundColor: "blue"
    }
});