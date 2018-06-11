import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InviteDetailPage } from './invite-detail';
import { PipesModule } from '../../pipes/pipes.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    InviteDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(InviteDetailPage),
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
export class ReceivedMessagesPageModule {}

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './../../assets/i18n/', '.json');
}