import React, { useContext } from "react";
import type { FunctionComponent } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { CSS_COLOR, CSS_FONT_SIZE, CSS_SPACING } from "../constants/style";
import { Navigation } from ".";
import { YanivContext } from "../store/yaniv";
import { PrimaryButton } from "../components/shared/primary-button";
import { Observer } from "mobx-react-lite";
import { SecondaryButton } from "../components/shared/secondary-button";
import { createFinishAlert } from "../components/home/finish-alert";

type Props = { navigation: Navigation };

export const Home: FunctionComponent<Props> = ({ navigation }) => {
  const yanivDomain = useContext(YanivContext);

  return (
    <Observer>
      {() => (
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.round}>Round {yanivDomain.round}</Text>
            <Text style={styles.maxPoint}>MAX {yanivDomain.maxPoint}</Text>
          </View>
          <View style={styles.memberList}>
            {yanivDomain.members.map((member, memberIndex) => (
              <View key={member.name} style={styles.member}>
                <Text style={styles.name}>{member.name}</Text>
                <View style={styles.pointList}>
                  {member.points.map((point, index) => (
                    <Text style={styles.point} key={index}>
                      {point}
                    </Text>
                  ))}
                  <Text style={styles.allPoint}>
                    {yanivDomain.totalPoint(memberIndex)}
                  </Text>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <PrimaryButton
                onPress={() =>
                  navigation.navigate("result", { memberIndex: 0 })
                }
              >
                <Text style={styles.label}>Add Result</Text>
              </PrimaryButton>
            </View>

            <View style={styles.secondaryButton}>
              <SecondaryButton
                onPress={() =>
                  createFinishAlert(
                    () => {
                      // 何もしない
                    },
                    () => navigation.popToTop()
                  )
                }
              >
                <Text style={styles.secondaryLabel}>Finish</Text>
              </SecondaryButton>
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
  maxPoint: {
    fontSize: CSS_FONT_SIZE.PX_18,
    fontFamily: "Nunito-Bold",
  },
  memberList: {
    marginTop: CSS_SPACING.PX_8,
  },
  member: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: CSS_COLOR.WHITE,
    borderRadius: 10,
    padding: CSS_SPACING.PX_20,
    marginTop: CSS_SPACING.PX_12,
  },
  name: {
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_16,
  },
  pointList: {
    flexDirection: "row",
    alignItems: "center",
  },
  point: {
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_14,
    marginLeft: CSS_SPACING.PX_4,
  },
  allPoint: {
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_20,
    marginLeft: CSS_SPACING.PX_20,
  },
  button: { width: "50%", marginTop: CSS_SPACING.PX_12 },
  buttonContainer: {
    width: "100%",
    marginTop: CSS_SPACING.PX_32,
    alignItems: "center",
  },
  label: {
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_20,
    letterSpacing: 1.2,
    textAlign: "center",
    color: CSS_COLOR.WHITE,
  },
  secondaryButton: { width: "25%", marginTop: CSS_SPACING.PX_20 },
  secondaryLabel: {
    color: CSS_COLOR.BLACK,
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_18,
    textAlign: "center",
  },
});
