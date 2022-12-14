import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "./RootStackParamsList";
import { useNavigation } from "@react-navigation/native";

type Props = {};

type categoriesScreenProps = NativeStackNavigationProp<
  RootStackParamsList,
  "Categories"
>;

const CategoriesScreen = (props: Props) => {
  // const { navigation } = props;
  const navigation = useNavigation<categoriesScreenProps>();
  const pressHandler = () => {
    navigation.navigate("Overview");
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={pressHandler}
        ></CategoryGridTile>
      )}
      numColumns={2}
    ></FlatList>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
