import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from '../../models/Person';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-people-list-result',
  templateUrl: 'people-list-result.html',
})
export class PeopleListResultPage {
  public people: Person[] = this.navParams.data;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private authService: AuthServiceProvider,
     private translate: TranslateService,
    ) {
      this.translate.setDefaultLang('en');
    }

}
