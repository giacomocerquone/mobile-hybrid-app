import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Local } from '../../models/Local';

@Injectable()
export class LocalServiceProvider {

  constructor(public http: HttpClient) {}

  public getLocals() {
    return this.http.get<Local[]>('Locals');
  }

  public searchLocal(searchParams) {
    const params = new HttpParams();
    Object.keys(searchParams).forEach(el => params.append(el, params[el]));
    return this.http.get<Local[]>('Locals/findOne', { params });
  }

}
