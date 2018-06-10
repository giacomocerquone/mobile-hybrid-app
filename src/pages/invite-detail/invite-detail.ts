import {
  Component,
 } from '@angular/core';

import {
  IonicPage,
  NavController,
  NavParams,
 } from 'ionic-angular';
import { invites } from '../../mock/invites';

@IonicPage()
@Component({
  selector: 'page-invite-detail',
  templateUrl: 'invite-detail.html',
})
export class InviteDetailPage {

  public inviteInfo: any;
  public loggedUser: string = invites[0].userId; // TODO get it from authservice

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inviteInfo = this.navParams.data;
  }

}
