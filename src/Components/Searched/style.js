import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 180px;
  flex-direction: row;
  margin-bottom: 10px;
  border: 1px solid #424242;
`;

export const Thumbnail = styled.Image`
  width: 130px;
  height: 100%;
`;

export const Info = styled.View`
  flex: 1;
  padding-left: 10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 10px;
`;
