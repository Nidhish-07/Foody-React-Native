import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const MealsOverviewScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>MealsOverviewScreen</Text>
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
