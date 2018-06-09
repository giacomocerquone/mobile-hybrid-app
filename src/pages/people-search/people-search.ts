import { Component } from '@angular/core';
import {
  AlertController,
  IonicPage,
  MenuController, NavController,
} from 'ionic-angular';
import {UserServiceProvider} from "../../providers/user-service/user-service";
import {take} from "rxjs/operators";

@IonicPage()
@Component({
  selector: 'page-people-search',
  templateUrl: 'people-search.html',
})
export class PeopleSearchPage {

  public toSearch = {
    name: '',
    male: false,
    female: false,
    job: '',
    favFood: '',
    bornDate: '',
    interests: '',
  };

  constructor(
    public menuController: MenuController,
    private userService: UserServiceProvider,
    private navCtrl: NavController,
    private alertCtrl: AlertController) {}

  public updateMaleSex() {
    if (this.toSearch.female) this.toSearch.female = false;
    console.log(this.toSearch)
  }
  public updateFemaleSex() {
    if (this.toSearch.male) this.toSearch.male = false;
  }

  public searchPeople() {
    this.userService.searchPeople(this.toSearch)
      .pipe(take(1))
      .subscribe((data) => {
        console.log(data)
        this.navCtrl.push('PeopleListResultPage', data);
      }, () => {
        const failure = this.alertFactory(
          'Errore',
          'Ci sono stati errori nell\'invio del invito.',
        );
        failure.present();
      });
  }

  public openMenu() {
    this.menuController.open();
  }

  private alertFactory(title, message) {
    return this.alertCtrl.create({
      title,
      buttons: ['OK'],
      subTitle: message,
    });
  }

}
