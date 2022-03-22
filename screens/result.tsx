import { RouteProp } from "@react-navigation/native";
import { FunctionComponent, useContext } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Navigation, StackParamList } from ".";
import { submitScore } from "../actions/result";
import { CSS_COLOR, CSS_FONT_SIZE, CSS_SPACING } from "../constants/style";
import { YanivContext } from "../store/yaniv";
import { ResultUi } from "../uis/result";

type Route = RouteProp<StackParamList, "result">;
type Props = {
  navigation: Navigation;
  route: Route;
};

export const Result: FunctionComponent<Props> = ({ navigation, route }) => {
  const yanivDomain = useContext(YanivContext);
  const ui = new ResultUi();
  const { memberIndex } = route.params;
  const member = yanivDomain.members[memberIndex];
  return (
    <View style={styles.container}>
      {/* タイトル */}
      <Text style={styles.heading}>Round{yanivDomain.round}</Text>
      <Text style={styles.lead}>{member.name}`s Score?</Text>
      <TextInput
        keyboardAppearance='dark'
        style={styles.input}
        onChangeText={(score) => {
          ui.updateRoundScore(Number(score));
        }}
        textAlign='center'
        keyboardType='number-pad'
        returnKeyType='done'
        multiline={false}
        onSubmitEditing={() =>
          submitScore(
            { score: ui.roundScore, memberIndex },
            { yanivDomain, navigation }
          )
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
  lead: {
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_24,
    marginTop: CSS_SPACING.PX_12,
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
