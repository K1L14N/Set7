import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { TimerComponent } from './timer/timer';

export const components = [
  TimerComponent,
];

@NgModule({
  declarations: [components],
  imports: [IonicModule],
  exports: [components]
})
export class ComponentsModule {}
