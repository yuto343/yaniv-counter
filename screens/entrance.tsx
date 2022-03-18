import React from "react";
import { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CSS_COLOR } from "../constants/style";

type Props = unknown;

export const Entrance: FunctionComponent<Props> = () => (
  <View style={styles.container}>
    <Text>Yaniv Counter</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: CSS_COLOR.BG_BEIGE,
  },
});
