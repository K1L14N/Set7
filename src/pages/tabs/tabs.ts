import { Component } from '@angular/core';

import { PlaygroundPage } from '../playground/playground';
import { HomePage } from '../home/home';
import { BoardPage } from '../board/board';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PlaygroundPage;
  tab3Root = BoardPage;

  constructor() {

  }

}
