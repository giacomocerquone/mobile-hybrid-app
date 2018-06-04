import { 
  Component,
  ViewChild,
  ElementRef,
 } from '@angular/core';

import { 
  IonicPage,
  NavController,
  NavParams,
  MenuController,
 } from 'ionic-angular';

 import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-invite-friends',
  templateUrl: 'invite-friends.html',
})
export class InviteFriendsPage {

  @ViewChild('myInput') myInput: ElementRef;
  minDate: string = moment().format('YYYY-MM-DD');
  maxDate: string = moment().add(90,'days').format('YYYY-MM-DD');
  minTime: string = moment().add(1,'hour').format('HH:mm');

  //TODO: fissare orario minimo tot minuti più avanti e controllare che non sia passato

  toSend = {
    place: '',
    time: this.minTime,
    date: this.minDate,
    description: '',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  sendInvitation() {
    console.log(this.toSend);
  }

}
