import React from "react";
import Backgroud from "../../componentes/Background";
import { Container } from "./styles";
import Header from "../../componentes/Header";
import MainScreenNavigator from "../../componentes/Config/routerDest";
import { View, StyleSheet, StatusBar } from "react-native";

const Destaques = () => {
  return (
    <Backgroud>
      <Container>
        <Header titulo="Destaques" />
        <View style={styles.container}>
          <StatusBar />
          <MainScreenNavigator />
        </View>
      </Container>
    </Backgroud>
  );
};

export default Destaques;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
