import {
  Component,
 } from '@angular/core';

import {
  IonicPage,
  MenuController,
  NavController,
  NavParams,
 } from 'ionic-angular';

import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-invite-friends',
  templateUrl: 'invite-friends.html',
})
export class InviteFriendsPage {

  public minDate: string = moment().format('YYYY-MM-DD');
  public maxDate: string = moment().add(90, 'days').format('YYYY-MM-DD');
  public minTime: string = moment().add(1, 'hour').format('HH:mm');

  // TODO: fissare orario minimo tot minuti più avanti e controllare che non sia passato

  public toSend = {
    nomeUtente: 'Jena Plissken',
    place: '',
    time: this.minTime,
    date: this.minDate,
    description: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public sendInvitation() {
    console.log(this.toSend);
  }

}
