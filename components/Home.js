import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import About from "./About";
import Company from "./Company";

let DrawerNavigator = createDrawerNavigator();

const Home = () => {
  return (
      <DrawerNavigator.Navigator initialRouteName={"About"}>
          <DrawerNavigator.Screen name={"About"} component={About}/>
          <DrawerNavigator.Screen name={"Company"} component={Company}/>
      </DrawerNavigator.Navigator>
  )
};
export default Home

let styles = StyleSheet.create({});