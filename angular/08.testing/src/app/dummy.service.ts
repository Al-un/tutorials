import { Injectable } from '@angular/core';
import { SlaveService } from './slave.service';

declare var myGlobVar: any;

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  constructor(private slaveService: SlaveService) {}

  /**
   * Add 2 to given input
   * @param input default to 1
   */
  public addTwo(input = 1): number {
    return input + 2;
  }

  public testGlobVar(): any {
    // https://stackoverflow.com/a/51259620/4906586
    if (typeof myGlobVar !== 'undefined' && myGlobVar !== null) {
      console.log(`MyGlobVar is: ${myGlobVar}`);
      return myGlobVar;
    } else {
      console.log('MyGlobVar is not defined');
      return null;
    }
  }

  /**
   *
   * @param input default to 1
   */
  public addPromiseTwo(input = 1): Promise<number> {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (input < 10) {
          resolve(input + 2);
        } else {
          reject('Number should be below 10');
        }
      }, 750);
    });
  }

  public addFromBaseNumber(): Promise<number> {
    const base = this.slaveService.getBaseNumber();
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(base + 2);
      }, 750);
    });
  }

  public getSlaveBaseNumber(): number {
    return this.slaveService.getBaseNumber();
  }

  public addFromRandom(): Promise<number> {
    const rand = this.slaveService.getRandomNumber();
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve(rand + 2);
      }, 750);
    });
  }
}
