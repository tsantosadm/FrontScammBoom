import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Informations from "../Screens/Informations";
import Publications from "../Screens/Publications";
import Curriculo from "../Screens/Curriculo";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const Tabs = createMaterialTopTabNavigator(
  {
    Informations: {
      screen: Informations,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconContainer}>
            <Text style={{ color: tintColor, fontSize: 18 }}>Informações</Text>
          </View>
        ),
      },
    },
    Publications: {
      screen: Publications,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconContainer}>
            <Text style={{ color: tintColor, fontSize: 18 }}>Publicações</Text>
          </View>
        ),
      },
    },
    Curriculo: {
      screen: Curriculo,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconContainer}>
            <Text style={{ color: tintColor, fontSize: 18 }}>Curriculo</Text>
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: "Informations",
    lazyLoad: true,
    tabBarPosition: "top",
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        height: 45,
        backgroundColor: "#fff",
        paddingBottom: 3,
        paddingTop: 3,
      },
      indicatorStyle: {
        backgroundColor: "#4E70D1",
        elevation: 10,
      },
      activeTintColor: "#aa30D1",
      inactiveTintColor: "gray",
    },
  }
);

const MainScreenNavigator = createStackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      headerStyle: {
        height: 0,
      },
      headerTitleStyle: {
        color: "#fff",
      },
    },
  },
});

export default createAppContainer(MainScreenNavigator);

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
