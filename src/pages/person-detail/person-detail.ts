import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from '../../models/Person';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';


/**
 * Generated class for the PersonDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-person-detail',
  templateUrl: 'person-detail.html',
})
export class PersonDetailPage {

  public person: Person = this.navParams.data;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,    
    private authService: AuthServiceProvider,
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang('en');
  }

}
