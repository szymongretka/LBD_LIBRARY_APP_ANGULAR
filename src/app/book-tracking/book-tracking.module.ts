import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookTrackingRoutingModule } from './book-tracking-routing.module';
import { CreateBookComponent } from './create-book/create-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookComponent } from './book/book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateBookComponent, EditBookComponent, BookComponent, DeleteBookComponent],
  imports: [
    CommonModule,
    BookTrackingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CreateBookComponent, EditBookComponent, BookComponent, DeleteBookComponent]
})
export class BookTrackingModule { }
