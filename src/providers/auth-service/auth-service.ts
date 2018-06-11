import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../../models/Person';

@Injectable()
export class AuthServiceProvider {
  private token = null;
  private ttl = null;
  private username = null;

  constructor(public http: HttpClient) {}

  public setUserInfo(token, ttl, username) {
    localStorage.setItem('login-token', token);
    localStorage.setItem('login-token-ttl', ttl);
    localStorage.setItem('username', username);
    this.token = token;
    this.ttl = ttl;
    this.username = username;
    return true;
  }

  public getToken() {
    return this.token || localStorage.getItem('login-token');
  }

  public getUserId() {
    return this.username || (this.isConnected() && localStorage.getItem('username'));
  }

  public isConnected() {
    return !!this.getToken();
  }

  public login(credentials) {
    return this.http.post<{ id: string, ttl: number, user: Person }>(
      'neaUsers/login?include=user',
      credentials,
    );
  }

  public logout() {
    localStorage.clear();
    this.token = null;
    this.ttl = null;
    this.username = null;
    return !this.isConnected();
  }

  public signUp(newUser) {
    return this.http.post<Person>('neaUsers', newUser);
  }

}
