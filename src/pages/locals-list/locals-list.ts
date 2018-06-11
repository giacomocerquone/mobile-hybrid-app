import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { LocalServiceProvider } from '../../providers/local-service/local-service';
import { Local } from '../../models/Local';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-locals-list',
  templateUrl: 'locals-list.html',
})
export class LocalsListPage {
  public searchTerm: string = '';
  public local$: Observable<Local[]> = this.localService.getLocals();

  constructor(
    private localService: LocalServiceProvider, 
    private authService: AuthServiceProvider,
    private translate: TranslateService,
  ) {
      this.translate.setDefaultLang('en');
    }

}
