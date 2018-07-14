import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MappingService } from '../../providers/mapping.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private _code: number;
  private _card: string;
  private _inputCode: number;
  private _inputCard: string;

  constructor(public navCtrl: NavController, private mappingService: MappingService) {
  }


  cardToCode(card: string): void {
    this.code = this.mappingService.getIndex(card);
  }

  codeToCard(code: number): void {
    this.card = this.mappingService.mapping.get(+code);
  }

    /**
     * Getter code
     * @return {number}
     */
	public get code(): number {
		return this._code;
	}

    /**
     * Getter card
     * @return {string}
     */
	public get card(): string {
		return this._card;
	}

    /**
     * Getter inputCard
     * @return {string}
     */
	public get inputCard(): string {
		return this._inputCard;
	}

    /**
     * Getter inputCode
     * @return {number}
     */
	public get inputCode(): number {
		return this._inputCode;
	}

    /**
     * Setter code
     * @param {number} value
     */
	public set code(value: number) {
		this._code = value;
	}

    /**
     * Setter card
     * @param {string} value
     */
	public set card(value: string) {
		this._card = value;
	}

    /**
     * Setter inputCard
     * @param {string} value
     */
	public set inputCard(value: string) {
		this._inputCard = value;
	}

    /**
     * Setter inputCode
     * @param {number} value
     */
	public set inputCode(value: number) {
		this._inputCode = value;
	}


}
