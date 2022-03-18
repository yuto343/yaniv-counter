import { FunctionComponent } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { CSS_COLOR, CSS_SPACING } from "../../constants/style";
type Props = {
  onPress: () => void;
};

export const PrimaryButton: FunctionComponent<Props> = ({
  children,
  onPress,
}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: CSS_COLOR.GREEN,
    padding: CSS_SPACING.PX_12,
    width: "100%",
    borderRadius: 9999, //完全な角丸
  },
});
