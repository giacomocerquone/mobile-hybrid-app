import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { PeopleListResultPage } from './people-list-result';

@NgModule({
  declarations: [
    PeopleListResultPage,
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    IonicPageModule.forChild(PeopleListResultPage),
  ],
})
export class PeopleListResultPageModule {}
