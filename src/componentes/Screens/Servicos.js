import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Container, Form, FormInput, FormDiv, FormInputDiv } from "./styles";

class Servicos extends Component {
  state = {};
  render() {
    return (
      <ScrollView>
        <Container>
          <Form>
            <FormInput
              icon="person-outline"
              autoCorrect={false}
              placeholder="Nome completo"
              returnKeyType="next"
            />
            <FormInput
              icon="person-outline"
              autoCorrect={false}
              placeholder="Nome completo"
              returnKeyType="next"
            />
            <FormInput
              icon="person-outline"
              autoCorrect={false}
              placeholder="Nome completo"
              returnKeyType="next"
            />
            <FormInput
              icon="person-outline"
              autoCorrect={false}
              placeholder="Nome completo"
              returnKeyType="next"
            />
            <FormDiv>
              <FormInputDiv
                icon="person-outline"
                autoCorrect={false}
                placeholder="Nome completo"
                returnKeyType="next"
              />
              <FormInputDiv
                icon="person-outline"
                autoCorrect={false}
                placeholder="Nome completo"
                returnKeyType="next"
              />
              <FormInputDiv
                icon="person-outline"
                autoCorrect={false}
                placeholder="Nome completo"
                returnKeyType="next"
              />
            </FormDiv>
            <FormDiv>
              <FormInputDiv
                icon="person-outline"
                autoCorrect={false}
                placeholder="Nome completo"
                returnKeyType="next"
              />
              <FormInputDiv
                icon="person-outline"
                autoCorrect={false}
                placeholder="Nome completo"
                returnKeyType="next"
              />
              <FormInputDiv
                icon="person-outline"
                autoCorrect={false}
                placeholder="Nome completo"
                returnKeyType="next"
              />
            </FormDiv>
          </Form>
        </Container>
      </ScrollView>
    );
  }
}

export default Servicos;

const styles = StyleSheet.create({
  text: {
    color: "#D40000",
  },
});
