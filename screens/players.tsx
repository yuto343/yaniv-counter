import { Observer } from "mobx-react-lite";
import { FunctionComponent, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { Navigation } from ".";
import { addPlayer } from "../actions/players";
import { IconClose, IconClose2, IconPlus } from "../components/shared/icon";
import { PrimaryButton } from "../components/shared/primary-button";
import { CSS_COLOR, CSS_FONT_SIZE, CSS_SPACING } from "../constants/style";
import { YanivContext } from "../store/yaniv";
import { PlayersUi } from "../uis/players";

type Props = {
  navigation: Navigation;
};
export const Players: FunctionComponent<Props> = ({ navigation }) => {
  const yanivDomain = useContext(YanivContext);

  const ui = new PlayersUi();
  return (
    <View style={styles.container}>
      {/* タイトル */}
      <Text style={styles.heading}>Enter All Players</Text>

      {/* メンバーたち */}
      <Observer>
        {() => (
          <View>
            {yanivDomain.players.map((player) => (
              <View key={player.name} style={styles.user}>
                <View style={styles.nameWrapper}>
                  <Text style={styles.name}>{player.name}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    yanivDomain.deletePlayer(player.name);
                  }}
                >
                  <View style={styles.deleteButton}>
                    <IconClose size={28} />
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </Observer>

      {/* メンバー追加ボタン */}
      <TouchableOpacity
        style={styles.plusButton}
        onPress={() => ui.toggleModalOpen()}
      >
        <IconPlus size={24} color={CSS_COLOR.BLACK} />
      </TouchableOpacity>

      <Observer>
        {() => (
          <View style={styles.button}>
            <PrimaryButton
              onPress={() => navigation.navigate("maxScore")}
              disabled={yanivDomain.players.length < 2}
            >
              <Text style={styles.label}>Next</Text>
            </PrimaryButton>
          </View>
        )}
      </Observer>

      {/* モーダル */}
      <Observer>
        {() => (
          <View>
            {ui.isModalOpen && (
              <Modal
                visible={ui.isModalOpen}
                animationType='slide'
                presentationStyle='pageSheet'
                style={styles.modal}
              >
                <View style={styles.modal}>
                  <View style={styles.modalHeader}>
                    <View style={styles.modalHeaderLeft}></View>
                    <Text style={styles.modalLabel}>Add Player</Text>
                    <TouchableOpacity
                      onPress={() => ui.toggleModalOpen()}
                      style={styles.modalHeaderRight}
                    >
                      <IconClose2 size={30} />
                    </TouchableOpacity>
                  </View>

                  <TextInput
                    defaultValue={ui.draftName}
                    placeholder=''
                    keyboardAppearance='dark'
                    style={styles.input}
                    onChangeText={(text) => {
                      ui.updateDraftName(text);
                    }}
                    textAlign='center'
                    textContentType='nickname'
                    returnKeyType='done'
                    multiline={false}
                    onSubmitEditing={() =>
                      addPlayer({ name: ui.draftName }, { yanivDomain, ui })
                    }
                    autoFocus={true}
                    blurOnSubmit={false}
                  />
                </View>
              </Modal>
            )}
          </View>
        )}
      </Observer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: CSS_COLOR.BG_BEIGE,
  },
  heading: {
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_24,
  },
  user: {
    marginTop: CSS_SPACING.PX_8,
    flexDirection: "row",
    alignItems: "center",
  },
  deleteButton: {
    marginLeft: CSS_SPACING.PX_8,
  },
  nameWrapper: {
    borderRadius: 9999,
    padding: CSS_SPACING.PX_12,
    backgroundColor: CSS_COLOR.WHITE,
  },
  name: {
    fontFamily: "Nunito-Bold",
    fontWeight: "bold",
  },
  plusButton: {
    marginTop: CSS_SPACING.PX_20,
  },
  modal: {
    flex: 1,
    backgroundColor: CSS_COLOR.BG_BEIGE,
    alignItems: "center",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: CSS_SPACING.PX_20,
    paddingBottom: 0,
  },
  modalLabel: {
    width: "80%",
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_18,
    textAlign: "center",
  },
  modalHeaderLeft: {
    width: "10%",
  },
  modalHeaderRight: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
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
  button: { width: "50%", marginTop: CSS_SPACING.PX_52 },
  label: {
    fontFamily: "Nunito-Bold",
    fontSize: CSS_FONT_SIZE.PX_20,
    letterSpacing: 1.2,
    textAlign: "center",
    color: CSS_COLOR.WHITE,
  },
});
