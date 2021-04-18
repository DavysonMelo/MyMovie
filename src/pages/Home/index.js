import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import Movie from "../../Components/Movie";
import {
  Container,
  Category,
  Title,
  Logo,
  Search,
  SearchInput,
  Favorite,
  Recomended,
  SearchResult,
  Close,
} from "./style";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import api, { queryConfig } from "../../services/api";
import { useState } from "react";
import Searched from "../../Components/Searched";

export default function Home() {
  const navigation = useNavigation();
  const [popular, setPopular] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [searched, setSearched] = useState([]);
  const [searchedVisivble, setSearchedVisivble] = useState(false);

  async function getPopularMovies() {
    try {
      const response = await api.get(`movie/popular${queryConfig}`);
      const result = response.data.results;
      setPopular(result);
    } catch (error) {
      console.log(error);
    }
  }

  async function getUpcomingMovies() {
    try {
      const response = await api.get(`movie/upcoming${queryConfig}`);
      const result = response.data.results;
      setUpComing(result);
    } catch (error) {
      console.log(error);
    }
  }

  async function getTopRatedMovies() {
    try {
      const response = await api.get(`movie/top_rated${queryConfig}`);
      const result = response.data.results;
      setTopRated(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPopularMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);

  async function searchMovies() {
    setSearchedVisivble(true);

    try {
      const response = await api.get(
        `search/movie${queryConfig}&query=${movieName}`
      );
      setSearched(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  function closeSearch() {
    setSearched([]);
    setSearchedVisivble(false);
    setMovieName("");
  }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Logo>My Movies</Logo>
        <Favorite onPress={() => navigation.navigate("Favorites")}>
          <Feather name="star" size={32} color="#FFF" />
        </Favorite>
        <Search>
          <SearchInput
            value={movieName}
            onChangeText={setMovieName}
            placeholder="Pesquise um filme"
            placeholderTextColor="#FFF"
          />
          <TouchableOpacity
            onPress={() => searchMovies()}
            style={{ marginRight: 5 }}
          >
            <Feather name="search" size={25} color="#FFF" />
          </TouchableOpacity>
        </Search>
        {searchedVisivble ? (
          <SearchResult>
            <Close onPress={() => closeSearch()}>
              <Feather name="x" size={32} color="#FFF" />
            </Close>
            {searched.length === 1 ? (
              <Text style={{ color: "#c3c3c3" }}>Nenhum filme encontrado</Text>
            ) : (
              <>
                <Text style={{ color: "#c3c3c3" }}>
                  {`Exibindo resultados para: ${movieName}`}
                </Text>

                <View style={{ marginTop: 20 }}>
                  {searched.length !== 0 &&
                    searched.map((movie) => (
                      <Searched key={movie.id} movie={movie} />
                    ))}
                </View>
              </>
            )}
          </SearchResult>
        ) : (
          <Recomended>
            <Category>
              <Title>Popular</Title>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {popular.length !== 0 &&
                  popular.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                  ))}
              </ScrollView>
            </Category>

            <Category>
              <Title>Em breve</Title>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {upComing.length !== 0 &&
                  upComing.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                  ))}
              </ScrollView>
            </Category>

            <Category>
              <Title>Melhor avaliados</Title>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {topRated.length !== 0 &&
                  topRated.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                  ))}
              </ScrollView>
            </Category>
          </Recomended>
        )}
      </ScrollView>
    </Container>
  );
}
