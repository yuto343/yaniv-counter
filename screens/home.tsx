import React, { useContext } from "react";
import type { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CSS_COLOR, CSS_FONT_SIZE, CSS_SPACING } from "../constants/style";
import { Navigation } from ".";
import { YanivContext } from "../store/yaniv";
import { PrimaryButton } from "../components/shared/primary-button";
import { Observer } from "mobx-react-lite";
import { SecondaryButton } from "../components/shared/secondary-button";
import {
  createFinishAlert,
  createNextMatchAlert,
} from "../components/home/alert";

type Props = { navigation: Navigation };

export const Home: FunctionComponent<Props> = ({ navigation }) => {
  const yanivDomain = useContext(YanivContext);

  return (
    <Observer>
      {() => (
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.round}>Round {yanivDomain.round}</Text>
            <Text style={styles.maxScore}>Max {yanivDomain.maxScore}</Text>
          </View>

          {/* メンバーたち */}
          <View style={styles.memberList}>
            {yanivDomain.members.map((member, memberIndex) => (
              <View key={member.name} style={styles.member}>
                <Text style={styles.name}>
                  {/* 一位なら絵文字 */}
                  {yanivDomain.round !== 0 &&
                    member.total === yanivDomain.topScore &&
                    "🥇"}

                  {/* 100超えたらドクロ */}
                  {member.total >= yanivDomain.maxScore && "💀"}

                  {member.name}
                </Text>

                {/* ポイント表示 */}
                <View style={styles.scores}>
                  {member.scores.map((score, index) => (
                    <Text style={styles.score} key={index}>
                      {score}
                    </Text>
                  ))}
                  <Text style={styles.totalScore}>
                    {yanivDomain.totalScore(memberIndex)}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* ボタンたち */}
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              {/* リザルト追加 */}
              <PrimaryButton
                onPress={() => {
                  yanivDomain.incrementRound();
                  navigation.navigate("result", { memberIndex: 0 });
                }}
              >
                <Text style={styles.label}>Add Result</Text>
              </PrimaryButton>
            </View>

            <View style={styles.secondaryButtonContainer}>
              {/* 次の試合 */}
              <View style={styles.secondaryButton}>
                <SecondaryButton
                  onPress={() =>
                    createNextMatchAlert(
                      () => {
                        // 何もしない
                      },
                      () => {
                        yanivDomain.nextMatch();
                        navigation.reset({
                          index: 0,
                          routes: [{ name: "members" }],
                        });
                      }
                    )
                  }
                >
                  <Text style={styles.secondaryLabel}>Next match</Text>
                </SecondaryButton>
              </View>

              {/* 終わり */}
              <View style={styles.secondaryButton}>
                <SecondaryButton
                  onPress={() =>
                    createFinishAlert(
                      () => {
                        // 何もしない
                      },
                      () => {
                        yanivDomain.reset();
                        navigation.reset({
                          index: 0,
                          routes: [{ name: "entrance" }],
                        });
                      }
                    )
                  }
                >
                  <Text style={styles.secondaryLabel}>Finish</Text>
                </SecondaryButton>
              </View>
            </View>
          </View>
        </View>
      )}
    </Observer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: CSS_SPACING.PX_20,
    backgroundColor: CSS_COLOR.BG_BEIGE,
    paddingTop: CSS_SPACING.PX_52,
  },
  heading: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  round: {
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_24,
  },
  maxScore: {
    fontSize: CSS_FONT_SIZE.PX_18,
    fontFamily: "Nunito-Bold",
  },
  memberList: {
    marginTop: CSS_SPACING.PX_8,
  },
  member: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: CSS_COLOR.WHITE,
    borderRadius: 10,
    padding: CSS_SPACING.PX_8,
    marginTop: CSS_SPACING.PX_12,
  },
  name: {
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_16,
  },
  scores: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  score: {
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_14,
    marginLeft: CSS_SPACING.PX_4,
  },
  totalScore: {
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_20,
    marginLeft: CSS_SPACING.PX_12,
    marginRight: CSS_SPACING.PX_4,
  },
  button: { width: "50%" },
  buttonContainer: {
    width: "100%",
    marginTop: CSS_SPACING.PX_32,
    alignItems: "center",
  },
  label: {
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_18,
    letterSpacing: 1.2,
    textAlign: "center",
    color: CSS_COLOR.WHITE,
  },
  secondaryButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: CSS_SPACING.PX_20,
  },
  secondaryButton: { width: "40%" },
  secondaryLabel: {
    color: CSS_COLOR.BLACK,
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_18,
    textAlign: "center",
  },
});
