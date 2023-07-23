import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000/items';

  constructor(private http: HttpClient) {}

  getItems(page: number, pageSize: number) {
    const skip = (page - 1) * pageSize;
    const take = pageSize;

    return this.http.get<any[]>(`${this.apiUrl}?_start=${skip}&_limit=${take}`);
  }
}
