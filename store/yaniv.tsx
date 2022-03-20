import { createContext } from "react";
import { makeObservable, observable, action } from "mobx";

type member = {
  name: string;
  points: number[];
  total: number;
};

export class YanivDomain {
  members: member[];
  maxPoint: number;

  constructor() {
    this.members = [];
    this.maxPoint = 100;

    makeObservable<YanivDomain>(this, {
      members: observable,
      addMember: action,
      maxPoint: observable,
      deleteMember: action,
    });
  }

  addMember(name: string): void {
    this.members = [...this.members, { name, points: [], total: 0 }];
  }

  deleteMember(name: string): void {
    this.members = this.members.filter((member) => member.name !== name);
  }

  changeMaxPoint(point: number): void {
    this.maxPoint = point;
  }
}

export const YanivContext = createContext(new YanivDomain());
