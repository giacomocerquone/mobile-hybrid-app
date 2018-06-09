import { Component, Input } from '@angular/core';
import { Invite } from '../../models/Invite';
import { Local } from '../../models/Local';
import { Person } from '../../models/Person';
import { InviteDetailPage } from '../../pages/invite-detail/invite-detail';

@Component({
  selector: 'item-list',
  templateUrl: 'item-list.html',
})
export class ItemListComponent {

  @Input() public data: Person | Local | Invite;
  @Input() public navigateTo: string;
  @Input() public isInvite: boolean;
  public dataAndIsInvite: any;

  constructor() {
    if(this.isInvite === undefined){
      console.log('isInvite is undefined');      
    }
  }

  ngOnChanges() {
    if(this.data && this.isInvite !== undefined) {
      let isInviteObj = {
        isInvite: this.isInvite,
      }
      this.dataAndIsInvite = Object.assign(this.data, isInviteObj);
    }
    console.log(this.dataAndIsInvite);
  }

}
