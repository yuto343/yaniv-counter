import { createContext } from "react";
import { makeObservable, observable, action, computed } from "mobx";

type Player = {
  name: string;
  scores: number[];
  total: number;
};

export class YanivDomain {
  players: Player[];
  maxScore: number;
  round: number;

  constructor() {
    this.players = [];
    this.maxScore = 100;
    this.round = 0;

    makeObservable<YanivDomain>(this, {
      players: observable,
      addPlayer: action,
      maxScore: observable,
      deletePlayer: action,
      addRoundScore: action,
      updateRoundScore: action,
      nextMatch: action,
      reset: action,
      totalPlayer: computed,
      topScore: computed,
    });
  }

  get totalPlayer() {
    return this.players.length;
  }

  get topScore() {
    let firstPlace: Player = this.players[0];

    for (const [index, { total }] of this.players.entries()) {
      if (firstPlace.total < total) continue;
      firstPlace = this.players[index];
    }
    return firstPlace.total;
  }

  totalScore(playerIndex: number) {
    let totalScore = 0;

    for (const score of this.players[playerIndex].scores) {
      totalScore += score;
    }

    return totalScore;
  }

  addPlayer(name: string): void {
    this.players = [...this.players, { name, scores: [], total: 0 }];
  }

  deletePlayer(name: string): void {
    this.players = this.players.filter((player) => player.name !== name);
  }

  changeMaxScore(score: number): void {
    this.maxScore = score;
  }

  incrementRound(): void {
    this.round++;
  }

  addRoundScore(playerIndex: number, score: number): void {
    const targetPlayer = this.players[playerIndex];
    targetPlayer.scores[this.round - 1] = score;
    targetPlayer.total += score;
  }

  nextPlayerExist(playerIndex: number): boolean {
    return this.players.length >= playerIndex + 2;
  }

  updateRoundScore(
    playerIndex: number,
    scoreIndex: number,
    score: number
  ): void {
    this.players[playerIndex].scores[scoreIndex] = score;
    let total = 0;
    for (const score of this.players[playerIndex].scores) {
      total += score;
    }
    this.players[playerIndex].total = total;
  }

  nextMatch(): void {
    this.players.forEach((_, index) => {
      this.players[index].scores = [];
      this.players[index].total = 0;
    });
    this.round = 0;
  }

  reset(): void {
    this.players = [];
    this.maxScore = 100;
    this.round = 0;
  }
}

export const YanivContext = createContext(new YanivDomain());
