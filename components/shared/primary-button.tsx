import { FunctionComponent } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { CSS_COLOR, CSS_SPACING } from "../../constants/style";
type Props = unknown;

export const PrimaryButton: FunctionComponent<Props> = ({ children }) => (
  <TouchableOpacity style={styles.button}>{children}</TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: CSS_COLOR.GREEN,
    padding: CSS_SPACING.PX_12,
    width: "100%",
    borderRadius: 9999, //完全な角丸
  },
});
