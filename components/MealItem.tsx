import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = { title: string };

const MealItem = (props: Props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({});
