import { Person } from './Person';

export class Invite {

  public sourceUser: Person;
  public targetUser: Person;
  public date: Date = null;
  public time: string = '';
  public description: string = '';
  public location: string = '';
  public status?: 'pending' | 'rejected' | 'accepted';

}
