import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book-service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Client } from 'src/app/models/client';
import { Subscription } from 'rxjs';
import { ClientService } from 'src/app/services/client-service';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent implements OnInit {

  book: Book;
  editForm: FormGroup;
  bookService: BookService;
  submitted = false;

  clients: Client[];
  subscribedClients: Subscription;

  selectedClient: Client;

  constructor(private formBuilder: FormBuilder, private router: Router, 
      bookService: BookService, private clientService: ClientService) {
    this.bookService = bookService;
   }

   onClientChange(client: Client){
     this.selectedClient = client;
     //console.log(this.selectedClient)
   }

   printSelectedClient(client: Client){
    console.log((client))
   }

  ngOnInit() {
    let bookId = window.localStorage.getItem("editBookId");

    if(!bookId) {
      alert("Invalid action.")
      this.router.navigate(['books']);
      return;
    }
    

    this.editForm = this.formBuilder.group({
      client: ["", Validators.required]
    });

    this.getClients();
  }

  getClients(){
    this.subscribedClients = this.clientService.getClients().subscribe({
      next: (clients) => this.clients = clients,
      error: () => alert('Could not get any clients')
    });
  }

  onSubmit() {
    this.submitted = true;

    let bookId = Number.parseInt(window.localStorage.getItem("editBookId"));

    this.bookService.setBookToClient(bookId, this.selectedClient)
      //.pipe(first())
      .subscribe(
        next => {this.router.navigate(['books']);},
        error => {alert("can't update Book!");});
  }

  get client() { return this.editForm.get('client'); }

}
