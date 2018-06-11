import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  AlertController,
  IonicPage,
  MenuController,
  NavController,
} from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-login-signup',
  templateUrl: 'login-signup.html',
})
export class LoginSignupPage {

  public viewLogin: boolean = true;
  public credentials:
    { email: string, password: string, username: string, passwordConfirm: string } =
    {
      email: '',
      username: '',
      password: '',
      passwordConfirm: '',
    };
  public errors: string = '';

  constructor(
    public navCtrl: NavController,
    public menuController: MenuController,
    private http: HttpClient,
    private authService: AuthServiceProvider,
    private alertCtrl: AlertController,
    private translate: TranslateService,
  ) {
    this.unableMenu();
    this.translate.setDefaultLang('en');
  }

  public unableMenu() {
    this.menuController.enable(false, 'navigationDrawer');
  }

  public switchView() {
    this.errors = '';
    this.viewLogin = !this.viewLogin;
  }

  public login() {
    delete this.credentials.passwordConfirm;
    delete this.credentials.username;
    return this.authService.login(this.credentials)
      .subscribe(
        (data) => {
          this.translate.use(data.user.lang || 'en');
          this.authService.setUserInfo(data.id, data.ttl, data.user.username);
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
    if (this.credentials.username &&
      this.credentials.password &&
      this.credentials.passwordConfirm &&
      this.credentials.email &&
      (this.credentials.password === this.credentials.passwordConfirm)
    ) {
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
    const alert = this.alertCtrl.create({
      title: 'Errore',
      subTitle: 'Assicurati di aver inserito tutti i dati correttamente.',
      buttons: ['Ok'],
    });
    alert.present();
  }
}
