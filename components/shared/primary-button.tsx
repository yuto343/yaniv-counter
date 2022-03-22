import { FunctionComponent } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { CSS_COLOR, CSS_SPACING } from "../../constants/style";
type Props = {
  onPress: () => void;
  disabled?: boolean;
};

export const PrimaryButton: FunctionComponent<Props> = ({
  children,
  onPress,
  disabled,
}) => (
  <TouchableOpacity
    style={disabled ? styles.disabled : styles.button}
    onPress={onPress}
    disabled={disabled}
  >
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
  disabled: {
    backgroundColor: CSS_COLOR.GREY,
    padding: CSS_SPACING.PX_12,
    width: "100%",
    borderRadius: 9999, //完全な角丸
  },
});
