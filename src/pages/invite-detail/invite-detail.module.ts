import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InviteDetailPage } from './invite-detail';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    InviteDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(InviteDetailPage),
    PipesModule,
  ],
})
export class ReceivedMessagesPageModule {}
