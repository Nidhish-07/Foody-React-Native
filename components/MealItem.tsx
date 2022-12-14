import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Platform,
} from "react-native";
import React from "react";

type Props = {
  title: string;
  imageUrl: string;
  duration: number;
  affordability: string;
  complexity: string;
};

const MealItem = (props: Props) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={(pressed) => (pressed ? styles.buttonPressed : null)}
      >
        <View>
          <Image source={{ uri: props.imageUrl }} style={styles.image}></Image>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{props.duration}m</Text>
          <Text style={styles.detailItem}>
            {props.complexity.toUpperCase()}
          </Text>
          <Text style={styles.detailItem}>
            {props.affordability.toUpperCase()}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
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
  buttonPressed: {
    opacity: 0.5,
  },
});
