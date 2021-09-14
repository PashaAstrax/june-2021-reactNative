import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Users from "./components/Users";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./components/Home";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UsersPageNavigator from "./screens/UsersPageNavigator";

let BottomTabNavigator = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <BottomTabNavigator.Navigator>
              <BottomTabNavigator.Screen name={"UsersPageNavigator"} component={UsersPageNavigator}/>
              <BottomTabNavigator.Screen name={"Home"} component={Home}/>
          </BottomTabNavigator.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});
