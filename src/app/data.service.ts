
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getData() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
