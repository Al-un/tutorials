import { Injectable } from '@angular/core';
import { Pet } from '../model/pet';

// const dummyLibrary = require('./dummy.library.js');
declare var apigClientFactory: any;

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  // dummyClient: DummyClient;
  public client: any;
  public loadedPets: Array<Pet>;

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

  /**
   * Load asynchronous pets from AWS API Gateway
   * @param page page index. Default: 1
   * @param type pets type. Default "dog"
   */
  public async loadPets(page = 1, type = 'dog'): Promise<Array<Pet>> {
    const resp = await this.client.petsGet({ page: page, type: type });
    console.log(`Async loaded type ${type} page ${page}:`, resp);
    const data = await resp.data;
    return data;
  }
}
