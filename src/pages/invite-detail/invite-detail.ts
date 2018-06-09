import {
  Component,
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

  public inviteInfo = {
    fromUser: 'Mariangela',
    place: 'Wonderland',
    time: '00:00',
    date: '12/06/2018',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit facilisis dolor nec blandit. Sed nec dictum nunc, sit amet dignissim enim. Donec lacinia ex nulla, ut vehicula est consectetur eget. Quisque bibendum, mauris sit amet gravida efficitur, dolor turpis.',
    stato: 'declinato',
  };

  public isInvite: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isInvite = this.navParams.get('isInvite');
  }

}
