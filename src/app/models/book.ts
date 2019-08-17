import { Client } from './client';
import { Author } from './author';
import { Category } from './category';

export interface BookAttrs {

    id: number;
    name: string;
    isBorrowed: boolean;
    //date_of_borrow: Date;
    client: Client;
    authors: Author[];
    categories: Category[];
}

export class Book {

    id: number;
    name: string;
    isBorrowed: boolean;
    //date_of_borrow: Date;
    client: Client;
    authors: Author[];
    categories: Category[];
    
    constructor(attrs: Partial<BookAttrs> = {}) {
        this.id = attrs.id;
        this.name = attrs.name;
        this.isBorrowed = attrs.isBorrowed;
        this.client = attrs.client;
        this.authors = attrs.authors;
        this.categories = attrs.categories;
        //this.date_of_borrow = attrs.date_of_borrow;
    }

}