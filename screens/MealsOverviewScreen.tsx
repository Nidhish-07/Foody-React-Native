import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamsList } from "./RootParamsLists";
import { useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import MealItem from "../components/MealItem";

type Props = {};

type mealsOverviewScreenProps = NativeStackScreenProps<RootStackParamsList>;

const MealsOverviewScreen = ({ route, navigation }: any) => {
  // const route=useRoute()
  const { categoryId } = route.params;

  const mealsToDisplay = MEALS.filter(
    (mealItem: Meal): boolean => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  React.useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);
  return (
    <View style={styles.container}>
      <FlatList
        data={mealsToDisplay}
        keyExtractor={(item: Meal): string => item.id}
        renderItem={(itemData) => {
          const mealItemProps = {
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration,
            id: itemData.item.id,
          };
          return <MealItem {...mealItemProps} />;
        }}
      ></FlatList>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});
