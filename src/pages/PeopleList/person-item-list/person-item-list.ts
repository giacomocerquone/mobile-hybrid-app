import {Component, Input} from '@angular/core';
import { Person } from '../../../models/Person';
/**
 * Generated class for the PersonItemListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'person-item-list',
  templateUrl: 'person-item-list.html'
})
export class PersonItemListComponent {

  @Input() person: Person;

  constructor() {}

}
