import { createContext } from "react";
import { makeObservable, observable, action } from "mobx";

type member = {
  name: string;
  point: number[];
};

export class MembersDomain {
  members: member[];
  maxPoint: number;

  constructor() {
    this.members = [];
    this.maxPoint = 100;

    makeObservable<MembersDomain>(this, {
      members: observable,
      addMember: action,
      maxPoint: observable,
      deleteMember: action,
    });
  }

  addMember(name: string): void {
    this.members = [...this.members, { name, point: [] }];
  }

  deleteMember(name: string): void {
    this.members = this.members.filter((member) => member.name !== name);
  }

  changeMaxPoint(point: number): void {
    this.maxPoint = point;
  }
}

export const MembersContext = createContext(new MembersDomain());
