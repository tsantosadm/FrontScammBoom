import * as React from "react";
import { Text, View, Button } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

function Informations() {
  reeturn(
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#03cafc",
      }}
    >
      <Text style={{ fontSize: 20, color: "#fff", fontWeight: "800" }}>
        OIOIOI
      </Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function InfoTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Informations"
      tabBarOptions={{
        activeTintColor: "#e91e63",
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: "white" },
      }}
    >
      <Tab.Screen
        name="Informations"
        component={Informations}
        options={{ tabBarLabel: "Informations" }}
      />
    </Tab.Navigator>
  );
}

export default function TopBarNavigator() {
  return <InfoTabs />;
}
