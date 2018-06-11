import {
  Component,
 } from '@angular/core';

import {
  IonicPage,
  MenuController,
  NavController,
  NavParams,
 } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-join-app',
  templateUrl: 'join-app.html',
})
export class JoinAppPage {

  public mailContent = {
    address: '',
    title: 'Unisciti alla community di Never Eat Alone',
    text: `Ciao, ti voglio invitare a provare questa fantastica applicazione che ho appena scoperto.

Il suo nome è Never Eat Alone e con essa potrai mangiare insieme a nuove persone che non conosci, nel tuo tempo libero.

Ti aspetto, un saluto!`,
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private authService: AuthServiceProvider,
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang('en');
  }

  public sendMail() {
    console.log(this.mailContent);
  }

}
