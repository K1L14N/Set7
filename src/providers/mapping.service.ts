import { Injectable } from '@angular/core';

@Injectable()
export class MappingService {

  private _mapping: Map<number, string> = new Map([
    [11, '0000'], [12, '0001'], [13, '0002'], [14, '0010'], [15, '0011'], [16, '0012'], [17, '0020'], [18, '0021'], [19, '0022'],
    [21, '0100'], [22, '0101'], [23, '0102'], [24, '0110'], [25, '0111'], [26, '0112'], [27, '0120'], [28, '0121'], [29, '0122'],
    [31, '0200'], [32, '0201'], [33, '0202'], [34, '0210'], [35, '0211'], [36, '0212'], [37, '0220'], [38, '0221'], [39, '0222'],
    [41, '1000'], [42, '1001'], [43, '1002'], [44, '1010'], [45, '1011'], [46, '1012'], [47, '1020'], [48, '1021'], [49, '1022'],
    [51, '1100'], [52, '1101'], [53, '1102'], [54, '1110'], [55, '1111'], [56, '1112'], [57, '1120'], [58, '1121'], [59, '1122'],
    [61, '1200'], [62, '1201'], [63, '1202'], [64, '1210'], [65, '1211'], [66, '1212'], [67, '1220'], [68, '1221'], [69, '1222'],
    [71, '2000'], [72, '2001'], [73, '2002'], [74, '2010'], [75, '2011'], [76, '2012'], [77, '2020'], [78, '2021'], [79, '2022'],
    [81, '2100'], [82, '2101'], [83, '2102'], [84, '2110'], [85, '2111'], [86, '2112'], [87, '2120'], [88, '2121'], [89, '2122'],
    [91, '2200'], [92, '2201'], [93, '2202'], [94, '2210'], [95, '2211'], [96, '2212'], [97, '2220'], [98, '2221'], [99, '2222'],
  ]);

  private _keys: number[];

  /**
   * [x x x x] => [shape, color, number, fill]
   */
  private _existingCards: string[] = [
    //1st branch (circular shape)
    '0000', '0001', '0002',
    '0010', '0011', '0012',
    '0020', '0021', '0022',
    '0100', '0101', '0102',
    '0120', '0121', '0122',
    '0110', '0111', '0112',
    '0200', '0201', '0202',
    '0210', '0211', '0212',
    '0220', '0221', '0222',
    //2nd branch (rectangular shape)
    '1000', '1001', '1002',
    '1010', '1011', '1012',
    '1020', '1021', '1022',
    '1100', '1101', '1102',
    '1120', '1121', '1122',
    '1110', '1111', '1112',
    '1200', '1201', '1202',
    '1210', '1211', '1212',
    '1220', '1221', '1222',
    //3rd branch (hexagonal shape)
    '2000', '2001', '2002',
    '2010', '2011', '2012',
    '2020', '2021', '2022',
    '2100', '2101', '2102',
    '2120', '2121', '2122',
    '2110', '2111', '2112',
    '2200', '2201', '2202',
    '2210', '2211', '2212',
    '2220', '2221', '2222',
  ]

  /**
   * (for a pair of numbers)
   * 00 -> 1
   * 01 -> 2
   * 02 -> 3
   * 10 -> 4
   * 11 -> 5
   * 12 -> 6
   * 20 -> 7
   * 21 -> 8
   * 22 -> 9
   */
  private _existingCodes: string[] = [
    '11', '12', '13', '14', '15', '16', '17', '18', '19',
    '21', '22', '23', '24', '25', '26', '27', '28', '29',
    '31', '32', '33', '14', '15', '16', '17', '18', '19',
    '41', '42', '43', '44', '45', '46', '47', '48', '49',
    '51', '52', '53', '54', '55', '56', '57', '58', '59',
    '61', '62', '63', '64', '65', '66', '67', '68', '69',
    '71', '72', '73', '74', '75', '76', '77', '78', '79',
    '81', '82', '83', '84', '85', '86', '87', '88', '89',
    '91', '92', '93', '94', '95', '96', '97', '98', '99'
  ]

  constructor() {
    this.initMap();
  }

  public getIndex(card: string) {
    console.log('card ', card);
    let answer: number;
    this.keys.forEach((key) => {
      if (this.mapping.get(key) === card) {
        answer = key;
      }
    })
    return answer;
  }

