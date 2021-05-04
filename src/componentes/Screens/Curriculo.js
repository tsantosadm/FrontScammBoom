import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Curriculo extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Curriculo</Text>
      </View>
    );
  }
}

export default Curriculo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
