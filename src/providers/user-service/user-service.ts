import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../../models/Person';
import {AuthServiceProvider} from "../auth-service/auth-service";

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient, private authService: AuthServiceProvider) {}

  public getProfile() {
    const userId = this.authService.getUserId();

    return this.http.get<Person[]>('/neaUsers/findOne', { params });
    // TODO need strange stuff in backend to retrieve current user without DB ID
  }

  public editProfile() {
    // TODO see getprofile
  }

  public getPeople() {
    return this.http.get<Person[]>('/neaUsers');
  }

  public searchPeople(searchParams) {
    const params = new HttpParams();

    Object.keys(searchParams).forEach(el => params.append(el, params[el]));

    return this.http.get<Person[]>('/neaUsers/findOne', { params });
  }

  public getInvites() {

  }

  public getLocals() {

  }

  public sendJoinInvite() {

  }

}
