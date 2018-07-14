import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GenerateService } from '../../providers/generate.service';
import { CheckService } from '../../providers/check.service';
import { TimerComponent } from '../../components/timer/timer';
import { LeaderboardService } from '../../providers/leaderboard.service';

@Component({
  selector: 'page-playground',
  templateUrl: 'playground.html',
})
export class PlaygroundPage {

  private _countDown: number = 20;
  @ViewChild(TimerComponent) countdownTimer: TimerComponent;
  private _cards: string[] = [];
  private _selected: string[] = [];
  private _seed: string;
  private _numberOfSets: number = 0;
  private _cheated: string[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private generateService: GenerateService,
    private checkService: CheckService,
    private leaderboardService: LeaderboardService) {
  }

  ionViewDidLoad(): void {
    this.initCards();
  }

  public initCardsFromSeed(seed: string): void {
    if (seed) {
      this.selected = [];
      this.cards = this.generateService.generatePlayground(seed);
    }
  }

  public initCards(): void {
    this.cards = this.generateService.newRandomCards();
    while (this.hasNoSet(this.cards)) {
      this.setASet();
    }
    this.checkTimer();
  }


  public checkTimer(): void {
    /* setTimeout(() => {
      alert('Time is off, final score : ' + this.numberOfSets);
      if (localStorage.getItem('highscore') === undefined || this.numberOfSets > +localStorage.getItem('highscore')) {
        this.leaderboardService.setNewHighscore(this.numberOfSets);
      }
    }, 1000*this.countDown); */
    // not working on device
    /* let checker = setInterval(() => {
      if (this.countdownTimer !== undefined && this.countdownTimer.$timer.secondsRemaining <= 0) {
        console.log('kk');
        alert('Time is off, final score : ' + this.numberOfSets);
        this.leaderboardService.setNewHighscore(this.numberOfSets);
        clearInterval(checker);
      }
    }, 1000); */
  }

  public isSelected(card: string): boolean {
    return (this.selected.indexOf(card) !== -1);
  }

  public cheat(card: string): boolean {
    return (this.cheated.indexOf(card) !== -1);
  }

  public onSelect(card: string): void {
    console.log('card selected: ', card);
    //console.log(this.selected);
    //console.log(card);
    this.cheated = [];
    this.handleSelected(card);
    if (this.selected.length === 3) {
      this.checkSet(this.selected);
    }
  }

  public handleSelected(newSelected: string): void {
    if (this.selected.indexOf(newSelected) === -1) {
      if (this.selected.length >= 3) {
        this.selected.shift();
        this.selected.push(newSelected);
      } else {
        this.selected.push(newSelected);
      }
    } else {
      const index = this.selected.indexOf(newSelected);
      this.selected.splice(index, 1);
    }
    //console.log(this.selected);
  }

  public checkSet(set: string[]): void {
    console.log('isASet?', this.checkService.isASet(set));
    if (this.checkService.isASet(set)) {

      this.cards[this.cards.indexOf(set[0]).toString()] = this.generateService.addRandomCard(this.cards);// = this.generateService.addRandomCard(this.cards, this.cards.indexOf(set[0]));
      this.cards[this.cards.indexOf(set[1]).toString()] = this.generateService.addRandomCard(this.cards);
      this.cards[this.cards.indexOf(set[2]).toString()] = this.generateService.addRandomCard(this.cards);
      this.selected = [];
      this.numberOfSets++;
      while (this.hasNoSet(this.cards)) {
        this.setASet();
      }
    }
  }

  public onShowSet(): void {
    this.countdownTimer.$timer.secondsRemaining = this._countDown + 1;
    this.numberOfSets = 0;
    let answer: string[] = this.checkService.findASet(this.cards);
    if (answer.length === 0) {
      //alert('No set found');
      //this.initCards();
      this.setASet();
    } else {
      //console.log(answer);
      this.selected = [];
      this.cheated = answer;
    }
    this.checkTimer();
  }

  public onRestart(): void {
    this.countdownTimer.$timer.secondsRemaining = this._countDown + 1;
    this.numberOfSets = 0;
    this.selected = [];
    this.cheated = [];
    this.initCards();
    this.checkTimer();
  }

  public hasNoSet(cards: string[]): boolean {
    return (this.checkService.findASet(this.cards).length !== 3);
  }

  public setASet(): void {
    let card1 = this.generateService.addRandomCard(this.cards);
    let card2 = this.generateService.addRandomCard(this.cards);
    let card3 = this.generateService.addRandomCard(this.cards);
    this.cards.push(card1, card2, card3);
  }

      /**
     * Getter cards
     * @return {number }
     */
	public get countDown(): number  {
		return this._countDown;
  }

    /**
     * Getter cards
     * @return {string[] }
     */
	public get cards(): string[]  {
		return this._cards;
	}

    /**
     * Getter selected
     * @return {string[] }
     */
	public get selected(): string[]  {
		return this._selected;
	}

    /**
     * Getter seed
     * @return {string}
     */
	public get seed(): string {
		return this._seed;
	}

    /**
     * Getter numberOfSets
     * @return {number }
     */
	public get numberOfSets(): number  {
		return this._numberOfSets;
	}

    /**
     * Getter cheated
     * @return {string[] }
     */
	public get cheated(): string[]  {
		return this._cheated;
	}

    /**
     * Setter cards
     * @param {string[] } value
     */
	public set cards(value: string[] ) {
		this._cards = value;
	}

    /**
     * Setter selected
     * @param {string[] } value
     */
	public set selected(value: string[] ) {
		this._selected = value;
	}

    /**
     * Setter seed
     * @param {string} value
     */
	public set seed(value: string) {
		this._seed = value;
	}

    /**
     * Setter numberOfSets
     * @param {number } value
     */
	public set numberOfSets(value: number ) {
		this._numberOfSets = value;
	}

    /**
     * Setter cheated
     * @param {string[] } value
     */
	public set cheated(value: string[] ) {
		this._cheated = value;
	}

}
