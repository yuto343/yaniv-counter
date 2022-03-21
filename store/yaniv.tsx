import { createContext } from "react";
import { makeObservable, observable, action, computed } from "mobx";

type member = {
  name: string;
  points: number[];
  total: number;
};

export class YanivDomain {
  members: member[];
  maxPoint: number;
  round: number;

  constructor() {
    this.members = [];
    this.maxPoint = 100;
    this.round = 0;

    makeObservable<YanivDomain>(this, {
      members: observable,
      addMember: action,
      maxPoint: observable,
      deleteMember: action,
      addRoundPoint: action,
      totalMember: computed,
    });
  }

  get totalMember() {
    return this.members.length;
  }

  totalPoint(memberIndex: number) {
    let totalPoint = 0;

    for (const point of this.members[memberIndex].points) {
      totalPoint += point;
    }

    return totalPoint;
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

  addRoundPoint(memberIndex: number, point: number): void {
    this.members[memberIndex].points.push(point);
  }

  nextMemberExist(memberIndex: number): boolean {
    return this.members.length >= memberIndex + 2;
  }

  reset(): void {
    this.members = [];
    this.maxPoint = 100;
    this.round = 0;

    console.log(this.members);
  }
}

export const YanivContext = createContext(new YanivDomain());
