import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {

  @ViewChild(Nav) public nav: Nav;
  public rootPage: any = '';
  public pages: Array<{ title: string, component: any }>;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public menuController: MenuController,
    private authService: AuthServiceProvider,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Persone', component: 'PeopleListPage' },
      { title: 'Cerca Persone', component: 'PeopleSearchPage' },
      { title: 'I tuoi Inviti', component: 'InvitesListPage' },
      { title: 'Locali', component: 'LocalsListPage' },
      { title: 'Profilo', component: 'ProfilePage' },
      { title: 'Invita amici a unirsi', component: 'JoinAppPage' },
    ];

    this.rootPage = this.authService.isConnected() ? 'PeopleListPage' : 'LoginSignupPage';
  }

  public openPage(page) {
    this.nav.setRoot(page);
    this.menuController.close();
  }

  public logout() {
    if (this.authService.logout()) {
      this.nav.setRoot('LoginSignupPage');
    }
  }

}
