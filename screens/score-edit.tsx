import { RouteProp } from "@react-navigation/native";
import { FunctionComponent, useContext } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Navigation, StackParamList } from ".";
import { PrimaryButton } from "../components/shared/primary-button";
import { CSS_COLOR, CSS_FONT_SIZE, CSS_SPACING } from "../constants/style";
import { YanivContext } from "../store/yaniv";

type Route = RouteProp<StackParamList, "scoreEdit">;
type Props = {
  navigation: Navigation;
  route: Route;
};

export const ScoreEdit: FunctionComponent<Props> = ({ navigation, route }) => {
  const yanivDomain = useContext(YanivContext);
  const { playerIndex } = route.params;
  const player = yanivDomain.players[playerIndex];
  return (
    <View style={styles.container}>
      {/* タイトル */}
      <Text style={styles.heading}>{player.name}</Text>
      <View style={styles.scoreContainer}>
        {player.scores.map((score, index) => (
          <View style={styles.score} key={index}>
            <Text style={styles.round}>Round {index + 1}</Text>
            <TextInput
              defaultValue={score.toString()}
              keyboardAppearance='dark'
              style={styles.input}
              onChangeText={(score) => {
                yanivDomain.updateRoundScore(playerIndex, index, Number(score));
              }}
              textAlign='center'
              keyboardType='number-pad'
              returnKeyType='done'
              multiline={false}
              blurOnSubmit={true}
            />
          </View>
        ))}
      </View>

      <View style={styles.button}>
        <PrimaryButton
          onPress={() => {
            navigation.reset({ index: 0, routes: [{ name: "home" }] });
          }}
        >
          <Text style={styles.label}>Done</Text>
        </PrimaryButton>
      </View>
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
    marginTop: CSS_SPACING.PX_52,
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_20,
  },
  scoreContainer: {
    marginTop: CSS_SPACING.PX_12,
    justifyContent: "center",
    alignItems: "center",
  },
  score: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: CSS_SPACING.PX_20,
  },
  round: {
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_20,
    marginRight: CSS_SPACING.PX_20,
  },
  input: {
    width: "15%",
    fontSize: CSS_FONT_SIZE.PX_16,
    backgroundColor: CSS_COLOR.INPUT_BEIGE,
    borderRadius: 5,
    padding: 8,
    fontFamily: "Nunito-Bold",
  },
  button: {
    width: "40%",
    marginTop: CSS_SPACING.PX_32,
  },
  label: {
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_18,
    letterSpacing: 1.2,
    textAlign: "center",
    color: CSS_COLOR.WHITE,
  },
});
