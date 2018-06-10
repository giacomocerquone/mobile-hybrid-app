import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../../models/Person';
import { AuthServiceProvider } from '../auth-service/auth-service';

import { merge } from 'rxjs/operators';

@Injectable()
export class InviteServiceProvider {

  constructor(public http: HttpClient, public authService: AuthServiceProvider) {}

  public sendInvite(newInvite) {
    // const userId = this.authService.getUserId();
    return this.http.post<Person[]>('Invites', newInvite);
  }

  public getInvites() {
    // This mess has to be done because of Loopback
    // not supporting multiple foreign keys, so we need two calls
    const userId = this.authService.getUserId();
    const params = { where: { userReceivedId: userId }, include: 'users' };
    const sentInvites$ = this.http.get<Person[]>('neaUsers/' + userId + '/invites');
    const receivedInvites$ = this.http.get<Person[]>('Invites?filter=' + JSON.stringify(params));

    return sentInvites$.pipe(merge(receivedInvites$));
  }

  public editInvite(editedInvite) {
    const userId = this.authService.getUserId();
    const inviteId = editedInvite.id;
    return this.http.patch<Person[]>('neaUsers/' + userId + 'invites/' + inviteId, editedInvite);
  }

}
