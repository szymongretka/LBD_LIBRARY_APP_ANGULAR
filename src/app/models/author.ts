import { Book } from './book';


export interface AuthorAttrs {

    id: number;
    firstName: string;
    lastName: string;
    books: Book[];
}

export class Author {

    id: number;
    firstName: string;
    lastName: string;
    books: Book[];
    
    constructor(attrs: Partial<AuthorAttrs> = {}) {
        this.id = attrs.id;
        this.firstName = attrs.firstName;
        this.lastName = attrs.lastName;
        this.books = attrs.books;
    }

}