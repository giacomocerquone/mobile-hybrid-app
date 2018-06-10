export class Invite {

  public userId: string;
  public userReceivedId: string;
  public date: Date = null;
  public time: string = '';
  public description: string = '';
  public location: string = '';
  public status?: 'pending' | 'rejected' | 'accepted';

}
