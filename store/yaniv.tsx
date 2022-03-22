import { createContext } from "react";
import { makeObservable, observable, action, computed } from "mobx";

type member = {
  name: string;
  scores: number[];
  total: number;
};

export class YanivDomain {
  members: member[];
  maxScore: number;
  round: number;

  constructor() {
    this.members = [];
    this.maxScore = 100;
    this.round = 0;

    makeObservable<YanivDomain>(this, {
      members: observable,
      addMember: action,
      maxScore: observable,
      deleteMember: action,
      addRoundScore: action,
      nextMatch: action,
      reset: action,
      totalMember: computed,
      topScore: computed,
    });
  }

  get totalMember() {
    return this.members.length;
  }

  get topScore() {
    let firstPlace: member = this.members[0];

    for (const [index, { total }] of this.members.entries()) {
      if (firstPlace.total < total) continue;
      firstPlace = this.members[index];
    }
    return firstPlace.total;
  }

  totalScore(memberIndex: number) {
    let totalScore = 0;

    for (const score of this.members[memberIndex].scores) {
      totalScore += score;
    }

    return totalScore;
  }

  addMember(name: string): void {
    this.members = [...this.members, { name, scores: [], total: 0 }];
  }

  deleteMember(name: string): void {
    this.members = this.members.filter((member) => member.name !== name);
  }

  changeMaxScore(score: number): void {
    this.maxScore = score;
  }

  incrementRound(): void {
    this.round++;
  }

  addRoundScore(memberIndex: number, score: number): void {
    const targetMember = this.members[memberIndex];
    targetMember.scores.push(score);
    targetMember.total += score;
  }

  nextMemberExist(memberIndex: number): boolean {
    return this.members.length >= memberIndex + 2;
  }

  nextMatch(): void {
    this.members.forEach((_, index) => {
      this.members[index].scores = [];
      this.members[index].total = 0;
    });
    this.round = 0;
  }

  reset(): void {
    this.members = [];
    this.maxScore = 100;
    this.round = 0;
  }
}

export const YanivContext = createContext(new YanivDomain());
