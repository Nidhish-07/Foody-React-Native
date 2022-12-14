import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { RootStackParamsList } from "./screens/RootStackParamsList";

const Stack = createNativeStackNavigator<RootStackParamsList>();



export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="dark"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
          ></Stack.Screen>
          <Stack.Screen
            name="Overview"
            component={MealsOverviewScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});
