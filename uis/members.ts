import { action, makeObservable, observable } from "mobx"

export class MembersUi {

	isModalOpen = false
	draftName = ""

	constructor(){
		makeObservable<MembersUi>(this,{
			isModalOpen:observable,
			draftName:observable,
			updateDraftName:action,
			toggleModalOpen:action
		})
	}

	updateDraftName (draftName:string):void{
		this.draftName = draftName
	}

	toggleModalOpen(){
		this.isModalOpen = !this.isModalOpen
	}
}