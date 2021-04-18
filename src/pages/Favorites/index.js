import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import Favorite from "../../Components/Favorite";

import { Container, Logo, Title } from "./style";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Favorites() {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState([]);

  function back() {
    navigation.navigate("Home");
  }

  async function getFavorites() {
    let favoritesArray = [];
    const response = await AsyncStorage.getItem("favorites");

    if (response) {
      const fav = JSON.parse(response);

      fav.map((item) => {
        favoritesArray.push(item);
      });

      setFavorites(favoritesArray);
    }
  }

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => back()}
          style={{ position: "absolute", left: 0, top: 10 }}
        >
          <Feather name="chevron-left" size={40} color="#FFF" />
        </TouchableOpacity>
        <Logo>My Movies</Logo>
        <Title>Favoritos</Title>
        <View>
          {favorites &&
            favorites.map((movie) => <Favorite key={movie.id} movie={movie} />)}
        </View>
      </ScrollView>
    </Container>
  );
}
