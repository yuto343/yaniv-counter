import { Navigation } from "../screens";
import { YanivDomain } from "../store/yaniv";

type SubmitScore = (
  params: {
    score: number;
    playerIndex: number;
  },
  context: {
    yanivDomain: YanivDomain;
    navigation: Navigation;
  }
) => void;
export const submitScore: SubmitScore = (
  { score, playerIndex },
  { yanivDomain, navigation }
) => {
  yanivDomain.addRoundScore(playerIndex, score);

  yanivDomain.nextPlayerExist(playerIndex)
    ? navigation.push("result", { playerIndex: playerIndex + 1 })
    : navigation.navigate("home");
};
