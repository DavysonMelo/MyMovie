import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="light" backgroundColor="#242424" />
    </>
  );
}