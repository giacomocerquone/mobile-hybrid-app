import { Component} from '@angular/core';
import { MenuController } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { Person } from '../../models/Person';

// TODO Will be replaced by http calls
import { Persons } from "../../mock/persons";

@Component({
    selector: 'people-list',
    templateUrl: 'PeopleList.html'
})
export class PeopleList {

    peopleList: Array<Person> = Persons;

    constructor(public _menuController: MenuController) {}

    openMenu() {
        this._menuController.open();
    }
}
