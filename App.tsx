import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import React from "react";

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="light"></StatusBar>
      <CategoriesScreen></CategoriesScreen>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});
