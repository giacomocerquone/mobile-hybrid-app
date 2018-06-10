import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ItemListComponent } from './item-list/item-list';
import { MdInputComponent } from './md-input/md-input';

@NgModule({
  declarations: [ItemListComponent,
    MdInputComponent],
  exports: [ItemListComponent,
    MdInputComponent],
  imports: [IonicModule],
})
export class ComponentsModule {}
