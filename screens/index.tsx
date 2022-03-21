import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import { Entrance } from "./entrance";
import { Members } from "./members";
import { YanivContext, YanivDomain } from "../store/yaniv";
import { Point } from "./point";
import { Home } from "./home";
import { Result } from "./result";

export type StackParamList = {
  // undefinedはparamsがないということ
  entrance: undefined;
  members: undefined;
  point: undefined;
  home: undefined;
  result: { memberIndex: number };
};

export type Navigation = NativeStackScreenProps<StackParamList>["navigation"];

const Stack = createNativeStackNavigator<StackParamList>();

export const Screens = () => (
  <View style={styles.container}>
    <YanivContext.Provider value={new YanivDomain()}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='entrance'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen component={Entrance} name='entrance' />
          <Stack.Screen component={Members} name='members' />
          <Stack.Screen component={Point} name='point' />
          <Stack.Screen component={Home} name='home' />
          <Stack.Screen component={Result} name='result' />
        </Stack.Navigator>
      </NavigationContainer>
    </YanivContext.Provider>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1, //これがないと表示が消えるので仕方なくここにスタイルを書く
  },
});
