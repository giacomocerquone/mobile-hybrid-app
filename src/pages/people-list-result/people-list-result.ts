import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from '../../models/Person';

@IonicPage()
@Component({
  selector: 'page-people-list-result',
  templateUrl: 'people-list-result.html',
})
export class PeopleListResultPage {
  public people: Person[] = this.navParams.data;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
