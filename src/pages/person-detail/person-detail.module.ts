import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonDetailPage } from './person-detail';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PersonDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonDetailPage),
    PipesModule,
  ],
})
export class PersonDetailPageModule {}
