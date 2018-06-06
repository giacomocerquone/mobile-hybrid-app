import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeeInvitePage } from './see-invite';

@NgModule({
  declarations: [
    SeeInvitePage,
  ],
  imports: [
    IonicPageModule.forChild(SeeInvitePage),
  ],
})
export class ReceivedMessagesPageModule {}
