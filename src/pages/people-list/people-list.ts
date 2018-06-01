import { Component} from '@angular/core';
import {IonicPage, MenuController} from 'ionic-angular';

import { Person } from '../../models/Person';

// TODO Will be replaced by http calls
import { Persons } from "../../mock/persons";

@IonicPage()
@Component({
    selector: 'page-people-list',
    templateUrl: 'people-list.html'
})
export class PeopleListPage {

    peopleList: Array<Person> = Persons;

    constructor(public _menuController: MenuController) {}

    openMenu() {
        this._menuController.open();
    }
}
