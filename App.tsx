import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Screens } from "./screens";

export default function App() {
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
