import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  IonicPage,
  MenuController,
  NavController,
} from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-login-signup',
  templateUrl: 'login-signup.html',
})
export class LoginSignupPage {

  public viewLogin: boolean = true;
  public credentials: { email: string, password: string, username: string } = {
    email: '',
    password: '',
    username: '',
  };
  public errors: string = '';

  constructor(
    public navCtrl: NavController,
    public menuController: MenuController,
    private http: HttpClient,
    private authService: AuthServiceProvider,
  ) {
    this.unableMenu();
  }

  public unableMenu() {
    this.menuController.enable(false, 'navigationDrawer');
  }

  public switchView() {
    this.viewLogin = !this.viewLogin;
  }

  public login() {
    return this.authService.login(this.credentials)
      .subscribe(
        (data) => {
          this.authService.setUserInfo(data.id, data.ttl, data.userId);
          this.navCtrl.setRoot('PeopleListPage');
          this.menuController.enable(true, 'navigationDrawer');
        },
        (err) => {
          this.errors = (err.error.error)
            ? err.error.error.message
            : 'Si sono verificati dei problemi';
        });
  }

  public signup() {
    return this.authService.signUp(this.credentials)
      .subscribe(
        (data) => {
          this.viewLogin = true;
        },
        (err) => {
          this.errors = (err.error.error)
            ? err.error.error.message
            : 'Si sono verificati dei problemi';
        });

  }

}
