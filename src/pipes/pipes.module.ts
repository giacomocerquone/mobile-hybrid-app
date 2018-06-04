import { NgModule } from '@angular/core';
import { FilterPipe } from './filter/filter';
@NgModule({
  declarations: [FilterPipe],
  exports: [FilterPipe],
  imports: [],
})
export class PipesModule {}
