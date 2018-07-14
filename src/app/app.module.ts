import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PlaygroundPage } from '../pages/playground/playground';
import { BoardPage } from '../pages/board/board';

import { GenerateService } from '../providers/generate.service';
import { MappingService } from '../providers/mapping.service';
import { CheckService } from '../providers/check.service';

import { ComponentsModule } from '../components/components.module';
import { LeaderboardService } from '../providers/leaderboard.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    PlaygroundPage,
    BoardPage,
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    PlaygroundPage,
    BoardPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GenerateService,
    MappingService,
    CheckService,
    LeaderboardService,
  ]
})
export class AppModule {}
