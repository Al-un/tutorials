import { Injectable, OnInit } from '@angular/core';
import { Pet } from './pets';

declare var apigClientFactory: any;

@Injectable({
  providedIn: 'root'
})
export class AwsGatewayService {
  private client: ApiClient;

  constructor() {
    // console.log(apigClientFactory);
    this.client = apigClientFactory.newClient({});
  }

  public loadPets(): void {
    console.log('Loading pets');
    this.client
      .petsGet({ page: 1, type: 'dog' }, {})
      .then(resp => console.log(resp));
  }

  get pouet(): String {
    return 'awsgateway';
  }
}
