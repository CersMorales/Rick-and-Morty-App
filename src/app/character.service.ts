import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient) { }

  getCharacters(page: number) {
    return this.http.get(`${environment.apiUrl}/character/?page=${page}`);
  }
}