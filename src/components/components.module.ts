import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ItemListComponent } from './item-list/item-list';
import { MyApp } from '../app/app.component';
@NgModule({
	declarations: [ItemListComponent],
	imports: [
        IonicModule.forRoot(MyApp),
    ],
	exports: [ItemListComponent]
})
export class ComponentsModule {}
