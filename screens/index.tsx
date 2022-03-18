import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import { Entrance } from "./entrance";
import { Members } from "./members";

export type StackParamList = {
  // undefinedはparamsがないということ
  entrance: undefined;
  members: undefined;
};

export type Navigation = NativeStackScreenProps<StackParamList>["navigation"];

const Stack = createNativeStackNavigator<StackParamList>();

export const Screens = () => (
  <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='entrance'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen component={Entrance} name='entrance' />
        <Stack.Screen component={Members} name='members' />
      </Stack.Navigator>
    </NavigationContainer>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1, //これがないと表示が消えるので仕方なくここにスタイルを書く
  },
});
