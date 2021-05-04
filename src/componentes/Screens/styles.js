import { Platform } from "react-native";
import styled from "styled-components";

import Input from "../../componentes/Input";
import Button from "../../componentes/Button";

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === "ios",
  behavior: "padding",
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 30px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 5px;
`;

export const FormDiv = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const FormInputDiv = styled(Input)`
  width: 100px;
  justify-content: space-between;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const Logo = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 30px;
`;
