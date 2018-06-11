import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Local } from '../../models/Local';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

/**
 * Generated class for the LocalDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-local-detail',
  templateUrl: 'local-detail.html',
})
export class LocalDetailPage {

  public local: Local;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,    
    private authService: AuthServiceProvider,
    private translate: TranslateService,
  ) {
    this.local = this.navParams.data;
    this.translate.setDefaultLang('en');
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad LocalDetailPage');
  }

}
