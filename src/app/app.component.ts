import {Component, ViewChild} from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { LoginSignupPage } from '../pages/login-signup/login-signup';
// import { PeopleListPage } from "../pages/people-list/people-list";
// import { PeopleSearchPage } from '../pages/people-search/people-search';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

    @ViewChild(Nav) nav: Nav;
    rootPage:any = 'PeopleListPage';
    pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public _menuController: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages= [
      { title: 'People List', component: 'PeopleListPage' },
      { title: 'Cerca Persone', component: 'PeopleSearchPage'}
    ]
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    this._menuController.close();
  }

  logout() {
    this.nav.push('LoginSignupPage');
  }

}
