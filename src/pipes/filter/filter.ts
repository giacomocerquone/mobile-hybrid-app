import { Pipe, PipeTransform } from '@angular/core';
import { Invite } from '../../models/Invite';
import { Local } from '../../models/Local';
import { Person } from '../../models/Person';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  public transform(data: Person[] | Local[], searchTerm) {
    return data.filter(el => {
      if (this.isInvite(el)) {
        return el.from.name.toLowerCase().includes(searchTerm.toLowerCase());
      } else {
        return el.name.toLowerCase().includes(searchTerm.toLowerCase());
      }
    });
  }

  // type guard since typescript 1.6

  private isInvite(invite: Invite): invite is Invite {
    return 'from' in invite;
  }

}
