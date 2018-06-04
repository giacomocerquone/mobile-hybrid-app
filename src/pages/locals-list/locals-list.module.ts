import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalsListPage } from './locals-list';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LocalsListPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(LocalsListPage),
  ],
})
export class LocalsListPageModule {}
