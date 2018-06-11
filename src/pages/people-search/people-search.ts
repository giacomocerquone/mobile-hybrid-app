import { Component } from '@angular/core';
import {
  ToastController,
  IonicPage,
  MenuController, NavController,
} from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { take } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-people-search',
  templateUrl: 'people-search.html',
})
export class PeopleSearchPage {

  public toSearch: any = {
    name: '',
    male: false,
    female: false,
    job: '',
    favFood: '',
    bornDate: null,
    interests: '',
  };

  constructor(
    public menuController: MenuController,
    private userService: UserServiceProvider,
    private navCtrl: NavController,
    private toastCtrl: ToastController) {}

  public updateMaleSex() {
    if (this.toSearch.female) this.toSearch.female = false;
  }
  public updateFemaleSex() {
    if (this.toSearch.male) this.toSearch.male = false;
  }

  public searchPeople() {
    this.userService.searchPeople(this.toSearch)
      .pipe(take(1))
      .subscribe((data) => {
        this.navCtrl.push('PeopleListResultPage', data);
      },         () => {
        const failure = this.toastFactory(
          'Ci sono stati errori nell\'invio del invito.',
        );
        failure.present();
      });
  }

  public openMenu() {
    this.menuController.open();
  }

  private toastFactory(message) {
    return this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'bottom',
    });
  }

}
