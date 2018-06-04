import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from '../../models/Person';

/**
 * Generated class for the PersonDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-person-detail',
  templateUrl: 'person-detail.html',
})
export class PersonDetailPage {

  public person: Person;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person = this.navParams.data;
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad PersonDetailPage');
  }

}
