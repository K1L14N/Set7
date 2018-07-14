import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LeaderboardService } from '../../providers/leaderboard.service';

@Component({
  selector: 'page-board',
  templateUrl: 'board.html',
})
export class BoardPage {

  private _highScore: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private leaderboardService: LeaderboardService) {
  }

  ionViewWillEnter() {
    this.highScore = this.leaderboardService.getHighestScode();
  }

    /**
     * Getter highScore
     * @return {number}
     */
	public get highScore(): number {
		return this._highScore;
	}

    /**
     * Setter highScore
     * @param {number} value
     */
	public set highScore(value: number) {
		this._highScore = value;
	}

}
