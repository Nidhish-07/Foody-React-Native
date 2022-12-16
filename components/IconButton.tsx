import {
  StyleSheet,
  Text,
  View,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import React from "react";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  icon: any;
  color: string;
};

const IconButton = (props: Props) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={(pressed) => pressed && styles.pressed}
    >
      <Ionicons name={props.icon} size={24} color={props.color}></Ionicons>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
