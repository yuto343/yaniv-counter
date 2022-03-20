import type { MembersDomain } from "../store/members"
import type { MembersUi } from "../uis/members"

type AddMember = (
	parmas:{
		name:string
	},
	context:{
		membersDomain:MembersDomain
		ui:MembersUi
	}
) => void

export const addMember:AddMember = ({name},{membersDomain,ui}) => {
	// 未入力は許さない
	if(name === "") return  

	// すでに同じ名前の人がいる場合も許さない
	if(membersDomain.members?.find(member => member.name === name))return

	// そうじゃないならOK
	membersDomain.addMember(name);
	ui.updateDraftName("")
	ui.toggleModalOpen()

}