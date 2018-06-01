import { Component } from '@angular/core';
import { IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-people-search',
  templateUrl: 'people-search.html',
})
export class PeopleSearchPage {

  constructor(public _menuController: MenuController) {
  }
  
  openMenu() {
    this._menuController.open();
  }

}
