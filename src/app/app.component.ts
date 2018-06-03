import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MenuController, Nav, Platform } from 'ionic-angular';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {

  @ViewChild(Nav) public nav: Nav;
  public rootPage: any = 'PeopleListPage';
  public pages: Array<{ title: string, component: any }>;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public menuController: MenuController,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'People List', component: 'PeopleListPage' },
      { title: 'Cerca Persone', component: 'PeopleSearchPage' },
      { title: 'Inviti', component: 'InvitationsPage' },
      { title: 'Locali', component: 'LocalsListPage' },
      { title: 'Modifica Profilo', component: 'ProfilePage' },
      { title: 'Invita amici a unirsi', component: 'InviteFriendsPage' },
    ];
  }

  public openPage(page) {
    this.nav.setRoot(page);
    this.menuController.close();
  }

  public logout() {
    this.nav.push('LoginSignupPage');
  }

}
