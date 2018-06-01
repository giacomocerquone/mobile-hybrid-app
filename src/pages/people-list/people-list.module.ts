import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeopleListPage } from './people-list';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PeopleListPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PeopleListPage),
  ],
})
export class PeopleListPageModule {}
