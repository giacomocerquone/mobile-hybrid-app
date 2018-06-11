import { Component } from '@angular/core';
import { ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from '../../models/Person';
import { UserServiceProvider } from '../../providers/user-service/user-service';

import moment from 'moment';
import { take } from 'rxjs/operators';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public loadingData: boolean = true;
  public italian: boolean;
  public english: boolean;
  public toUpdate: Person = {
    username: '',
    email: '',
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
  public lang: boolean = false;

  public minDate: string = moment().format('YYYY-MM-DD');

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userService: UserServiceProvider,
    private toastCtrl: ToastController,
    private camera: Camera,
    private authService: AuthServiceProvider,
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang('en');
  }

  public updateMaleSex() {
    if (this.toUpdate.female) this.toUpdate.female = false;
  }
  public updateFemaleSex() {
    if (this.toUpdate.male) this.toUpdate.male = false;
  }

  public setItalian() {
    this.translate.use('it')
    if(this.english) this.english = false;  
  }
  public setEnglish() {
    this.translate.use('en')
    if(this.italian) this.italian = false;  
  }

  options: CameraOptions = {
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    quality: 100,
    targetWidth: 256,
    targetHeight: 256,
    encodingType: this.camera.EncodingType.JPEG,
    correctOrientation: true,
  };

  public openImage() {
    this.camera.getPicture(this.options).then(
      (imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
        const base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
      console.log(err);
    });
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
