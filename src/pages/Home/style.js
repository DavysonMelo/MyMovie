import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
  margin-top: ${statusBarHeight}px;
  background-color: #242424;
  flex: 1;
`;

export const Logo = styled.Text`
  margin-top: 10px;
  align-self: center;
  font-size: 28px;
  font-weight: bold;
  color: #00a2ff;
`;

export const Favorite = styled.TouchableOpacity`
  position: absolute;
  right: 3%;
  top: 10px;
`;

export const Search = styled.View`
  width: 70%;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  border: 1px solid #424242;
  border-radius: 8px;
  padding: 5px;
`;

export const SearchInput = styled.TextInput`
  height: 42px;
  width: 80%;
  color: #fff;
`;

export const Recomended = styled.View`
  flex: 1;
`;

export const SearchResult = styled.View`
  margin-top: 20px;
  padding: 10px 2.5%;
  flex: 1;
  min-height: 100%;
`;

export const Close = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  right: 2.5px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Category = styled.View`
  margin-top: 10px;
  width: 95%;
  min-height: 20%;
  align-self: center;
  margin-bottom: 20px;
`;
