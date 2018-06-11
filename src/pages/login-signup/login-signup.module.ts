import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginSignupPage } from './login-signup';
import { ComponentsModule } from '../../components/components.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    LoginSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginSignupPage),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    ComponentsModule,
  ],
})
export class LoginSignupPageModule {}

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './../../assets/i18n/', '.json');
}
