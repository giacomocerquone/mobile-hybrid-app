import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InviteDetailPage } from './invite-detail';

@NgModule({
  declarations: [
    InviteDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(InviteDetailPage),
  ],
})
export class ReceivedMessagesPageModule {}
