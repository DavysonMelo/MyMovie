import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Container, Thumbnail, Info, Title, Remove } from "./style";

export default function Searched({ movie }) {
  const navigation = useNavigation();
  const baseUrl = "https://image.tmdb.org/t/p/original";

  function goToDetails() {
    const movieId = movie.id;
    navigation.navigate("Details", { movieId });
  }

  return (
    <Container onPress={() => goToDetails()}>
      <Thumbnail
        source={{
          uri: `${baseUrl}${movie.poster_path}`,
        }}
      />

      <Info>
        <Title>{movie.title}</Title>
        <View style={{ flexDirection: "row", marginBottom: 5 }}>
          <Feather name="star" size={20} color="#ffe600" />
          <Text style={{ color: "#FFF" }}>{" " + movie.vote_average}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Feather name="calendar" size={20} color="#FFF" />
          <Text style={{ color: "#FFF" }}>{" " + movie.release_date}</Text>
        </View>
      </Info>
    </Container>
  );
}
