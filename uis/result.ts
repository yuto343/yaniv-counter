import { action, makeObservable, observable } from "mobx"

export class ResultUi {

	roundScore:number = 0
	constructor(){
		makeObservable<ResultUi>(this,{
			roundScore:observable,
			updateRoundScore:action
		})
	}

	updateRoundScore (score:number):void{
		this.roundScore = score
	}

	
}