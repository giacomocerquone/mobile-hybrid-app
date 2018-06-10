import { Component } from '@angular/core';
import {ToastController, IonicPage, NavController, NavParams, Toast} from 'ionic-angular';
import { Person } from '../../models/Person';
import { UserServiceProvider } from '../../providers/user-service/user-service';

import moment from 'moment';
import { take } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public loadingData: boolean = true;
  public toUpdate: Person = {
    userId: '',
    name: '',
    surname: '',
    bornDate: null,
    sex: null,
    male: false,
    female: false,
    city: '',
    favFood: '',
    interests: '',
    avatar: '',
    job: '',
    biography: '',
  };

  public minDate: string = moment().format('YYYY-MM-DD');
  public maxDate: string = moment().add(90, 'days').format('YYYY-MM-DD');

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userService: UserServiceProvider,
    private toastCtrl: ToastController,
  ) {}

  public updateMaleSex() {
    if (this.toUpdate.female) this.toUpdate.female = false;
  }
  public updateFemaleSex() {
    if (this.toUpdate.male) this.toUpdate.male = false;
  }

  public ionViewDidLoad() {
    this.userService.getProfile()
      .pipe(take(1))
      .subscribe((data) => {
        this.toUpdate = data;
        if (data.sex === 'male') this.toUpdate.male = true;
        if (data.sex === 'female') this.toUpdate.female = true;
      },         () => {
      },         () => {
        this.loadingData = false;
      });
  }

  public editProfile() {
    this.userService.editProfile(this.toUpdate)
      .pipe(take(1))
      .subscribe(() => {
        const success = this.toastFactory(
          'Il tuo profilo è stato aggiornato con successo',
        );
        success.present();
      },         () => {
        const failure = this.toastFactory(
          'Ci sono stati errori nell\'aggiornamento del tuo profilo',
        );
        failure.present();
      });
  }

  private toastFactory(message) {
    return this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'bottom',
    });
  }
}
