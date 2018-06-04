import { Pipe, PipeTransform } from '@angular/core';
import { Local } from '../../models/Local';
import { Person } from '../../models/Person';

/**
 * Generated class for the FilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  public transform(data: Person[] | Local[], searchTerm) {
    return data.filter(el => (
      el.name.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  }
}
