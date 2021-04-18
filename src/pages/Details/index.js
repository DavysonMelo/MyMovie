import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  Container,
  Cover,
  Mask,
  Info,
  MovieTitle,
  Genres,
  Overview,
  SubTitle,
} from "./style";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

import api, { queryConfig } from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState([]);
  const [isFavorite, setIsFavotite] = useState(false);

  const { movieId } = route.params;

  function getGenres(movie) {
    let genreArray = [];
    movie.genres.map((genre) => {
      genreArray.push(genre.name);
    });
    setGenres(genreArray);
  }

  async function getMovieDetails() {
    try {
      const response = await api.get(`movie/${movieId}${queryConfig}`);
      setMovie(response.data);
      getGenres(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getFavorites() {
    const fav = await AsyncStorage.getItem("favorites");

    if (fav) {
      const favorites = JSON.parse(fav);
      favorites.findIndex((item) => {
        if (item.id === movieId) {
          setIsFavotite(true);
        }
      });
    }
  }

  async function toggleFavorite() {
    const fav = await AsyncStorage.getItem("favorites");

    let favoritesArray = [];

    if (fav) {
      favoritesArray = JSON.parse(fav);
    }

    if (isFavorite) {
      const favoriteIndex = favoritesArray.findIndex((item) => {
        return item.id === movieId;
      });

      favoritesArray.splice(favoriteIndex, 1);

      setIsFavotite(false);
    } else {
      favoritesArray.push(movie);

      setIsFavotite(true);
    }

    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
  }

  useEffect(() => {
    getMovieDetails();
  }, []);

  useEffect(() => {
    getFavorites();
  }, [movie]);

  function back() {
    navigation.navigate("Home");
  }

  return (
    <Container>
      {movie && (
        <View style={{ flex: 1 }}>
          <Cover source={{ uri: `${baseUrl}${movie.backdrop_path}` }}>
            <Mask>
              <TouchableOpacity
                onPress={() => back()}
                style={{ position: "absolute", left: 0, top: 10 }}
              >
                <Feather name="chevron-left" size={40} color="#FFF" />
              </TouchableOpacity>
              <MovieTitle>{movie.title}</MovieTitle>
              <Genres>{genres.join(", ")}</Genres>
            </Mask>
          </Cover>
          <Info>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <View style={{ marginTop: 15 }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Feather name="star" size={15} color="#FFF" />
                    <Text
                      style={{ color: "#FFF" }}
                    >{` ${movie.vote_average} (${movie.vote_count} Avaliações)`}</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Feather name="clock" size={15} color="#FFF" />
                    <Text
                      style={{ color: "#FFF" }}
                    >{` ${movie.runtime} minutos`}</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Feather name="calendar" size={15} color="#FFF" />
                    <Text
                      style={{ color: "#FFF" }}
                    >{` Data de lançamento ${movie.release_date} `}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{ alignSelf: "center" }}
                onPress={() => toggleFavorite()}
              >
                {isFavorite ? (
                  <FontAwesome name="heart" size={32} color="#A60000" />
                ) : (
                  <Feather name="heart" size={32} color="#FFF" />
                )}
              </TouchableOpacity>
            </View>
            <Overview>
              <SubTitle>Sinopse</SubTitle>
              <Text style={{ color: "#FFF" }}>{movie.overview}</Text>
            </Overview>
          </Info>
        </View>
      )}
    </Container>
  );
}
