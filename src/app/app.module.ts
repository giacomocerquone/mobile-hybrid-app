import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { ApiInterceptorProvider } from '../providers/api-interceptor/api-interceptor';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { MyApp } from './app.component';
import { UserServiceProvider } from '../providers/user-service/user-service';

@NgModule({
  bootstrap: [IonicApp],
  declarations: [
    MyApp,
  ],
  entryComponents: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler,
    },
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorProvider,
    },
    AuthServiceProvider,
    UserServiceProvider,
  ],
})
export class AppModule {}
