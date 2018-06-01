import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

// Pages

import { LoginSignupPage } from '../pages/login-signup/login-signup';
import { PeopleListPage } from '../pages/people-list/people-list';
import { PeopleSearchPage } from '../pages/people-search/people-search';

// Reusable components

import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    LoginSignupPage,
    PeopleListPage,
    PeopleSearchPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginSignupPage,
    PeopleListPage,
    PeopleSearchPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
