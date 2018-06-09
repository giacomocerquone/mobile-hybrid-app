import {
  Component,
  Input
 } from '@angular/core';

import {
  IonicPage,
  MenuController,
  NavController,
  NavParams,
 } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-invite-detail',
  templateUrl: 'invite-detail.html',
})
export class InviteDetailPage {

  public inviteInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams ) {
    this.inviteInfo = this.navParams.data;
  }

}
