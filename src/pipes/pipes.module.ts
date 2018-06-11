import { NgModule } from '@angular/core';
import { FilterPipe } from './filter/filter';
import { CapitalizePipe } from './capitalize/capitalize';
@NgModule({
  declarations: [FilterPipe,
    CapitalizePipe],
  exports: [FilterPipe,
    CapitalizePipe],
  imports: [],
})
export class PipesModule {}
