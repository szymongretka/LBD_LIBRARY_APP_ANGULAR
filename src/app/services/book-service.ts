import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Book, BookAttrs } from '../models/book';

@Injectable({
    providedIn: 'root'
  })
  export class BookService {
  
    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:8080/lbd-library/api/books';
  
    getBooks(): Observable<Book[]> {
      return this.http.get<BookAttrs[]>(this.baseUrl).pipe(
        map((data) => data.map((BookAttrs) => new Book(BookAttrs)))
      );
    }
  
    getBookById(id: number): Observable<Book> {
      return this.http.get<BookAttrs>(this.baseUrl + id);
    }
  
    createBook(book: Book): Observable<Book> {
      return this.http.post<BookAttrs>(this.baseUrl, book);
    }
  
    updateBook(book: Book): Observable<Book> {
      return this.http.put<BookAttrs>(this.baseUrl + book.id, book);
    }
  
    deleteBook(id: number): Observable<Book> {
      return this.http.delete<Book>(this.baseUrl + id);
    }
}