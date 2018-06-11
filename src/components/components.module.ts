import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ItemListComponent } from './item-list/item-list';
import { MdInputComponent } from './md-input/md-input';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ItemListComponent,
    MdInputComponent],
  exports: [ItemListComponent,
    MdInputComponent],
  imports: [IonicModule, PipesModule],
})
export class ComponentsModule {}
