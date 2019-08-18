import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookTrackingRoutingModule } from './book-tracking-routing.module';
import { CreateBookComponent } from './create-book/create-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookComponent } from './book/book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


@NgModule({
  declarations: [CreateBookComponent, EditBookComponent, BookComponent, DeleteBookComponent, 
    BorrowBookComponent, BookDetailComponent],
  imports: [
    CommonModule,
    BookTrackingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CreateBookComponent, EditBookComponent, BookComponent, DeleteBookComponent, 
    BorrowBookComponent, BookDetailComponent]
})
export class BookTrackingModule { }
