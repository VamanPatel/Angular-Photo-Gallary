import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modals/user.modal';
import { Albums } from '../modals/albums.modal';
import { Photos } from '../modals/photos.modal';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseURL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users`);
  }

  getUserAlbums(): Observable<Albums[]> {
    return this.http.get<Albums[]>(`${this.baseURL}/albums`);
  }

  getUserPhotos(): Observable<Photos[]> {
    return this.http.get<Photos[]>(`${this.baseURL}/photos`);
  }
}
