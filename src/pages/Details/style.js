import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
  flex: 1;
  margin-top: ${statusBarHeight}px;
  background-color: #242424;
`;

export const Cover = styled.ImageBackground`
  width: 100%;
  height: 40%;
`;

export const Mask = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #00000050;
`;

export const MovieTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Genres = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const Info = styled.View`
  flex: 1;
  width: 95%;
  align-self: center;
`;

export const Overview = styled.View`
  margin-top: 20px;
`;

export const SubTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
