import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { Person } from '../../models/Person';
import { UserServiceProvider } from '../../providers/user-service/user-service';

import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-people-list',
  templateUrl: 'people-list.html',
})

export class PeopleListPage {

  public searchTerm: string = '';
  public people$: Observable<Person[]> = this.userService.getPeople();

  constructor(private userService: UserServiceProvider) {
    
    this.people$.subscribe(data => {
      console.log(data);
    });

  }

}
