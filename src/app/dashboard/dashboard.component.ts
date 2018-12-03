import { Component, OnInit, Version, VERSION } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { Book } from 'app/models/book';
import { allBooks, allReaders } from 'app/data';
import { Reader } from 'app/models/reader';
import { LoggerService } from '../core/services/logger.service';
import { DataService } from '../core/services/data.service';
import { BookTrackerError } from './../models/bookTrackerError';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  constructor(private loggerService: LoggerService,
              private dataService: DataService,
              private title: Title) { }

  ngOnInit() {
    this.loggerService.logger('Welcome to the book tracker');
    this.allBooks = this.dataService.getAllBooks();
    this.dataService.getAllReaders()
      .subscribe(
        (data: Reader[]) => this.allReaders = data,
        (error: BookTrackerError) => console.log(error.friendlyMessage),
        () => this.loggerService.logger('All done getting readers')
      );
    this.mostPopularBook = this.dataService.mostPopularBook;

    this.getAuthorRecommendation(1)
        .catch(err => this.loggerService.error(err));

    this.title.setTitle(`Book Tracker ${VERSION.full}`);
  }

  private async getAuthorRecommendation(readerID: number): Promise<void> {
    const author: string = await this.dataService.getAuthorRecomendation(readerID);
    this.loggerService.logger(author);
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
