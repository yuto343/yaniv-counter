import { Navigation } from "../screens"
import { YanivDomain } from "../store/yaniv"

type SubmitScore = (
	params:{
		score:number
		memberIndex:number
	},
	context:{
		yanivDomain:YanivDomain
		navigation:Navigation
	}
) => void
export const submitScore:SubmitScore = ({score,memberIndex},{yanivDomain,navigation}) => {
	yanivDomain.addRoundScore(memberIndex,score)


	yanivDomain.nextMemberExist(memberIndex) ?
	 navigation.push("result",{memberIndex:memberIndex + 1}) : navigation.navigate("home")
}