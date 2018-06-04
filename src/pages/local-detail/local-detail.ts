import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Local } from '../../models/Local';

/**
 * Generated class for the LocalDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-local-detail',
  templateUrl: 'local-detail.html',
})
export class LocalDetailPage {

  public local: Local;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.local = this.navParams.data;
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad LocalDetailPage');
  }

}
