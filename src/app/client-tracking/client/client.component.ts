import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { Subscription } from 'rxjs';
import { ClientService } from 'src/app/services/client-service';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[];
  clientBooks: Book[];
  subscribedClients: Subscription;
  clientService: ClientService;

  selectedClient: Client;
  selectedBook: Book;
  onSelectedClient(client: Client): void {
    this.selectedClient = client;
  }
  onSelectedBook(book: Book): void{
    this.selectedBook = book;
  }

  clicked: boolean = false;
  isClicked(client: Client): boolean {
    this.clicked = !this.clicked;
    if(this.clicked){
      return true;
    } else {
      return false;
    }
  }

  constructor(private router: Router, clientService: ClientService) { 
    this.clientService = clientService;
  }

  ngOnInit() {
    this.getClients();
  }
   

  ngOnDestroy(){
    if(this.subscribedClients !== null){
      this.subscribedClients.unsubscribe();
    }
  }

  getClients(){
    this.subscribedClients = this.clientService.getClients().subscribe({
      next: (clients) => this.clients = clients,
      error: () => alert('Could not get any Clients')
    });
  }

  getBooksFromCLient(client: Client): void{
    this.subscribedClients = this.clientService.getBooksFromCLient(client.id).subscribe({
      next: (books) => this.clientBooks = books,
      error: () => alert('Could not get any books from client')
    });
  }

  returnBook(client: Client, book: Book): void{
    this.subscribedClients = this.clientService.deleteBookFromClient(client.id, book.id).subscribe( 
      data => { this.clientBooks = this.clientBooks.filter(u => u !== book);
    })
  }

  addClient(): void {
    this.router.navigate(['create-client']);
  };

  deleteClient(client: Client): void {
    this.clientService.deleteClient(client.id)
      .subscribe( data => {
        this.clients = this.clients.filter(u => u !== client);
      })
  };

  editClient(client: Client): void {
    window.localStorage.removeItem("editClientId");
    window.localStorage.setItem("editClientId", client.id.toString());
    this.router.navigate(['/edit-client/']);
  };

  saveDetails(client: Client): void{
    this.clientService.updateClient(client).subscribe();
  }

}
