import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoinAppPage } from './join-app';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    JoinAppPage,
  ],
  imports: [
    IonicPageModule.forChild(JoinAppPage),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
})
export class JoinAppPageModule {}

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './../../assets/i18n/', '.json');
}