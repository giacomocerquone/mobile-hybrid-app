import { 
  Component,
 } from '@angular/core';

import { 
  IonicPage,
  NavController,
  NavParams,
  MenuController,
 } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-join-app',
  templateUrl: 'join-app.html',
})
export class JoinAppPage {

  mailContent = {
    address: '',
    text: '',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  sendMail() {
    console.log(this.mailContent);
  }

}
