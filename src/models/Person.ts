export class Person {

  public id?: string = ''; // token
  public ttl?: number = 0;
  public userId: string = '';

  public name?: string = '';
  public surname?: string = '';
  public sex?: 'male' | 'female';
  public avatar?: string = '';
  public biography?: string = '';
  public bornDate?: Date = new Date();
  public city?: string = '';
  public favFood?: string = '';
  public interests?: string = '';
  public job?: string = '';

}
