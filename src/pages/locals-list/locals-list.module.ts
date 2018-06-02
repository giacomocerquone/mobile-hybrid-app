import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalsListPage } from './locals-list';

@NgModule({
  declarations: [
    LocalsListPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalsListPage),
  ],
})
export class LocalsListPageModule {}
