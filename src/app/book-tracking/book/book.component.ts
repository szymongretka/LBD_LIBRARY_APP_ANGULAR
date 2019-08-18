import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[];
  subscribedBooks: Subscription;

  selectedBook: Book;
  BookService: BookService;
  onSelectedBook(book: Book): void {
    this.selectedBook = book;
  }

  clicked: boolean = false;
  isClicked(Book: Book): boolean {
    this.clicked = !this.clicked;
    if(this.clicked){
      return true;
    } else {
      return false;
    }
  }

  constructor(private router: Router, bookService: BookService) { 
    this.BookService = bookService;
  }

  ngOnInit() {
    this.getBooks();
  }
   

  ngOnDestroy(){
    if(this.subscribedBooks !== null){
      this.subscribedBooks.unsubscribe();
    }
  }

  getBooks(){
    this.subscribedBooks = this.BookService.getBooks().subscribe({
      next: (books) => this.books = books,
      error: () => alert('Could not get any Books')
    });
  }

  addBook(): void {
    this.router.navigate(['create-book']);
  };

  deleteBook(book: Book): void {
    this.BookService.deleteBook(book.id)
      .subscribe( data => {
        this.books = this.books.filter(u => u !== book);
      })
  };

  editBook(Book: Book): void {
    window.localStorage.removeItem("editBookId");
    window.localStorage.setItem("editBookId", Book.id.toString());
    this.router.navigate(['/edit-book/']);
  };

  borrowBook(book: Book): void {
    window.localStorage.removeItem("editBookId");
    window.localStorage.setItem("editBookId", book.id.toString());
    this.router.navigate(['borrow-book']);
  }

  saveDetails(book: Book): void{
    this.BookService.updateBook(book).subscribe();
  }

}
