import {Component, Input} from '@angular/core';
import { Person } from '../../models/Person';
import { Local } from '../../models/Local';

@Component({
    selector: 'item-list',
    templateUrl: 'item-list.html'
})
export class ItemListComponent{

    @Input() data: Person | Local;

    constructor() {}

}
