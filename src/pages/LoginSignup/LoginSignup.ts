import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Http } from '@angular/http';

import { PeopleList } from '../PeopleList/PeopleList';

@Component({
  selector: 'LoginSignup',
  templateUrl: 'LoginSignup.html'
})
export class LoginSignup {

  public viewlogin: boolean = true;

  constructor(public navCtrl: NavController, public _http: Http, public _menuController: MenuController) {
    this.unableMenu();
  }

  unableMenu() {
    this._menuController.enable(false, 'navigationDrawer');
  }

  public switchView() {
    this.viewlogin = !this.viewlogin;
  }

  login() {
    this.navCtrl.push(PeopleList);
    this._menuController.enable(true, 'navigationDrawer');
  }

  signup() {
    this.navCtrl.push(PeopleList);
    this._menuController.enable(true, 'navigationDrawer');
  }
  
}
