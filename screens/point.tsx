import { FunctionComponent, useContext } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Navigation } from ".";
import { CSS_COLOR, CSS_FONT_SIZE, CSS_SPACING } from "../constants/style";
import { MembersContext } from "../store/members";

type Props = {
  navigation: Navigation;
};
export const Point: FunctionComponent<Props> = ({ navigation }) => {
  const membersDomain = useContext(MembersContext);
  return (
    <View style={styles.container}>
      {/* タイトル */}
      <Text style={styles.heading}>Max Point?</Text>

      <TextInput
        defaultValue={`${membersDomain.maxPoint}`}
        keyboardAppearance='dark'
        style={styles.input}
        onChangeText={(text) => {
          membersDomain.changeMaxPoint(Number(text));
        }}
        textAlign='center'
        keyboardType='number-pad'
        returnKeyType='done'
        multiline={false}
        onSubmitEditing={() => navigation.navigate("home")}
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
