import { Injectable } from "@nestjs/common";
import { Book } from "./book.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
    public books: Book[] = [];

    addBooksService(book: Book): string {
        book.id = uuidv4();
        this.books.push(book);
        return "The Books Successfully Added";
    }

    updateBooksService(book: Book): string {
        let index = this.books.findIndex((currentBook) => {
            return currentBook.id == book.id;
        })
        this.books[index] = book;
        return "The Books successfully Updated"
    }

    deleteBooksService(bookId: string): string {
        this.books = this.books.filter((book) => {
            return bookId != book.id;
        })
        return "The Books successfully Deleted"
    }

    findBooksService(): Book[] {
        return this.books;
    }
}