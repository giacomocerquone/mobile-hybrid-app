import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ItemListComponent } from './item-list/item-list';

@NgModule({
	declarations: [ItemListComponent],
	imports: [IonicModule],
	exports: [ItemListComponent],
})
export class ComponentsModule {}
