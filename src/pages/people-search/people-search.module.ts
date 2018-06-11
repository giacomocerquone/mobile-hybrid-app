import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeopleSearchPage } from './people-search';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    PeopleSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(PeopleSearchPage),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
})
export class PeopleSearchPageModule {}

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './../../assets/i18n/', '.json');
}