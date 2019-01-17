import { Injectable } from '@angular/core';
import { Animal } from '../model/animal';

// const dummyLibrary = require('./dummy.library.js');
declare var apigClientFactory: ApiClientFactory;

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  // dummyClient: DummyClient;
  public client: ApiClient;

  constructor() {
    // this.dummyClient = dummyLibrary.newClient();
    // console.log(dummyLibrary);
    if (apigClientFactory) {
      console.log('API Gateway IS defined');
      this.client = apigClientFactory.newClient({});
    } else {
      console.log('API Gateway IS !!NOT!! defined');
    }
  }

  get someText(): String {
    return 'some text and pouet!';
  }

  get otherText(): String {
    return 'some pouet other text';
  }

  get animal(): Animal {
    const animal = new Animal();
    animal.name = 'Toto';
    animal.type = 'dog';
    return animal;
  }

  public load(): void {
    console.log('Loading pets');
    this.client
      .petsGet({ page: 1, type: 'cat' }, {})
      .then(resp => console.log(resp));
  }
}
