webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MappingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MappingService = /** @class */ (function () {
    function MappingService() {
        this._mapping = new Map([
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
        /**
         * [x x x x] => [shape, color, number, fill]
         */
        this._existingCards = [
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
        ];
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
        this._existingCodes = [
            '11', '12', '13', '14', '15', '16', '17', '18', '19',
            '21', '22', '23', '24', '25', '26', '27', '28', '29',
            '31', '32', '33', '14', '15', '16', '17', '18', '19',
            '41', '42', '43', '44', '45', '46', '47', '48', '49',
            '51', '52', '53', '54', '55', '56', '57', '58', '59',
            '61', '62', '63', '64', '65', '66', '67', '68', '69',
            '71', '72', '73', '74', '75', '76', '77', '78', '79',
            '81', '82', '83', '84', '85', '86', '87', '88', '89',
            '91', '92', '93', '94', '95', '96', '97', '98', '99'
        ];
        this.initMap();
    }
    MappingService.prototype.getIndex = function (card) {
        var _this = this;
        console.log('card ', card);
        var answer;
        this.keys.forEach(function (key) {
            if (_this.mapping.get(key) === card) {
                answer = key;
            }
        });
        return answer;
    };
    MappingService.prototype.cardToCode = function (card) {
        if (this.existingCards.indexOf(card) === -1) {
            alert('Carte inconnue');
        }
        else {
            return this.getIndex(card);
        }
    };
    MappingService.prototype.codeToCard = function (code) {
        if (this.existingCodes.indexOf(code.toString()) === -1) {
            //alert('Code inconnu');
        }
        else {
            var answer = this.mapping.get(+code);
            return answer;
        }
    };
    MappingService.prototype.initMap = function () {
        this.mapping.set(11, '0000');
        this.mapping.set(12, '0001');
        this.mapping.set(13, '0002');
        this.mapping.set(14, '0010');
        this.mapping.set(15, '0011');
        this.mapping.set(16, '0012');
        this.mapping.set(17, '0020');
        this.mapping.set(18, '0021');
        this.mapping.set(19, '0022');
        this.mapping.set(21, '0100');
        this.mapping.set(22, '0101');
        this.mapping.set(23, '0102');
        this.mapping.set(24, '0110');
        this.mapping.set(25, '0111');
        this.mapping.set(26, '0112');
        this.mapping.set(27, '0120');
        this.mapping.set(28, '0121');
        this.mapping.set(29, '0122');
        this.mapping.set(31, '0200');
        this.mapping.set(32, '0201');
        this.mapping.set(33, '0202');
        this.mapping.set(34, '0210');
        this.mapping.set(35, '0211');
        this.mapping.set(36, '0212');
        this.mapping.set(37, '0220');
        this.mapping.set(38, '0221');
        this.mapping.set(39, '0222');
        this.mapping.set(41, '1000');
        this.mapping.set(42, '1001');
        this.mapping.set(43, '1002');
        this.mapping.set(44, '1010');
        this.mapping.set(45, '1011');
        this.mapping.set(46, '1012');
        this.mapping.set(47, '1020');
        this.mapping.set(48, '1021');
        this.mapping.set(49, '1022');
        this.mapping.set(51, '1100');
        this.mapping.set(52, '1101');
        this.mapping.set(53, '1102');
        this.mapping.set(54, '1110');
        this.mapping.set(55, '1111');
        this.mapping.set(56, '1112');
        this.mapping.set(57, '1120');
        this.mapping.set(58, '1121');
        this.mapping.set(59, '1122');
        this.mapping.set(61, '1200');
        this.mapping.set(62, '1201');
        this.mapping.set(63, '1202');
        this.mapping.set(64, '1210');
        this.mapping.set(65, '1211');
        this.mapping.set(66, '1212');
        this.mapping.set(67, '1220');
        this.mapping.set(68, '1221');
        this.mapping.set(69, '1222');
        this.mapping.set(71, '2000');
        this.mapping.set(72, '2001');
        this.mapping.set(73, '2002');
        this.mapping.set(74, '2010');
        this.mapping.set(75, '2011');
        this.mapping.set(76, '2012');
        this.mapping.set(77, '2020');
        this.mapping.set(78, '2021');
        this.mapping.set(79, '2022');
        this.mapping.set(81, '2100');
        this.mapping.set(82, '2101');
        this.mapping.set(83, '2102');
        this.mapping.set(84, '2110');
        this.mapping.set(85, '2111');
        this.mapping.set(86, '2112');
        this.mapping.set(87, '2120');
        this.mapping.set(88, '2121');
        this.mapping.set(89, '2122');
        this.mapping.set(91, '2200');
        this.mapping.set(92, '2201');
        this.mapping.set(93, '2202');
        this.mapping.set(94, '2210');
        this.mapping.set(95, '2211');
        this.mapping.set(96, '2212');
        this.mapping.set(97, '2220');
        this.mapping.set(98, '2221');
        this.mapping.set(99, '2222');
        this._keys = Array.from(this.mapping.keys());
    };
    Object.defineProperty(MappingService.prototype, "keys", {
        /**
         * Getter keys
         * @return {number[]}
         */
        get: function () {
            return this._keys;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MappingService.prototype, "existingCards", {
        /**
         * Getter existingCards
         * @return {string[] }
         */
        get: function () {
            return this._existingCards;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MappingService.prototype, "existingCodes", {
        /**
         * Getter existingCodes
         * @return {string[] }
         */
        get: function () {
            return this._existingCodes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MappingService.prototype, "mapping", {
        /**
         * Getter $mapping
         * @return {Map<number, string> }
         */
        get: function () {
            return this._mapping;
        },
        enumerable: true,
        configurable: true
    });
    MappingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MappingService);
    return MappingService;
}());

//# sourceMappingURL=mapping.service.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeaderboardService = /** @class */ (function () {
    function LeaderboardService() {
    }
    LeaderboardService.prototype.getHighestScode = function () {
        return +localStorage.getItem('highscore');
    };
    LeaderboardService.prototype.setNewHighscore = function (score) {
        if (score > this.getHighestScode()) {
            localStorage.setItem('highscore', score.toString());
        }
    };
    LeaderboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LeaderboardService);
    return LeaderboardService;
}());

//# sourceMappingURL=leaderboard.service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__playground_playground__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__board_board__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__playground_playground__["a" /* PlaygroundPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__board_board__["a" /* BoardPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/k1l14n/Set7/Set7/src/pages/tabs/tabs.html"*/'<ion-tabs tabs-only selectedIndex="1" color="danger">\n  <ion-tab [root]="tab1Root" tabTitle="Calcul" tabIcon="calculator"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Playground" tabIcon="ios-game-controller-b"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Board" tabIcon="trophy"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/k1l14n/Set7/Set7/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaygroundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_generate_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_check_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_timer_timer__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_leaderboard_service__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlaygroundPage = /** @class */ (function () {
    function PlaygroundPage(navCtrl, navParams, generateService, checkService, leaderboardService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.generateService = generateService;
        this.checkService = checkService;
        this.leaderboardService = leaderboardService;
        this._countDown = 20;
        this._cards = [];
        this._selected = [];
        this._numberOfSets = 0;
        this._cheated = [];
    }
    PlaygroundPage.prototype.ionViewDidLoad = function () {
        this.initCards();
    };
    PlaygroundPage.prototype.initCardsFromSeed = function (seed) {
        if (seed) {
            this.selected = [];
            this.cards = this.generateService.generatePlayground(seed);
        }
    };
    PlaygroundPage.prototype.initCards = function () {
        this.cards = this.generateService.newRandomCards();
        while (this.hasNoSet(this.cards)) {
            this.setASet();
        }
        this.checkTimer();
    };
    PlaygroundPage.prototype.checkTimer = function () {
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
    };
    PlaygroundPage.prototype.isSelected = function (card) {
        return (this.selected.indexOf(card) !== -1);
    };
    PlaygroundPage.prototype.cheat = function (card) {
        return (this.cheated.indexOf(card) !== -1);
    };
    PlaygroundPage.prototype.onSelect = function (card) {
        console.log('card selected: ', card);
        //console.log(this.selected);
        //console.log(card);
        this.cheated = [];
        this.handleSelected(card);
        if (this.selected.length === 3) {
            this.checkSet(this.selected);
        }
    };
    PlaygroundPage.prototype.handleSelected = function (newSelected) {
        if (this.selected.indexOf(newSelected) === -1) {
            if (this.selected.length >= 3) {
                this.selected.shift();
                this.selected.push(newSelected);
            }
            else {
                this.selected.push(newSelected);
            }
        }
        else {
            var index = this.selected.indexOf(newSelected);
            this.selected.splice(index, 1);
        }
        //console.log(this.selected);
    };
    PlaygroundPage.prototype.checkSet = function (set) {
        console.log('isASet?', this.checkService.isASet(set));
        if (this.checkService.isASet(set)) {
            this.cards[this.cards.indexOf(set[0]).toString()] = this.generateService.addRandomCard(this.cards); // = this.generateService.addRandomCard(this.cards, this.cards.indexOf(set[0]));
            this.cards[this.cards.indexOf(set[1]).toString()] = this.generateService.addRandomCard(this.cards);
            this.cards[this.cards.indexOf(set[2]).toString()] = this.generateService.addRandomCard(this.cards);
            this.selected = [];
            this.numberOfSets++;
            while (this.hasNoSet(this.cards)) {
                this.setASet();
            }
        }
    };
    PlaygroundPage.prototype.onShowSet = function () {
        this.countdownTimer.$timer.secondsRemaining = this._countDown + 1;
        this.numberOfSets = 0;
        var answer = this.checkService.findASet(this.cards);
        if (answer.length === 0) {
            //alert('No set found');
            //this.initCards();
            this.setASet();
        }
        else {
            //console.log(answer);
            this.selected = [];
            this.cheated = answer;
        }
        this.checkTimer();
    };
    PlaygroundPage.prototype.onRestart = function () {
        this.countdownTimer.$timer.secondsRemaining = this._countDown + 1;
        this.numberOfSets = 0;
        this.selected = [];
        this.cheated = [];
        this.initCards();
        this.checkTimer();
    };
    PlaygroundPage.prototype.hasNoSet = function (cards) {
        return (this.checkService.findASet(this.cards).length !== 3);
    };
    PlaygroundPage.prototype.setASet = function () {
        var card1 = this.generateService.addRandomCard(this.cards);
        var card2 = this.generateService.addRandomCard(this.cards);
        var card3 = this.generateService.addRandomCard(this.cards);
        this.cards.push(card1, card2, card3);
    };
    Object.defineProperty(PlaygroundPage.prototype, "countDown", {
        /**
       * Getter cards
       * @return {number }
       */
        get: function () {
            return this._countDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaygroundPage.prototype, "cards", {
        /**
         * Getter cards
         * @return {string[] }
         */
        get: function () {
            return this._cards;
        },
        /**
         * Setter cards
         * @param {string[] } value
         */
        set: function (value) {
            this._cards = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaygroundPage.prototype, "selected", {
        /**
         * Getter selected
         * @return {string[] }
         */
        get: function () {
            return this._selected;
        },
        /**
         * Setter selected
         * @param {string[] } value
         */
        set: function (value) {
            this._selected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaygroundPage.prototype, "seed", {
        /**
         * Getter seed
         * @return {string}
         */
        get: function () {
            return this._seed;
        },
        /**
         * Setter seed
         * @param {string} value
         */
        set: function (value) {
            this._seed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaygroundPage.prototype, "numberOfSets", {
        /**
         * Getter numberOfSets
         * @return {number }
         */
        get: function () {
            return this._numberOfSets;
        },
        /**
         * Setter numberOfSets
         * @param {number } value
         */
        set: function (value) {
            this._numberOfSets = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaygroundPage.prototype, "cheated", {
        /**
         * Getter cheated
         * @return {string[] }
         */
        get: function () {
            return this._cheated;
        },
        /**
         * Setter cheated
         * @param {string[] } value
         */
        set: function (value) {
            this._cheated = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__components_timer_timer__["a" /* TimerComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__components_timer_timer__["a" /* TimerComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__components_timer_timer__["a" /* TimerComponent */]) === "function" && _a || Object)
    ], PlaygroundPage.prototype, "countdownTimer", void 0);
    PlaygroundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-playground',template:/*ion-inline-start:"/home/k1l14n/Set7/Set7/src/pages/playground/playground.html"*/'<!--\n  Generated template for the PlaygroundPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-label>{{numberOfSets}}\n          <ion-icon name="logo-buffer"></ion-icon>\n        </ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-input type="text" placeholder="Enter a seed" [(ngModel)]="seed" class="input"></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-buttons end>\n          <button ion-button icon-only color="secondary" col-4 (click)="initCardsFromSeed(seed)">\n            <ion-icon name="flask"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n\n<ion-content class="content">\n\n  <ion-grid>\n    <ion-row *ngIf="cards !== undefined">\n\n      <ion-col *ngFor="let card of cards" col-4>\n          <ion-card (click)="onSelect(card)" class="tile" [ngClass]="{\n              \'selected\': isSelected(card),\n              \'card\': true,\n              \'cheat\': cheat(card)\n            }">\n                <!-- {{card}} -->\n                <img class="card-image" src="assets/imgs/{{card}}.png">\n\n          </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button ion-button color="danger" (click)="onShowSet()" full class="action-button">\n          <ion-icon name="locate"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="dark" (click)="onRestart()" full class="action-button">\n          <ion-icon name="rewind"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <timer #countdownTimer [timeInSeconds]="countDown"></timer>\n</ion-content>\n'/*ion-inline-end:"/home/k1l14n/Set7/Set7/src/pages/playground/playground.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_generate_service__["a" /* GenerateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_generate_service__["a" /* GenerateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_check_service__["a" /* CheckService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_check_service__["a" /* CheckService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_leaderboard_service__["a" /* LeaderboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_leaderboard_service__["a" /* LeaderboardService */]) === "function" && _f || Object])
    ], PlaygroundPage);
    return PlaygroundPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=playground.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mapping_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_sha1__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_sha1___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_sha1__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GenerateService = /** @class */ (function () {
    function GenerateService(mappingService) {
        this.mappingService = mappingService;
    }
    GenerateService.prototype.generatePlayground = function (seed) {
        return this.hashCode(seed, []);
    };
    GenerateService.prototype.hashCode = function (seed, answer) {
        //console.log(sha1(seed));
        var withoutLetters = __WEBPACK_IMPORTED_MODULE_2_js_sha1__(seed).replace(/[^1-9 ]/g, '');
        //let removedLetters = sha1(seed).replace(/[1-9 ]/g, '');
        /* console.log(withoutLetters);
        console.log(removedLetters); */
        var tryNb = 0;
        while (answer.length < 12) {
            //console.log(answer.length);
            tryNb++;
            if (tryNb > 20) {
                return this.hashCode(seed + seed, answer);
            }
            //console.log(answer)
            var parsedSeed = withoutLetters.match(/.{1,2}/g);
            for (var _i = 0, parsedSeed_1 = parsedSeed; _i < parsedSeed_1.length; _i++) {
                var two = parsedSeed_1[_i];
                /*console.log('two', two);
                console.log('answer', answer);
                console.log('code', this.mappingService.codeToCard(+two)) */
                if (answer.indexOf(this.mappingService.codeToCard(+two)) === -1 && two.length === 2 && answer.length < 12) {
                    if (this.mappingService.codeToCard(+two) !== undefined) {
                        answer.push(this.mappingService.codeToCard(+two));
                    }
                }
            }
            withoutLetters = __WEBPACK_IMPORTED_MODULE_2_js_sha1__(withoutLetters + withoutLetters * tryNb).replace(/[^1-9 ]/g, '');
        }
        //console.log('answer', answer);
        return answer;
    };
    /**
     * generate a random integer between min and max
     * @param {Number} min
     * @param {Number} max
     * @return {Number} random generated integer
     */
    GenerateService.prototype.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    GenerateService.prototype.randomCard = function () {
        var answer = this.randomInt(0, 2).toString() + this.randomInt(0, 2).toString() + this.randomInt(0, 2).toString() + this.randomInt(0, 2).toString();
        return answer;
    };
    GenerateService.prototype.newRandomCards = function () {
        var cards = [];
        while (cards.length < 12) {
            var newOne = this.randomCard();
            if (cards.indexOf(newOne) === -1) {
                cards.push(newOne);
            }
        }
        return cards;
    };
    GenerateService.prototype.addRandomCard = function (cards) {
        var newOne = this.randomCard();
        while (cards.indexOf(newOne) !== -1) {
            newOne = this.randomCard();
        }
        return newOne;
    };
    GenerateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mapping_service__["a" /* MappingService */]])
    ], GenerateService);
    return GenerateService;
}());

//# sourceMappingURL=generate.service.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckService = /** @class */ (function () {
    function CheckService() {
    }
    CheckService.prototype.isASet = function (set) {
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
    };
    CheckService.prototype.compare = function (a, b, c) {
        var sameShape = (a.substring(0, 1) === b.substring(0, 1) && a.substring(0, 1) === c.substring(0, 1) && b.substring(0, 1) === c.substring(0, 1));
        var sameColor = (a.substring(1, 2) === b.substring(1, 2) && a.substring(1, 2) === c.substring(1, 2) && b.substring(1, 2) === c.substring(1, 2));
        var sameNumber = (a.substring(2, 3) === b.substring(2, 3) && a.substring(2, 3) === c.substring(2, 3) && b.substring(2, 3) === c.substring(2, 3));
        var sameFill = (a.substring(3, 4) === b.substring(3, 4) && a.substring(3, 4) === c.substring(3, 4) && b.substring(3, 4) === c.substring(3, 4));
        var differentShape = (a.substring(0, 1) !== b.substring(0, 1) && a.substring(0, 1) !== c.substring(0, 1) && b.substring(0, 1) !== c.substring(0, 1));
        var differentColor = (a.substring(1, 2) !== b.substring(1, 2) && a.substring(1, 2) !== c.substring(1, 2) && b.substring(1, 2) !== c.substring(1, 2));
        var differentNumber = (a.substring(2, 3) !== b.substring(2, 3) && a.substring(2, 3) !== c.substring(2, 3) && b.substring(2, 3) !== c.substring(2, 3));
        var differentFill = (a.substring(3, 4) !== b.substring(3, 4) && a.substring(3, 4) !== c.substring(3, 4) && b.substring(3, 4) !== c.substring(3, 4));
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
            (differentShape && differentColor && differentNumber && differentFill)) {
            return true;
        }
        else {
            return false;
        }
    };
    CheckService.prototype.findASet = function (cards) {
        for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
            var first = cards_1[_i];
            //console.log('1st', cards);
            for (var _a = 0, cards_2 = cards; _a < cards_2.length; _a++) {
                var second = cards_2[_a];
                //console.log('2nd', cards);
                for (var _b = 0, cards_3 = cards; _b < cards_3.length; _b++) {
                    var third = cards_3[_b];
                    //console.log('3rd', cards);
                    if ((first !== second && first !== third && second !== third) && this.compare(first, second, third)) {
                        console.log('answer', [first, second, third]);
                        return [first, second, third];
                    }
                }
            }
        }
        return [];
    };
    CheckService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CheckService);
    return CheckService;
}());

//# sourceMappingURL=check.service.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
    }
    Object.defineProperty(TimerComponent.prototype, "$timer", {
        get: function () {
            return this.timer;
        },
        enumerable: true,
        configurable: true
    });
    TimerComponent.prototype.setSecondRemaining = function (seconds) {
        this.timer.secondsRemaining = seconds;
    };
    TimerComponent.prototype.ngOnInit = function () {
        this.initTimer();
        this.startTimer();
    };
    TimerComponent.prototype.hasFinished = function () {
        return this.timer.hasFinished;
    };
    TimerComponent.prototype.initTimer = function () {
        if (!this.timeInSeconds) {
            this.timeInSeconds = 0;
        }
        this.timer = {
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    };
    TimerComponent.prototype.startTimer = function () {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    };
    TimerComponent.prototype.pauseTimer = function () {
        this.timer.runTimer = false;
    };
    TimerComponent.prototype.resumeTimer = function () {
        this.startTimer();
    };
    TimerComponent.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.timer.runTimer) {
                return;
            }
            _this.timer.secondsRemaining--;
            _this.timer.displayTime = _this.getSecondsAsDigitalClock(_this.timer.secondsRemaining);
            if (_this.timer.secondsRemaining > 0) {
                _this.timerTick();
            }
            else {
                _this.timer.hasFinished = true;
            }
        }, 1000);
    };
    TimerComponent.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours = Math.floor(secNum / 3600);
        var minutes = Math.floor((secNum - (hours * 3600)) / 60);
        var seconds = secNum - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? '0' + hours : hours.toString();
        minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
        secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "timeInSeconds", void 0);
    TimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'timer',template:/*ion-inline-start:"/home/k1l14n/Set7/Set7/src/components/timer/timer.html"*/'<ion-card *ngIf="$timer" class="timer">\n	<ion-card-header class="timer-header">\n		<button [disabled]="true" *ngIf="timeInSeconds && timeInSeconds > 0" large block clear class="timer-button x-large">{{$timer.displayTime}}</button>\n		<button ion-button *ngIf="!timeInSeconds || timeInSeconds == 0" large block clear class="timer-button">Timer set up incorrectly</button>\n	</ion-card-header>\n	<ion-item *ngIf="timeInSeconds && timeInSeconds > 0" class="timer-item" color="dark">\n		<button ion-button clear class="large" style="margin-bottom: 30px; font-weight: bold" color="danger" (click)="initTimer()" item-start *ngIf="!$timer.runTimer && ($timer.hasStarted || $timer.hasFinished) || $timer.hasFinished">\n            <ion-icon name="refresh"></ion-icon>\n            Restart\n        </button>\n		<button ion-button clear class="large" style="margin-bottom: 30px; font-weight: bold" color="secondary" (click)="pauseTimer()" item-end *ngIf="$timer.runTimer && $timer.hasStarted && !$timer.hasFinished">\n            <ion-icon name="pause"></ion-icon>\n            Pause\n        </button>\n		<button ion-button clear class="large" style="margin-bottom: 30px; font-weight: bold" color="secondary" (click)="resumeTimer()" item-end *ngIf="!$timer.runTimer && $timer.hasStarted && !$timer.hasFinished">\n            <ion-icon name="play"></ion-icon>\n            Resume\n        </button>\n		<button ion-button clear class="large" style="margin-bottom: 30px; font-weight: bold" color="secondary" (click)="startTimer()" item-end *ngIf="!$timer.hasStarted">\n            <ion-icon name="play"></ion-icon>\n            Start\n        </button>\n	</ion-item>\n</ion-card>\n'/*ion-inline-end:"/home/k1l14n/Set7/Set7/src/components/timer/timer.html"*/
        })
    ], TimerComponent);
    return TimerComponent;
}());

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mapping_service__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, mappingService) {
        this.navCtrl = navCtrl;
        this.mappingService = mappingService;
    }
    HomePage.prototype.cardToCode = function (card) {
        this.code = this.mappingService.getIndex(card);
    };
    HomePage.prototype.codeToCard = function (code) {
        this.card = this.mappingService.mapping.get(+code);
    };
    Object.defineProperty(HomePage.prototype, "code", {
        /**
         * Getter code
         * @return {number}
         */
        get: function () {
            return this._code;
        },
        /**
         * Setter code
         * @param {number} value
         */
        set: function (value) {
            this._code = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "card", {
        /**
         * Getter card
         * @return {string}
         */
        get: function () {
            return this._card;
        },
        /**
         * Setter card
         * @param {string} value
         */
        set: function (value) {
            this._card = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "inputCard", {
        /**
         * Getter inputCard
         * @return {string}
         */
        get: function () {
            return this._inputCard;
        },
        /**
         * Setter inputCard
         * @param {string} value
         */
        set: function (value) {
            this._inputCard = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "inputCode", {
        /**
         * Getter inputCode
         * @return {number}
         */
        get: function () {
            return this._inputCode;
        },
        /**
         * Setter inputCode
         * @param {number} value
         */
        set: function (value) {
            this._inputCode = value;
        },
        enumerable: true,
        configurable: true
    });
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/k1l14n/Set7/Set7/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Set 7\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #formCard="ngForm" (ngSubmit)="cardToCode(inputCard)">\n    <ion-item color="light">\n      <ion-label>Carte</ion-label>\n      <ion-input type="text" name="card" [(ngModel)]="inputCard"></ion-input>\n    </ion-item>\n\n    <button ion-button type="submit" color="secondary" block>Convertir</button>\n  </form>\n  <ion-input disabled color="dark" [(ngModel)]="code"></ion-input>\n\n  <form #formCode="ngForm" (ngSubmit)="codeToCard(inputCode)">\n    <ion-item color="light">\n      <ion-label>Code</ion-label>\n      <ion-input type="text" name="code" [(ngModel)]="inputCode"></ion-input>\n    </ion-item>\n\n    <button ion-button type="submit" color="secondary" block>Convertir</button>\n  </form>\n  <ion-input disabled color="dark" [(ngModel)]="card"></ion-input>\n</ion-content>\n'/*ion-inline-end:"/home/k1l14n/Set7/Set7/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_mapping_service__["a" /* MappingService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_leaderboard_service__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoardPage = /** @class */ (function () {
    function BoardPage(navCtrl, navParams, leaderboardService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.leaderboardService = leaderboardService;
    }
    BoardPage.prototype.ionViewWillEnter = function () {
        this.highScore = this.leaderboardService.getHighestScode();
    };
    Object.defineProperty(BoardPage.prototype, "highScore", {
        /**
         * Getter highScore
         * @return {number}
         */
        get: function () {
            return this._highScore;
        },
        /**
         * Setter highScore
         * @param {number} value
         */
        set: function (value) {
            this._highScore = value;
        },
        enumerable: true,
        configurable: true
    });
    BoardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-board',template:/*ion-inline-start:"/home/k1l14n/Set7/Set7/src/pages/board/board.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Board</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h2>Highscore : {{highScore}}</h2>\n</ion-content>\n'/*ion-inline-end:"/home/k1l14n/Set7/Set7/src/pages/board/board.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_leaderboard_service__["a" /* LeaderboardService */]])
    ], BoardPage);
    return BoardPage;
}());

//# sourceMappingURL=board.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_playground_playground__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_board_board__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_generate_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_mapping_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_check_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_components_module__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_leaderboard_service__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_playground_playground__["a" /* PlaygroundPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_board_board__["a" /* BoardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_13__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_playground_playground__["a" /* PlaygroundPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_board_board__["a" /* BoardPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_generate_service__["a" /* GenerateService */],
                __WEBPACK_IMPORTED_MODULE_11__providers_mapping_service__["a" /* MappingService */],
                __WEBPACK_IMPORTED_MODULE_12__providers_check_service__["a" /* CheckService */],
                __WEBPACK_IMPORTED_MODULE_14__providers_leaderboard_service__["a" /* LeaderboardService */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/k1l14n/Set7/Set7/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/k1l14n/Set7/Set7/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export components */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timer_timer__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var components = [
    __WEBPACK_IMPORTED_MODULE_2__timer_timer__["a" /* TimerComponent */],
];
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [components],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */]],
            exports: [components]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map