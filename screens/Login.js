import React from "react";
import styled from "styled-components/native";
import { BLACK_COLOR } from "../colors";

const Container = styled.View`
  background-color: ${BLACK_COLOR};
  flex: 1;
  color: white;
`;
const Wrapper = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 16px;
  text-align: center;
  color: white;
  padding-right: 10px;
`;
const Btn = styled.TouchableOpacity``;
const BtnText = styled.Text`
  font-size: 16px;
  color: white;
`;

const Login = ({ navigation: { navigate } }) => (
  <Container>
    <Wrapper>
      <Text>계정이 없나요?</Text>
      <Btn onPress={() => navigate("Join")}>
        <BtnText>회원가입</BtnText>
      </Btn>
    </Wrapper>
  </Container>
);

export default Login;
