import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ItemListComponent } from './item-list/item-list';

@NgModule({
  declarations: [ItemListComponent],
  exports: [ItemListComponent],
  imports: [IonicModule],
})
export class ComponentsModule {}
