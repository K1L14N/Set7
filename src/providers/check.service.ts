import { Injectable } from "@angular/core";

@Injectable()
export class CheckService {
  constructor() {}

  public isASet(set: string[]): boolean {
    /* if (set.length === 3) {
      for (let i = 0; i < set[0].length; i++) {
        const allDifferents: boolean = (set[0].substring(i, i+1) !== set[0].substring(i, i+1) && set[0].substring(i, i+1) !== set[2].substring(i, i+1) && set[1].substring(i, i+1) !== set[2].substring(i, i+1));
        const allTheSame: boolean = (set[0].substring(i, i+1) === set[0].substring(i, i+1) && set[0].substring(i, i+1) === set[2].substring(i, i+1) && set[1].substring(i, i+1) === set[2].substring(i, i+1));
        if (!(allDifferents || allTheSame)) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    } */
    return this.compare(set[0], set[1], set[2]);
  }

  private compare(a: string, b: string, c: string): boolean {
    let sameShape: boolean = (a.substring(0,1) === b.substring(0,1) && a.substring(0,1) === c.substring(0,1) && b.substring(0,1) === c.substring(0,1));
    let sameColor: boolean = (a.substring(1,2) === b.substring(1,2) && a.substring(1,2) === c.substring(1,2) && b.substring(1,2) === c.substring(1,2));
    let sameNumber: boolean = (a.substring(2,3) === b.substring(2,3) && a.substring(2,3) === c.substring(2,3) && b.substring(2,3) === c.substring(2,3));
    let sameFill: boolean = (a.substring(3,4) === b.substring(3,4) && a.substring(3,4) === c.substring(3,4) && b.substring(3,4) === c.substring(3,4));
    let differentShape: boolean = (a.substring(0,1) !== b.substring(0,1) && a.substring(0,1) !== c.substring(0,1) && b.substring(0,1) !== c.substring(0,1));
    let differentColor: boolean = (a.substring(1,2) !== b.substring(1,2) && a.substring(1,2) !== c.substring(1,2) && b.substring(1,2) !== c.substring(1,2));
    let differentNumber: boolean = (a.substring(2,3) !== b.substring(2,3) && a.substring(2,3) !== c.substring(2,3) && b.substring(2,3) !== c.substring(2,3));
    let differentFill: boolean = (a.substring(3,4) !== b.substring(3,4) && a.substring(3,4) !== c.substring(3,4) && b.substring(3,4) !== c.substring(3,4));

    if ((sameShape && sameColor && sameNumber && sameFill) ||
      (sameShape && sameColor && sameNumber && differentFill) ||
      (sameShape && sameColor && differentNumber && sameFill) ||
      (sameShape && sameColor && differentNumber && differentFill) ||
      (sameShape && differentColor && sameNumber && sameFill) ||
      (sameShape && differentColor && sameNumber && differentFill) ||
      (sameShape && differentColor && differentNumber && sameFill) ||
      (sameShape && differentColor && differentNumber && differentFill) ||
      (differentShape && sameColor && sameNumber && sameFill) ||
      (differentShape && sameColor && sameNumber && differentFill) ||
      (differentShape && sameColor && differentNumber && sameFill) ||
      (differentShape && sameColor && differentNumber && differentFill) ||
      (differentShape && differentColor && sameNumber && sameFill) ||
      (differentShape && differentColor && sameNumber && differentFill) ||
      (differentShape && differentColor && differentNumber && sameFill) ||
      (differentShape && differentColor && differentNumber && differentFill)
    ) {
      return true;
    } else {
      return false;
    }
  }

  public findASet(cards: string[]): string[] {
    for (let first of cards) {
      //console.log('1st', cards);
      for (let second of cards) {
        //console.log('2nd', cards);
        for (let third of cards) {
          //console.log('3rd', cards);
          if ((first !== second && first !== third && second !== third) && this.compare(first, second, third)) {
            console.log('answer', [first, second, third]);
            return [first, second, third];
          }
        }
      }
    }
    return [];
  }
}
