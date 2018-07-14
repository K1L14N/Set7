import { Injectable } from "@angular/core";
import { MappingService } from './mapping.service';
import * as sha1 from 'js-sha1';

@Injectable()
export class GenerateService {
  constructor(private mappingService: MappingService) {
  }

  public generatePlayground(seed: string): string[] {
    return this.hashCode(seed, []);
  }

  private hashCode(seed: string, answer: string[]): string[] {
    //console.log(sha1(seed));
    let withoutLetters = sha1(seed).replace(/[^1-9 ]/g, '');
    //let removedLetters = sha1(seed).replace(/[1-9 ]/g, '');
    /* console.log(withoutLetters);
    console.log(removedLetters); */
    let tryNb:number = 0;
    while (answer.length < 12) {
      //console.log(answer.length);
      tryNb++;
      if (tryNb > 20) {
        return this.hashCode(seed + seed, answer);
      }
      //console.log(answer)
      let parsedSeed: string[] = withoutLetters.match(/.{1,2}/g);
      for (let two of parsedSeed) {
        /*console.log('two', two);
        console.log('answer', answer);
        console.log('code', this.mappingService.codeToCard(+two)) */
        if (answer.indexOf(this.mappingService.codeToCard(+two)) === -1 && two.length === 2 && answer.length < 12) {
          if (this.mappingService.codeToCard(+two) !== undefined) {
            answer.push(this.mappingService.codeToCard(+two));
          }
        }
      }
      withoutLetters = sha1(withoutLetters + withoutLetters*tryNb).replace(/[^1-9 ]/g, '');
    }
    //console.log('answer', answer);
    return answer;
  }

  /**
   * generate a random integer between min and max
   * @param {Number} min
   * @param {Number} max
   * @return {Number} random generated integer
   */
  private randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private randomCard(): string {
    const answer: string = this.randomInt(0,2).toString() + this.randomInt(0,2).toString() + this.randomInt(0,2).toString() + this.randomInt(0,2).toString();
    return answer;
  }

  public newRandomCards(): string[] {
    let cards: string[] = [];
    while (cards.length < 12) {
      let newOne: string = this.randomCard();
      if (cards.indexOf(newOne) === -1) {
        cards.push(newOne);
      }
    }
    return cards;
  }

  public addRandomCard(cards: string[]): string {
    let newOne: string = this.randomCard();
    while (cards.indexOf(newOne) !== -1) {
      newOne = this.randomCard();
    }
    return newOne;
  }
}
