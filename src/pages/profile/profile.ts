import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from '../../models/Person';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Observable } from 'rxjs/Observable';

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
  public profile$: Observable<any> = this.userService.getProfile();

  public toUpdate = {
    name: '',
    surname: '',
    bithday: '',
    sex: '',
    city: '',
    favFood: '',
    interests: '',
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserServiceProvider) {

  }

  editProfile() {
    this.userService.editProfile(this.toUpdate)
      .subscribe(() => {
        this.message = 'Profilo aggiornato con successo';
      },
      () => {
        this.message = 'Si è verificato un errore';
      });
  }

}
