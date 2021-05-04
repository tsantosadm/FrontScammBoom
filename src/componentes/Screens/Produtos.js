import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Produtos extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>Produtos</Text>
      </View>
    );
  }
}

export default Produtos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
