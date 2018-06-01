import { Component, Input } from '@angular/core';
import { Local } from '../../models/Local';
import { Person } from '../../models/Person';

@Component({
  selector: 'item-list',
  templateUrl: 'item-list.html',
})
export class ItemListComponent {

  @Input() public data: Person | Local;

}
