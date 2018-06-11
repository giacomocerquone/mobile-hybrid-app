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
    return this.http.get<Person>('neaUsers/' + userId);
  }

  public editProfile(editedProfile) {
    const userId = this.authService.getUserId();
    editedProfile.sex = editedProfile.male ? 'male' : (editedProfile.female) ? 'female' : '';
    delete editedProfile.male;
    delete editedProfile.female;
    return this.http.patch<Person>('neaUsers/' + userId, editedProfile);
  }

  public getPeople() {
    const params = { where: { username: { neq: this.authService.getUserId() } } };
    return this.http.get<Person[]>('neaUsers?filter=' + JSON.stringify(params));
  }

  public searchPeople(searchParams) {
    // For the JSON stringify, this is just how loopback works
    searchParams.sex = searchParams.male ? 'male' : (searchParams.female) ? 'female' : '';
    delete searchParams.male;
    delete searchParams.female;
    Object.keys(searchParams)
      .forEach(key => (searchParams[key] === '') && delete searchParams[key]);

    const searchParamsEnhanced = { where: searchParams };
    return this.http.get<Person[]>('neaUsers?filter=' + JSON.stringify(searchParamsEnhanced));
  }

}
