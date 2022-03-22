import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import { Entrance } from "./entrance";
import { Players } from "./players";
import { YanivContext, YanivDomain } from "../store/yaniv";
import { Home } from "./home";
import { Result } from "./result";
import { MaxScore } from "./max-score";
import { ScoreEdit } from "./score-edit";

export type StackParamList = {
  // undefinedはparamsがないということ
  entrance: undefined;
  players: undefined;
  maxScore: undefined;
  home: undefined;
  result: { playerIndex: number };
  scoreEdit: { playerIndex: number };
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
          <Stack.Screen component={Players} name='players' />
          <Stack.Screen component={MaxScore} name='maxScore' />
          <Stack.Screen component={Home} name='home' />
          <Stack.Screen component={Result} name='result' />
          <Stack.Screen component={ScoreEdit} name='scoreEdit' />
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
