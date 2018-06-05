import { Person } from './Person';

export class Invite {

  public from: Person;
  public date: string = '';
  public time: string = '';
  public description: string = '';
  public location: string = '';
  public status?: 'pending' | 'rejected' | 'accepted';

}
