import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
        <Screen
          name="Favorites"
          component={Favorites}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
