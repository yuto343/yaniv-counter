import { Alert } from "react-native";

type CreateFinishAlert = (
  onPressCancel: () => void,
  onPerssOk: () => void
) => void;

export const createFinishAlert: CreateFinishAlert = (
  onPressCancel,
  onPressOk
) =>
  Alert.alert("Finish?", "All data will be deleted.", [
    {
      text: "Cancel",
      onPress: () => onPressCancel(),
      style: "cancel",
    },
    { text: "OK", onPress: () => onPressOk() },
  ]);

export const createNextMatchAlert: CreateFinishAlert = (
  onPressCancel,
  onPressOk
) =>
  Alert.alert("Proceed to next match", "Match score data will be deleted.", [
    {
      text: "Cancel",
      onPress: () => onPressCancel(),
      style: "cancel",
    },
    { text: "OK", onPress: () => onPressOk() },
  ]);
