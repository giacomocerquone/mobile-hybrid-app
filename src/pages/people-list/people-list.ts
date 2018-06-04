import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Person } from '../../models/Person';

// TODO Will be replaced by http calls
import { persons } from '../../mock/persons';

@IonicPage()
@Component({
  selector: 'page-people-list',
  templateUrl: 'people-list.html',
})
export class PeopleListPage {

  public peopleList: Person[] = persons;

}
