import { FunctionComponent, useContext } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Navigation } from ".";
import { CSS_COLOR, CSS_FONT_SIZE, CSS_SPACING } from "../constants/style";
import { YanivContext } from "../store/yaniv";

type Props = {
  navigation: Navigation;
};
export const MaxScore: FunctionComponent<Props> = ({ navigation }) => {
  const yanivDomain = useContext(YanivContext);
  return (
    <View style={styles.container}>
      {/* タイトル */}
      <Text style={styles.heading}>Maximum Score?</Text>

      <TextInput
        defaultValue={`${yanivDomain.maxScore}`}
        keyboardAppearance='dark'
        style={styles.input}
        onChangeText={(score) => {
          yanivDomain.changeMaxScore(Number(score));
        }}
        textAlign='center'
        keyboardType='number-pad'
        returnKeyType='done'
        multiline={false}
        onSubmitEditing={() =>
          navigation.reset({ index: 0, routes: [{ name: "home" }] })
        }
        autoFocus={true}
        blurOnSubmit={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: CSS_COLOR.BG_BEIGE,
  },
  heading: {
    marginTop: CSS_SPACING.PX_136,
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_24,
  },
  input: {
    marginTop: CSS_SPACING.PX_12,
    width: "80%",
    fontSize: CSS_FONT_SIZE.PX_18,
    backgroundColor: CSS_COLOR.INPUT_BEIGE,
    borderRadius: 5,
    padding: 8,
    fontFamily: "Nunito-Bold",
  },
});
