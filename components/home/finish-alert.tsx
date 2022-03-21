import { Alert } from "react-native";

type CreateFinishAlert = (
  onPressCancel: () => void,
  onPerssOk: () => void
) => void;

export const createFinishAlert: CreateFinishAlert = (
  onPressCancel,
  onPressOk
) =>
  Alert.alert("Finish?", "all point data will be deleted.", [
    {
      text: "Cancel",
      onPress: () => onPressCancel(),
      style: "cancel",
    },
    { text: "OK", onPress: () => onPressOk() },
  ]);
