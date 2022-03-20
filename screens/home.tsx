import React from "react";
import type { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  CSS_COLOR,
  CSS_EMOJI_SIZE,
  CSS_FONT_SIZE,
  CSS_DROP_SHADOW,
  CSS_SPACING,
} from "../constants/style";
import { Navigation } from ".";

type Props = { navigation: Navigation };

export const Home: FunctionComponent<Props> = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.icon}>🃏</Text>
    <Text style={styles.text}>Yaniv Counter</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: CSS_COLOR.BG_BEIGE,
  },
  icon: {
    fontSize: CSS_EMOJI_SIZE.M,
    ...CSS_DROP_SHADOW,
  },
  text: {
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_24,
  },
  button: { width: "50%", marginTop: CSS_SPACING.PX_12 },
  label: {
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_20,
    letterSpacing: 1.2,
    textAlign: "center",
    color: CSS_COLOR.WHITE,
  },
});
