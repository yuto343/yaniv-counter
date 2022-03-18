import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import { Entrance } from "./entrance";

const Stack = createNativeStackNavigator();

export const Screens = () => (
  <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='entrance'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen component={Entrance} name='entrance' />
      </Stack.Navigator>
    </NavigationContainer>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1, //これがないと表示が消えるので仕方なくここにスタイルを書く
  },
});
