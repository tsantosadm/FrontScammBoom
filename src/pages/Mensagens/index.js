import React from "react";
import Backgroud from "../../componentes/Background";
import ListUsers from "../../componentes/ListUsers/index";
import { Container, List } from "./styles";
import Header from "../../componentes/Header";
import { View, StyleSheet, Text } from "react-native";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Messages = () => {
  return (
    <Backgroud>
      <Container>
        <Header titulo="Chat" />
        <View style={styles.container}>
          <List
            data={data}
            keyExtractor={(item) => String(item)}
            renderItem={({ item }) => <ListUsers data={item} />}
          />
        </View>
      </Container>
    </Backgroud>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
});
