import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamsList = {
  Overview: { categoryId: string };
  Drawer: undefined;
  MealDetail: undefined;
};

export type RootDrawerParamsList = {
  Favorites: undefined;
  Categories: undefined;
};
