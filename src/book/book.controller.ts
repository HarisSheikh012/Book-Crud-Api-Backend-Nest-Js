import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./book.dto";

@Controller("book")
export class BookController {
    constructor(private bookService: BookService) { }

    @Get("/find")
    findAllBooks(): Book[] {
        return this.bookService.findBooksService()
    }

    @Post("/add")
    addBooks(@Body() book: Book): string {
        return this.bookService.addBooksService(book)
    }

    @Put("/update")
    updateBooks(@Body() book: Book): string {
        return this.bookService.updateBooksService(book)
    }

    @Delete("/delete/:id")
    deleteBooks(@Param("id") bookId: string): string {
        return this.bookService.deleteBooksService(bookId)
    }
}