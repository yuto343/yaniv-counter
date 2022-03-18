import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Screens } from "./screens";
import { useFonts } from "expo-font";

export default function App() {
  // fontの読み込み
  const [fontLoaded] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
  if (!fontLoaded) return null;

  return (
    <View style={styles.container}>
      <Screens />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //これがないと表示が消えるので仕方なく
  },
});
