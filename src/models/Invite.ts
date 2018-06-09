export class Invite {

  public userId: string;
  public userReceivedId: string;
  public date: string = '';
  public time: string = '';
  public description: string = '';
  public location: string = '';
  public status?: 'pending' | 'rejected' | 'accepted';

}
