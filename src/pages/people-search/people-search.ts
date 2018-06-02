import { Component } from '@angular/core';
import {
  IonicPage,
  MenuController,
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-people-search',
  templateUrl: 'people-search.html',
})
export class PeopleSearchPage {

  public toSearch = {
    name: '',
    maleSex: false,
    femaleSex: false,
    work: '',
    food: '',
    age: '',
    interests: '',
  };

  constructor(public menuController: MenuController) {
  }

  public updateMaleSex() {
    if (this.toSearch.femaleSex === true) {
      this.toSearch.femaleSex = false;
    }
    /*console.log('maleSex = '+this.toSearch.maleSex);
    console.log('femaleSex = '+this.toSearch.femaleSex);*/
  }
  public updateFemaleSex() {
    if (this.toSearch.maleSex === true) {
      this.toSearch.maleSex = false;
    }
    /*console.log('maleSex = '+this.toSearch.maleSex);
    console.log('femaleSex = ' + this.toSearch.femaleSex);*/
  }

  public logForm() {
    console.log(this.toSearch);
  }

  public openMenu() {
    this.menuController.open();
  }

}
