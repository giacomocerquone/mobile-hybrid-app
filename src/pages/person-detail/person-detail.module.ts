import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonDetailPage } from './person-detail';
import { PipesModule } from '../../pipes/pipes.module';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    PersonDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonDetailPage),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    PipesModule,
  ],
})
export class PersonDetailPageModule {}

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './../../assets/i18n/', '.json');
}