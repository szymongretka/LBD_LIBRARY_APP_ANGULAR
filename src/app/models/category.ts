import { Book } from './book';


export interface CategoryAttrs {

    id: number;
    name: string;
    books: Book[];
}

export class Category {

    id: number;
    name: string;
    books: Book[];
    
    constructor(attrs: Partial<CategoryAttrs> = {}) {
        this.id = attrs.id;
        this.name = attrs.name;
        this.books = attrs.books;
    }

}