import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CercaPersonePage } from './cerca-persone';

@NgModule({
  declarations: [
    CercaPersonePage,
  ],
  imports: [
    IonicPageModule.forChild(CercaPersonePage),
  ],
})
export class CercaPersonePageModule {}
