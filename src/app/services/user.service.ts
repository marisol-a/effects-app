import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get(`${this.url}/users?per_page=6`)
      .pipe(map((response) => response['data']));
  }

  getUserById(id: number) {
    return this.http
      .get(`${this.url}/users/${id}`)
      .pipe(map((response) => response['data']));
  }
}
