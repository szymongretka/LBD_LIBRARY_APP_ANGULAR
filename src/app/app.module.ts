import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BookTrackingModule } from './book-tracking/book-tracking.module';
import { DefaultTrackingModule } from './default-tracking/default-tracking.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DefaultComponent } from './default-tracking/default/default.component';
import { BookComponent } from './book-tracking/book/book.component';
import { CreateBookComponent } from './book-tracking/create-book/create-book.component';
import { EditBookComponent } from './book-tracking/edit-book/edit-book.component';
import { ClientComponent } from './client-tracking/client/client.component';
import { ClientTrackingModule } from './client-tracking/client-tracking.module';
import { AuthorTrackingModule } from './author-tracking/author-tracking.module';
import { CategoryTrackingModule } from './category-tracking/category-tracking.module';
import { CreateClientComponent } from './client-tracking/create-client/create-client.component';
import { BorrowBookComponent } from './book-tracking/borrow-book/borrow-book.component';
import { BookDetailComponent } from './book-tracking/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BookTrackingModule,
    ClientTrackingModule,
    AuthorTrackingModule,
    CategoryTrackingModule,
    DefaultTrackingModule,
    AppRoutingModule,
    ServicesModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'books', component: BookComponent},
      {path: 'books/:id', component: BookDetailComponent},
      {path: 'create-book', component: CreateBookComponent},
      {path: 'edit-Book', component: EditBookComponent},
      {path: 'clients', component: ClientComponent},
      {path: 'create-client', component: CreateClientComponent},
      {path: 'borrow-book', component: BorrowBookComponent},
      {path: '', component: DefaultComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
