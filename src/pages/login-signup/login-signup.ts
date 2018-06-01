import { Component } from '@angular/core';
import {
    NavController,
    MenuController,
    IonicPage,
} from 'ionic-angular';

// import { PeopleListPage } from '../people-list/people-list';

@IonicPage()
@Component({
  selector: 'page-login-signup',
  templateUrl: 'login-signup.html'
})
export class LoginSignupPage {

  public viewLogin: boolean = true;

  constructor(public navCtrl: NavController, public _menuController: MenuController) {
    this.unableMenu();
  }

  unableMenu() {
    this._menuController.enable(false, 'navigationDrawer');
  }

  public switchView() {
    this.viewLogin = !this.viewLogin;
  }

  login() {
    this.navCtrl.push('PeopleListPage');
    this._menuController.enable(true, 'navigationDrawer');
  }

  signup() {
    this.navCtrl.push('PeopleListPage');
    this._menuController.enable(true, 'navigationDrawer');
  }
  
}
