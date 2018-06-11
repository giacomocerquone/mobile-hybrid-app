import {
  Component,
 } from '@angular/core';

import {
  IonicPage,
  NavController,
  NavParams,
 } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-invite-detail',
  templateUrl: 'invite-detail.html',
})
export class InviteDetailPage {

  public inviteInfo: any;
  public loggedUser: string = this.authService.getUserId();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthServiceProvider,
  ) {
    this.inviteInfo = this.navParams.data;
  }

}
