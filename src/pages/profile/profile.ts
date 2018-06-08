import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Person} from '../../models/Person';
import {UserServiceProvider} from '../../providers/user-service/user-service';

import {Observable} from 'rxjs/Observable';
import {take} from 'rxjs/operators';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public message: string;
  public loadingData: boolean = true;
  public toUpdate: Person = {
    userId: '',
    name: '',
    surname: '',
    birthday: '',
    sex: '',
    city: '',
    favFood: '',
    interests: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserServiceProvider) {
  }

  ionViewDidLoad() {
    this.userService.getProfile()
      .pipe(take(1))
      .subscribe((data) => {
          this.toUpdate = data;
        },
        () => {
          this.message = 'Si è verificato un errore';
        },
        () => {
          this.loadingData = false;
        })
  }

  editProfile() {
    this.userService.editProfile(this.toUpdate)
      .pipe(take(1))
      .subscribe(() => {
          this.message = 'Profilo aggiornato con successo';
        },
        () => {
          this.message = 'Si è verificato un errore';
        });
  }

}
