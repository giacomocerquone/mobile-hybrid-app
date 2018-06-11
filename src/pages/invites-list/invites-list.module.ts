import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { InvitesListPage } from './invites-list';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    InvitesListPage,
  ],
  imports: [
    IonicPageModule.forChild(InvitesListPage),
    PipesModule,
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
export class InvitesListPageModule {}

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './../../assets/i18n/', '.json');
}