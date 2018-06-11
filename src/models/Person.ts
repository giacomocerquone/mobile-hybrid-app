export class Person {

  public email: string = '';
  public username: string = '';
  public name?: string = '';
  public surname?: string = '';
  public sex?: 'male' | 'female';
  public avatar?: string = '';
  public biography?: string = '';
  public bornDate?: Date = null;
  public city?: string = '';
  public favFood?: string = '';
  public interests?: string = '';
  public job?: string = '';
  // AngularOnly
  public male?: boolean;
  public female?: boolean;

}
