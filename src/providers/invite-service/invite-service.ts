import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { zip } from 'rxjs/observable/zip';
import { map } from 'rxjs/operators';

import { Invite } from '../../models/Invite';
import { AuthServiceProvider } from '../auth-service/auth-service';

@Injectable()
export class InviteServiceProvider {

  constructor(public http: HttpClient, public authService: AuthServiceProvider) {}

  public sendInvite(newInvite) {
    // const userId = this.authService.getUserId();
    return this.http.post<Invite[]>('Invites', newInvite);
  }

  public getInvites() {
    // This mess has to be done because of Loopback
    // not supporting multiple foreign keys, so we need two calls
    const userId = this.authService.getUserId();
    const params = { where: { userReceivedId: userId }, include: 'users' };
    const sentInvites$ = this.http.get<Invite[]>('neaUsers/' + userId + '/invites');
    const receivedInvites$ = this.http.get<Invite[]>('Invites?filter=' + JSON.stringify(params));

    return zip(sentInvites$, receivedInvites$).pipe(
        map(([sent, received]) => [...sent, ...received]),
      );
  }

}
