import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

type Props = {};

const CategoriesScreen = (props: Props) => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
        ></CategoryGridTile>
      )}
      numColumns={2}
    ></FlatList>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
