import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Author, AuthorAttrs } from '../models/author';

@Injectable({
    providedIn: 'root'
  })
  export class AuthorService {
  
    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:8080/lbd-library/api/authors';
  
    getAuthors(): Observable<Author[]> {
      return this.http.get<AuthorAttrs[]>(this.baseUrl).pipe(
        map((data) => data.map((AuthorAttrs) => new Author(AuthorAttrs)))
      );
    }
  
    getAuthorById(id: number): Observable<Author> {
      return this.http.get<AuthorAttrs>(this.baseUrl + id);
    }
  
    createAuthor(author: Author): Observable<Author> {
      return this.http.post<AuthorAttrs>(this.baseUrl, author);
    }
  
    updateAuthor(author: Author): Observable<Author> {
      return this.http.put<AuthorAttrs>(this.baseUrl + author.id, author);
    }
  
    deleteAuthor(id: number): Observable<Author> {
      return this.http.delete<Author>(this.baseUrl + id);
    }
}