import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParamsList } from "./RootStackParamsList";
import { MEALS } from "../data/dummy-data";

type Props = {};

type mealItemScreenProps = NativeStackNavigationProp<RootStackParamsList>;

const MealDetailScreen = ({ route, navigation }: any) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  // console.log(selectedMeal);

  return (
    <View>
      <Image source={{ uri: selectedMeal?.imageUrl }}></Image>
      <Text>{selectedMeal?.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedMeal?.duration}m</Text>
        <Text style={styles.detailItem}>
          {selectedMeal?.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailItem}>
          {selectedMeal?.affordability.toUpperCase()}
        </Text>
      </View>
      <Text>Ingredients</Text>
      {selectedMeal?.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal?.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
