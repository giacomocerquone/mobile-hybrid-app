import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../../models/Person';

@Injectable()
export class LocalServiceProvider {

  constructor(public http: HttpClient) {}

  public getLocals() {
    return this.http.get<Person[]>('Locals');
  }

  public searchLocal(searchParams) {
    const params = new HttpParams();
    Object.keys(searchParams).forEach(el => params.append(el, params[el]));
    return this.http.get<Person[]>('Locals/findOne', { params });
  }

}
