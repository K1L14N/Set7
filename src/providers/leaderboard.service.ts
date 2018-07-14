import { Injectable } from "@angular/core";

@Injectable()
export class LeaderboardService {
  constructor() {
  }

  public getHighestScode(): number {
    return +localStorage.getItem('highscore');
  }

  public setNewHighscore(score: number): void {
    if (score > this.getHighestScode()) {
      localStorage.setItem('highscore', score.toString());
    }
  }
}
