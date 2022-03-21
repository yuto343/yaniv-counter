import { FunctionComponent } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { CSS_COLOR, CSS_SPACING } from "../../constants/style";
type Props = {
  onPress: () => void;
};

export const SecondaryButton: FunctionComponent<Props> = ({
  children,
  onPress,
}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    {children}
    <View style={styles.border}></View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: CSS_SPACING.PX_12,
    width: "100%",
  },
  border: {
    height: 3,
    backgroundColor: CSS_COLOR.BLACK,
    width: "100%",
    borderRadius: 9999,
  },
});
