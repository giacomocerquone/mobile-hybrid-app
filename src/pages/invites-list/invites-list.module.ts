import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { InvitesListPage } from './invites-list';

@NgModule({
  declarations: [
    InvitesListPage,
  ],
  imports: [
    IonicPageModule.forChild(InvitesListPage),
    PipesModule,
    ComponentsModule,
  ],
})
export class InvitesListPageModule {}
