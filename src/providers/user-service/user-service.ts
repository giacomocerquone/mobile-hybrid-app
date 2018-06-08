import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../../models/Person';
import { AuthServiceProvider } from '../auth-service/auth-service';

@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient, private authService: AuthServiceProvider) {
  }

  public getProfile() {
    const userId = this.authService.getUserId();
    return this.http.get<Person[]>('neaUsers/findOne' + userId);
  }

  public editProfile(editedProfile) {
    const userId = this.authService.getUserId();
    return this.http.patch<Person[]>('neaUsers/findOne' + userId, editedProfile);
  }

  public getPeople() {
    return this.http.get<Person[]>('neaUsers');
  }

  public searchPerson(searchParams) {
    const params = new HttpParams();
    Object.keys(searchParams).forEach(el => params.append(el, params[el]));
    return this.http.get<Person[]>('neaUsers/findOne', { params });
  }

  public sendJoinInvite() {

  }

}
