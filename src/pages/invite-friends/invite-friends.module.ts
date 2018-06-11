import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InviteFriendsPage } from './invite-friends';
import { PipesModule } from '../../pipes/pipes.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    InviteFriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(InviteFriendsPage),
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
export class InviteFriendsPageModule {}

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './../../assets/i18n/', '.json');
}