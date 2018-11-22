import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Reader } from 'app/models/reader';
import { Book } from 'app/models/book';
import { allBooks, allReaders } from 'app/data';

@Injectable()
export class DataService {
  mostPopularBook: Book = allBooks[0];

  constructor(private loggerService: LoggerService) { }

  getAllReaders(): Reader[] {
    return allReaders;
  }

  getReaderById(id: number): Reader {
    return allReaders.find(reader => reader.readerID === id);
  }

  getAllBooks(): Book[] {
    return allBooks;
  }

  getBookById(id: number): Book {
    return allBooks.find(books => books.bookID === id);
  }

  setMostPopularBook(book: Book) {
    this.mostPopularBook = book;
  }
}
