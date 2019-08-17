import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book-service';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  addForm: FormGroup;
  submitted = false;
  bookService: BookService;

  constructor(private formBuilder: FormBuilder, private router: Router, bookService: BookService) {
    this.bookService = bookService;
   }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      isBorrowed: ['', Validators.required],
      //date_of_borrow: ['']
    });

  }

  onSubmit() {
    this.submitted = true;
    const result: Book = Object.assign({}, this.addForm.value);
    if (this.addForm.invalid) {
      return;
    }
    console.log(result);
    this.bookService.createBook(result).subscribe( data => {
        this.router.navigate(['/books']);
      });
  }

  get name() { return this.addForm.get('name'); }
  get isBorrowed() { return this.addForm.get('isBorrowed'); }
  //get date_of_borrow() { return this.addForm.get('date_of_borrow'); }

}

