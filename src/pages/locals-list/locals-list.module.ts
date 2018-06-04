import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalsListPage } from './locals-list';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    LocalsListPage,
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    IonicPageModule.forChild(LocalsListPage),
  ],
})
export class LocalsListPageModule {}
