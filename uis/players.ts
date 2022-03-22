import { action, makeObservable, observable } from "mobx";

export class PlayersUi {
  isModalOpen = false;
  draftName = "";

  constructor() {
    makeObservable<PlayersUi>(this, {
      isModalOpen: observable,
      draftName: observable,
      updateDraftName: action,
      toggleModalOpen: action,
    });
  }

  updateDraftName(draftName: string): void {
    this.draftName = draftName;
  }

  toggleModalOpen() {
    this.isModalOpen = !this.isModalOpen;
  }
}
