import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { Drink } from '../../models/Drink';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public Drink: Drink;

  constructor(public navCtrl: NavController, public _http: Http, public _menuController: MenuController) {
    this._http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka')
      .map(res => res.json())
      .subscribe(data => {
        this.Drink = new Drink(data.ingredients[0].strIngredient, data.ingredients[0].strDescription);
      })
  }

  openMenu() {
    this._menuController.open();
  }
}
