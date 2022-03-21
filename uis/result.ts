import { action, makeObservable, observable } from "mobx"

export class ResultUi {

	roundPoint:number = 0
	constructor(){
		makeObservable<ResultUi>(this,{
			roundPoint:observable,
			updateRoundPoint:action
		})
	}

	updateRoundPoint (point:number):void{
		this.roundPoint = point
	}

	
}