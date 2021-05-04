import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Left, Info, Title, Data } from "./styles";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

const ListUsers = () => {
  return (
    <Container>
      <Left>
        <Avatar.Image source={require("../../assets/user.jpg")} />
        <Info>
          <Data>As Crônicas de Gelo e Fogo</Data>
          <Title>Italo Muller</Title>
        </Info>
      </Left>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="close" size={20} color="#836FFF"></Icon>
      </TouchableOpacity>
    </Container>
  );
};

export default ListUsers;
