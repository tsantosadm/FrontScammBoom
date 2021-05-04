import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Publications extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Publicações</Text>
      </View>
    );
  }
}

export default Publications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
