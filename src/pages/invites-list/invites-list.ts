import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Invite } from '../../models/Invite';
import { Observable } from 'rxjs/Observable';
import { InviteServiceProvider } from '../../providers/invite-service/invite-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-invites-list',
  templateUrl: 'invites-list.html',
})
export class InvitesListPage {

  public invites$: Observable<Invite[]> = this.inviteService.getInvites();

  public searchTerm: string = '';

  constructor(
    private inviteService: InviteServiceProvider,
    private authService: AuthServiceProvider,
  ) {}

  isInvited(invite) {
    return this.authService.getUserId() === invite.userReceivedId;
  }

}
