import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  logger(msg: string) {
    const time = new Date().toLocaleDateString();
    console.log(`${msg} (${time})`);
  }

  error(msg: string) {
    console.log(`ERROR: ${msg}`);
  }
}
