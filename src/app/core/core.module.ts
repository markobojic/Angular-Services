import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { LoggerService } from './services/logger.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { BookTrackerErrorHandlerService } from './services/book-tracker-error-handler.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    DataService,
    LoggerService,
    { provide: ErrorHandler, useClass: BookTrackerErrorHandlerService }
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

 }
