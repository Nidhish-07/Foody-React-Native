import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

type Props = { title: string; color: string };

const CategoryGridTile = (props: Props) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({});
