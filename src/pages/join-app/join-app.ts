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
  selector: 'page-join-app',
  templateUrl: 'join-app.html',
})
export class JoinAppPage {

  public mailContent = {
    address: '',
    text: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public sendMail() {
    console.log(this.mailContent);
  }

}
