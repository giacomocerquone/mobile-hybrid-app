import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { invites } from '../../mock/invites';
import { Invite } from '../../models/Invite';

@IonicPage()
@Component({
  selector: 'page-invites-list',
  templateUrl: 'invites-list.html',
})
export class InvitesListPage {

  public invitesList: Invite[] = invites;
  public searchTerm: string = '';
  public loggedUser: string = invites[0].userId;//Da prendere dal database

  constructor() {
    console.log(this.invitesList);
  }

  isInvited(invite) {
    if(this.loggedUser === invite.userId) {
      return false;
    } else if(this.loggedUser === invite.userReceivedId){
      return true;
    }
  }

}
