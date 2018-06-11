import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ApiInterceptorProvider } from '../providers/api-interceptor/api-interceptor';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { InviteServiceProvider } from '../providers/invite-service/invite-service';
import { LocalServiceProvider } from '../providers/local-service/local-service';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { MyApp } from './app.component';

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
    }),
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
    LocalServiceProvider,
    InviteServiceProvider,
    Camera,
  ],
})
export class AppModule {}

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './../assets/i18n/', '.json');
}
