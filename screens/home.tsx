import React, { useContext } from "react";
import type { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CSS_COLOR, CSS_FONT_SIZE, CSS_SPACING } from "../constants/style";
import { Navigation } from ".";
import { YanivContext } from "../store/yaniv";
import { PrimaryButton } from "../components/shared/primary-button";

type Props = { navigation: Navigation };

export const Home: FunctionComponent<Props> = ({ navigation }) => {
  const yanivDomain = useContext(YanivContext);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.round}>Round 1</Text>
        <Text style={styles.maxPoint}>MAX {yanivDomain.maxPoint}</Text>
      </View>
      <View style={styles.memberList}>
        {yanivDomain.members.map((member) => (
          <View key={member.name} style={styles.member}>
            <Text style={styles.name}>{member.name}</Text>
            <View style={styles.pointList}>
              {member.points.map((point) => (
                <Text style={styles.point}>{point}</Text>
              ))}
              <Text style={styles.allPoint}>{member.total}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={() => navigation.navigate("members")}>
            <Text style={styles.label}>Add Result</Text>
          </PrimaryButton>
        </View>
      </View>
    </View>
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
});
