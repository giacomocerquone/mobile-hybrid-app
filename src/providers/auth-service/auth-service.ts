import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../../models/Person';

@Injectable()
export class AuthServiceProvider {
  constructor(public http: HttpClient) {}

  public setToken(token, ttl) {
    return localStorage.setItem('login-token', token) &&
      localStorage.setItem('login-token-ttl', ttl);
  }
  public getToken() {
    return localStorage.getItem('login-token');
  }
  public isConnected() {
    return !!this.getToken();
  }

  public login(credentials) {
    return this.http.post<Person>('neaUsers/login', credentials);
  }

  public signUp(newUser) {
    console.log(newUser)
    return this.http.post<Person>('neaUsers', newUser);
  }

}
