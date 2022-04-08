import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import auth from "@react-native-firebase/auth";
import { BLACK_COLOR } from "../colors";
import { Alert, ActivityIndicator } from "react-native";

const Container = styled.View`
  background-color: ${BLACK_COLOR};
  flex: 1;
  align-items: center;
  color: white;
  padding: 60px 20px;
`;
const TextInput = styled.TextInput`
  width: 100%;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  color: white;
  background-color: rgba(255, 255, 255, 0.5);
`;
const Btn = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 20px;
  border-width: 1px;
  border-radius: 20px;
  border-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  align-items: center;
`;
const BtnText = styled.Text`
  color: white;
  font-size: 16px;
`;

const Join = () => {
  const passwordInput = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitEmailEditing = () => {
    passwordInput.current.focus();
  };
  const onSubmitPasswordEditing = async () => {
    if (email === "" || password === "") {
      return Alert.alert("아이디 또는 비밀번호 입력창이 비면 안됩니다.");
    }
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(userCredential);
    } catch (e) {
      switch (e.code) {
        case "auth/weak-password": {
          Alert.alert("보안에 취약한 비밀번호입니다");
        }
      }
    }
  };
  return (
    <Container>
      <TextInput
        placeholder="이메일"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        value={email}
        returnKeyType="next"
        onChangeText={(text) => setEmail(text)}
        onSubmitEditing={onSubmitEmailEditing}
        placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
      />
      <TextInput
        ref={passwordInput}
        placeholder="비밀번호"
        secureTextEntry
        value={password}
        returnKeyType="join"
        onChangeText={(text) => setPassword(text)}
        placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
        onSubmitEditing={onSubmitPasswordEditing}
      />
      <Btn onPress={onSubmitPasswordEditing}>
        {loading ? (
          <ActivityIndicator color="white" size="large" />
        ) : (
          <BtnText>계정 생성</BtnText>
        )}
      </Btn>
    </Container>
  );
};

export default Join;
