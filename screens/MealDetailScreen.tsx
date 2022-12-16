import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React from "react";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParamsList } from "./RootStackParamsList";
import { MEALS } from "../data/dummy-data";
import { executeNativeBackPress } from "react-native-screens";
import IconButton from "../components/IconButton";

type Props = {};

type mealItemScreenProps = NativeStackNavigationProp<RootStackParamsList>;

const MealDetailScreen = ({ route, navigation }: any) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  // console.log(selectedMeal);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={() => console.log("Pressed")}
          icon="star"
          color="#fff"
        ></IconButton>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        source={{ uri: selectedMeal?.imageUrl }}
        style={styles.image}
      ></Image>
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedMeal?.duration}min</Text>
        <Text style={styles.detailItem}>
          {selectedMeal?.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailItem}>
          {selectedMeal?.affordability.toUpperCase()}
        </Text>
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>
          {selectedMeal?.ingredients.map((ingredient) => (
            <View key={ingredient} style={styles.listItem}>
              <Text style={styles.itemText}>{ingredient}</Text>
            </View>
          ))}
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>
          {selectedMeal?.steps.map((step) => (
            <View key={step} style={styles.listItem}>
              <Text style={styles.itemText}>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
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
    color: "#fff",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
  },
  subtitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    margin: 4,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#fff",
  },
  itemText: {
    textAlign: "center",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  rootContainer: {
    marginBottom: 32,
  },
});
