import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the CercaPersonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cerca-persone',
  templateUrl: 'cerca-persone.html',
})
export class CercaPersonePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _menuController: MenuController) {
  }
  
  openMenu() {
    this._menuController.open();
  }

}
