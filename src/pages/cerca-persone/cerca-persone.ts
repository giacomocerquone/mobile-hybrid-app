import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
/**
 * Generated class for the CercaPersonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cerca-persone',
  templateUrl: 'cerca-persone.html',
})
export class CercaPersonePage {

  toSearch = {
    name: "",
    maleSex: false,
    femaleSex: false,
    work: "",
    food: "",
    age: "",
    interests: "" 
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public _menuController: MenuController) {
  }

  updateMaleSex() {
    if(this.toSearch.femaleSex == true) {
      this.toSearch.femaleSex = false;
    }
    /*console.log('maleSex = '+this.toSearch.maleSex);
    console.log('femaleSex = '+this.toSearch.femaleSex);*/
  }
  updateFemaleSex() {
    if(this.toSearch.maleSex == true) {
      this.toSearch.maleSex = false;
    }
    /*console.log('maleSex = '+this.toSearch.maleSex);
    console.log('femaleSex = ' + this.toSearch.femaleSex);*/   
  }
  logForm() {
    console.log(this.toSearch)
  }
  openMenu() {
    this._menuController.open();
  }

}
