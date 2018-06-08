import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../../models/Person';

@Injectable()
export class AuthServiceProvider {
  private token = null;
  private ttl = null;
  private userId = null;

  constructor(public http: HttpClient) {}

  public setUserInfo(token, ttl, userId) {
    localStorage.setItem('login-token', token)
    localStorage.setItem('login-token-ttl', ttl)
    localStorage.setItem('userId', userId);

    this.token = token;
    this.ttl = ttl;
    this.userId = userId

      return true
  }

  public getToken() {
    return this.token || localStorage.getItem('login-token');
  }

  public getUserId() {
    return this.userId || (this.isConnected() && localStorage.getItem('userId'));
  }

  public isConnected() {
    return !!this.getToken();
  }

  public login(credentials) {
    return this.http.post<Person>('neaUsers/login', credentials);
  }

  public logout() {
    localStorage.clear();
    return !this.isConnected();
  }

  public signUp(newUser) {
    return this.http.post<Person>('neaUsers', newUser);
  }

}
