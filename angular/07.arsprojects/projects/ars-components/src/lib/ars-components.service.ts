import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArsComponentsService {
  constructor() {}

  get pouet(): String {
    return 'ArsComponentsService';
  }
}
