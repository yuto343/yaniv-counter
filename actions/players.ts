import type { YanivDomain } from "../store/yaniv";
import type { PlayersUi } from "../uis/players";

type AddPlayer = (
  parmas: {
    name: string;
  },
  context: {
    yanivDomain: YanivDomain;
    ui: PlayersUi;
  }
) => void;

export const addPlayer: AddPlayer = ({ name }, { yanivDomain, ui }) => {
  // 未入力は許さない
  if (name === "") return;

  // すでに同じ名前の人がいる場合も許さない
  if (yanivDomain.players?.find((player) => player.name === name)) return;

  // そうじゃないならOK
  yanivDomain.addPlayer(name);
  ui.updateDraftName("");
  ui.toggleModalOpen();
};
