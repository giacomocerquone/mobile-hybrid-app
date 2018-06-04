import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Local } from '../../models/Local';

import { locals } from '../../mock/locals';

/**
 * Generated class for the LocalsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-locals-list',
  templateUrl: 'locals-list.html',
})
export class LocalsListPage {
  public localsList: Local[] = locals;
}
