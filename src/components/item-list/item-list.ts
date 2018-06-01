import {Component, Input} from '@angular/core';
import { Person } from '../../models/Person';

@Component({
    selector: 'item-list',
    templateUrl: 'item-list.html'
})
export class ItemListComponent{

    @Input() person: Person;

    constructor() {}

}
