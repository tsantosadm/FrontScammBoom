import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Servicos from "../Screens/Servicos";
import Produtos from "../Screens/Produtos";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const Tabs = createMaterialTopTabNavigator(
  {
    Produtos: {
      screen: Produtos,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconContainer}>
            <Text style={{ color: tintColor, fontSize: 18 }}>Produtos</Text>
          </View>
        ),
      },
    },
    Serviços: {
      screen: Servicos,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconContainer}>
            <Text style={{ color: tintColor, fontSize: 18 }}>Serviços</Text>
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: "Produtos",
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
