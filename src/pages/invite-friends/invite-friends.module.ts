import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InviteFriendsPage } from './invite-friends';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    InviteFriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(InviteFriendsPage),
    PipesModule,
  ],
})
export class InviteFriendsPageModule {}
