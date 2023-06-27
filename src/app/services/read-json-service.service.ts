import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReadJsonServiceService {
  constructor(private http: HttpClient) {}

  readJson(url: string) {
    return this.http.get(url);
  }
}
