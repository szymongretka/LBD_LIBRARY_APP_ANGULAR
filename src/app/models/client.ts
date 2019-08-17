import { Book } from './book';


export interface ClientAttrs {

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    clientBooks: Book[];
}

export class Client {

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    clientBooks: Book[];
    
    constructor(attrs: Partial<ClientAttrs> = {}) {
        this.id = attrs.id;
        this.firstName = attrs.firstName;
        this.lastName = attrs.lastName;
        this.email = attrs.email;
        this.clientBooks = attrs.clientBooks;
    }

}