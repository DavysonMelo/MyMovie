import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { Text } from "react-native";
import { Container, Thumbnail } from "./style";

export default function Movie({ movie }) {
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
    </Container>
  );
}
