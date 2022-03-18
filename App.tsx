import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CSS_COLOR } from "./constants/style";
import { Screens } from "./screens";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Screens />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CSS_COLOR.BG_BEIGE,
    alignItems: "center",
    justifyContent: "center",
  },
});
