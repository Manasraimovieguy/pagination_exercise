import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  api_url: string = `https://jsonplaceholder.typicode.com/todos`;


  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.api_url)
  }
}
