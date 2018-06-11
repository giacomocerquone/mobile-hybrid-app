import { Pipe, PipeTransform } from '@angular/core';
import { Invite } from '../../models/Invite';
import { Person } from '../../models/Person';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  public transform(data: any, searchTerm) {
    return data.filter((el) => {
      if (this.isInvite(el)) {
        // return el.userId.toLowerCase().includes(searchTerm.toLowerCase());
        return el;
      }
      if (this.isPerson(el)) {
        return el.username.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return el.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  // type guard since typescript 1.6

  private isInvite(invite: Invite): invite is Invite {
    return 'userReceivedId' in invite;
  }

  private isPerson(person: Person): person is Person {
    return 'username' in person;
  }

}
