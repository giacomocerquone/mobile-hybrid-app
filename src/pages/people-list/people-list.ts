import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { Person } from '../../models/Person';
import { UserServiceProvider } from '../../providers/user-service/user-service';

import 'rxjs/add/operator/map';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-people-list',
  templateUrl: 'people-list.html',
})

export class PeopleListPage {

  public searchTerm: string = '';
  public people$: Observable<Person[]> = this.userService.getPeople();

  constructor(
    private userService: UserServiceProvider,
    private authService: AuthServiceProvider,
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang('en');
  }

}
