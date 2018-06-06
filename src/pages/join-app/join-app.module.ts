import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoinAppPage } from './join-app';

@NgModule({
  declarations: [
    JoinAppPage,
  ],
  imports: [
    IonicPageModule.forChild(JoinAppPage),
  ],
})
export class JoinAppPageModule {}
