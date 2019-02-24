import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(private http: HttpClient) { }

  getPosts(pCategory: String): Observable<any[]> {
    return this.http.get<any[]>('https://public-api.wordpress.com/rest/v1.1/sites/viajesgala747870895.wordpress.com/posts?category=' + pCategory);
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>('https://public-api.wordpress.com/rest/v1.1/sites/viajesgala747870895.wordpress.com/categories/');
  }

}
