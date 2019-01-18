import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlaveService {
  protected baseNumber = 5;

  constructor() {}

  public getBaseNumber(): number {
    return this.baseNumber;
  }

  public getRandomNumber(): number {
    return Math.random();
  }
}
