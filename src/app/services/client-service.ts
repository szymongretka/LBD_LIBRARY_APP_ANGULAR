import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Client, ClientAttrs } from '../models/client';
import { Book, BookAttrs } from '../models/book';

@Injectable({
    providedIn: 'root'
  })
  export class ClientService {
  
    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:8080/lbd-library/api/clients';
  
    getClients(): Observable<Client[]> {
      return this.http.get<ClientAttrs[]>(this.baseUrl).pipe(
        map((data) => data.map((ClientAttrs) => new Client(ClientAttrs)))
      );
    }

    getBooksFromCLient(id: number): Observable<Book[]> {
      return this.http.get<BookAttrs[]>(this.baseUrl + "/" + id + "/books");
    }

    deleteBookFromClient(clientId: number, bookId: number) {
      return this.http.delete<BookAttrs[]>(this.baseUrl + "/" + clientId + "/" + bookId);
    }
  
    getClientById(id: number): Observable<Client> {
      return this.http.get<ClientAttrs>(this.baseUrl + id);
    }
  
    createClient(client: Client): Observable<Client> {
      return this.http.post<ClientAttrs>(this.baseUrl, client);
    }
  
    updateClient(client: Client): Observable<Client> {
      return this.http.put<ClientAttrs>(this.baseUrl + client.id, client);
    }
  
    deleteClient(id: number): Observable<Client> {
      return this.http.delete<Client>(this.baseUrl + id);
    }
}