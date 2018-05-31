import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginSignup } from '../pages/LoginSignup/LoginSignup';
import { PeopleList } from '../pages/PeopleList/PeopleList';
import { CercaPersonePage } from '../pages/cerca-persone/cerca-persone';
import { PersonItemListComponent } from '../pages/PeopleList/person-item-list/person-item-list';


@NgModule({
  declarations: [
    MyApp,
    LoginSignup,
    PeopleList,
    CercaPersonePage,
    PersonItemListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginSignup,
    PeopleList,
    CercaPersonePage,
    PersonItemListComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
