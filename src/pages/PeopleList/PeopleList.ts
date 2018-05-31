import { Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { Drink } from '../../models/Drink';

@Component({
    selector: 'people-list',
    templateUrl: 'PeopleList.html'
})
export class PeopleList {

    constructor(public _navCtrl: NavController, public _menuController: MenuController) {

    }

    openMenu() {
        this._menuController.open();
    }
}
