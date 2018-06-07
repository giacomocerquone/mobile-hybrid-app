import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../../models/Person';

@Injectable()
export class AuthServiceProvider {
  constructor(public http: HttpClient) {}

  public setUserInfo(token, ttl, userId) {
    return localStorage.setItem('login-token', token) &&
      localStorage.setItem('login-token-ttl', ttl) &&
      localStorage.setItem('userId', userId);
  }

  public getToken() {
    return localStorage.getItem('login-token');
  }

  public getUserId() {
    return this.isConnected() && localStorage.getItem('userId');
  }

  public isConnected() {
    return !!this.getToken();
  }

  public login(credentials) {
    return this.http.post<Person>('neaUsers/login', credentials);
  }

  public logout() {
    return localStorage.clear();
  }

  public signUp(newUser) {
    return this.http.post<Person>('neaUsers', newUser);
  }

}
