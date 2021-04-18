import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
  flex: 1;
  background-color: #242424;
  margin-top: ${statusBarHeight}px;
  padding-left: 2.5%;
  padding-right: 2.5%;
`;

export const Logo = styled.Text`
  margin-top: 10px;
  margin-bottom: 25px;
  align-self: center;
  font-size: 28px;
  font-weight: bold;
  color: #00a2ff;
`;

export const Title = styled.Text`
  color: #c3c3c3;
  margin-bottom: 10px;
`;
