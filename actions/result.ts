import { Navigation } from "../screens"
import { YanivDomain } from "../store/yaniv"

type SubmitPoint = (
	params:{
		point:number
		memberIndex:number
	},
	context:{
		yanivDomain:YanivDomain
		navigation:Navigation
	}
) => void
export const submitPoint:SubmitPoint = ({point,memberIndex},{yanivDomain,navigation}) => {
	yanivDomain.addRoundPoint(memberIndex,point)


	yanivDomain.nextMemberExist(memberIndex) ?
	 navigation.push("result",{memberIndex:memberIndex + 1}) : navigation.navigate("home")
}