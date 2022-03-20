import type { YanivDomain } from "../store/yaniv"
import type { MembersUi } from "../uis/members"

type AddMember = (
	parmas:{
		name:string
	},
	context:{
		yanivDomain:YanivDomain
		ui:MembersUi
	}
) => void

export const addMember:AddMember = ({name},{yanivDomain,ui}) => {
	// 未入力は許さない
	if(name === "") return  

	// すでに同じ名前の人がいる場合も許さない
	if(yanivDomain.members?.find(member => member.name === name))return

	// そうじゃないならOK
	yanivDomain.addMember(name);
	ui.updateDraftName("")
	ui.toggleModalOpen()

}