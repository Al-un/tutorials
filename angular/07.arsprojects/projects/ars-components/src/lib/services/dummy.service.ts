import { Injectable } from '@angular/core';

// const dummyLibrary = require('./dummy.library.js');

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  // dummyClient: DummyClient;

  constructor() {
    // this.dummyClient = dummyLibrary.newClient();
  }

  get someText(): String {
    return 'some text and pouet!';
  }

  get otherText(): String {
    return 'some pouet other text';
  }
}
