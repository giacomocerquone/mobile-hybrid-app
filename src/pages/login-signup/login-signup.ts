import { Component } from '@angular/core';
import {
  IonicPage,
  MenuController,
  NavController,
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login-signup',
  templateUrl: 'login-signup.html',
})
export class LoginSignupPage {

  public viewLogin: boolean = true;

  constructor(public navCtrl: NavController, public menuController: MenuController) {
    this.unableMenu();
  }

  public unableMenu() {
    this.menuController.enable(false, 'navigationDrawer');
  }

  public switchView() {
    this.viewLogin = !this.viewLogin;
  }

  public login() {
    this.navCtrl.push('PeopleListPage');
    this.menuController.enable(true, 'navigationDrawer');
  }

  public signup() {
    this.navCtrl.push('PeopleListPage');
    this.menuController.enable(true, 'navigationDrawer');
  }

}
