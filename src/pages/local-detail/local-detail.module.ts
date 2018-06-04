import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalDetailPage } from './local-detail';

@NgModule({
  declarations: [
    LocalDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalDetailPage),
  ],
})
export class LocalDetailPageModule {}