  public cardToCode(card: string): number {
    if (this.existingCards.indexOf(card) === -1) {
      alert('Carte inconnue');
    } else {
      return this.getIndex(card);
    }
  }

  public codeToCard(code: number): string {
    if (this.existingCodes.indexOf(code.toString()) === -1) {
      //alert('Code inconnu');
    } else {
      const answer = this.mapping.get(+code);
      return answer;
    }
  }

  initMap(): void {
    this.mapping.set(11, '0000');    this.mapping.set(12, '0001');    this.mapping.set(13, '0002');    this.mapping.set(14, '0010');    this.mapping.set(15, '0011');    this.mapping.set(16, '0012');    this.mapping.set(17, '0020');    this.mapping.set(18, '0021');    this.mapping.set(19, '0022');
    this.mapping.set(21, '0100');    this.mapping.set(22, '0101');    this.mapping.set(23, '0102');    this.mapping.set(24, '0110');    this.mapping.set(25, '0111');    this.mapping.set(26, '0112');    this.mapping.set(27, '0120');    this.mapping.set(28, '0121');    this.mapping.set(29, '0122');
    this.mapping.set(31, '0200');    this.mapping.set(32, '0201');    this.mapping.set(33, '0202');    this.mapping.set(34, '0210');    this.mapping.set(35, '0211');    this.mapping.set(36, '0212');    this.mapping.set(37, '0220');    this.mapping.set(38, '0221');    this.mapping.set(39, '0222');
    this.mapping.set(41, '1000');    this.mapping.set(42, '1001');    this.mapping.set(43, '1002');    this.mapping.set(44, '1010');    this.mapping.set(45, '1011');    this.mapping.set(46, '1012');    this.mapping.set(47, '1020');    this.mapping.set(48, '1021');    this.mapping.set(49, '1022');
    this.mapping.set(51, '1100');    this.mapping.set(52, '1101');    this.mapping.set(53, '1102');    this.mapping.set(54, '1110');    this.mapping.set(55, '1111');    this.mapping.set(56, '1112');    this.mapping.set(57, '1120');    this.mapping.set(58, '1121');    this.mapping.set(59, '1122');
    this.mapping.set(61, '1200');    this.mapping.set(62, '1201');    this.mapping.set(63, '1202');    this.mapping.set(64, '1210');    this.mapping.set(65, '1211');    this.mapping.set(66, '1212');    this.mapping.set(67, '1220');    this.mapping.set(68, '1221');    this.mapping.set(69, '1222');
    this.mapping.set(71, '2000');    this.mapping.set(72, '2001');    this.mapping.set(73, '2002');    this.mapping.set(74, '2010');    this.mapping.set(75, '2011');    this.mapping.set(76, '2012');    this.mapping.set(77, '2020');    this.mapping.set(78, '2021');    this.mapping.set(79, '2022');
    this.mapping.set(81, '2100');    this.mapping.set(82, '2101');    this.mapping.set(83, '2102');    this.mapping.set(84, '2110');    this.mapping.set(85, '2111');    this.mapping.set(86, '2112');    this.mapping.set(87, '2120');    this.mapping.set(88, '2121');    this.mapping.set(89, '2122');
    this.mapping.set(91, '2200');    this.mapping.set(92, '2201');    this.mapping.set(93, '2202');    this.mapping.set(94, '2210');    this.mapping.set(95, '2211');    this.mapping.set(96, '2212');    this.mapping.set(97, '2220');    this.mapping.set(98, '2221');    this.mapping.set(99, '2222');

    this._keys = Array.from( this.mapping.keys() );
  }


    /**
     * Getter keys
     * @return {number[]}
     */
	public get keys(): number[] {
		return this._keys;
  }

    /**
     * Getter existingCards
     * @return {string[] }
     */
	public get existingCards(): string[]  {
		return this._existingCards;
	}

    /**
     * Getter existingCodes
     * @return {string[] }
     */
	public get existingCodes(): string[]  {
		return this._existingCodes;
	}

    /**
     * Getter $mapping
     * @return {Map<number, string> }
     */
	public get mapping(): Map<number, string>  {
		return this._mapping;
	}

}
