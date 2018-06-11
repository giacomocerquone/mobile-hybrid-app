import {
  Component,
 } from '@angular/core';

import {
  IonicPage,
  NavController,
  NavParams,
 } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

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
    private translate: TranslateService,
  ) {
    this.inviteInfo = this.navParams.data;
    this.translate.setDefaultLang('en');
  }

}
