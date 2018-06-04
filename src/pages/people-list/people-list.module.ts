import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeopleListPage } from './people-list';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PeopleListPage,
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    IonicPageModule.forChild(PeopleListPage),
  ],
})
export class PeopleListPageModule {}
