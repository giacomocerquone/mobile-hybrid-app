import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Local } from '../../models/Local';

import { locals } from '../../mock/locals';

@IonicPage()
@Component({
  selector: 'page-locals-list',
  templateUrl: 'locals-list.html',
})
export class LocalsListPage {
  public localsList: Local[] = locals;
  public searchTerm: string = '';
}
